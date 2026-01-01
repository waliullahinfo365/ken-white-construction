/**
 * Services Section Component
 * Displays the main services offered by Ken White Construction.
 * Uses Intersection Observer for scroll-triggered animations.
 */

import React, { useEffect, useRef, useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { servicesData } from '../../data/servicesData';
import { Phone } from 'lucide-react';


export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer triggers animations when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-16 md:py-20 lg:py-24"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
    <div className="w-full text-center mb-12 md:mb-16">
  <h2
    id="services-heading"
    className="font-heading font-bold text-white mb-6 italic leading-tight text-[clamp(1.5rem,4vw,3.5rem)] whitespace-nowrap overflow-x-auto transition-all duration-1000"
  >
    Trusted Expert Construction Services in EvoBlocs & the Valley
  </h2>

  <p
    className={`mx-auto text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-5xl transition-all duration-1000`}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
  </p>
</div>


        {/* Services Grid - responsive 1/2/3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

       {/* Bottom CTA */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 md:mt-16">
  {/* Schedule Consultation button */}
  <button
    className="bg-primary-500 text-dark-900 font-heading font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    aria-label="Schedule Your Consultation"
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
      <p className="text-xs text-white font-semibold uppercase">Call Now</p>
      <p className="text-white font-semibold">+1 (613) 839-5460</p>
    </div>
  </a>
</div>

      </div>
    </section>
  );
};
