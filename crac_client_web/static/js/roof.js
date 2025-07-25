import { sendBuffer } from './ws.js';
import * as proto from './proto/proto_bundle_pb.js';

const btn = document.getElementById("btn-tetto");
let currentState = proto.RoofStatus.ROOF_CLOSED; // default

//let currentState = "CLOSED"; // default

btn.addEventListener("click", () => {
        const action = (
        currentState === proto.RoofStatus.ROOF_CLOSED ||
        currentState === proto.RoofStatus.ROOF_CLOSING
    )
        ? proto.RoofAction.OPEN
        : proto.RoofAction.CLOSE;

    const request = proto.RoofRequest.create({ action });
    const buffer = proto.RoofRequest.encode(request).finish();
    sendBuffer(buffer);
});

// Riceve lo stato dal server e aggiorna bottone (version multiple _pb)

// Riceve RoofResponse dal server
export function handleRoofResponse(buffer) {
    const response = proto.RoofResponse.decode(buffer);
    const status = response.status;
    const button = response.buttonGui;

    currentState = status;

    switch (status) {
        case proto.RoofStatus.ROOF_OPENED:
            btn.textContent = "Aperto";
            btn.style.backgroundColor = "green";
            break;
        case proto.RoofStatus.ROOF_CLOSED:
            btn.textContent = "Chiuso";
            btn.style.backgroundColor = "red";
            break;
        case proto.RoofStatus.ROOF_OPENING:
        case proto.RoofStatus.ROOF_CLOSING:
            btn.textContent = "Movimento...";
            btn.style.backgroundColor = "orange";
            break;
        case proto.RoofStatus.ROOF_ERROR:
            btn.textContent = "Errore!";
            btn.style.backgroundColor = "gray";
            break;
        default:
            btn.textContent = "Stato sconosciuto";
            btn.style.backgroundColor = "black";
    }

    // Colori e testo da ButtonGui (opzionale, se vuoi usarli)
    if (button) {
        btn.style.color = button.buttonColor?.textColor || "white";
        btn.disabled = button.isDisabled ?? false;
    }
}
