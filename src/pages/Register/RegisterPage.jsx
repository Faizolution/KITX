import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Hash,
  ArrowRight,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import {
  validateEmail,
  validatePassword,
  validateName,
  validateRollNumber,
} from '../../utils/validators';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { FormSelect } from '../../components/forms/FormSelect';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { Card, CardContent } from '../../components/common/Card';
import { BRANCHES, GRADUATION_YEARS, INSTITUTION } from '../../utils/constants';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    branch: '',
    graduationYear: '2025',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

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

    const nameErr = validateName(formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const rollErr = validateRollNumber(formData.rollNumber);
    if (rollErr) newErrors.rollNumber = rollErr;

    if (!formData.branch) {
      newErrors.branch = 'Please select your engineering or academic branch.';
    }

    const passwordErr = validatePassword(formData.password);
    if (passwordErr) newErrors.password = passwordErr;

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    try {
      setServerError('');
      await register({
        name: formData.name.trim(),
        email: formData.email.trim(),
        rollNumber: formData.rollNumber.trim(),
        branch: formData.branch,
        graduationYear: formData.graduationYear,
        password: formData.password,
      });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setServerError(
        err.message || 'Registration failed. Please check your information and try again.'
      );
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-6">
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
            Student Registration
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Create your account for the {INSTITUTION.shortName} Placement Platform.
          </p>
        </div>

        {/* Card */}
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-6 sm:p-8">
            {serverError && (
              <ErrorMessage
                title="Registration Issue"
                message={serverError}
                className="mb-5"
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <Input
                label="Full Name"
                id="name"
                name="name"
                required
                placeholder="e.g. Faiz Ahmad"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                leftIcon={User}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="College Roll Number"
                  id="rollNumber"
                  name="rollNumber"
                  required
                  placeholder="e.g. 2101640100045"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  error={errors.rollNumber}
                  leftIcon={Hash}
                />

                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="student@kitps.ac.in"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  leftIcon={Mail}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormSelect
                  label="Branch / Department"
                  id="branch"
                  name="branch"
                  required
                  placeholder="Select branch"
                  options={BRANCHES}
                  value={formData.branch}
                  onChange={handleChange}
                  error={errors.branch}
                />

                <FormSelect
                  label="Graduation Year"
                  id="graduationYear"
                  name="graduationYear"
                  required
                  options={GRADUATION_YEARS}
                  value={formData.graduationYear}
                  onChange={handleChange}
                />
              </div>

              <Input
                label="Create Password"
                id="password"
                name="password"
                isPassword
                required
                placeholder="At least 8 chars, 1 uppercase, 1 number"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                leftIcon={Lock}
                helperText="Must be minimum 8 characters with numbers and uppercase letters."
              />

              <Input
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                isPassword
                required
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                leftIcon={Lock}
              />

              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="md"
                  isLoading={isLoading}
                  rightIcon={ArrowRight}
                >
                  Create Student Account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-600">
          Already registered on KITX?{' '}
          <Link
            to="/login"
            className="font-semibold text-brand-600 hover:text-brand-700 underline underline-offset-2"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
