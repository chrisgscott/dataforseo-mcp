"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const sse_js_1 = require("@modelcontextprotocol/sdk/server/sse.js");
const server_1 = __importDefault(require("../server"));
const server_2 = require("../server");
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
    // Create transport
    const transport = new sse_js_1.SSEServerTransport('/messages', res);
    connections[transport.sessionId] = transport;
    // Handle connection close
    req.on('close', () => {
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
// Create serverless handler
const serverlessHandler = (0, serverless_http_1.default)(app);
// Export the handler for Netlify Functions
const handler = async (event, context) => {
    // Return result of handler
    return serverlessHandler(event, context);
};
exports.handler = handler;
