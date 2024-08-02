from pathlib import Path
import sys
path_root = Path(__file__).parents[1]
sys.path.append(str(path_root))
print(sys.path)

import logging
import logging.config
logging.config.fileConfig('logging.conf')

from crac_client_web import config, gui
from crac_client_web.converter.button_converter import ButtonConverter
from crac_client_web.converter.curtains_converter import CurtainsConverter
from crac_client_web.converter.roof_converter import RoofConverter
from crac_client_web.converter.telescope_converter import TelescopeConverter
from crac_client_web.converter.weather_converter import WeatherConverter
from crac_client_web.gui_constants import GuiKey
from crac_client_web.jobs import JOBS
from crac_client_web.retriever.button_retriever import ButtonRetriever
from crac_client_web.retriever.curtains_retriever import CurtainsRetriever
from crac_client_web.retriever.roof_retriever import RoofRetriever
from crac_client_web.retriever.telescope_retriever import TelescopeRetriever
from crac_client_web.retriever.weather_retriever import WeatherRetriever
from crac_protobuf.button_pb2 import ButtonKey
from crac_protobuf.curtains_pb2 import CurtainsAction
from crac_protobuf.roof_pb2 import RoofAction
from crac_protobuf.telescope_pb2 import TelescopeAction
from queue import Empty


logger = logging.getLogger(__name__)


def blocking_deque():
    try:
        job = JOBS.get(block=True, timeout=10)
    except Empty as e:
        logger.error("The queue is empty", exc_info=1)
    else:
        job['convert'](job['response'], g_ui)
    deque()


def deque():
    while JOBS.qsize() > 0:
        logger.debug(f"there are {JOBS.qsize()} jobs")
        try:
            job = JOBS.get()
        except Empty as e:
            logger.error("The queue is empty", exc_info=1)
        else:
            job['convert'](job['response'], g_ui)

g_ui = gui.Gui()
roof_retriever = RoofRetriever(RoofConverter())
button_retriever = ButtonRetriever(ButtonConverter())
telescope_retriever = TelescopeRetriever(TelescopeConverter())
curtains_retriever = CurtainsRetriever(CurtainsConverter())
weather_retriever = WeatherRetriever(WeatherConverter())
weather_retriever.getStatus(g_ui.win["weather-updated-at"].get(), g_ui.win["weather-interval"].get())
blocking_deque()

while True:
    timeout = config.Config.getInt("sleep", "automazione")
    v, _ = g_ui.win.Read(timeout=timeout)
    logger.debug(f"Premuto pulsante: {v}")
    match v:
        case v if v in [None, GuiKey.EXIT, GuiKey.SHUTDOWN]:
            g_ui = None
            telescope_retriever.setAction(action=TelescopeAction.Name(TelescopeAction.TELESCOPE_DISCONNECT), autolight=False)
            break
        case ButtonKey.KEY_ROOF:
            roof_retriever.setAction(action=g_ui.win[v].metadata)
        case v if v in ButtonRetriever.key_to_button_type_conversion.keys():
            button_retriever.setAction(action=g_ui.win[v].metadata, key=v, g_ui=g_ui)
        case v if v in TelescopeRetriever.key_to_telescope_action_conversion:
            telescope_retriever.setAction(action=g_ui.win[v].metadata, autolight=g_ui.is_autolight())
        case v if v in CurtainsRetriever.key_to_curtains_action_conversion:
            curtains_retriever.setAction(action=g_ui.win[v].metadata)
        case _:
            roof_retriever.setAction(action=RoofAction.Name(RoofAction.CHECK_ROOF))
            telescope_retriever.setAction(action=TelescopeAction.Name(TelescopeAction.CHECK_TELESCOPE), autolight=g_ui.is_autolight())
            curtains_retriever.setAction(action=CurtainsAction.Name(CurtainsAction.CHECK_CURTAIN))
            button_retriever.getStatus()
            weather_retriever.getStatus(g_ui.win["weather-updated-at"].get(), g_ui.win["weather-interval"].get())
            
    deque()
