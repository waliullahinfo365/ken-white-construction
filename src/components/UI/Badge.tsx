/**
 * Badge Component
 * Displays award or certification badges with optional rotation animation.
 * Used for "Ottawa's Best" and similar recognition displays.
 */

import React from 'react';

interface BadgeProps {
  src: string;
  alt: string;
  className?: string;
  animated?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  src,
  alt,
  className = '',
  animated = true,
}) => {
  return (
    <div 
      className={`
        relative 
        ${animated ? 'animate-spin-slow' : ''} 
        ${className}
      `}
      role="img"
      aria-label={alt}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};
