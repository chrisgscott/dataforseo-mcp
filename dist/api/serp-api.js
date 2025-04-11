"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveGoogleOrganic = liveGoogleOrganic;
exports.liveGoogleMaps = liveGoogleMaps;
exports.liveGoogleNews = liveGoogleNews;
exports.taskPostGoogleOrganic = taskPostGoogleOrganic;
exports.taskPostGoogleMaps = taskPostGoogleMaps;
exports.taskPostGoogleNews = taskPostGoogleNews;
exports.taskGetGoogleOrganic = taskGetGoogleOrganic;
exports.taskGetGoogleMaps = taskGetGoogleMaps;
exports.taskGetGoogleNews = taskGetGoogleNews;
exports.getSerpScreenshot = getSerpScreenshot;
exports.getSerpAiSummary = getSerpAiSummary;
const index_1 = require("./index");
/**
 * Live Google SERP (Search Engine Results Page) API
 */
async function liveGoogleOrganic(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            device,
            os
        }];
    return await (0, index_1.apiPost)('/serp/google/organic/live/advanced', data);
}
/**
 * Live Google Maps SERP API
 */
async function liveGoogleMaps(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            device,
            os
        }];
    return await (0, index_1.apiPost)('/serp/google/maps/live/advanced', data);
}
/**
 * Live Google News SERP API
 */
async function liveGoogleNews(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            device,
            os
        }];
    return await (0, index_1.apiPost)('/serp/google/news/live/advanced', data);
}
/**
 * Submit a Google Organic SERP task for async processing
 */
async function taskPostGoogleOrganic(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            device,
            os
        }];
    return await (0, index_1.apiPost)('/serp/google/organic/task_post', data);
}
/**
 * Submit a Google Maps SERP task for async processing
 */
async function taskPostGoogleMaps(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            device,
            os
        }];
    return await (0, index_1.apiPost)('/serp/google/maps/task_post', data);
}
/**
 * Submit a Google News SERP task for async processing
 */
async function taskPostGoogleNews(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            device,
            os
        }];
    return await (0, index_1.apiPost)('/serp/google/news/task_post', data);
}
/**
 * Get results for a previously submitted Google Organic SERP task
 */
async function taskGetGoogleOrganic(params) {
    const { taskId } = params;
    return await (0, index_1.apiGet)(`/serp/google/organic/task_get/${taskId}`);
}
/**
 * Get results for a previously submitted Google Maps SERP task
 */
async function taskGetGoogleMaps(params) {
    const { taskId } = params;
    return await (0, index_1.apiGet)(`/serp/google/maps/task_get/${taskId}`);
}
/**
 * Get results for a previously submitted Google News SERP task
 */
async function taskGetGoogleNews(params) {
    const { taskId } = params;
    return await (0, index_1.apiGet)(`/serp/google/news/task_get/${taskId}`);
}
/**
 * Get a screenshot of SERP results for a task
 */
async function getSerpScreenshot(params) {
    const { taskId } = params;
    return await (0, index_1.apiGet)(`/serp/screenshot/${taskId}`);
}
/**
 * Get an AI-generated summary of SERP results for a task
 */
async function getSerpAiSummary(params) {
    const { taskId } = params;
    return await (0, index_1.apiGet)(`/serp/ai_summary/${taskId}`);
}
