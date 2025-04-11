import axios from 'axios';
import { getAuth, config } from '../config';

// Base axios instance for DataForSEO API
const api = axios.create({
  baseURL: config.baseUrl,
  auth: getAuth(),
  headers: {
    'Content-Type': 'application/json'
  }
});

// Import the API modules so we can re-export their functions
import * as keywordsData from './keywords-data.js';
import * as labsApi from './labs-api.js';
import * as serpApi from './serp-api.js';

// Re-export all the API function
export const {
  getSearchVolume,
  getKeywordsForSite,
  getKeywordsForKeywords,
  getAdTrafficByKeywords,
  getGoogleTrendsData
} = keywordsData;

export const {
  getKeywordSuggestions,
  getKeywordIdeas,
  getCompetitorsDomain,
  getDomainIntersection,
  getRelatedKeywords,
  getKeywordOverview
} = labsApi;

export const {
  liveGoogleOrganic,
  liveGoogleMaps,
  liveGoogleNews,
  taskPostGoogleOrganic,
  taskPostGoogleMaps,
  taskPostGoogleNews,
  taskGetGoogleOrganic,
  taskGetGoogleMaps,
  taskGetGoogleNews,
  getSerpScreenshot,
  getSerpAiSummary
} = serpApi;

/**
 * Update API auth configuration
 */
export function updateApiAuth(): void {
  const auth = getAuth();
  api.defaults.auth = {
    username: auth.username,
    password: auth.password
  };
}

/**
 * Make a GET request to DataForSEO API
 */
export async function apiGet(endpoint: string, params = {}): Promise<any> {
  try {
    updateApiAuth(); // Ensure we have the latest auth
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`Error making GET request to ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Make a POST request to DataForSEO API
 */
export async function apiPost(endpoint: string, data = {}): Promise<any> {
  try {
    updateApiAuth(); // Ensure we have the latest auth
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error making POST request to ${endpoint}:`, error);
    throw error;
  }
}

export default api;
