/**
 * Hero Content Component
 * Left side of the hero section with main headline, value propositions,
 * and trust indicators matching original Ken White Construction design.
 */

import React from 'react';
import { CheckCircle2, Phone } from 'lucide-react';



/** Bullet points for services */
const BULLET_POINTS = [
  'Integrated Residential & Commercial Construction Services',
  'From Excavation to Septic Systems - We Handle It All',
  'Trusted by Ottawa & the Valley for Over 50 Years',
] as const;

export const HeroContent: React.FC = () => {
  return (
    <div className="text-white">
      {/* 5-star rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-primary-500 text-xl">★</span>
        ))}
      </div>

      {/* Main headline - italic style matching original */}
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 italic uppercase">
        Expert Construction
        <br />
        Services in Ottawa -
        <br />
        54 Years of Excellence
      </h1>

      {/* Bullet points with checkmarks */}
    <ul className="space-y-4 mb-8">
  {BULLET_POINTS.map((point) => (
    <li key={point} className="flex items-start gap-4">
      <CheckCircle2
        className="w-6 h-6 mt-1"
        stroke="black"
        fill="white"
        aria-hidden="true"
      />
      <span className="text-white italic font-bold text-2xl leading-snug">
        {point}
      </span>
    </li>
  ))}
</ul>


     {/* Trust badges as single image */}
<div className="mb-8">
  <img
    src="/images/trust-badges.webp"
    alt="Trusted by Google, Yelp, and Google My Business"
    className="h-10 md:h-14 object-contain"
  />
</div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Schedule Consultation button */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary-500 hover:bg-primary-600 text-dark-900 font-heading font-bold px-6 py-3 rounded uppercase tracking-wide transition-colors"
        >
          Schedule Your Consultation
        </button>

        {/* Call Now button */}
        <a
          href="tel:+16138395460"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
            <Phone className="w-5 h-5" stroke="black" fill="black" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold  uppercase">Call Now</p>
            <p className="text-white font-semibold">+1 (613) 839-5460</p>
          </div>
        </a>
      </div>
    </div>
  );
};
