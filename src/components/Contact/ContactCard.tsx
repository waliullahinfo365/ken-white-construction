/**
 * Contact Card Component
 * Displays a single contact method with icon, label, and value.
 * Supports clickable links for phone and email.
 */

import React from 'react';
import type { ContactMethod } from '../../types';

interface ContactCardProps {
  contact: ContactMethod;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const content = (
    <>
      {/* Icon container */}
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center">
        {contact.icon}
      </div>

      {/* Text content */}
      <div className="flex-1">
        <p className="text-dark-900 font-heading font-bold text-sm uppercase tracking-wide mb-1 italic">
          {contact.label}
        </p>
        <p className="text-dark-900 font-medium text-lg">{contact.value}</p>
        {contact.subtext && (
          <p className="text-gray-600 text-sm mt-1">{contact.subtext}</p>
        )}
      </div>
    </>
  );

  // Render as link if href is provided
  if (contact.href) {
    return (
      <a
        href={contact.href}
        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
      >
        {content}
      </a>
    );
  }

  // Render as static div otherwise
  return <div className="flex items-center gap-4 p-4 rounded-lg">{content}</div>;
};
