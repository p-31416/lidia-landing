import { useState, useEffect, useRef } from 'react';

/**
 * Hook para detectar si un elemento está visible en el viewport
 * @param {Object} options Opciones para el IntersectionObserver (threshold, rootMargin)
 * @returns {[boolean, React.RefObject]} Un booleano de si intersectó y la ref a colocar en el nodo HTML
 */
export function useIntersectionObserver(options = { threshold: 0.1, triggerOnce: true }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      } else {
        if (!options.triggerOnce) {
          setIsIntersecting(false);
        }
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.triggerOnce]);

  return [isIntersecting, ref];
}
