import React from 'react';
import { LineChart, Trophy, Award, Target } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';

export const ProgressPage = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader
        title="Student Progress & Readiness Analytics"
        description="Comprehensive placement readiness index, mock test score distributions, and peer benchmarking."
        badge={
          <Badge variant="success" size="md">
            Module Lead: Kritika
          </Badge>
        }
      />

      {/* Integration Callout */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 text-sm text-emerald-900">
        <div className="flex items-start gap-3">
          <LineChart className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-emerald-950">
              Analytics & QA Integration Ready
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              This space is reserved for <strong>Kritika</strong> to connect in-depth student progress tracking, test history reports, accuracy heatmaps, time management charts, and quality verification audits.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <Trophy className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Target Company Fit Score</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Comparison of your aptitude and coding scores against criteria for TCS, Infosys, and Cognizant.
          </p>
          <Badge variant="neutral" size="sm">Company Benchmarking</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Weak Area Diagnostic Heatmap</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Pinpoints exact sub-topics requiring revision (e.g. Probability or Graph algorithms).
          </p>
          <Badge variant="neutral" size="sm">Skill Gap Analysis</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Milestone Badges</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Earn verifiable badges for 50+ DSA problems solved, 10 aptitude streaks, and mock interview completion.
          </p>
          <Badge variant="neutral" size="sm">Gamified Milestones</Badge>
        </Card>
      </div>
    </div>
  );
};

export default ProgressPage;
