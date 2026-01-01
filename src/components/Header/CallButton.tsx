/**
 * Call-to-Action Phone Button
 * Prominent button for direct phone contact.
 * Includes phone icon and accessible labeling.
 */

import React from 'react';
import { Phone } from 'lucide-react';

// Company phone number - centralized for easy updates
const PHONE_NUMBER = '613-555-0123';
const PHONE_DISPLAY = '(613) 555-0123';

export const CallButton: React.FC = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="
        hidden md:flex items-center gap-2
        bg-primary-500 hover:bg-primary-600
        text-dark-900 font-heading font-semibold
        px-6 py-3 rounded-md
        transition-all duration-300
        shadow-lg hover:shadow-xl
        transform hover:-translate-y-0.5
      "
      aria-label={`Call Ken White Construction at ${PHONE_DISPLAY}`}
    >
      <Phone className="w-5 h-5" aria-hidden="true" />
      <span>Call Now: {PHONE_DISPLAY}</span>
    </a>
  );
};

/** Mobile-optimized call button for header */
export const MobileCallButton: React.FC = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="
        md:hidden flex items-center justify-center
        bg-primary-500 hover:bg-primary-600
        text-dark-900
        p-3 rounded-full
        transition-all duration-300
        shadow-lg
      "
      aria-label={`Call Ken White Construction at ${PHONE_DISPLAY}`}
    >
      <Phone className="w-6 h-6" aria-hidden="true" />
    </a>
  );
};
