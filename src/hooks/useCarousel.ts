/**
 * Custom Carousel Hook
 * Manages carousel state including current index, navigation, and auto-play.
 * Supports configurable items per view and auto-play interval.
 */

import { useState, useEffect, useCallback } from 'react';

interface UseCarouselProps {
  totalItems: number;
  autoPlayInterval?: number;
  itemsPerView?: number;
}

interface UseCarouselReturn {
  currentIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
  maxIndex: number;
  setIsAutoPlaying: (value: boolean) => void;
}

export const useCarousel = ({
  totalItems,
  autoPlayInterval = 5000,
  itemsPerView = 2,
}: UseCarouselProps): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calculate max index based on total items and items per view
  const maxIndex = Math.max(0, Math.ceil(totalItems / itemsPerView) - 1);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    // Pause auto-play when user manually navigates
    setIsAutoPlaying(false);
  }, []);

  // Auto-play functionality with cleanup
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext, autoPlayInterval]);

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
    maxIndex,
    setIsAutoPlaying,
  };
};
