import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  Code2,
  Bot,
  LineChart,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { INSTITUTION, TEAM_MEMBERS } from '../../utils/constants';

export const LandingPage = () => {
  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-6 shadow-xs animate-in fade-in duration-300">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Kothiwal Institute of Technology and Professional Studies, Moradabad</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
            Master Campus Placements with <span className="text-brand-600">KITX</span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            An integrated, AI-assisted placement training ecosystem tailored for KITPS students.
            Practice quantitative aptitude, solve algorithmic coding challenges, and sharpen technical interview readiness with continuous feedback.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/register" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" rightIcon={ArrowRight} fullWidth className="sm:w-auto">
                Create Student Account
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" fullWidth className="sm:w-auto">
                Sign In to Dashboard
              </Button>
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free for KITPS Students
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Company-Specific Syllabus
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> AI-Powered Practice
            </span>
          </div>
        </div>

        {/* Hero Interactive Preview Card */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-4 shadow-xl shadow-slate-200/50">
          <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
            {/* Window title bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-400 font-mono">
                  kitx.kitps.internal / student-portal
                </span>
              </div>
              <Badge variant="brand" size="sm">
                Live Module Preview
              </Badge>
            </div>

            {/* Dashboard Mock Grid in dark theme preview */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center gap-2 text-brand-400 mb-2">
                  <BrainCircuit className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Aptitude Drill</span>
                </div>
                <div className="text-lg font-bold text-white">TCS NQT & InfyTQ Sets</div>
                <p className="text-xs text-slate-400 mt-1">Quantitative, Logical, Verbal reasoning with step-by-step solutions.</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center gap-2 text-sky-400 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Coding Arena</span>
                </div>
                <div className="text-lg font-bold text-white">Data Structures & Algo</div>
                <p className="text-xs text-slate-400 mt-1">Curated problem lists from Easy to Hard with real-time test case evaluation.</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Bot className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">AI Mock Coach</span>
                </div>
                <div className="text-lg font-bold text-white">Simulated Tech Interviews</div>
                <p className="text-xs text-slate-400 mt-1">Instant analysis of code complexity, edge cases, and technical communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Context Section */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Tailored For Academic & Placement Excellence
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {INSTITUTION.name}, Moradabad
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Supporting undergraduates across Computer Science, Information Technology, AI/ML, Electronics, Mechanical, Civil Engineering, and Computer Applications with targeted training for service and product company recruitment.
          </p>
        </div>
      </section>

      {/* Feature Modules Grid */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="brand" size="md" className="mb-3">
            Core Modules
          </Badge>
          <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
            Everything Required to Clear Campus Hiring
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Each preparation pillar is engineered to address the specific stages of major IT placement drives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card hover className="p-6 border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Quantitative & Logical Aptitude
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Practice timed diagnostic tests covering Time & Work, Permutations, Syllogisms, and Data Interpretation based on current company test patterns.
            </p>
            <div className="text-xs text-brand-600 font-semibold flex items-center gap-1">
              Led by Divyanshi • Assessment Module
            </div>
          </Card>

          {/* Feature 2 */}
          <Card hover className="p-6 border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              DSA & Hands-on Coding Arena
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Write, compile, and debug solutions in C++, Java, or Python. Solve problems structured from Arrays and Strings to Trees, Graphs, and Dynamic Programming.
            </p>
            <div className="text-xs text-sky-600 font-semibold flex items-center gap-1">
              Led by Anjali • Technical Coding
            </div>
          </Card>

          {/* Feature 3 */}
          <Card hover className="p-6 border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              AI Study Assistant & Mock Interviews
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Receive automated conceptual breakdowns, code optimization suggestions, and simulated technical interview questions tailored to your chosen tech stack.
            </p>
            <div className="text-xs text-purple-600 font-semibold flex items-center gap-1">
              Led by Ishika • AI Integration
            </div>
          </Card>

          {/* Feature 4 */}
          <Card hover className="p-6 border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Readiness Tracking & Metrics
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Monitor test scores, problem completion velocity, and topic-wise strengths and weaknesses with transparent dashboard charts.
            </p>
            <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              Led by Kritika • Progress Analytics
            </div>
          </Card>

          {/* Feature 5 */}
          <Card hover className="p-6 border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Curated Core CS & Placement Notes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Concise revision notes for Operating Systems, Database Management Systems (SQL & ACID), Computer Networks, and Object-Oriented Design.
            </p>
            <div className="text-xs text-amber-600 font-semibold flex items-center gap-1">
              Led by Kritika • Knowledge Base
            </div>
          </Card>

          {/* Feature 6 */}
          <Card hover className="p-6 border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Secure Auth & Profile Management
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Personalized student profile tracking branch, graduation year, target recruitment roles, and dream companies to tailor recommendations.
            </p>
            <div className="text-xs text-slate-700 font-semibold flex items-center gap-1">
              Led by Aman & Faiz • Platform Foundation
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="neutral" size="md" className="mb-3">
              Student Journey
            </Badge>
            <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Four Steps to Placement Readiness
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              A structured roadmap from day one to final company interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs relative">
              <span className="text-3xl font-black text-brand-200 block mb-2">01</span>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Sign Up & Setup</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Register with your KITPS college roll number, select your engineering branch and target roles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs relative">
              <span className="text-3xl font-black text-brand-200 block mb-2">02</span>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Diagnose & Practice</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take timed aptitude tests and solve company-pattern DSA challenges in the coding arena.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs relative">
              <span className="text-3xl font-black text-brand-200 block mb-2">03</span>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">AI Interview Drills</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engage with the AI assistant for conceptual clarification, mock Q&A, and resume checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs relative">
              <span className="text-3xl font-black text-brand-200 block mb-2">04</span>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">Track & Excel</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review your placement readiness scores and walk into campus recruitment drives with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team Section */}
      <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="brand" size="md" className="mb-3">
            Project Leadership
          </Badge>
          <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
            Developed by Students, for Students
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            KITX is built collaboratively by a dedicated 6-member engineering team at KITPS Moradabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.name} className="p-5 border-slate-200">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-full bg-navy-900 text-white font-bold flex items-center justify-center text-sm">
                  {member.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{member.name}</h4>
                  <p className="text-xs text-brand-600 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {member.module}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-brand-950 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Begin Your Placement Preparation Today
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Log in to your student dashboard or create a new account to begin your journey toward your dream campus offer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" variant="white" rightIcon={ArrowRight}>
                Get Started Now
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white/10 hover:text-white">
                Already registered? Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
