/**
 * Reusable Button Component
 * Provides consistent styling across the application with variant and size options.
 * Includes hover animations and proper accessibility attributes.
 */

import React from 'react';
import type { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ariaLabel,
}) => {
  // Base styles include transition effects for smooth hover interactions
  const baseStyles = `
    font-heading font-semibold 
    transition-all duration-300 
    rounded-md shadow-lg 
    hover:shadow-xl 
    transform hover:-translate-y-0.5 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;
  
  // Variant styles define the visual appearance
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-dark-900 focus:ring-primary-500',
    secondary: 'bg-white hover:bg-gray-50 text-dark-900 border border-gray-200 focus:ring-gray-300',
  };
  
  // Size variants for different button contexts
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
