import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import server from '../server';
import { authMiddleware } from '../server';

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

  // Create transport
  const transport = new SSEServerTransport('/messages', res);
  connections[transport.sessionId] = transport;

  // Handle connection close
  req.on('close', () => {
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

// Create serverless handler
const serverlessHandler = serverless(app);

// Export the handler for Netlify Functions
export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Return result of handler
  return serverlessHandler(event, context);
};
