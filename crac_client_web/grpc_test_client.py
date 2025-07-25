import os
import configparser
import sys
import logging
import asyncio
import grpc

sys.path.append(os.path.abspath("/home/raniero/Documenti/GitHub/crac-protobuf/crac_protobuf")) 
from telescope_pb2 import TelescopeRequest, TelescopeAction
from telescope_pb2_grpc import TelescopeStub

logging.basicConfig(level=logging.INFO)

async def test_grpc_connection(target):
    async with grpc.aio.insecure_channel(target) as channel:
        stub = TelescopeStub(channel)
        request = TelescopeRequest(action=TelescopeAction.TELESCOPE_CONNECT, autolight=False)
        try:
            response = await stub.SetAction(request, timeout=5.0)
            logging.info(f"Ricevuta risposta da server gRPC: {response}")
        except grpc.aio.AioRpcError as e:
            logging.error(f"Errore nella chiamata gRPC: {e.code()} - {e.details()}")

if __name__ == "__main__":
    # Cambia con il target corretto da config, esempio "127.0.0.1:50051"
    target = "127.0.0.1:50051"
    asyncio.run(test_grpc_connection(target))
