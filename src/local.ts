import express, { Request, Response } from 'express';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import server from './server';
import { authMiddleware } from './server';

// Configure port
const PORT = process.env.PORT || 3000;

// Create Express app
const app = express();

// Add authentication middleware
app.use(authMiddleware);

// Store active SSE connections
const connections: Record<string, SSEServerTransport> = {};

// SSE endpoint for MCP
app.get('/sse', async (req: Request, res: Response) => {
  // Configure headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });

  console.log('New SSE connection established');

  // Create transport
  const transport = new SSEServerTransport('/messages', res);
  connections[transport.sessionId] = transport;

  // Handle connection close
  req.on('close', () => {
    console.log('SSE connection closed');
    delete connections[transport.sessionId];
  });

  try {
    // Connect to the MCP server
    await server.connect(transport);
  } catch (error) {
    console.error('Error connecting to MCP server:', error);
    res.end();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`DataForSEO MCP Server running on http://localhost:${PORT}`);
  console.log(`Connect your MCP client to http://localhost:${PORT}/sse`);
});
