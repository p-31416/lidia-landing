import React from 'react';

export default function BrandLogo({ className = "", showText = true, size = "md", iconOnly = false }) {
  const sizes = {
    xs: "h-4",
    sm: "h-6",
    md: "h-10",
    lg: "h-14",
    xl: "h-20"
  };

  // Adjusted Colors for High Contrast on Dark Background
  const colorPrimary = "#FFFFFF"; // Changed to White for readability on dark background
  const colorSecondary = "#00BCE4"; // Keep Cyan
  const colorDarkAccent = "#002147"; // Keep official dark blue for subtle details if needed

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      {/* Isotype SVG - Exact Replica of Official Brand */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${sizes[size]} w-auto`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House outline with speech bubble tail */}
        <path 
          d="M50 12L18 38V75C18 78.3 20.7 81 24 81H45L35 92L55 81H76C79.3 81 82 78.3 82 75V38L50 12Z" 
          stroke={colorPrimary} 
          strokeWidth="4" 
          strokeLinejoin="round"
        />
        
        {/* The "Knob" dot on the house wall */}
        <circle cx="32" cy="62" r="4" fill={colorPrimary} />
        
        {/* Exact Tech 'L' path inside */}
        <path 
          d="M48 32V64H72" 
          stroke={colorSecondary} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Official circuit nodes */}
        <circle cx="48" cy="32" r="3.5" fill={colorSecondary} />
        <circle cx="72" cy="64" r="3.5" fill={colorSecondary} />
        <circle cx="48" cy="48" r="2.5" fill={colorSecondary} />
      </svg>

      {/* Text Component - Optimized for Legibility */}
      {showText && !iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span style={{ color: colorPrimary }} className="font-display font-bold tracking-tight text-xl md:text-2xl">
              Lid
            </span>
            <span style={{ color: colorSecondary }} className="font-display font-bold tracking-tight text-xl md:text-2xl">
              IA
            </span>
          </div>
          <p 
            className="text-[9px] md:text-[10px] font-semibold mt-1"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Lid<span style={{ color: colorSecondary }}>IA</span> tu Asesora inmobiliar<span style={{ color: colorSecondary }}>IA</span>
          </p>
        </div>
      )}
    </div>
  );
}
