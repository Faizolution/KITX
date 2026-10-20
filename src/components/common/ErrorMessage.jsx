import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export const ErrorMessage = ({
  title = 'Failed to load data',
  message,
  onRetry,
  className = '',
}) => {
  return (
    <div
      role="alert"
      className={`rounded-xl border border-rose-200 bg-rose-50/60 p-4 text-rose-900 ${className}`}
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        <div className="flex-1">
          {title && <h4 className="text-sm font-semibold text-rose-900 mb-0.5">{title}</h4>}
          <p className="text-xs text-rose-700 leading-relaxed">
            {message || 'An unexpected error occurred. Please try again or check back later.'}
          </p>
          {onRetry && (
            <div className="mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={onRetry}
                leftIcon={RefreshCw}
                className="bg-white border-rose-300 text-rose-700 hover:bg-rose-50 text-xs"
              >
                Retry Request
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
