import { Instagram, Linkedin, ShieldCheck, Mail } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="bg-bg-dark border-t border-white/5 text-text-muted py-16 relative z-20 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="flex flex-col items-center md:items-start group">
          <a href="#" className="inline-block transition-transform hover:scale-105">
            <BrandLogo size="lg" className="mb-4" />
          </a>
          <p className="text-sm font-light text-center md:text-left text-white/40 leading-relaxed">
            Una solución inteligente de <span className="text-white/80 font-medium group-hover:text-brand-secondary transition-colors">Pitau Tech</span><br />
            Liderando la automatización inmobiliaria.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <button 
            onClick={onOpenPrivacy}
            className="hover:text-white transition-colors flex items-center gap-2 text-sm font-light cursor-pointer"
          >
            <ShieldCheck size={18} /> Privacidad
          </button>
          <a 
            href="mailto:soporte@pitautech.com.ar" 
            className="hover:text-white transition-colors flex items-center gap-2 text-sm font-light"
          >
            <Mail size={18} /> Soporte Técnico
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/pitau.tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary/20 hover:border-brand-secondary/50 hover:text-white transition-all"
            title="Instagram @pitau.tech"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/msolazcona/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary/20 hover:border-brand-secondary/50 hover:text-white transition-all"
            title="LinkedIn de Sol Azcona"
          >
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
