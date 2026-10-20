import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from '../components/layout/PublicLayout';
import { AppLayout } from '../components/layout/AppLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

// Pages
import { LandingPage } from '../pages/Landing/LandingPage';
import { LoginPage } from '../pages/Login/LoginPage';
import { RegisterPage } from '../pages/Register/RegisterPage';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { AptitudePage } from '../pages/Aptitude/AptitudePage';
import { CodingPage } from '../pages/Coding/CodingPage';
import { AIStudyAssistantPage } from '../pages/AIStudyAssistant/AIStudyAssistantPage';
import { ResourcesPage } from '../pages/Resources/ResourcesPage';
import { ProgressPage } from '../pages/Progress/ProgressPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages with PublicLayout (Navbar & Footer) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
      </Route>

      {/* Protected Student Portal with AppLayout (Sidebar & DashboardHeader) */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aptitude" element={<AptitudePage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/ai-assistant" element={<AIStudyAssistantPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Route>

      {/* Fallback 404 Route */}
      <Route
        path="*"
        element={
          <PublicLayout>
            <NotFoundPage />
          </PublicLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
