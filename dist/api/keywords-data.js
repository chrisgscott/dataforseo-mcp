"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchVolume = getSearchVolume;
exports.getKeywordsForSite = getKeywordsForSite;
exports.getKeywordsForKeywords = getKeywordsForKeywords;
exports.getAdTrafficByKeywords = getAdTrafficByKeywords;
exports.getGoogleTrendsData = getGoogleTrendsData;
const index_1 = require("./index");
/**
 * Get search volume data for keywords from Google Ads
 */
async function getSearchVolume(params) {
    const { keywords, locationCode = 2840, languageCode = 'en' } = params;
    const data = [{
            keywords,
            location_code: locationCode,
            language_code: languageCode
        }];
    return await (0, index_1.apiPost)('/keywords_data/google/search_volume/live', data);
}
/**
 * Get keywords for a specific website from Google Ads
 */
async function getKeywordsForSite(params) {
    const { target, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
    const data = [{
            target,
            location_code: locationCode,
            language_code: languageCode,
            limit
        }];
    return await (0, index_1.apiPost)('/keywords_data/google/keywords_for_site/live', data);
}
/**
 * Get related keywords for a list of seed keywords from Google Ads
 */
async function getKeywordsForKeywords(params) {
    const { keywords, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
    const data = [{
            keywords,
            location_code: locationCode,
            language_code: languageCode,
            limit
        }];
    return await (0, index_1.apiPost)('/keywords_data/google/keywords_for_keywords/live', data);
}
/**
 * Get ad traffic data for keywords from Google Ads
 */
async function getAdTrafficByKeywords(params) {
    const { keywords, locationCode = 2840, languageCode = 'en' } = params;
    const data = [{
            keywords,
            location_code: locationCode,
            language_code: languageCode
        }];
    return await (0, index_1.apiPost)('/keywords_data/google/ad_traffic_by_keywords/live', data);
}
/**
 * Get Google Trends data for keywords
 */
async function getGoogleTrendsData(params) {
    const { keywords, locationCode = 2840, languageCode = 'en' } = params;
    const data = [{
            keywords,
            location_code: locationCode,
            language_code: languageCode
        }];
    return await (0, index_1.apiPost)('/keywords_data/google/google_trends/live', data);
}
