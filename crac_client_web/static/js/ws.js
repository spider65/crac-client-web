// static/js/ws.js
let socket;

export function initWebSocket(onMessage) {
    socket = new WebSocket("ws://localhost:8000/ws");
    socket.binaryType = "arraybuffer";

    socket.onopen = () => console.log("🔌 WebSocket connesso");
    socket.onmessage = (event) => {
        console.log("📥 Messaggio ricevuto dal server:", event.data);
        const data = new Uint8Array(event.data);
        onMessage(data);
    };
    socket.onerror = err => console.error("❌ Errore WebSocket", err);
    socket.onclose = () => console.log("🔌 WebSocket chiuso");
}

export function sendBuffer(buffer) {
    if (socket?.readyState === WebSocket.OPEN) {
        socket.send(buffer);
        console.log("📤 Messaggio inviato:", buffer);
    } else {
        console.warn("⚠️ WebSocket non connesso");
    }
}
