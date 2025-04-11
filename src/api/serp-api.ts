import { apiPost, apiGet } from './index';

/**
 * Live Google SERP (Search Engine Results Page) API
 */
export async function liveGoogleOrganic(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  device?: string;
  os?: string;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    device,
    os
  }];
  
  return await apiPost('/serp/google/organic/live/advanced', data);
}

/**
 * Live Google Maps SERP API
 */
export async function liveGoogleMaps(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  device?: string;
  os?: string;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    device,
    os
  }];
  
  return await apiPost('/serp/google/maps/live/advanced', data);
}

/**
 * Live Google News SERP API
 */
export async function liveGoogleNews(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  device?: string;
  os?: string;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    device,
    os
  }];
  
  return await apiPost('/serp/google/news/live/advanced', data);
}

/**
 * Submit a Google Organic SERP task for async processing
 */
export async function taskPostGoogleOrganic(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  device?: string;
  os?: string;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    device,
    os
  }];
  
  return await apiPost('/serp/google/organic/task_post', data);
}

/**
 * Submit a Google Maps SERP task for async processing
 */
export async function taskPostGoogleMaps(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  device?: string;
  os?: string;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    device,
    os
  }];
  
  return await apiPost('/serp/google/maps/task_post', data);
}

/**
 * Submit a Google News SERP task for async processing
 */
export async function taskPostGoogleNews(params: {
  keyword: string;
  locationCode?: number;
  languageCode?: string;
  device?: string;
  os?: string;
}) {
  const { keyword, locationCode = 2840, languageCode = 'en', device = 'desktop', os = 'windows' } = params;
  
  const data = [{
    keyword,
    location_code: locationCode,
    language_code: languageCode,
    device,
    os
  }];
  
  return await apiPost('/serp/google/news/task_post', data);
}

/**
 * Get results for a previously submitted Google Organic SERP task
 */
export async function taskGetGoogleOrganic(params: { taskId: string }) {
  const { taskId } = params;
  return await apiGet(`/serp/google/organic/task_get/${taskId}`);
}

/**
 * Get results for a previously submitted Google Maps SERP task
 */
export async function taskGetGoogleMaps(params: { taskId: string }) {
  const { taskId } = params;
  return await apiGet(`/serp/google/maps/task_get/${taskId}`);
}

/**
 * Get results for a previously submitted Google News SERP task
 */
export async function taskGetGoogleNews(params: { taskId: string }) {
  const { taskId } = params;
  return await apiGet(`/serp/google/news/task_get/${taskId}`);
}

/**
 * Get a screenshot of SERP results for a task
 */
export async function getSerpScreenshot(params: { taskId: string }) {
  const { taskId } = params;
  return await apiGet(`/serp/screenshot/${taskId}`);
}

/**
 * Get an AI-generated summary of SERP results for a task
 */
export async function getSerpAiSummary(params: { taskId: string }) {
  const { taskId } = params;
  return await apiGet(`/serp/ai_summary/${taskId}`);
}


