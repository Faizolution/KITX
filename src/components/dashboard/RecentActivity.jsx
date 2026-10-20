import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../common/Card';
import { Badge } from '../common/Badge';
import { EmptyState } from '../common/EmptyState';
import { formatRelativeTime } from '../../utils/formatters';
import { History, BrainCircuit, Code2, Bot, BookOpen } from 'lucide-react';

const CATEGORY_ICONS = {
  Aptitude: BrainCircuit,
  Coding: Code2,
  'AI Assistant': Bot,
  Resources: BookOpen,
};

const CATEGORY_BADGE_VARIANTS = {
  Aptitude: 'brand',
  Coding: 'info',
  'AI Assistant': 'warning',
  Resources: 'neutral',
};

export const RecentActivity = ({
  activities = [],
  title = 'Recent Practice Activity',
  description = 'Your latest completed quizzes, challenges, and mock interview sessions',
  className = '',
}) => {
  const hasActivities = activities && activities.length > 0;

  return (
    <Card className={className}>
      <CardHeader>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {!hasActivities ? (
          <div className="p-6">
            <EmptyState
              icon={History}
              title="No recent activity"
              description="Your practice runs and submissions will show up here once you begin practicing."
            />
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {activities.map((act) => {
              const Icon = CATEGORY_ICONS[act.category] || History;
              const badgeVariant = CATEGORY_BADGE_VARIANTS[act.category] || 'neutral';

              return (
                <li
                  key={act.id}
                  className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                        {act.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge variant={badgeVariant} size="sm">
                          {act.category}
                        </Badge>
                        <span className="text-[11px] text-slate-400">
                          {formatRelativeTime(act.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-block text-xs font-semibold text-slate-800">
                      {act.score}
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      {act.status}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
