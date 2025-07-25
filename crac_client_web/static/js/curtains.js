import { sendBuffer } from './ws.js';
import * as proto from './proto/proto_bundle_pb.js';

export function handleCurtainsMessage(buffer) {
    const statusMessage = CurtainsStatus.deserializeBinary(buffer);
    const status = statusMessage.getStatus();

    // Aggiorna l'interfaccia utente in base allo stato ricevuto
    updateCurtainsUI(status);
}

function updateCurtainsUI(status) {
    const statusElement = document.getElementById('curtains-status');
    switch (status) {
        case CurtainsStatus.CURTAINS_OPEN:
            statusElement.textContent = 'Paratie Aperte';
            break;
        case CurtainsStatus.CURTAINS_CLOSED:
            statusElement.textContent = 'Paratie Chiuse';
            break;
        case CurtainsStatus.CURTAINS_OPENING:
            statusElement.textContent = 'Apertura in corso...';
            break;
        case CurtainsStatus.CURTAINS_CLOSING:
            statusElement.textContent = 'Chiusura in corso...';
            break;
        default:
            statusElement.textContent = 'Stato sconosciuto';
            break;
    }
}

document.getElementById('open-curtains-button').addEventListener('click', () => {
    sendCurtainsCommand(CurtainsAction.OPEN);
});

document.getElementById('close-curtains-button').addEventListener('click', () => {
    sendCurtainsCommand(CurtainsAction.CLOSE);
});

function sendCurtainsCommand(action) {
    const request = new CurtainsRequest();
    request.setAction(action);
    const bytes = request.serializeBinary();
}