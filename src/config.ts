import dotenv from 'dotenv';
import { Request } from 'express';

// Load environment variables from .env file
dotenv.config();

/**
 * Configuration interface for DataForSEO
 */
export interface DataForSEOConfig {
  apiLogin: string;
  apiPassword: string;
  baseUrl: string;
}

/**
 * Global configuration
 */
export const config: DataForSEOConfig = {
  apiLogin: process.env.DATAFORSEO_LOGIN || '',
  apiPassword: process.env.DATAFORSEO_PASSWORD || '',
  baseUrl: 'https://api.dataforseo.com/v3'
};

/**
 * Get auth data for DataForSEO API
 */
export function getAuth(): { username: string; password: string } {
  return {
    username: config.apiLogin,
    password: config.apiPassword
  };
}

/**
 * Update configuration from request headers
 */
export function updateConfigFromHeaders(req: Request): void {
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
            config.apiLogin = credentials.login;
            config.apiPassword = credentials.password;
          }
        }
      } catch (e) {
        // Fall back to colon-separated format
        if (token.includes(':')) {
          const [login, password] = token.split(':', 2);
          config.apiLogin = login;
          config.apiPassword = password;
        }
      }
    } catch (e) {
      console.error('Error parsing auth token:', e);
    }
  }
}
