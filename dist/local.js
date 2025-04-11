"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sse_js_1 = require("@modelcontextprotocol/sdk/server/sse.js");
const server_1 = __importDefault(require("./server"));
const server_2 = require("./server");
// Configure port
const PORT = process.env.PORT || 3000;
// Create Express app
const app = (0, express_1.default)();
// Add authentication middleware
app.use(server_2.authMiddleware);
// Store active SSE connections
const connections = {};
// SSE endpoint for MCP
app.get('/sse', async (req, res) => {
    // Configure headers for SSE
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    });
    console.log('New SSE connection established');
    // Create transport
    const transport = new sse_js_1.SSEServerTransport('/messages', res);
    connections[transport.sessionId] = transport;
    // Handle connection close
    req.on('close', () => {
        console.log('SSE connection closed');
        delete connections[transport.sessionId];
    });
    try {
        // Connect to the MCP server
        await server_1.default.connect(transport);
    }
    catch (error) {
        console.error('Error connecting to MCP server:', error);
        res.end();
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`DataForSEO MCP Server running on http://localhost:${PORT}`);
    console.log(`Connect your MCP client to http://localhost:${PORT}/sse`);
});
