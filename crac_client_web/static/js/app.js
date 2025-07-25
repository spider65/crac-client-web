import { initWebSocket } from './ws.js';
import { handleRoofResponse } from './roof.js';
import { handleButtonsResponse, initButtonCommands } from './button.js';
import { handleChartMessage } from './chart.js';
import { handleCurtainsMessage } from './curtains.js';
import { handleTelescopeMessage } from './telescope.js';

initWebSocket(
    (data) => {
        try { handleRoofResponse(data); return; } catch (_) {}
        try { handleButtonsResponse(data); return; } catch (_) {}
        try { handleChartMessage(data); return; } catch (_) {}
        try { handleCurtainsMessage(data); return; } catch (_) {}
        try { handleTelescopeMessage(data); return; } catch (_) {}
        console.warn("🟡 Messaggio ricevuto ma non gestito");
    },
    (socket) => {
        console.log("✅ WebSocket connesso");
        initButtonCommands(socket);  // 👈 ora funziona correttamente
    }
);

