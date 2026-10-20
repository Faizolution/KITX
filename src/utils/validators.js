/**
 * Form and Input Validation Utilities
 */

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Email address is required.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address.';
  }
  return null;
};

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required.';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter.';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one digit.';
  }
  return null;
};

export const validateRollNumber = (rollNumber) => {
  if (!rollNumber || !rollNumber.trim()) {
    return 'College roll number is required.';
  }
  if (rollNumber.trim().length < 4) {
    return 'Please enter a valid college roll number.';
  }
  return null;
};

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Full name is required.';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters.';
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone) return null; // Optional
  const cleaned = phone.replace(/[\s-]/g, '');
  if (!/^\+?[0-9]{10,13}$/.test(cleaned)) {
    return 'Please enter a valid 10-digit mobile number.';
  }
  return null;
};

export const validateCGPA = (cgpa) => {
  if (cgpa === '' || cgpa === null || cgpa === undefined) return null; // Optional
  const num = parseFloat(cgpa);
  if (isNaN(num) || num < 0 || num > 10) {
    return 'CGPA must be a number between 0.0 and 10.0';
  }
  return null;
};
