"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const zod_1 = require("zod");
const api = __importStar(require("./api"));
const config_1 = require("./config");
// Create MCP server
const server = new mcp_js_1.McpServer({
    name: 'DataForSEO Server',
    version: '1.0.0',
    description: 'MCP Server for DataForSEO APIs'
});
// ----- Keywords Data API Tools -----
// Get search volume data for keywords from Google Ads
server.tool('search_volume', {
    keywords: zod_1.z.array(zod_1.z.string()).describe('List of keywords to get search volume for'),
    location_code: zod_1.z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: zod_1.z.string().default('en').describe('Language code (default: en)')
}, async ({ keywords, location_code, language_code }) => {
    try {
        const result = await api.getSearchVolume({
            keywords,
            locationCode: location_code,
            languageCode: language_code
        });
        return {
            content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
        };
    }
    catch (e) {
        return {
            content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
        };
    }
});
// Get keywords for a specific website from Google Ads
server.tool('keywords_for_site', {
    target: zod_1.z.string().describe('Target website URL'),
    location_code: zod_1.z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: zod_1.z.string().default('en').describe('Language code (default: en)'),
    limit: zod_1.z.number().default(100).describe('Maximum number of keywords to return')
}, async ({ target, location_code, language_code, limit }) => {
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
    }
    catch (e) {
        return {
            content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
        };
    }
});
// Get related keywords for a list of seed keywords from Google Ads
server.tool('keywords_for_keywords', {
    keywords: zod_1.z.array(zod_1.z.string()).describe('List of seed keywords'),
    location_code: zod_1.z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: zod_1.z.string().default('en').describe('Language code (default: en)'),
    limit: zod_1.z.number().default(100).describe('Maximum number of keywords to return')
}, async ({ keywords, location_code, language_code, limit }) => {
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
    }
    catch (e) {
        return {
            content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
        };
    }
});
// Get ad traffic data for keywords from Google Ads
server.tool('ad_traffic_by_keywords', {
    keywords: zod_1.z.array(zod_1.z.string()).describe('List of keywords to get ad traffic data for'),
    location_code: zod_1.z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: zod_1.z.string().default('en').describe('Language code (default: en)')
}, async ({ keywords, location_code, language_code }) => {
    try {
        const result = await api.getAdTrafficByKeywords({
            keywords,
            locationCode: location_code,
            languageCode: language_code
        });
        return {
            content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
        };
    }
    catch (e) {
        return {
            content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
        };
    }
});
// Get Google Trends data for keywords
server.tool('google_trends_data', {
    keywords: zod_1.z.array(zod_1.z.string()).describe('List of keywords to explore in Google Trends'),
    location_code: zod_1.z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: zod_1.z.string().default('en').describe('Language code (default: en)')
}, async ({ keywords, location_code, language_code }) => {
    try {
        const result = await api.getGoogleTrendsData({
            keywords,
            locationCode: location_code,
            languageCode: language_code
        });
        return {
            content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
        };
    }
    catch (e) {
        return {
            content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
        };
    }
});
// ----- DataForSEO Labs API Tools -----
// Get keyword suggestions using DataForSEO Labs
server.tool('keyword_suggestions', {
    keyword: zod_1.z.string().describe('Seed keyword'),
    location_code: zod_1.z.number().default(2840).describe('Location code (default: 2840 for US)'),
    language_code: zod_1.z.string().default('en').describe('Language code (default: en)'),
    limit: zod_1.z.number().default(100).describe('Maximum number of suggestions to return')
}, async ({ keyword, location_code, language_code, limit }) => {
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
    }
    catch (e) {
        return {
            content: [{ type: 'text', text: JSON.stringify({ error: String(e) }, null, 2) }]
        };
    }
});
// ----- Export the server instance -----
exports.default = server;
// ----- Authentication middleware for Express -----
function authMiddleware(req, res, next) {
    // Update configuration from request headers for Bearer Auth
    (0, config_1.updateConfigFromHeaders)(req);
    next();
}
