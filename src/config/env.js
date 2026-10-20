/**
 * Application environment configuration
 * All environment variables are centralized here with safe fallbacks.
 */
export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'KITX',
  INSTITUTION_NAME: import.meta.env.VITE_INSTITUTION_NAME || 'Kothiwal Institute of Technology and Professional Studies',
  INSTITUTION_CITY: import.meta.env.VITE_INSTITUTION_CITY || 'Moradabad',
  ENABLE_MOCK_FALLBACK: import.meta.env.VITE_ENABLE_MOCK_FALLBACK !== 'false',
  REQUEST_TIMEOUT_MS: 15000,
};

export default ENV;
