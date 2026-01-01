/**
 * Testimonials Carousel Component
 * Auto-playing carousel displaying customer reviews from Google.
 * Features responsive items per view and navigation controls.
 */

import React, { useState, useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';
import { testimonialsData } from '../../data/testimonialsData';
import { useCarousel } from '../../hooks/useCarousel';

export const TestimonialsCarousel: React.FC = () => {
  // Responsive items per view - 1 on mobile, 2 on tablet+
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { currentIndex, goToSlide, maxIndex } = useCarousel({
    totalItems: testimonialsData.length,
    itemsPerView,
    autoPlayInterval: 6000,
  });

  // Get currently visible testimonials based on carousel position
  const visibleTestimonials = testimonialsData.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <section
      className="bg-gray-100 py-16 md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section heading - visually hidden but accessible */}
        <h2 id="testimonials-heading" className="sr-only">
          Customer Testimonials
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Google Reviews Badge - Left side */}
          <div className="lg:col-span-4">
            <GoogleReviewsBadge />
          </div>

          {/* Testimonials Carousel - Right side */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Testimonials grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {visibleTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Simple pagination dots - centered below entire section */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-800'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
