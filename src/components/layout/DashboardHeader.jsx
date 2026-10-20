import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { getInitials } from '../../utils/formatters';

export const DashboardHeader = ({ onMobileMenuToggle }) => {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMobileMenuToggle}
          className="md:hidden text-slate-500 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 focus:outline-none"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
            KITPS Moradabad
          </span>
          <span className="text-xs text-slate-400 hidden lg:inline">
            Placement Prep Portal
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3.5">
        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="View notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-500 ring-2 ring-white" />
          </button>
        </div>

        {/* User Pill / Profile Link */}
        <Link
          to="/profile"
          className="flex items-center gap-2.5 p-1 sm:px-2.5 sm:py-1 rounded-lg hover:bg-slate-100 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
            {getInitials(user?.name)}
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-xs font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">
              {user?.name || 'Student'}
            </span>
            <span className="block text-[10px] text-slate-400">
              {user?.branch || 'KITPS'} • {user?.graduationYear || '2025'}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
