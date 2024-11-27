export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  version: 'v1',
};

export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.baseUrl}/api/${API_CONFIG.version}/${endpoint}`;
};