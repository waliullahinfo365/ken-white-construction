/**
 * Reusable Input Component
 * Provides consistent form field styling with built-in error state handling.
 * Includes proper accessibility attributes and visual feedback.
 */

import React from 'react';
import type { InputProps } from '../../types';

export const Input: React.FC<InputProps> = ({
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  ariaLabel,
}) => {
  // Determine border color based on error state
  const borderClass = error 
    ? 'border-red-500 focus:ring-red-500' 
    : 'border-gray-300 focus:ring-primary-500';

  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-label={ariaLabel || placeholder.replace('*', '').trim()}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`
          w-full px-4 py-3 
          border rounded-md 
          focus:outline-none focus:ring-2 
          transition-colors duration-200
          placeholder:text-gray-400
          ${borderClass}
        `}
      />
      {/* Error message with accessible announcement */}
      {error && (
        <p 
          id={`${name}-error`}
          className="text-red-500 text-sm mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
