import { useState, useRef, useEffect, useCallback } from 'react';

interface CarouselOptions {
  initialIndex?: number;
  enableKeyboard?: boolean;
}

export const useCenteredCarousel = (
  itemCount: number,
  options: CarouselOptions = {}
) => {
  const {
    initialIndex = 0,
    enableKeyboard = true,
  } = options;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(initialIndex);
  const isScrolling = useRef<NodeJS.Timeout | null>(null);

  const scrollToElement = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container || index < 0 || index >= itemCount) return;

    const element = container.children[index] as HTMLElement;
    if (element) {
      const containerWidth = container.offsetWidth;
      const elementWidth = element.offsetWidth;
      const newScrollLeft =
        element.offsetLeft - (containerWidth - elementWidth) / 2;
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  }, [itemCount]);

  const handleScroll = useCallback(() => {
    if (isScrolling.current) {
      clearTimeout(isScrolling.current);
    }
    isScrolling.current = setTimeout(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const containerCenter = scrollLeft + container.offsetWidth / 2;

      let closestIndex = -1;
      let smallestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const element = child as HTMLElement;
        const childCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== -1 && closestIndex !== centerIndex) {
        setCenterIndex(closestIndex);
      }
    }, 150); // Debounce scroll event
  }, [centerIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Scroll to the initial centered card on mount
    const timer = setTimeout(() => scrollToElement(centerIndex), 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        const nextIndex = Math.min(centerIndex + 1, itemCount - 1);
        scrollToElement(nextIndex);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = Math.max(centerIndex - 1, 0);
        scrollToElement(prevIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    if (enableKeyboard) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(timer);
      container.removeEventListener('scroll', handleScroll);
      if (enableKeyboard) {
        window.removeEventListener('keydown', handleKeyDown);
      }
      if (isScrolling.current) {
        clearTimeout(isScrolling.current);
      }
    };
  }, [handleScroll, scrollToElement, centerIndex, itemCount, enableKeyboard]);

  return { scrollContainerRef, centerIndex };
};
