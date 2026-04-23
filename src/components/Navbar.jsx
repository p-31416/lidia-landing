import BrandLogo from './BrandLogo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg-dark/60 backdrop-blur-xl border-b border-white/5 py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="hover:opacity-90 transition-opacity">
          <BrandLogo size="md" />
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
