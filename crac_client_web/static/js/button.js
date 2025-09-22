import { sendBuffer } from './ws.js';
import * as proto from './proto/proto_bundle_pb.js';



// Mappa tra ButtonKey enum e ID nel DOM
const buttonIdMap = {
    6: "btn-tetto",              // KEY_ROOF
    7: "btn-tele-switch",        // KEY_TELE_SWITCH
    8: "btn-ccd-switch",         // KEY_CCD_SWITCH
    9: "btn-flat-light",         // KEY_FLAT_LIGHT
    10: "btn-dome-light",        // KEY_DOME_LIGHT
    11: "btn-conn-telescopio",   // KEY_TELESCOPE_CONNECTION_TOGGLE
    1: "btn-sync",               // KEY_SYNC
    2: "btn-park",               // KEY_PARK
    3: "btn-flat",               // KEY_FLAT
    4: "btn-curtains",           // KEY_CURTAINS
    5: "btn-calibra"             // KEY_CALIBRATE
};

// Mappa tra HTML value e ButtonKey
const buttonKeyMap = {
    "conn_telescopio": ButtonKey.KEY_TELESCOPE_CONNECTION_TOGGLE,
    "sync_telescopio": ButtonKey.KEY_SYNC,
    "park_telescopio": ButtonKey.KEY_PARK,
    "flat_telescopio": ButtonKey.KEY_FLAT,
    "attiva_tende": ButtonKey.KEY_CURTAINS,
    "calibra_tende": ButtonKey.KEY_CALIBRATE
};

export function handleButtonsResponse(buffer) {
    const response = proto.ButtonsResponse.decode(buffer);
    //const response = ButtonsResponse.deserializeBinary(buffer);
    // const buttons = response.getButtonsList();
    const buttons = response.buttons;

    buttons.forEach((btn) => {
        //const buttonGui = btn.getButtonGui();
        const buttonGui = btn.buttonGui();
        //const key = buttonGui.getKey();
        const key = buttonGui.key();
        const domId = buttonIdMap[key];
        if (!domId) return;

        const domBtn = document.getElementById(domId);
        if (domBtn) {
            updateButtonFromGui(domBtn, buttonGui);
        }
    });
}

function updateButtonFromGui(domButton, buttonGui) {
    //const labelEnum = buttonGui.getLabel();
    const labelEnum = buttonGui.label();
    //const color = buttonGui.getButtonColor();
    const color = buttonGui.buttonColor();

    const labelMap = {
        1: "On",
        2: "Off",
        8: "Apri",
        9: "Chiudi",
        10: "Apertura...",
        11: "Chiusura...",
        21: "Errore"
    };

    domButton.textContent = labelMap[labelEnum] || "—";
    //domButton.style.backgroundColor = color.getBackgroundColor();
    domButton.style.backgroundColor = color?.backgroundColor || "#444";
    //domButton.style.color = color.getTextColor();
    domButton.style.color = color?.textColor || "#fff";
    //domButton.disabled = buttonGui.getIsDisabled();
    domButton.disabled = buttonGui.isDisabled ?? false;
}

// 👇 Inizializza tutti i bottoni con value=... dall’HTML
export function initButtonCommands(socket) {
    const allButtons = document.querySelectorAll("button[name='button_id']");
    allButtons.forEach((btn) => {
        const value = btn.value;
        if (buttonKeyMap[value] !== undefined) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();  // blocca il submit del form
                sendButtonCommand(socket, buttonKeyMap[value]);
            });
        }
    });
}

///function sendButtonCommand(socket, buttonKey) {
function sendButtonCommand(socket, buttonKey) {
    // Crea la richiesta usando il bundle
    const request = proto.crac_protobuf.ButtonRequest.create({
        action: proto.crac_protobuf.ButtonAction.BUTTON_DEFAULT_ACTION,
        type: 0, // opzionale
        key: buttonKey
    });

    // Serializza la richiesta
    const bytes = proto.crac_protobuf.ButtonRequest.encode(request).finish();

    // Invia tramite WebSocket
    socket.send(bytes);

    // Log di debug
    console.log(`📤 Inviato comando button: ${proto.crac_protobuf.ButtonKey?.[buttonKey] ?? buttonKey} (${buttonKey})`);
}


