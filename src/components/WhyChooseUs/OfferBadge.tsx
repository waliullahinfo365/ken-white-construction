/**
 * Offer Badge Component
 * Displays a special limited-time offer with decorative badge styling.
 * Features pulsing animation to draw attention.
 */

import React from 'react';

export const OfferBadge: React.FC = () => {
  return (
    <div className="flex items-center gap-4 p-6 ">
   {/* Badge image */}
      <div className="flex-shrink-0">
        <img
          src="/images/offer-badge.png"
          alt="Special limited-time offer badge"
          className="w-25 h-25 object-contain"
          loading="lazy"
        />
      </div>

      {/* Offer text content */}
      <div>
        <p className="text-dark-900 font-heading font-semibold text-xl mb-1 italic">
          LIMITED-TIME OFFER
        </p>
        <p className="text-dark-900 font-medium text-lg">
          Get $250 Off Your First Service!
        </p>
        <p className="text-gray-600 text-sm italic">(Book before April 30)</p>
      </div>
    </div>
  );
};
