import os
import sys
import configparser
import asyncio
import logging
import grpc
#PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#PROTOBUF_PATH = os.path.join(PROJECT_ROOT, "crac-protobuf")
#sys.path.append(PROTOBUF_PATH)

#BASE_DIR = os.path.dirname(os.path.abspath(__file__))
#sys.path.append(os.path.abspath(os.path.join(BASE_DIR, "..", "..", "crac-protobuf")))

#sys.path.insert(0, "/home/raniero/Documenti/GitHub")
#print("DEBUG dopo append:", sys.path)
from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from crac_protobuf.telescope_pb2 import TelescopeRequest, TelescopeAction
from crac_protobuf.telescope_pb2_grpc import TelescopeStub
from crac_protobuf.envelope_pb2 import Envelope, MessageType
#from crac_protobuf.envelope_pb2 import Envelope, MessageType

logging.basicConfig(level=logging.INFO)

# === Lettura config.ini ===
config = configparser.ConfigParser()
config.read("config.ini")
grpc_ip = config["server"]["ip"]
grpc_port = config["server"]["port"]
grpc_target = f"{grpc_ip}:{grpc_port}"

host = config["web_gui"]["host"]
port = config["web_gui"]["port"]
ws_path = config["web_gui"]["ws_path"]
ws_url = f"ws://{host}:{port}{ws_path}"

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# === Variabili globali ===
grpc_channel = None
telescope_stub = None
connected_websockets = set()

# === Inizializzazione FastAPI ===
app = FastAPI()

# Statici e template
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

# === Startup: connessione gRPC e task di polling ===
'''
@app.on_event("startup")
async def startup_event():
    global grpc_channel, telescope_stub
    logging.info(f"Connetto gRPC a {grpc_target}...")
    grpc_channel = grpc.aio.insecure_channel(grpc_target)
    telescope_stub = TelescopeStub(grpc_channel)
    asyncio.create_task(poll_telescope())
'''
@app.on_event("startup")
async def startup_event():
    """Avvia il polling del telescopio all'avvio dell'app"""
    asyncio.create_task(poll_telescope())

@app.on_event("shutdown")
async def shutdown_event():
    if grpc_channel:
        await grpc_channel.close()

# === Task: polling telescopio e invio ai WebSocket ===
async def notifier(envelope: Envelope):
    """Invia a tutti i client WebSocket connessi"""
    data = envelope.SerializeToString()
    for ws in list(connected_clients):
        try:
            await ws.send_bytes(data)
        except Exception:
            connected_clients.remove(ws)


async def poll_telescope():
    """Interroga periodicamente CRaC e invia lo stato ai client WebSocket."""
    while True:
        try:
            req = TelescopeRequest(action=TelescopeAction.CHECK_TELESCOPE, autolight=False)
            response = await telescope_stub.SetAction(req)
            logging.info(f"Stato telescopio: {response}")

            # Invia lo stato a tutti i WebSocket connessi
            for ws in connected_websockets:
                await ws.send_text(str(response))  # qui puoi serializzare in JSON o binario
        except Exception as e:
            logging.error(f"Errore polling telescopio: {e}")
        await asyncio.sleep(2)

# === Route principali ===
@app.get("/", response_class=HTMLResponse)
def get(request: Request):
    items = {
        "percent_batt_dome": 88,
        "stato_meteo": "OK"
    }
    return templates.TemplateResponse("index.html", {
        "request": request,
        "ws_url": ws_url,
        "items": items
    })

@app.get("/favicon.ico")
async def favicon():
    return FileResponse("static/favicon.ico")

@app.get("/api/gauge-config")
async def get_gauge_config():
    return {
        "temperature": {"lower_bound": 0, "upper_bound": 60, "warning": 35, "error": 50},
        "humidity": {"lower_bound": 0, "upper_bound": 100, "warning": 85, "error": 95},
        "wind_speed": {"lower_bound": 0, "warning": 10, "upper_bound": 30, "error": 36},
        "wind_gust_speed": {"lower_bound": 0, "warning": 10, "upper_bound": 30, "error": 36},
        "rain_rate": {"lower_bound": 0, "warning": 1, "upper_bound": 10, "error": 12},
        "barometer": {"lower_bound": 1025, "warning": 1005, "upper_bound": 1045, "error": 990}
    }

# === WebSocket per comunicazione realtime ===
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_websockets.add(websocket)
    try:
        while True:
            data = await websocket.receive_bytes()  # Ricevi binario dal client
            print("Ricevuto:", data)
            # Qui puoi decodificare il comando protobuf e inviarlo al server gRPC
    except WebSocketDisconnect:
        connected_websockets.remove(websocket)
        logging.info("Client WebSocket disconnesso")
    except Exception as e:
        logging.error(f"Errore WebSocket: {e}")
        connected_websockets.remove(websocket)
