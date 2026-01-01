/**
 * Footer Content Component
 * Three-column footer with company info, quick links, and social media.
 * Includes copyright notice at the bottom.
 */

import React from 'react';
import { Facebook, Instagram, Linkedin, Hammer } from 'lucide-react';

export const FooterContent: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <div className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo placeholder */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <Hammer className="w-7 h-7 text-dark-900" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold">Ken White</p>
                <p className="font-heading text-sm text-primary-500 uppercase tracking-wider">
                  Construction
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving Ottawa and the Valley with excellence in construction for
              over 54 years. Your trusted partner for all excavation, demolition,
              and land clearing needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-2">+1 (613) 839-5460</p>
            <p className="text-gray-400 text-sm mb-4">admin@kwconstruction.ca</p>

            {/* Social media icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ken White Construction Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
