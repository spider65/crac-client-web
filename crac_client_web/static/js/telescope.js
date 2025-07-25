import { sendBuffer } from './ws.js';
import * as proto from './proto/proto_bundle_pb.js';

export function handleTelescopeMessage(buffer) {
  const response = proto.TelescopeResponse.decode(buffer);
  updateTelescopeUI(response.status);
}

function updateTelescopeUI(status) {
  const display = document.getElementById("telescope-status");

  const labelMap = {
    [proto.TelescopeStatus.CONNECTED]: "Connesso",
    [proto.TelescopeStatus.DISCONNECTED]: "Disconnesso",
    [proto.TelescopeStatus.PARKED]: "Parcheggiato",
    [proto.TelescopeStatus.SLEWING]: "In movimento",
    [proto.TelescopeStatus.ERROR]: "Errore"
  };

  display.textContent = labelMap[status] || "Stato sconosciuto";
}

export function sendTelescopeCommand(action) {
  const req = proto.TelescopeRequest.create({ action });
  const buffer = proto.TelescopeRequest.encode(req).finish();
  sendBuffer(buffer);
}

