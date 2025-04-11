"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.getAuth = getAuth;
exports.updateConfigFromHeaders = updateConfigFromHeaders;
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
/**
 * Global configuration
 */
exports.config = {
    apiLogin: process.env.DATAFORSEO_LOGIN || '',
    apiPassword: process.env.DATAFORSEO_PASSWORD || '',
    baseUrl: 'https://api.dataforseo.com/v3'
};
/**
 * Get auth data for DataForSEO API
 */
function getAuth() {
    return {
        username: exports.config.apiLogin,
        password: exports.config.apiPassword
    };
}
/**
 * Update configuration from request headers
 */
function updateConfigFromHeaders(req) {
    const authHeader = req.headers.authorization || '';
    if (authHeader.startsWith('Bearer ')) {
        try {
            // Extract the token from Bearer auth
            const token = authHeader.replace('Bearer ', '');
            // Try to decode as base64 JSON
            try {
                const decoded = Buffer.from(token, 'base64').toString('utf-8');
                const credentials = JSON.parse(decoded);
                if (credentials && typeof credentials === 'object') {
                    if ('login' in credentials && 'password' in credentials) {
                        exports.config.apiLogin = credentials.login;
                        exports.config.apiPassword = credentials.password;
                    }
                }
            }
            catch (e) {
                // Fall back to colon-separated format
                if (token.includes(':')) {
                    const [login, password] = token.split(':', 2);
                    exports.config.apiLogin = login;
                    exports.config.apiPassword = password;
                }
            }
        }
        catch (e) {
            console.error('Error parsing auth token:', e);
        }
    }
}
