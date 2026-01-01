/**
 * Gallery Image Component
 * Individual gallery image with loading state and hover effects.
 * Shows expand icon on hover to indicate clickability.
 */

import React, { useState } from 'react';
import type { GalleryImage as GalleryImageType } from '../../types';
import { Maximize2 } from 'lucide-react';

interface GalleryImageProps {
  image: GalleryImageType;
  onClick: () => void;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <button
      className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3] w-full"
      onClick={onClick}
      aria-label={`View ${image.alt}`}
    >
      {/* Loading placeholder with pulse animation */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />
      )}

      {/* Gallery image with zoom on hover */}
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />

      {/* Hover overlay with expand icon */}
      <div
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <Maximize2 className="w-6 h-6 text-white" />
        </div>
      </div>
    </button>
  );
};
