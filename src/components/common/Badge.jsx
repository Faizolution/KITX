import React from 'react';

const BADGE_VARIANTS = {
  brand: 'bg-brand-50 text-brand-700 border-brand-200/80',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  danger: 'bg-rose-50 text-rose-700 border-rose-200',
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  info: 'bg-sky-50 text-sky-700 border-sky-200',
};

const BADGE_SIZES = {
  sm: 'text-[11px] px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
};

export const Badge = ({
  children,
  variant = 'brand',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const variantClasses = BADGE_VARIANTS[variant] || BADGE_VARIANTS.brand;
  const sizeClasses = BADGE_SIZES[size] || BADGE_SIZES.md;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'success'
              ? 'bg-emerald-500'
              : variant === 'warning'
              ? 'bg-amber-500'
              : variant === 'danger'
              ? 'bg-rose-500'
              : 'bg-brand-500'
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
