/**
 * Footer Component
 * Main footer combining map section and footer content.
 * Provides location information and site navigation.
 */

import React from 'react';
import { MapSection } from './MapSection';
import { FooterContent } from './FooterContent';

export const Footer: React.FC = () => {
  return (
    <footer>
      {/* Google Maps embed with business info overlay */}
      <MapSection />
      
      {/* Footer content with links and social media */}
      <FooterContent />
    </footer>
  );
};
