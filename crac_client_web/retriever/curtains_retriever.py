from crac_client_web.config import Config
from crac_client_web.converter.converter import Converter
from crac_client_web.retriever.retriever import Retriever
from crac_protobuf.curtains_pb2 import (
    CurtainsAction,
    CurtainsRequest,
)
from crac_protobuf.curtains_pb2_grpc import CurtainStub
from crac_protobuf.button_pb2 import (
    ButtonKey,
)
import grpc


class CurtainsRetriever(Retriever):
    def __init__(self, converter: Converter) -> None:
        super().__init__(converter)
        self.channel = grpc.insecure_channel(f'{Config.getValue("ip", "server")}:{Config.getValue("port", "server")}')
        self.client = CurtainStub(self.channel)

    key_to_curtains_action_conversion = [
        ButtonKey.KEY_CURTAINS,
        ButtonKey.KEY_CALIBRATE,
    ]

    def setAction(self, action: str):
        request = CurtainsRequest(action=CurtainsAction.Value(action))
        call_future = self.client.SetAction.future(request, wait_for_ready=True)
        call_future.add_done_callback(self.callback)
