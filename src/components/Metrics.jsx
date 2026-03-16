import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function MetricItem({ valueNode, label, delay = "0s" }) {
  const [isVisible, containerRef] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col items-center justify-center p-6 text-center reveal-initial ${isVisible ? 'reveal-active' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="mb-2 font-bold text-4xl md:text-5xl text-brand-secondary">
        {valueNode}
      </div>
      <p className="text-text-muted text-sm md:text-base tracking-wider uppercase font-light mt-2">
        {label}
      </p>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="relative z-20 py-16 bg-brand-primary border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <MetricItem 
            valueNode={<>24/7</>}
            label="Atención continua sin intervención humana" 
            delay="0s" 
          />
          <MetricItem 
            valueNode={<>100<span className="text-3xl">%</span></>}
            label="Leads respondidos al instante" 
            delay="0.15s" 
          />
          <MetricItem 
            valueNode={<svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            label="Fácil de implementar en tu inmobiliaria" 
            delay="0.3s" 
          />
          <MetricItem 
            valueNode={<>x3</>}
            label="Más seguimiento, menos trabajo manual" 
            delay="0.45s" 
          />
        </div>
      </div>
    </section>
  );
}
