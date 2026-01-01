/**
 * Star Rating Component
 * Displays a visual star rating with filled/unfilled stars.
 * Supports fractional ratings and custom sizing.
 */

import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
}) => {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-300 text-gray-300'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};
