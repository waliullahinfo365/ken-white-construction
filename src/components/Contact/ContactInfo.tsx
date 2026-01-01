/**
 * Contact Info Component
 * Displays all contact methods in a vertical list.
 * Includes location, phone, email, and quote request options.
 */

import React from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { ContactCard } from './ContactCard';
import type { ContactMethod } from '../../types';

export const ContactInfo: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      id: 'location',
      icon: <MapPin className="w-7 h-7 text-dark-900" />,
      label: 'SERVING',
      value: 'OTTAWA & THE VALLEY',
      type: 'location',
    },
    {
      id: 'phone',
      icon: <Phone className="w-7 h-7 text-dark-900" />,
      label: 'CALL NOW',
      value: '+1 (613) 839-5460',
      type: 'phone',
      href: 'tel:+16138395460',
    },
    {
      id: 'email',
      icon: <Mail className="w-7 h-7 text-dark-900" />,
      label: 'EMAIL US',
      value: 'ADMIN@KWCONSTRUCTION.CA',
      type: 'email',
      href: 'mailto:admin@kwconstruction.ca',
    },
    {
      id: 'quote',
      icon: <FileText className="w-7 h-7 text-dark-900" />,
      label: 'REQUEST A FREE QUOTE',
      value: '(GET EXPERT SERVICE WITH A SINGLE CLICK!)',
      type: 'quote',
    },
  ];

  return (
    <div className="space-y-2">
      {contactMethods.map((method) => (
        <ContactCard key={method.id} contact={method} />
      ))}
    </div>
  );
};
