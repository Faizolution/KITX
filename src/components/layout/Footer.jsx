import React from 'react';
import { Link } from 'react-router-dom';
import { INSTITUTION, TEAM_MEMBERS } from '../../utils/constants';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 pt-14 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Institution Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-black text-base shadow-xs">
                K
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                KIT<span className="text-brand-400">X</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              AI-Powered Placement Preparation Platform developed specifically for students of{' '}
              <strong className="text-slate-200">{INSTITUTION.name}</strong>, {INSTITUTION.city}.
              Equipping engineers and professional students with adaptive aptitude drills, coding arenas, and AI-driven interview readiness.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Moradabad, Uttar Pradesh, India • Institutional Major Project
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Preparation Modules
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/aptitude" className="hover:text-white transition-colors">
                  Quantitative Aptitude
                </Link>
              </li>
              <li>
                <Link to="/coding" className="hover:text-white transition-colors">
                  DSA & Coding Arena
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="hover:text-white transition-colors">
                  AI Study Assistant & Drills
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Technical Core & Interview Notes
                </Link>
              </li>
              <li>
                <Link to="/progress" className="hover:text-white transition-colors">
                  Readiness Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Team Credits */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Project Engineering Team
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {TEAM_MEMBERS.map((member) => (
                <li key={member.name} className="flex items-baseline justify-between gap-2">
                  <span className="font-medium text-slate-300">{member.name}</span>
                  <span className="text-[11px] text-slate-400 truncate max-w-[140px]">
                    {member.role.replace(' Lead', '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {CURRENT_YEAR} KITX. Developed by Faiz & the KITPS student engineering team.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/login" className="hover:text-slate-300 transition-colors">
              Student Sign In
            </Link>
            <Link to="/register" className="hover:text-slate-300 transition-colors">
              New Registration
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">KITPS Moradabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
