import { apiPost } from './index';

/**
 * Get keyword suggestions using DataForSEO Labs
 */
export async function getKeywordSuggestions(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  limit?: number;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    limit
  }];
  
  return await apiPost('/dataforseo_labs/google/keyword_suggestions/live', data);
}

/**
 * Get keyword ideas using DataForSEO Labs
 */
export async function getKeywordIdeas(params: {
  keywords: string[];
  locationCode?: number;
  languageCode?: string;
  limit?: number;
}) {
  const { keywords, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
  
  const data = [{
    keywords,
    location_code: locationCode,
    language_code: languageCode,
    limit
  }];
  
  return await apiPost('/dataforseo_labs/google/keyword_ideas/live', data);
}

/**
 * Get competitors for a domain using DataForSEO Labs
 */
export async function getCompetitorsDomain(params: {
  domain: string;
  locationCode?: number;
  languageCode?: string;
  limit?: number;
}) {
  const { domain, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
  
  const data = [{
    target: domain,
    location_code: locationCode,
    language_code: languageCode,
    limit
  }];
  
  return await apiPost('/dataforseo_labs/google/competitors_domain/live', data);
}

/**
 * Get keywords for domain intersection using DataForSEO Labs
 */
export async function getDomainIntersection(params: {
  domains: string[];
  locationCode?: number;
  languageCode?: string;
  limit?: number;
}) {
  const { domains, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
  
  const data = [{
    targets: domains,
    location_code: locationCode,
    language_code: languageCode,
    limit
  }];
  
  return await apiPost('/dataforseo_labs/google/domain_intersection/live', data);
}

/**
 * Get related keywords using DataForSEO Labs
 */
export async function getRelatedKeywords(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  limit?: number;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    limit
  }];
  
  return await apiPost('/dataforseo_labs/google/related_keywords/live', data);
}

/**
 * Get comprehensive overview for a keyword using DataForSEO Labs
 */
export async function getKeywordOverview(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en' } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode
  }];
  
  return await apiPost('/dataforseo_labs/google/keyword_overview/live', data);
}
