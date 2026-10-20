import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LayoutDashboard, HelpCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export const NotFoundPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto shadow-sm">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-sm font-bold text-brand-600 uppercase tracking-wider font-mono">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-navy-950 mt-1 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            The page you are looking for does not exist or has been moved within the KITX placement portal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="primary" leftIcon={LayoutDashboard}>
                Return to Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button variant="primary" leftIcon={Home}>
                Go to Homepage
              </Button>
            </Link>
          )}
          <Link to="/">
            <Button variant="outline">
              Back to Portal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
