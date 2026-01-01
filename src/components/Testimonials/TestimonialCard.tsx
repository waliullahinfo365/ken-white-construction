/**
 * Testimonial Card Component
 * Displays an individual customer review with name, rating, and review text.
 * Includes hover effects and a "Read more" link for longer reviews.
 */

import React from 'react';
import type { Testimonial } from '../../types';
import { StarRating } from './StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col">
      {/* Reviewer info header */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-dark-900 mb-1">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">
          {testimonial.reviewCount} reviews
          {testimonial.photoCount && ` · ${testimonial.photoCount} photos`}
        </p>
      </div>

      {/* Star rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} size={18} />
      </div>

      {/* Review text with line clamping for consistent card heights */}
      <p className="text-gray-700 leading-relaxed flex-grow line-clamp-6">
        {testimonial.review}
      </p>


    </article>
  );
};
