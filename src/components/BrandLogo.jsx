import React from 'react';

export default function BrandLogo({ className = "", showText = true, size = "md", iconOnly = false }) {
  const sizes = {
    xs: "h-4",
    sm: "h-6",
    md: "h-10",
    lg: "h-14",
    xl: "h-20"
  };

  // Official Colors
  const colorPrimary = "#002147"; // Deep Blue
  const colorSecondary = "#00BCE4"; // Cyan

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      {/* Isotype SVG - Minimalist Tech Style */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${sizes[size]} w-auto`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified House outline */}
        <path 
          d="M50 15L20 40V78C20 80.2 21.8 82 24 82H45L38 90L55 82H76C78.2 82 80 80.2 80 78V40L50 15Z" 
          stroke={colorPrimary} 
          strokeWidth="5" 
          strokeLinejoin="round"
        />
        
        {/* Tech 'L' path */}
        <path 
          d="M45 38V62H62" 
          stroke={colorSecondary} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Nodes */}
        <circle cx="45" cy="38" r="4" fill={colorSecondary} />
        <circle cx="62" cy="62" r="4" fill={colorSecondary} />
      </svg>

      {/* Text Component */}
      {showText && !iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span style={{ color: colorPrimary }} className="font-display font-bold tracking-tighter text-xl md:text-2xl uppercase">
              Lid
            </span>
            <span style={{ color: colorSecondary }} className="font-display font-bold tracking-tighter text-xl md:text-2xl uppercase">
              IA
            </span>
          </div>
          <p 
            style={{ color: colorPrimary }} 
            className="text-[9px] md:text-[10px] font-semibold opacity-90 mt-0.5"
          >
            Lid<span style={{ color: colorSecondary }}>IA</span> tu Asesora inmobiliar<span style={{ color: colorSecondary }}>IA</span>
          </p>
        </div>
      )}
    </div>
  );
}
