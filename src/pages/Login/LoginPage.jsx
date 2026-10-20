import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ArrowRight, KeyRound } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { validateEmail } from '../../utils/validators';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { Card, CardContent } from '../../components/common/Card';
import { INSTITUTION } from '../../utils/constants';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  const from = location.state?.from?.pathname || '/dashboard';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (serverError) setServerError('');
  };

  const handleValidation = () => {
    const newErrors = {};
    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    try {
      setServerError('');
      await login(formData);
      navigate(from, { replace: true });
    } catch (err) {
      setServerError(
        err.message || 'Unable to sign in. Please verify your credentials and try again.'
      );
    }
  };

  const fillDemoAccount = () => {
    setFormData({
      email: 'faiz@kitps.ac.in',
      password: 'DemoPassword123!',
    });
    setErrors({});
    setServerError('');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-white font-black text-xl shadow-xs group-hover:bg-brand-600 transition-colors">
              K
            </div>
            <span className="font-extrabold text-2xl text-slate-900 tracking-tight font-sans">
              KIT<span className="text-brand-600">X</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Student Sign In
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Enter your credentials to access your {INSTITUTION.shortName} placement dashboard.
          </p>
        </div>

        {/* Card */}
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-6 sm:p-8">
            {serverError && (
              <ErrorMessage
                title="Authentication Failed"
                message={serverError}
                className="mb-5"
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <Input
                label="Student Email Address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="rollnumber@kitps.ac.in"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                leftIcon={Mail}
              />

              <div>
                <Input
                  label="Password"
                  id="password"
                  name="password"
                  isPassword
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  leftIcon={Lock}
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span>Remember roll number</span>
                </label>
                <span className="text-slate-400 cursor-not-allowed text-[11px]" title="Contact Aman / Admin to reset">
                  Forgot password?
                </span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="md"
                  isLoading={isLoading}
                  rightIcon={ArrowRight}
                >
                  Sign In to Dashboard
                </Button>
              </div>
            </form>

            {/* Quick Demo Fill Helper */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={fillDemoAccount}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              >
                <KeyRound className="w-3.5 h-3.5 text-brand-600" />
                <span>Fill Demo Student Credentials</span>
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-1.5">
                Automatically uses development preview mode if Aman's backend is not running locally.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-600">
          Not yet registered for KITX?{' '}
          <Link
            to="/register"
            className="font-semibold text-brand-600 hover:text-brand-700 underline underline-offset-2"
          >
            Create your account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
