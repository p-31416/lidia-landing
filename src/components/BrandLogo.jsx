import React from 'react';
import logoOfficial from '../assets/logo-oficial-sinfondo.png';

export default function BrandLogo({ className = "", showText = true, size = "md", iconOnly = false }) {
  const containerSizes = {
    xs: "w-8 h-8",
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-32 h-32"
  };

  const imageSizes = {
    xs: "h-6",
    sm: "h-8",
    md: "h-11",
    lg: "h-16",
    xl: "h-26"
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Circular Mask for Logo */}
      <div className={`${containerSizes[size]} rounded-full bg-white flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-white/10 overflow-hidden`}>
        <img 
          src={logoOfficial} 
          alt="LidIA Logo" 
          className={`${imageSizes[size]} w-auto object-contain transition-transform duration-300 hover:scale-110`}
        />
      </div>

      {/* Tagline - Optimized for Legibility */}
      {showText && !iconOnly && (
        <div className="flex flex-col leading-tight">
          <p 
            className="text-[11px] md:text-[12px] font-bold tracking-wider uppercase"
            style={{ 
              color: "#FFFFFF",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}
          >
            Lid<span style={{ color: "#00BCE4" }}>IA</span> tu Asesora inmobiliar<span style={{ color: "#00BCE4" }}>IA</span>
          </p>

        </div>
      )}
    </div>
  );
}


