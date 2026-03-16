import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters or exits the viewport.
 * @param {Object} options - IntersectionObserver options
 * @returns {[Object, boolean]} - [ref, isVisible]
 */
const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -150px 0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Toggle visibility when it enters or exits
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Keep it false if we want it to re-animate when scrolling back
          setIsVisible(false);
        }
      });
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

export default useScrollReveal;
