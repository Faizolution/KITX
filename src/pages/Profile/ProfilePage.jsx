import React, { useState, useEffect } from 'react';
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Save,
  X,
  CheckCircle2,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { userService } from '../../services/userService';
import { PageHeader } from '../../components/common/PageHeader';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { FormSelect } from '../../components/forms/FormSelect';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { validateName, validateEmail, validatePhone, validateCGPA } from '../../utils/validators';
import { getInitials } from '../../utils/formatters';
import {
  BRANCHES,
  GRADUATION_YEARS,
  SEMESTERS,
  TARGET_ROLES,
  PROGRAMMING_LANGUAGES,
  INSTITUTION,
} from '../../utils/constants';

export const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const loadProfile = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await userService.getProfile();
      setProfile(data);
      setFormData(data);
    } catch (err) {
      setError(err.message || 'Failed to load student profile.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (successMessage) setSuccessMessage('');
  };

  const handleArrayToggle = (field, item) => {
    setFormData((prev) => {
      const currentList = prev[field] || [];
      const exists = currentList.includes(item);
      return {
        ...prev,
        [field]: exists
          ? currentList.filter((i) => i !== item)
          : [...currentList, item],
      };
    });
    if (successMessage) setSuccessMessage('');
  };

  const validateForm = () => {
    const errs = {};
    const nameErr = validateName(formData.name);
    if (nameErr) errs.name = nameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) errs.email = emailErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) errs.phone = phoneErr;

    const cgpaErr = validateCGPA(formData.cgpa);
    if (cgpaErr) errs.cgpa = cgpaErr;

    setValidationErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSaving(true);
    setError(null);
    setSuccessMessage('');

    try {
      const updated = await userService.updateProfile(formData);
      setProfile(updated);
      setFormData(updated);
      updateUser({
        name: updated.name,
        branch: updated.branch,
        graduationYear: updated.graduationYear,
        rollNumber: updated.rollNumber,
      });
      setIsEditing(false);
      setSuccessMessage('Profile details updated successfully!');
      setTimeout(() => setSuccessMessage(''), 4000);
    } catch (err) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
    setValidationErrors({});
    setError(null);
  };

  if (isLoading && !profile) {
    return <LoadingSpinner centered size="lg" message="Loading student profile..." />;
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      <PageHeader
        title="Student Profile"
        description="Manage your academic credentials, contact information, and placement preferences."
        badge={
          <Badge variant="brand" size="md">
            {profile?.branch || 'Engineering'}
          </Badge>
        }
        actions={
          !isEditing ? (
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile Details
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
                disabled={isSaving}
                leftIcon={X}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleSave}
                isLoading={isSaving}
                leftIcon={Save}
              >
                Save Changes
              </Button>
            </div>
          )
        }
      />

      {/* Success Notification */}
      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <ErrorMessage
          title="Profile Update Error"
          message={error}
          onRetry={loadProfile}
        />
      )}

      {/* Profile Overview Banner */}
      <Card className="p-6 border-slate-200">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-2xl bg-navy-900 text-white font-extrabold text-2xl flex items-center justify-center ring-4 ring-slate-100 shadow-md shrink-0">
            {getInitials(profile?.name || user?.name)}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {profile?.name}
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Roll No: <span className="text-slate-800 font-bold">{profile?.rollNumber}</span> • {profile?.branch}
                </p>
              </div>
              <Badge variant="success" size="md">
                Active Student
              </Badge>
            </div>
            <p className="text-xs text-slate-600 pt-1 leading-relaxed">
              {profile?.bio || 'No student bio provided yet.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
                {INSTITUTION.shortName} Moradabad
              </span>
              <span>•</span>
              <span>Class of {profile?.graduationYear}</span>
              <span>•</span>
              <span className="font-semibold text-slate-700">CGPA: {profile?.cgpa || 'N/A'}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Profile Form Details */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Basic & Contact Info */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>1. Personal & Contact Information</CardTitle>
              <p className="text-xs text-slate-500">
                Primary contact details used for placement notifications and drive updates.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                id="name"
                name="name"
                disabled={!isEditing}
                required
                value={formData?.name || ''}
                onChange={handleChange}
                error={validationErrors.name}
                leftIcon={User}
              />

              <Input
                label="Email Address"
                id="email"
                name="email"
                type="email"
                disabled={!isEditing}
                required
                value={formData?.email || ''}
                onChange={handleChange}
                error={validationErrors.email}
                leftIcon={Mail}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Mobile Number"
                id="phone"
                name="phone"
                disabled={!isEditing}
                placeholder="+91 98765 43210"
                value={formData?.phone || ''}
                onChange={handleChange}
                error={validationErrors.phone}
                leftIcon={Phone}
              />

              <Input
                label="College Roll Number"
                id="rollNumber"
                name="rollNumber"
                disabled={true} // Roll number is authoritative and immutable
                value={formData?.rollNumber || ''}
                helperText="College roll number is verified and cannot be changed directly."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                About / Brief Bio
              </label>
              <textarea
                name="bio"
                rows={3}
                disabled={!isEditing}
                value={formData?.bio || ''}
                onChange={handleChange}
                placeholder="Write a brief intro highlighting your technical passion and projects..."
                className={`w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none ${
                  isEditing
                    ? 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                    : 'bg-slate-50 border-slate-200 cursor-not-allowed text-slate-600'
                }`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Academic Details */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>2. Academic Information</CardTitle>
              <p className="text-xs text-slate-500">
                Academic progress tracked against company eligibility criteria (e.g. 60%+ / 6.5+ CGPA criteria).
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormSelect
                label="Department / Branch"
                id="branch"
                name="branch"
                disabled={!isEditing}
                options={BRANCHES}
                value={formData?.branch || ''}
                onChange={handleChange}
              />

              <FormSelect
                label="Current Semester"
                id="semester"
                name="semester"
                disabled={!isEditing}
                options={SEMESTERS}
                value={formData?.semester || ''}
                onChange={handleChange}
              />

              <FormSelect
                label="Graduation Year"
                id="graduationYear"
                name="graduationYear"
                disabled={!isEditing}
                options={GRADUATION_YEARS}
                value={formData?.graduationYear || ''}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Current Aggregate CGPA (Scale of 10.0)"
                id="cgpa"
                name="cgpa"
                disabled={!isEditing}
                placeholder="e.g. 8.4"
                value={formData?.cgpa || ''}
                onChange={handleChange}
                error={validationErrors.cgpa}
                helperText="Must match your official AKTU / KITPS grade card."
              />

              <Input
                label="Internship / Work Experience"
                id="internshipStatus"
                name="internshipStatus"
                disabled={!isEditing}
                placeholder="e.g. 2-month summer intern in React & Node.js"
                value={formData?.internshipStatus || ''}
                onChange={handleChange}
              />
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Placement Preferences & Skillset */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>3. Placement Goals & Technical Preferences</CardTitle>
              <p className="text-xs text-slate-500">
                Helps KITX tailor test recommendations and AI mock questions to your goals.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Preferred Languages */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Primary Programming Languages
              </label>
              <div className="flex flex-wrap gap-2">
                {PROGRAMMING_LANGUAGES.map((lang) => {
                  const selected = (formData?.preferredLanguages || []).includes(lang);
                  return (
                    <button
                      key={lang}
                      type="button"
                      disabled={!isEditing}
                      onClick={() => handleArrayToggle('preferredLanguages', lang)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        selected
                          ? 'bg-brand-50 border-brand-500 text-brand-700 font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Roles */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Target Placement Roles
              </label>
              <div className="flex flex-wrap gap-2">
                {TARGET_ROLES.map((role) => {
                  const selected = (formData?.targetRoles || []).includes(role);
                  return (
                    <button
                      key={role}
                      type="button"
                      disabled={!isEditing}
                      onClick={() => handleArrayToggle('targetRoles', role)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        selected
                          ? 'bg-brand-50 border-brand-500 text-brand-700 font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {role}
                    </button>
                  );
                })}
              </div>
            </div>

            <Input
              label="Target / Dream Companies"
              id="dreamCompanies"
              name="dreamCompanies"
              disabled={!isEditing}
              placeholder="e.g. TCS, Infosys, Wipro, Accenture, Amazon, Cognizant"
              value={formData?.dreamCompanies || ''}
              onChange={handleChange}
              helperText="Separate multiple companies with commas."
            />
          </CardContent>

          {isEditing && (
            <CardFooter>
              <p className="text-xs text-slate-500">
                Remember to save your changes to persist your placement preferences.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCancel}
                  disabled={isSaving}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  isLoading={isSaving}
                  leftIcon={Save}
                >
                  Save Profile
                </Button>
              </div>
            </CardFooter>
          )}
        </Card>
      </form>
    </div>
  );
};

export default ProfilePage;
