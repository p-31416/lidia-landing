import React from 'react';

export default function BrandLogo({ className = "", showText = true, size = "md", iconOnly = false }) {
  const sizes = {
    xs: "h-4",
    sm: "h-6",
    md: "h-10",
    lg: "h-14",
    xl: "h-20"
  };

  const colorPrimary = "#002147";
  const colorSecondary = "#00BCE4";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Isotype SVG */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${sizes[size]} w-auto drop-shadow-xl`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorSecondary} />
            <stop offset="100%" stopColor={colorPrimary} />
          </linearGradient>
        </defs>
        
        {/* House shape with rounded roof and speech tail */}
        <path 
          d="M50 8L12 38V82C12 86.4183 15.5817 90 20 90H80C84.4183 90 88 86.4183 88 82V38L50 8Z" 
          fill="url(#logoGradient)" 
        />
        <path 
          d="M28 90L15 98V90H28Z" 
          fill={colorPrimary} 
        />
        
        {/* Refined 'L' with terminal points (Tech-style) */}
        <path 
          d="M40 32V68H68" 
          stroke="white" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Logic points */}
        <circle cx="40" cy="32" r="5" fill="white" />
        <circle cx="68" cy="68" r="5" fill="white" />
        <circle cx="58" cy="48" r="3" fill="white" fillOpacity="0.5" />
      </svg>

      {/* Text Component */}
      {showText && !iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span className="font-display font-bold text-white tracking-tight text-xl md:text-2xl">
              Lid
            </span>
            <span className="font-display font-bold text-brand-secondary tracking-tight text-xl md:text-2xl">
              IA
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold mt-1">
            Real Estate AI
          </p>
        </div>
      )}
    </div>
  );
}
