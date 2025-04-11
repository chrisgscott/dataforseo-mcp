# DataForSEO TypeScript MCP Server

A TypeScript implementation of the DataForSEO MCP Server, designed for deployment to Netlify.

## Features

- TypeScript implementation of MCP Server
- Supports Bearer Authentication
- Designed for serverless deployment on Netlify
- Provides tools for DataForSEO APIs:
  - Keywords Data API
  - DataForSEO Labs API
  - SERP API

## Development

### Prerequisites

- Node.js 16+
- npm

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your DataForSEO credentials:

```
DATAFORSEO_LOGIN=your_login
DATAFORSEO_PASSWORD=your_password
```

### Running Locally

Start the local development server:

```bash
npm run dev
```

This will start the server at `http://localhost:8888`. Connect your MCP client to `http://localhost:8888/sse`.

## Authentication

The server supports two authentication methods:

1. **Environment Variables**: Set `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD` in your environment.

2. **Bearer Authentication**: Use a Bearer token in your requests with one of these formats:
   - Base64-encoded JSON: `Bearer eyJsb2dpbiI6InlvdXJfbG9naW4iLCJwYXNzd29yZCI6InlvdXJfcGFzc3dvcmQifQ==`
   - Simple colon-separated: `Bearer your_login:your_password`

## Deployment to Netlify

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy to Netlify:

```bash
npx netlify deploy --prod
```

### Automated Deployment

Connect your repository to Netlify for automatic deployments on push.

## Using with n8n

To use this MCP server with n8n:

1. Deploy the server to Netlify
2. In n8n, add an MCP-compatible node
3. Set the MCP Server URL to your Netlify deployment URL (`https://your-site.netlify.app/sse`)
4. Set the Authentication to Bearer Token and use the format `your_login:your_password`

## Available Tools

The server provides tools for accessing DataForSEO APIs:

- `search_volume` - Get search volume data for keywords
- `keywords_for_site` - Get keywords for a specific website
- `keywords_for_keywords` - Get related keywords for seed keywords
- `ad_traffic_by_keywords` - Get ad traffic data for keywords
- `google_trends_data` - Get Google Trends data for keywords
- `keyword_suggestions` - Get keyword suggestions
- ... and more tools for SERP and Labs APIs

## License

ISC
