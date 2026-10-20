import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { BrainCircuit, Code2, Bot, BookOpen, ArrowUpRight } from 'lucide-react';

const ACTIONS = [
  {
    title: 'Aptitude Tests',
    description: 'Solve TCS, Infosys & Wipro pattern quantitative & logical tests',
    link: '/aptitude',
    icon: BrainCircuit,
    color: 'bg-indigo-50 text-indigo-600',
    lead: 'Divyanshi',
  },
  {
    title: 'Coding Arena',
    description: 'Practice curated DSA questions with multiple language compilers',
    link: '/coding',
    icon: Code2,
    color: 'bg-sky-50 text-sky-600',
    lead: 'Anjali',
  },
  {
    title: 'AI Mock Drill',
    description: 'Simulate technical and HR interviews with real-time feedback',
    link: '/ai-assistant',
    icon: Bot,
    color: 'bg-purple-50 text-purple-600',
    lead: 'Ishika',
  },
  {
    title: 'Placement Notes',
    description: 'Quick revision sheets for OS, DBMS, Computer Networks & System Design',
    link: '/resources',
    icon: BookOpen,
    color: 'bg-emerald-50 text-emerald-600',
    lead: 'Kritika',
  },
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <Link key={action.title} to={action.link} className="block group">
            <Card hover className="p-5 h-full flex flex-col justify-between border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${action.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-brand-600 flex items-center gap-0.5 transition-colors">
                    {action.lead} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {action.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {action.description}
                </p>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickActions;
