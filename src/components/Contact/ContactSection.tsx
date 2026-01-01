/**
 * Contact Section Component
 * Main contact section with info on left and form on right.
 * Provides multiple ways for customers to get in touch.
 */

import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section
      className="bg-gray-50 py-16 md:py-20"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-3 italic"
            >
              Let's Get Started -
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-10 italic">
              Contact Us Today!
            </h3>

            <ContactInfo />
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
