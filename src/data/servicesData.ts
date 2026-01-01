/**
 * Services Data
 * Centralized data for construction services displayed on the landing page.
 * Images should be placed in public/images/ directory.
 */

import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'demolition',
    title: 'Demolition',
    description:
      'Professional demolition services for residential and commercial projects. We handle everything from small structures to large-scale demolitions with precision and safety.',
    image: '/images/demolition.webp',
    imageAlt: 'Heavy machinery performing demolition work in a green field',
  },
  {
    id: 'excavation',
    title: 'Excavation',
    description:
      'Expert excavation services including site preparation, grading, trenching, and foundation work. Our experienced team uses state-of-the-art equipment for efficient results.',
    image: '/images/excavation.webp',
    imageAlt: 'Excavator working on site preparation with construction equipment',
  },
  {
    id: 'land-clearing',
    title: 'Land Clearing',
    description:
      'Comprehensive land clearing services including tree removal, brush clearing, and site preparation. We transform overgrown properties into ready-to-build spaces.',
    image: '/images/land-clearing.webp',
    imageAlt: 'Excavator with grapple clearing trees and vegetation',
  },
];
