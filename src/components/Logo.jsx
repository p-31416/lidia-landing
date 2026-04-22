import React from 'react';

export default function Logo({ className = "h-8", bicolor = true }) {
  const darkBlue = "#0D1520";
  const celeste = "#75AADB";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Isotipo SVG */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Isotipo SVG similar a la imagen: burbuja redondeada + techo */}
        <path 
          d="M50 5 L85 35 V75 C85 83.3 78.3 90 70 90 H45 L25 100 V90 C16.7 90 10 83.3 10 75 V35 L50 5 Z" 
          fill={darkBlue}
        />
        <path 
          d="M50 5 L85 35 H15 L50 5 Z" 
          fill={celeste} 
        />
        {/* Un pequeño punto o detalle de 'IA' interno opcional si se desea, o dejarlo limpio */}
        {/* Chimenea pequeña opcional */}
        <rect x="70" y="20" width="8" height="15" fill={darkBlue} />
      </svg>

      {/* Logotipo Texto */}
      <span className="font-bold tracking-tight text-2xl flex">
        <span style={{ color: bicolor ? 'white' : 'white' }}>Lid</span>
        <span style={{ color: celeste }}>IA</span>
      </span>
    </div>
  );
}
