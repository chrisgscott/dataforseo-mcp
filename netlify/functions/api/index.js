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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSerpAiSummary = exports.getSerpScreenshot = exports.taskGetGoogleNews = exports.taskGetGoogleMaps = exports.taskGetGoogleOrganic = exports.taskPostGoogleNews = exports.taskPostGoogleMaps = exports.taskPostGoogleOrganic = exports.liveGoogleNews = exports.liveGoogleMaps = exports.liveGoogleOrganic = exports.getKeywordOverview = exports.getRelatedKeywords = exports.getDomainIntersection = exports.getCompetitorsDomain = exports.getKeywordIdeas = exports.getKeywordSuggestions = exports.getGoogleTrendsData = exports.getAdTrafficByKeywords = exports.getKeywordsForKeywords = exports.getKeywordsForSite = exports.getSearchVolume = void 0;
exports.updateApiAuth = updateApiAuth;
exports.apiGet = apiGet;
exports.apiPost = apiPost;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
// Base axios instance for DataForSEO API
const api = axios_1.default.create({
    baseURL: config_1.config.baseUrl,
    auth: (0, config_1.getAuth)(),
    headers: {
        'Content-Type': 'application/json'
    }
});
// Import the API modules so we can re-export their functions
const keywordsData = __importStar(require("./keywords-data.js"));
const labsApi = __importStar(require("./labs-api.js"));
const serpApi = __importStar(require("./serp-api.js"));
// Re-export all the API function
exports.getSearchVolume = keywordsData.getSearchVolume, exports.getKeywordsForSite = keywordsData.getKeywordsForSite, exports.getKeywordsForKeywords = keywordsData.getKeywordsForKeywords, exports.getAdTrafficByKeywords = keywordsData.getAdTrafficByKeywords, exports.getGoogleTrendsData = keywordsData.getGoogleTrendsData;
exports.getKeywordSuggestions = labsApi.getKeywordSuggestions, exports.getKeywordIdeas = labsApi.getKeywordIdeas, exports.getCompetitorsDomain = labsApi.getCompetitorsDomain, exports.getDomainIntersection = labsApi.getDomainIntersection, exports.getRelatedKeywords = labsApi.getRelatedKeywords, exports.getKeywordOverview = labsApi.getKeywordOverview;
exports.liveGoogleOrganic = serpApi.liveGoogleOrganic, exports.liveGoogleMaps = serpApi.liveGoogleMaps, exports.liveGoogleNews = serpApi.liveGoogleNews, exports.taskPostGoogleOrganic = serpApi.taskPostGoogleOrganic, exports.taskPostGoogleMaps = serpApi.taskPostGoogleMaps, exports.taskPostGoogleNews = serpApi.taskPostGoogleNews, exports.taskGetGoogleOrganic = serpApi.taskGetGoogleOrganic, exports.taskGetGoogleMaps = serpApi.taskGetGoogleMaps, exports.taskGetGoogleNews = serpApi.taskGetGoogleNews, exports.getSerpScreenshot = serpApi.getSerpScreenshot, exports.getSerpAiSummary = serpApi.getSerpAiSummary;
/**
 * Update API auth configuration
 */
function updateApiAuth() {
    const auth = (0, config_1.getAuth)();
    api.defaults.auth = {
        username: auth.username,
        password: auth.password
    };
}
/**
 * Make a GET request to DataForSEO API
 */
async function apiGet(endpoint, params = {}) {
    try {
        updateApiAuth(); // Ensure we have the latest auth
        const response = await api.get(endpoint, { params });
        return response.data;
    }
    catch (error) {
        console.error(`Error making GET request to ${endpoint}:`, error);
        throw error;
    }
}
/**
 * Make a POST request to DataForSEO API
 */
async function apiPost(endpoint, data = {}) {
    try {
        updateApiAuth(); // Ensure we have the latest auth
        const response = await api.post(endpoint, data);
        return response.data;
    }
    catch (error) {
        console.error(`Error making POST request to ${endpoint}:`, error);
        throw error;
    }
}
exports.default = api;
