import React from 'react';

export default function Logo({ className = "h-8", bicolor = true }) {
  const baseColor = "white"; // Cambiado a blanco para visibilidad en fondo oscuro
  const celeste = "#75AADB";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Isotipo SVG similar a la imagen: burbuja redondeada + techo */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto drop-shadow-lg" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M50 5 L85 35 V75 C85 83.3 78.3 90 70 90 H45 L25 100 V90 C16.7 90 10 83.3 10 75 V35 L50 5 Z" 
          fill={baseColor}
        />
        <path 
          d="M50 5 L85 35 H15 L50 5 Z" 
          fill={celeste} 
        />
      </svg>

      {/* Logotipo Texto */}
      <span className="font-bold tracking-tight text-2xl flex">
        <span style={{ color: bicolor ? 'white' : 'white' }}>Lid</span>
        <span style={{ color: celeste }}>IA</span>
      </span>
    </div>
  );
}
