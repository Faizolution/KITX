import React from 'react';
import { Loader2 } from 'lucide-react';

const SIZES = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-10 h-10',
};

export const LoadingSpinner = ({
  size = 'md',
  message = 'Loading...',
  centered = false,
  className = '',
}) => {
  const sizeClass = SIZES[size] || SIZES.md;

  const content = (
    <div
      className={`inline-flex flex-col items-center justify-center gap-2.5 text-slate-500 ${className}`}
      role="status"
      aria-live="polite"
    >
      <Loader2 className={`${sizeClass} animate-spin text-brand-600`} />
      {message && <span className="text-xs font-medium text-slate-500">{message}</span>}
      <span className="sr-only">Loading</span>
    </div>
  );

  if (centered) {
    return <div className="flex items-center justify-center py-16 w-full">{content}</div>;
  }

  return content;
};

export default LoadingSpinner;
