import React from 'react';
import { Loader2 } from 'lucide-react';

const VARIANTS = {
  primary:
    'bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white shadow-sm border border-transparent focus-visible:ring-brand-500',
  secondary:
    'bg-navy-900 hover:bg-navy-800 active:bg-navy-950 text-white shadow-sm border border-transparent focus-visible:ring-navy-700',
  outline:
    'bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 border border-slate-300 shadow-sm focus-visible:ring-brand-500',
  ghost:
    'bg-transparent hover:bg-slate-100 active:bg-slate-200 text-slate-600 hover:text-slate-900 border border-transparent focus-visible:ring-brand-500',
  danger:
    'bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white shadow-sm border border-transparent focus-visible:ring-rose-500',
  white:
    'bg-white hover:bg-slate-50 text-brand-700 shadow-sm border border-transparent focus-visible:ring-white',
};

const SIZES = {
  sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5 font-medium',
  md: 'text-sm px-4 py-2 rounded-lg gap-2 font-medium',
  lg: 'text-base px-5 py-2.5 rounded-lg gap-2.5 font-semibold',
};

export const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      fullWidth = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const variantStyle = VARIANTS[variant] || VARIANTS.primary;
    const sizeStyle = SIZES[size] || SIZES.md;
    const widthStyle = fullWidth ? 'w-full' : '';
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={`inline-flex items-center justify-center transition-all duration-150 select-none ${variantStyle} ${sizeStyle} ${widthStyle} ${
          isDisabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''
        } ${className}`}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {!isLoading && RightIcon && <RightIcon className="w-4 h-4 shrink-0" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
