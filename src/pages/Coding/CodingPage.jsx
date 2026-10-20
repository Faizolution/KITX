import React from 'react';
import { Code2, Terminal, Cpu, Play } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';

export const CodingPage = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader
        title="Coding Arena & DSA Practice"
        description="Hands-on coding challenges, test case execution, and technical interview questions."
        badge={
          <Badge variant="info" size="md">
            Module Lead: Anjali
          </Badge>
        }
      />

      {/* Integration Callout */}
      <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-5 text-sm text-sky-900">
        <div className="flex items-start gap-3">
          <Code2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sky-950">
              Coding Workspace Integration Ready
            </h4>
            <p className="text-xs text-sky-800 leading-relaxed">
              This space is reserved for <strong>Anjali</strong> to integrate the code editor (Monaco/CodeMirror), language compilers (C++, Java, Python), test case runner, and company question catalog.
            </p>
          </div>
        </div>
      </div>

      {/* Planned Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
            <Terminal className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Interactive In-browser Code Editor</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Multi-language support for C++, Java, Python, and JavaScript with syntax highlighting.
          </p>
          <Badge variant="neutral" size="sm">Editor Integration</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Automated Test Case Runner</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Real-time evaluation against public and hidden edge test cases with execution time constraints.
          </p>
          <Badge variant="neutral" size="sm">Judge System</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Play className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Curated DSA Sheet</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Top 150 campus interview coding questions categorized by Arrays, Strings, Trees, and DP.
          </p>
          <Badge variant="neutral" size="sm">Problem Archive</Badge>
        </Card>
      </div>
    </div>
  );
};

export default CodingPage;
