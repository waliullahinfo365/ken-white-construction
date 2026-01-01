/**
 * Photo Gallery Section
 * Displays a grid of project photos with lightbox functionality.
 * Responsive grid: 2 columns on mobile, 4 columns on desktop.
 */

import React, { useState } from 'react';
import { GalleryImage } from './GalleryImage';
import { Lightbox } from './Lightbox';
import { galleryImages } from '../../data/galleryData';

export const PhotoGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        className="bg-gray-50 py-16 md:py-20"
        id="gallery"
        aria-labelledby="gallery-heading"
      >
        <div className="container mx-auto px-4">
          {/* Section heading - visually hidden but accessible */}
          <h2 id="gallery-heading" className="sr-only">
            Project Gallery
          </h2>

          {/* Gallery grid - 2 columns mobile, 4 columns desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      )}
    </>
  );
};
