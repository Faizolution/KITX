import { api, tokenStorage } from './api';
import { ENV } from '../config/env';

// Mock student fixture for dev/testing prior to Aman's backend deployment
const DEV_MOCK_USER = {
  id: 'usr_demo_101',
  name: 'Faiz Ahmad',
  email: 'faiz@kitps.ac.in',
  rollNumber: '2101640100045',
  branch: 'CSE',
  semester: '7th Semester',
  graduationYear: '2025',
  cgpa: '8.4',
  phone: '+91 98765 43210',
  bio: 'Final year CSE undergraduate at KITPS Moradabad. Focused on full-stack web engineering, algorithms, and technical interviews.',
  targetRoles: ['Software Development Engineer (SDE)', 'Frontend Developer'],
  preferredLanguages: ['JavaScript / TypeScript', 'C++', 'Python'],
  isDemoAccount: true,
  createdAt: '2024-08-15T10:00:00Z',
};

export const authService = {
  /**
   * Log in user with email and password
   */
  async login(credentials) {
    try {
      const data = await api.post('/auth/login', credentials);
      if (data?.token) {
        tokenStorage.set(data.token);
      }
      return {
        user: data.user || data.data?.user,
        token: data.token,
        isDemo: false,
      };
    } catch (err) {
      // If network error and mock fallback enabled, provide development session
      if (err.isNetworkError && ENV.ENABLE_MOCK_FALLBACK) {
        console.warn(
          '[KITX Auth] Backend at ' + ENV.API_BASE_URL + ' is currently offline. Initializing development test session for frontend testing.'
        );
        const demoToken = 'mock_jwt_token_for_dev_preview';
        tokenStorage.set(demoToken);
        return {
          user: {
            ...DEV_MOCK_USER,
            email: credentials.email || DEV_MOCK_USER.email,
          },
          token: demoToken,
          isDemo: true,
          backendOffline: true,
        };
      }
      throw err;
    }
  },

  /**
   * Register a new student account
   */
  async register(registrationData) {
    try {
      const data = await api.post('/auth/register', registrationData);
      if (data?.token) {
        tokenStorage.set(data.token);
      }
      return {
        user: data.user || data.data?.user,
        token: data.token,
        isDemo: false,
      };
    } catch (err) {
      if (err.isNetworkError && ENV.ENABLE_MOCK_FALLBACK) {
        console.warn(
          '[KITX Auth] Backend at ' + ENV.API_BASE_URL + ' is currently offline. Creating local test session.'
        );
        const demoToken = 'mock_jwt_token_for_dev_preview';
        tokenStorage.set(demoToken);
        return {
          user: {
            ...DEV_MOCK_USER,
            name: registrationData.name,
            email: registrationData.email,
            rollNumber: registrationData.rollNumber,
            branch: registrationData.branch,
            graduationYear: registrationData.graduationYear,
          },
          token: demoToken,
          isDemo: true,
          backendOffline: true,
        };
      }
      throw err;
    }
  },

  /**
   * Get current authenticated user profile
   */
  async getCurrentUser() {
    const token = tokenStorage.get();
    if (!token) return null;

    try {
      const data = await api.get('/auth/me');
      return data.user || data.data || data;
    } catch (err) {
      if (token === 'mock_jwt_token_for_dev_preview' || (err.isNetworkError && ENV.ENABLE_MOCK_FALLBACK)) {
        return DEV_MOCK_USER;
      }
      // If unauthorized, clear invalid token
      if (err.status === 401) {
        tokenStorage.remove();
      }
      throw err;
    }
  },

  /**
   * Logout user
   */
  async logout() {
    try {
      await api.post('/auth/logout');
    } catch {
      // Ignore network errors on logout
    } finally {
      tokenStorage.remove();
    }
  },

  /**
   * Check if token is present
   */
  isAuthenticated() {
    return Boolean(tokenStorage.get());
  },
};

export default authService;
