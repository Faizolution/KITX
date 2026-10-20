import { api } from './api';
import { ENV } from '../config/env';

const DEV_DASHBOARD_DATA = {
  stats: {
    testsCompleted: 14,
    testsTotal: 25,
    codingProblemsSolved: 42,
    codingGoal: 60,
    aiSessionsCount: 9,
    overallReadiness: 76, // percentage
  },
  domainReadiness: [
    { subject: 'Quantitative Aptitude', score: 82, fullMark: 100 },
    { subject: 'Logical Reasoning', score: 78, fullMark: 100 },
    { subject: 'Verbal Ability', score: 70, fullMark: 100 },
    { subject: 'Data Structures & Algo', score: 85, fullMark: 100 },
    { subject: 'Core CS (OS/DBMS/CN)', score: 68, fullMark: 100 },
    { subject: 'HR & Tech Interview', score: 72, fullMark: 100 },
  ],
  weeklyActivity: [
    { day: 'Mon', aptitude: 45, coding: 60, ai: 20 },
    { day: 'Tue', aptitude: 30, coding: 80, ai: 35 },
    { day: 'Wed', aptitude: 60, coding: 45, ai: 15 },
    { day: 'Thu', aptitude: 50, coding: 90, ai: 40 },
    { day: 'Fri', aptitude: 75, coding: 70, ai: 25 },
    { day: 'Sat', aptitude: 90, coding: 110, ai: 50 },
    { day: 'Sun', aptitude: 40, coding: 65, ai: 30 },
  ],
  recentActivities: [
    {
      id: 'act_1',
      title: 'Completed TCS NQT Aptitude Mock #3',
      category: 'Aptitude',
      score: '84%',
      status: 'Passed',
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    },
    {
      id: 'act_2',
      title: 'Solved "Two Sum" & "Valid Parentheses"',
      category: 'Coding',
      score: '2/2 Accepted',
      status: 'Completed',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    },
    {
      id: 'act_3',
      title: 'AI Mock Interview: Polymorphism & Indexing',
      category: 'AI Assistant',
      score: 'Feedback Generated',
      status: 'Reviewed',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    },
    {
      id: 'act_4',
      title: 'Read System Design & DBMS Indexing Guide',
      category: 'Resources',
      score: 'Marked Completed',
      status: 'Completed',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    },
  ],
  isDemoData: true,
};

export const dashboardService = {
  /**
   * Fetch all dashboard data for student
   */
  async getDashboardData() {
    try {
      const response = await api.get('/dashboard/summary');
      return response.data || response;
    } catch (err) {
      if (err.isNetworkError && ENV.ENABLE_MOCK_FALLBACK) {
        return DEV_DASHBOARD_DATA;
      }
      throw err;
    }
  },

  /**
   * Fetch student recent activity logs
   */
  async getRecentActivity() {
    try {
      const response = await api.get('/dashboard/activity');
      return response.data || response;
    } catch (err) {
      if (err.isNetworkError && ENV.ENABLE_MOCK_FALLBACK) {
        return DEV_DASHBOARD_DATA.recentActivities;
      }
      throw err;
    }
  },
};

export default dashboardService;
