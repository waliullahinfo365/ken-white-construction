/**
 * Scroll Indicator Component
 * Animated chevrons that draw attention to content below.
 * Uses a bounce animation to encourage scrolling.
 */

import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center py-8 animate-bounce"
      aria-hidden="true"
    >
      {/* Stacked chevrons create a visual "scroll down" indicator */}
      <ChevronDown className="w-8 h-8 text-primary-500" strokeWidth={3} />
      <ChevronDown className="w-8 h-8 text-primary-500 -mt-4" strokeWidth={3} />
      <ChevronDown className="w-8 h-8 text-primary-500 -mt-4" strokeWidth={3} />
      <ChevronDown className="w-8 h-8 text-primary-500 -mt-4" strokeWidth={3} />
    </div>
  );
};
