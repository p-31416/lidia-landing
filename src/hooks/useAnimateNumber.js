import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * Hook para animar un número ascendente al entrar en viewport
 * @param {number} end Número final 
 * @param {number} duration Duración en milisegundos
 * @returns {number} Número actual de la animación
 */
export function useAnimateNumber(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.5 });
  const countRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart curve para un frenado suave al final
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        countRef.current = window.requestAnimationFrame(step);
      }
    };

    countRef.current = window.requestAnimationFrame(step);

    return () => {
      if (countRef.current) window.cancelAnimationFrame(countRef.current);
    };
  }, [end, duration, isVisible]);

  return { count, ref };
}
