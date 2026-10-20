import React from 'react';
import { Bot, Sparkles, MessageSquareCode, FileText } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';

export const AIStudyAssistantPage = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader
        title="AI Study Assistant & Mock Interviews"
        description="Generative AI powered assistance for technical doubt resolution, code reviews, and simulated interviews."
        badge={
          <Badge variant="warning" size="md">
            Module Lead: Ishika
          </Badge>
        }
      />

      {/* Integration Callout */}
      <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-5 text-sm text-purple-900">
        <div className="flex items-start gap-3">
          <Bot className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-purple-950">
              AI Module Integration Ready
            </h4>
            <p className="text-xs text-purple-800 leading-relaxed">
              This space is reserved for <strong>Ishika</strong> to integrate conversational AI pipelines, prompt chains for mock technical interviews, code explanation agents, and resume analysis prompts.
            </p>
          </div>
        </div>
      </div>

      {/* Planned AI Capabilities */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
            <MessageSquareCode className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Interactive Tech Mock Interview</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Multi-turn conversation probing your knowledge of OOP, DBMS, OS, and system architecture.
          </p>
          <Badge variant="neutral" size="sm">Mock Simulation</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Code Optimization & Explainer</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Explains time and space complexity ($O(N)$ vs $O(N \log N)$) with step-by-step refactoring tips.
          </p>
          <Badge variant="neutral" size="sm">Complexity Analysis</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Resume & Project Drill</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Extracts project bullet points and generates anticipated interviewer questions and cross-examination.
          </p>
          <Badge variant="neutral" size="sm">Resume Drill</Badge>
        </Card>
      </div>
    </div>
  );
};

export default AIStudyAssistantPage;
