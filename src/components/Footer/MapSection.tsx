/**
 * Map Section Component
 * Embedded Google Maps with an overlay info card.
 * Shows business location, rating, and quick action buttons.
 */

import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-200">
      {/* Business info card overlay */}
      <div className="absolute top-6 left-6 bg-white rounded-xl shadow-2xl p-6 z-10 max-w-xs">
        <h3 className="font-heading font-bold text-xl text-dark-900 mb-2">
          Ken White Construction Ltd.
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          2405 March Rd, Carp, ON K0A 1L0, Canada
        </p>

        {/* Rating display */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-yellow-500">4.9</span>
          <div className="flex" aria-label="4.9 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">38 reviews</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href="https://www.google.com/maps/dir//Ken+White+Construction+Ltd/@45.3571,-76.0464,12z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-dark-900 font-semibold rounded-lg text-sm text-center transition-colors"
          >
            Directions
          </a>
          <a
            href="https://www.google.com/maps/place/Ken+White+Construction+Ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-gray-300 hover:border-gray-400 rounded-lg text-sm font-semibold text-gray-700 transition-colors flex items-center gap-1"
          >
            View map
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Google Maps embed - grayscale for professional look */}
      <iframe
        title="Ken White Construction Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.123!2d-76.0464!3d45.3571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIxJzI1LjYiTiA3NsKwMDInNDcuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale"
      />
    </div>
  );
};
