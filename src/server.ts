import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import * as api from './api';
import { updateConfigFromHeaders } from './config';
import { Request, Response } from 'express';

// Create MCP server
const server = new McpServer({
  name: 'DataForSEO Server',
  version: '1.0.0',
  description: 'MCP Server for DataForSEO APIs'
});

// ----- Keywords Data API Tools -----

// Get search volume data for keywords from Google Ads
server.tool(
  'search_volume',
  {
    keywords: z.array(z.string()).describe('List of keywords to get search volume for'),
    location_code: z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: z.string().default('en').describe('Language code (default: en)')
  },
  async ({ keywords, location_code, language_code }) => {
    try {
      const result = await api.getSearchVolume({
        keywords,
        locationCode: location_code,
        languageCode: language_code
      });
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      };
    } catch (e) {
      return {
        content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
      };
    }
  }
);

// Get keywords for a specific website from Google Ads
server.tool(
  'keywords_for_site',
  {
    target: z.string().describe('Target website URL'),
    location_code: z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: z.string().default('en').describe('Language code (default: en)'),
    limit: z.number().default(100).describe('Maximum number of keywords to return')
  },
  async ({ target, location_code, language_code, limit }) => {
    try {
      const result = await api.getKeywordsForSite({
        target,
        locationCode: location_code,
        languageCode: language_code,
        limit
      });
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      };
    } catch (e) {
      return {
        content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
      };
    }
  }
);

// Get related keywords for a list of seed keywords from Google Ads
server.tool(
  'keywords_for_keywords',
  {
    keywords: z.array(z.string()).describe('List of seed keywords'),
    location_code: z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: z.string().default('en').describe('Language code (default: en)'),
    limit: z.number().default(100).describe('Maximum number of keywords to return')
  },
  async ({ keywords, location_code, language_code, limit }) => {
    try {
      const result = await api.getKeywordsForKeywords({
        keywords,
        locationCode: location_code,
        languageCode: language_code,
        limit
      });
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      };
    } catch (e) {
      return {
        content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
      };
    }
  }
);

// Get ad traffic data for keywords from Google Ads
server.tool(
  'ad_traffic_by_keywords',
  {
    keywords: z.array(z.string()).describe('List of keywords to get ad traffic data for'),
    location_code: z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: z.string().default('en').describe('Language code (default: en)')
  },
  async ({ keywords, location_code, language_code }) => {
    try {
      const result = await api.getAdTrafficByKeywords({
        keywords,
        locationCode: location_code,
        languageCode: language_code
      });
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      };
    } catch (e) {
      return {
        content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
      };
    }
  }
);

// Get Google Trends data for keywords
server.tool(
  'google_trends_data',
  {
    keywords: z.array(z.string()).describe('List of keywords to explore in Google Trends'),
    location_code: z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: z.string().default('en').describe('Language code (default: en)')
  },
  async ({ keywords, location_code, language_code }) => {
    try {
      const result = await api.getGoogleTrendsData({
        keywords,
        locationCode: location_code,
        languageCode: language_code
      });
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      };
    } catch (e) {
      return {
        content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
      };
    }
  }
);

// ----- DataForSEO Labs API Tools -----

// Get keyword suggestions using DataForSEO Labs
server.tool(
  'keyword_suggestions',
  {
    keyword: z.string().describe('Seed keyword'),
    location_code: z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: z.string().default('en').describe('Language code (default: en)'),
    limit: z.number().default(100).describe('Maximum number of suggestions to return')
  },
  async ({ keyword, location_code, language_code, limit }) => {
    try {
      const result = await api.getKeywordSuggestions({
        keyword,
        locationCode: location_code,
        languageCode: language_code,
        limit
      });
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      };
    } catch (e) {
      return {
        content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
      };
    }
  }
);

// ----- Export the server instance -----
export default server;

// ----- Authentication middleware for Express -----
export function authMiddleware(req: Request, res: Response, next: Function) {
  // Update configuration from request headers for Bearer Auth
  updateConfigFromHeaders(req);
  next();
}
