/**
 * Image Gallery Component
 * Displays a single construction image with hover zoom effect.
 * Used in the Why Choose Us section to showcase work quality.
 */

import React from 'react';

export const ImageGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1">
      {/* Image - Land Clearing */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl group">
        <img
          src="/images/land-clearing-work.webp"
          alt="Land clearing with heavy machinery in green field"
          className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
