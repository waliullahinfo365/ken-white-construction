import React from 'react';
import { HeroContent } from './HeroContent';
import { QuoteForm } from './QuoteForm';

export const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex items-center"
      aria-label="Hero section with quote request form"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/msgsndr/J6iFcHn18wGFyAEp7mqg/media/67fd211711cc716fa04b2a49.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-dark-900/60" />
      </div>

      <div className="absolute inset-0 z-[-1] bg-dark-900" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <HeroContent />
          <div className="flex justify-center lg:justify-end">
            <QuoteForm />
          </div>
        </div>
      </div>

      <div 
        className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10"
        style={{ bottom: 0 }}
        aria-hidden="true"
      >
        <img
          src="/images/scroll-indicator.webp"
          alt=""
          className="h-10 sm:h-12 md:h-20 object-contain"
        />
      </div>
    </section>
  );
};
