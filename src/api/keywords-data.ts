import { apiPost } from './index';

/**
 * Get search volume data for keywords from Google Ads
 */
export async function getSearchVolume(params: {
  keywords: string[];
  locationCode?: number;
  languageCode?: string;
}) {
  const { keywords, locationCode = 2840, languageCode = 'en' } = params;
  
  const data = [{
    keywords,
    location_code: locationCode,
    language_code: languageCode
  }];
  
  return await apiPost('/keywords_data/google/search_volume/live', data);
}

/**
 * Get keywords for a specific website from Google Ads
 */
export async function getKeywordsForSite(params: {
  target: string;
  locationCode?: number;
  languageCode?: string;
  limit?: number;
}) {
  const { target, locationCode = 2840, languageCode = 'en', limit = 100 } = params;
  
  const data = [{
    target,
    location_code: locationCode,
    language_code: languageCode,
    limit
  }];
  
  return await apiPost('/keywords_data/google/keywords_for_site/live', data);
}

/**
 * Get related keywords for a list of seed keywords from Google Ads
 */
export async function getKeywordsForKeywords(params: {
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
  
  return await apiPost('/keywords_data/google/keywords_for_keywords/live', data);
}

/**
 * Get ad traffic data for keywords from Google Ads
 */
export async function getAdTrafficByKeywords(params: {
  keywords: string[];
  locationCode?: number;
  languageCode?: string;
}) {
  const { keywords, locationCode = 2840, languageCode = 'en' } = params;
  
  const data = [{
    keywords,
    location_code: locationCode,
    language_code: languageCode
  }];
  
  return await apiPost('/keywords_data/google/ad_traffic_by_keywords/live', data);
}

/**
 * Get Google Trends data for keywords
 */
export async function getGoogleTrendsData(params: {
  keywords: string[];
  locationCode?: number;
  languageCode?: string;
}) {
  const { keywords, locationCode = 2840, languageCode = 'en' } = params;
  
  const data = [{
    keywords,
    location_code: locationCode,
    language_code: languageCode
  }];
  
  return await apiPost('/keywords_data/google/google_trends/live', data);
}
