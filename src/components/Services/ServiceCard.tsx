import React, { useState } from 'react';
import type { ServiceCardProps } from '../../types';

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-dark-900 mb-2 sm:mb-3 italic">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {service.description}
        </p>

        <div
          className={`mt-3 sm:mt-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 flex items-center gap-2 group/btn text-sm sm:text-base"
            aria-label={`Learn more about ${service.title}`}
          >
            Learn More
            <span className="transform transition-transform duration-200 group-hover/btn:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-primary-500/10 rounded-bl-full transform translate-x-8 sm:translate-x-10 -translate-y-8 sm:-translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
        aria-hidden="true"
      />
    </article>
  );
};
