/**
 * Why Choose Us Section Component
 * Showcases trust points, special offers, and CTAs.
 * Features side-by-side layout with images and content.
 */

import React from 'react';
import { Check, Phone } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { OfferBadge } from './OfferBadge';
import { Button } from '../UI/Button';

/** Trust points highlighting company strengths */
const TRUST_POINTS = [
  '54 Years Of Industry Experience',
  'Licensed, Insured & Safety-Focused',
  'Family-Owned & Operated Since 1968',
] as const;

export const WhyChooseUsSection: React.FC = () => {
  const handleConsultationClick = () => {
    // Smooth scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="bg-gray-50 py-16 md:py-20 lg:py-24"
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Gallery */}
          <div>
            <ImageGallery />
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Section heading */}
            <h2
              id="why-choose-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-dark-900 mb-6 italic leading-tight"
            >
              <span className="text-black">EvoBlocs </span>'s Most Trusted
              <br />
              <span className="italic">Construction Expert</span>
            </h2>

            {/* Trust points with animated checkmarks */}
            <div className="space-y-4 mb-8">
              {TRUST_POINTS.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-3 group"
                  style={{
                    animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Checkmark icon with hover effect */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-900 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} aria-hidden="true" />
                  </div>
                  <p className="text-lg md:text-xl font-heading font-bold text-dark-900 italic pt-1">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Special offer badge */}
            <div className="mb-8">
              <OfferBadge />
            </div>

       <div className="flex flex-col sm:flex-row items-stretch gap-1">
  {/* Primary CTA */}
  <Button
    variant="primary"
    size="lg"
    className="uppercase tracking-wide py-4 px-6"
    onClick={handleConsultationClick}
  >
    Schedule Your Consultation
  </Button>

  {/* Secondary CTA */}
  <a
    href="tel:+16138395460"
    className="flex items-center justify-center gap-3 text-dark-900 font-heading font-bold px-6 py-4 rounded-lg text-lg"
  >
    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
      <Phone className="w-6 h-6 text-black fill-black" />
    </div>
    <div className="text-left">
      <p className="text-xs uppercase tracking-wide text-black">Call Now</p>
      <p className="font-bold">+1 (613) 839-5460</p>
    </div>
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};
