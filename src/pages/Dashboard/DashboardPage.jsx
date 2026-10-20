import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  Code2,
  Bot,
  Target,
  RefreshCw,
  Info,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { dashboardService } from '../../services/dashboardService';
import { PageHeader } from '../../components/common/PageHeader';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/common/Card';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { StatCard } from '../../components/dashboard/StatCard';
import { ProgressChart } from '../../components/dashboard/ProgressChart';
import { RecentActivity } from '../../components/dashboard/RecentActivity';
import { QuickActions } from '../../components/dashboard/QuickActions';

export const DashboardPage = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await dashboardService.getDashboardData();
      setDashboardData(data);
    } catch (err) {
      console.error('[Dashboard] Error loading data:', err);
      setError(err.message || 'Failed to fetch dashboard metrics from server.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const stats = dashboardData?.stats;
  const isDemo = dashboardData?.isDemoData;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Page Header */}
      <PageHeader
        title={`Welcome back, ${user?.name || 'Student'}!`}
        description={`Here is your placement preparation overview for ${user?.branch || 'Engineering'} (${user?.graduationYear || '2025'} Batch).`}
        badge={
          <Badge variant="brand" size="md">
            Placement Prep Active
          </Badge>
        }
        actions={
          <Button
            variant="outline"
            size="sm"
            onClick={fetchDashboardData}
            isLoading={isLoading}
            leftIcon={RefreshCw}
          >
            Refresh
          </Button>
        }
      />

      {/* Development Fixture Notice Banner */}
      {isDemo && (
        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold">Development Fixture Active:</span> Showing local test metrics. Once Aman's Express backend API (`/api/dashboard/summary`) is connected, real student submissions and metrics will populate here automatically.
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && !dashboardData && (
        <LoadingSpinner centered size="lg" message="Loading your placement dashboard..." />
      )}

      {/* Error State */}
      {error && !dashboardData && (
        <ErrorMessage
          title="Could not load dashboard data"
          message={error}
          onRetry={fetchDashboardData}
        />
      )}

      {/* Main Content when loaded */}
      {dashboardData && (
        <>
          {/* Key Metric Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard
              title="Aptitude Tests"
              value={`${stats?.testsCompleted || 0} / ${stats?.testsTotal || 0}`}
              subtitle="Completed syllabus mocks"
              trend="+3 tests this week"
              trendPositive={true}
              icon={BrainCircuit}
              color="brand"
            />

            <StatCard
              title="Coding Problems"
              value={`${stats?.codingProblemsSolved || 0}`}
              subtitle={`Goal: ${stats?.codingGoal || 60} problems`}
              trend="70% of goal achieved"
              trendPositive={true}
              icon={Code2}
              color="emerald"
            />

            <StatCard
              title="AI Mock Sessions"
              value={`${stats?.aiSessionsCount || 0}`}
              subtitle="Technical & HR simulations"
              trend="Last: DBMS & Polymorphism"
              trendPositive={false}
              icon={Bot}
              color="violet"
            />

            <StatCard
              title="Placement Readiness"
              value={`${stats?.overallReadiness || 0}%`}
              subtitle="Based on mock scores & coding"
              trend="Above branch benchmark"
              trendPositive={true}
              icon={Target}
              color="amber"
            />
          </div>

          {/* Quick Action Navigation Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Quick Access Modules
              </h3>
              <span className="text-xs text-slate-400">Jump right into practice</span>
            </div>
            <QuickActions />
          </div>

          {/* Charts and Domain Readiness Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Practice Chart (2 cols) */}
            <div className="lg:col-span-2">
              <ProgressChart data={dashboardData?.weeklyActivity || []} />
            </div>

            {/* Subject Readiness Breakdown Card */}
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div>
                  <CardTitle>Domain Readiness</CardTitle>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Evaluated across core hiring competencies
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {(dashboardData?.domainReadiness || []).map((domain) => (
                  <div key={domain.subject} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-700">{domain.subject}</span>
                      <span className="font-semibold text-slate-900 font-mono">
                        {domain.score}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          domain.score >= 80
                            ? 'bg-emerald-500'
                            : domain.score >= 70
                            ? 'bg-brand-500'
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${domain.score}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Benchmarked for Tier-1 & Tier-2 IT recruitment</span>
                  <Link to="/progress" className="text-brand-600 font-semibold hover:underline">
                    View deep analytics →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity Timeline */}
          <RecentActivity activities={dashboardData?.recentActivities || []} />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
