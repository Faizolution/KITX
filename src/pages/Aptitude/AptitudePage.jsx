import React from 'react';
import { BrainCircuit, Clock, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';

export const AptitudePage = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader
        title="Quantitative, Logical & Verbal Aptitude"
        description="Comprehensive diagnostic assessments and timed quizzes modeled after TCS NQT, Infosys, and Wipro recruitment patterns."
        badge={
          <Badge variant="brand" size="md">
            Module Lead: Divyanshi
          </Badge>
        }
      />

      {/* Integration Callout */}
      <div className="bg-brand-50/70 border border-brand-200 rounded-xl p-5 text-sm text-brand-900">
        <div className="flex items-start gap-3">
          <BrainCircuit className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-brand-950">
              Aptitude Engine Integration Ready
            </h4>
            <p className="text-xs text-brand-800 leading-relaxed">
              This space is reserved for <strong>Divyanshi</strong> to integrate question banks, topic-wise practice sets (Number System, Percentages, Syllogisms, Coding-Decoding), live timers, and score reports.
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Test Categories Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Quantitative Aptitude</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Time & Work, Speed & Distance, Probability, Permutations, Data Sufficiency.
          </p>
          <Badge variant="neutral" size="sm">12 Practice Sets Planned</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Logical Reasoning</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Blood Relations, Seating Arrangements, Coding-Decoding, Series Completion.
          </p>
          <Badge variant="neutral" size="sm">10 Practice Sets Planned</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Verbal & Reading</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Sentence Correction, Reading Comprehension, Synonyms, Para Jumbles.
          </p>
          <Badge variant="neutral" size="sm">8 Practice Sets Planned</Badge>
        </Card>
      </div>
    </div>
  );
};

export default AptitudePage;
