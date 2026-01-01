/**
 * Ken White Construction - Main Application Component
 * Landing page for Ottawa's premier construction company.
 * Showcases 54 years of excellence in residential and commercial construction.
 */

import React from 'react';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/Hero/HeroSection';
import { ServicesSection } from './components/Services/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUs/WhyChooseUsSection';
import { TestimonialsCarousel } from './components/Testimonials/TestimonialsCarousel';
import { PhotoGallery } from './components/Gallery/PhotoGallery';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content"
        className="
          sr-only focus:not-sr-only 
          focus:absolute focus:top-4 focus:left-4 
          focus:z-[100] focus:bg-primary-500 focus:text-dark-900
          focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold
        "
      >
        Skip to main content
      </a>

      {/* Fixed header with promo banner and navigation */}
      <Header />

      {/* Main content area */}
      <main id="main-content">
        {/* Hero section with quote form */}
        <HeroSection />
        
        {/* Services overview section */}
        <ServicesSection />
        
        {/* Why Choose Us section with trust points and CTAs */}
        <WhyChooseUsSection />
        
        {/* Customer testimonials carousel */}
        <TestimonialsCarousel />
        
        {/* Photo gallery showcasing past projects */}
        <PhotoGallery />
        
        {/* Contact section with form and info */}
        <ContactSection />
      </main>
      
      {/* Footer with map and links */}
      <Footer />
    </div>
  );
};

export default App;
