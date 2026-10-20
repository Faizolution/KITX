import { api } from './api';
import { ENV } from '../config/env';

// Local cache for user profile updates during development
let localProfileCache = null;

export const userService = {
  /**
   * Fetch complete student profile
   */
  async getProfile() {
    try {
      const response = await api.get('/user/profile');
      return response.data || response;
    } catch (err) {
      if (err.isNetworkError && ENV.ENABLE_MOCK_FALLBACK) {
        if (localProfileCache) return localProfileCache;
        return {
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
          dreamCompanies: 'TCS, Infosys, Wipro, Accenture, Amazon, Google',
          internshipStatus: 'Completed 2-month summer internship in React & Node.js',
          skills: ['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'Data Structures', 'SQL', 'Git'],
          isDemoProfile: true,
        };
      }
      throw err;
    }
  },

  /**
   * Update student profile information
   */
  async updateProfile(profileData) {
    try {
      const response = await api.put('/user/profile', profileData);
      return response.data || response;
    } catch (err) {
      if (err.isNetworkError && ENV.ENABLE_MOCK_FALLBACK) {
        console.warn('[KITX Profile] Backend offline. Storing profile changes locally for test preview.');
        localProfileCache = {
          ...localProfileCache,
          ...profileData,
          updatedAt: new Date().toISOString(),
          isDemoProfile: true,
        };
        return localProfileCache;
      }
      throw err;
    }
  },
};

export default userService;
