/**
 * Ken White Construction - TypeScript Type Definitions
 * Centralized types for form handling and UI components
 */

import React from 'react';

/** Form data structure for quote request submissions */
export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

/** Validation error messages mapped to form fields */
export interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

/** Reusable button component props with variant and size options */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

/** Input field props for consistent form styling */
export interface InputProps {
  name: string;
  type?: 'text' | 'email' | 'tel';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  ariaLabel?: string;
}

/** Service card data for displaying construction services */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

/** Service data for the services section cards */
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

/** Props for individual service card component */
export interface ServiceCardProps {
  service: Service;
  index: number;
}

/** Customer testimonial from Google Reviews */
export interface Testimonial {
  id: string;
  name: string;
  reviewCount: number;
  photoCount?: number;
  rating: number;
  review: string;
  date?: string;
}

/** Trust point for Why Choose Us section */
export interface TrustPoint {
  id: string;
  text: string;
  icon: React.ReactNode;
}

/** Gallery image data for photo gallery section */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

/** Contact method for contact section */
export interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext?: string;
  type: 'location' | 'phone' | 'email' | 'quote';
  href?: string;
}

/** Contact form data structure */
export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}
