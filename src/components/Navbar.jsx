import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-brand-primary/50 backdrop-blur-lg border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="https://www.linkedin.com/in/msolazcona/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-start group"
        >
          <span className="font-['Cinzel'] text-2xl font-bold text-white tracking-widest leading-none group-hover:text-brand-secondary transition-colors">
            LidIA
          </span>
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium group-hover:text-brand-secondary/50 transition-colors">
            By Pitau Tech
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Características</a>
          <a href="#roadmap" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Roadmap</a>
          <a 
            href="https://www.linkedin.com/in/msolazcona/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
