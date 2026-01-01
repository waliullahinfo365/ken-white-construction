import React from 'react';

export const PromoBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:flex text-white text-2xl md:text-3xl font-bold">
          <span className="animate-arrow-1">›</span>
          <span className="animate-arrow-2">›</span>
          <span className="animate-arrow-3">›</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xl sm:text-2xl">💰</span>
          <span className="text-white font-heading text-sm sm:text-base md:text-lg font-bold italic uppercase tracking-wide">
            Limited-Time Offer
          </span>
        </div>

        <div className="hidden sm:flex text-white text-2xl md:text-3xl font-bold">
          <span className="rotate-180 animate-arrow-3">›</span>
          <span className="rotate-180 animate-arrow-2">›</span>
          <span className="rotate-180 animate-arrow-1">›</span>
        </div>
      </div>

      <p className="text-white text-sm sm:text-base md:text-lg font-semibold mt-1">
        Get $250 Off Your First Service!{' '}
        <span className="italic font-normal text-xs sm:text-sm md:text-base">(Book Before April 30)</span>
      </p>
    </div>
  );
};
