/**
 * Gallery Data
 * Images for the photo gallery section showcasing past projects.
 * Images should be placed in public/images/gallery/ directory.
 */

import type { GalleryImage } from '../types';

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/vintage-machinery.webp',
    alt: 'Vintage construction machinery from 1968',
    category: 'heritage',
  },
  {
    id: '2',
    src: '/images/gallery/bulldozer-work.webp',
    alt: 'Yellow bulldozer performing excavation work',
    category: 'excavation',
  },
  {
    id: '3',
    src: '/images/gallery/team-photo.webp',
    alt: 'Ken White Construction team members with equipment',
    category: 'team',
  },
  {
    id: '4',
    src: '/images/gallery/land-clearing-1.webp',
    alt: 'Land clearing equipment in green field',
    category: 'land-clearing',
  },
  {
    id: '5',
    src: '/images/gallery/septic-installation-1.webp',
    alt: 'Excavator installing septic system',
    category: 'septic',
  },
  {
    id: '6',
    src: '/images/gallery/vintage-bulldozer.webp',
    alt: 'Historical photo of early company equipment',
    category: 'heritage',
  },
  {
    id: '7',
    src: '/images/gallery/residential-project.webp',
    alt: 'Residential construction project in progress',
    category: 'residential',
  },
  {
    id: '8',
    src: '/images/gallery/land-clearing-2.webp',
    alt: 'Heavy machinery clearing forested area',
    category: 'land-clearing',
  },
];
