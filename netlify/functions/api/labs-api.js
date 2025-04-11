"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeywordSuggestions = getKeywordSuggestions;
exports.getKeywordIdeas = getKeywordIdeas;
exports.getCompetitorsDomain = getCompetitorsDomain;
exports.getDomainIntersection = getDomainIntersection;
exports.getRelatedKeywords = getRelatedKeywords;
exports.getKeywordOverview = getKeywordOverview;
const index_1 = require("./index");
/**
 * Get keyword suggestions using DataForSEO Labs
 */
async function getKeywordSuggestions(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            limit
        }];
    return await (0, index_1.apiPost)('/dataforseo_labs/google/keyword_suggestions/live', data);
}
/**
 * Get keyword ideas using DataForSEO Labs
 */
async function getKeywordIdeas(params) {
    const { keywords, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
    const data = [{
            keywords,
            location_code: locationCode,
            language_code: languageCode,
            limit
        }];
    return await (0, index_1.apiPost)('/dataforseo_labs/google/keyword_ideas/live', data);
}
/**
 * Get competitors for a domain using DataForSEO Labs
 */
async function getCompetitorsDomain(params) {
    const { domain, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
    const data = [{
            target: domain,
            location_code: locationCode,
            language_code: languageCode,
            limit
        }];
    return await (0, index_1.apiPost)('/dataforseo_labs/google/competitors_domain/live', data);
}
/**
 * Get keywords for domain intersection using DataForSEO Labs
 */
async function getDomainIntersection(params) {
    const { domains, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
    const data = [{
            targets: domains,
            location_code: locationCode,
            language_code: languageCode,
            limit
        }];
    return await (0, index_1.apiPost)('/dataforseo_labs/google/domain_intersection/live', data);
}
/**
 * Get related keywords using DataForSEO Labs
 */
async function getRelatedKeywords(params) {
    const { keyword, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode,
            limit
        }];
    return await (0, index_1.apiPost)('/dataforseo_labs/google/related_keywords/live', data);
}
/**
 * Get comprehensive overview for a keyword using DataForSEO Labs
 */
async function getKeywordOverview(params) {
    const { keyword, locationCode = 2840, languageCode = 'en' } = params;
    const data = [{
            keyword,
            location_code: locationCode,
            language_code: languageCode
        }];
    return await (0, index_1.apiPost)('/dataforseo_labs/google/keyword_overview/live', data);
}
