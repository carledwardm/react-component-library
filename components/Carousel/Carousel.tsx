import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  images?: string[];
  autoAdvanceInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop',
  ],
  autoAdvanceInterval = 7000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef(0);
  const dragDistanceRef = useRef(0);

  // Limit to 5 images maximum
  const limitedImages = images.slice(0, 5);

  // Auto-advance functionality
  useEffect(() => {
    const startAutoAdvance = () => {
      autoAdvanceRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedImages.length);
      }, autoAdvanceInterval);
    };

    startAutoAdvance();

    return () => {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current);
      }
    };
  }, [autoAdvanceInterval, limitedImages.length]);

  // Global drag event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const clientX = (e as MouseEvent).clientX;
      dragDistanceRef.current = clientX - dragStartRef.current;
      setDragOffset(dragDistanceRef.current);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const clientX = e.touches[0]?.clientX ?? 0;
      dragDistanceRef.current = clientX - dragStartRef.current;
      setDragOffset(dragDistanceRef.current);
    };

    const handleGlobalEnd = () => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      const threshold = 50;
      const distance = dragDistanceRef.current;

      if (distance > threshold) {
        handlePrevious();
      } else if (distance < -threshold) {
        handleNext();
      }

      setDragOffset(0);
      dragDistanceRef.current = 0;
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
    document.addEventListener('mouseup', handleGlobalEnd);
    document.addEventListener('touchend', handleGlobalEnd);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('mouseup', handleGlobalEnd);
      document.removeEventListener('touchend', handleGlobalEnd);
    };
  }, []);

  // Reset auto-advance timer when user interacts
  const resetAutoAdvance = () => {
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current);
    }

    autoAdvanceRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedImages.length);
    }, autoAdvanceInterval);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? limitedImages.length - 1 : prevIndex - 1
    );
    resetAutoAdvance();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedImages.length);
    resetAutoAdvance();
  };

  const getClientX = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): number => {
    if ('touches' in e) {
      return (e as React.TouchEvent<HTMLDivElement>).touches[0]?.clientX ?? 0;
    }
    return (e as React.MouseEvent<HTMLDivElement>).clientX;
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDraggingRef.current = true;
    dragStartRef.current = getClientX(e);
    dragDistanceRef.current = 0;
    setDragOffset(0);
    
    // Pause auto-advance while dragging
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current);
    }
  };

  if (limitedImages.length === 0) {
    return <div className={styles.carouselEmpty}>No images provided</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselWrapper}
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onDragStart={(e) => e.preventDefault()}
      >
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            transition: isDraggingRef.current ? 'none' : 'transform 0.5s ease-in-out',
          }}
        >
          {limitedImages.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.carouselControls}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.indicatorContainer}>
          {limitedImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => {
                setCurrentIndex(index);
                resetAutoAdvance();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
