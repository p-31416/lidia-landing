import React from 'react';
import logoOfficial from '../assets/logo-oficial-sinfondo.png';

export default function BrandLogo({ className = "", showText = true, size = "md", iconOnly = false }) {
  const sizes = {
    xs: "h-6",
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-24"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official PNG Logo */}
      <img 
        src={logoOfficial} 
        alt="LidIA Logo" 
        className={`${sizes[size]} w-auto object-contain`}
      />

      {/* Tagline - Optimized for Legibility */}
      {showText && !iconOnly && (
        <div className="flex flex-col leading-tight">
          <p 
            className="text-[10px] md:text-[11px] font-bold tracking-wide uppercase"
            style={{ 
              color: "rgba(255, 255, 255, 0.9)",
              letterSpacing: "0.05em"
            }}
          >
            tu Asesora inmobiliar<span style={{ color: "#00BCE4" }}>IA</span>
          </p>
        </div>
      )}
    </div>
  );
}

