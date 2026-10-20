import React from 'react';
import { BookOpen, FileCheck, Layers } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';

export const ResourcesPage = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader
        title="Learning Resources & Core CS Notes"
        description="Handcrafted study notes, company interview archives, and technical cheat sheets."
        badge={
          <Badge variant="neutral" size="md">
            Module Lead: Kritika
          </Badge>
        }
      />

      {/* Integration Callout */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 text-sm text-emerald-900">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-emerald-950">
              Resource Repository Integration Ready
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              This space is reserved for <strong>Kritika</strong> to organize core engineering subject notes (OS, DBMS, Computer Networks, System Design), company-specific placement patterns, and downloadable revision PDFs.
            </p>
          </div>
        </div>
      </div>

      {/* Planned Resource Archives */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Operating Systems (OS)</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Process Scheduling, Deadlocks, Virtual Memory, Paging, and Thread Synchronization.
          </p>
          <Badge variant="neutral" size="sm">Core Subject</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <FileCheck className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">DBMS & SQL Queries</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            Normalization (1NF-BCNF), Indexing, ACID Properties, Transactions, and Complex Joins.
          </p>
          <Badge variant="neutral" size="sm">Core Subject</Badge>
        </Card>

        <Card hover className="p-5 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Computer Networks (CN)</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
            OSI & TCP/IP stack, DNS, HTTP/HTTPS, Routing Protocols, Sockets, and TCP 3-way Handshake.
          </p>
          <Badge variant="neutral" size="sm">Core Subject</Badge>
        </Card>
      </div>
    </div>
  );
};

export default ResourcesPage;
