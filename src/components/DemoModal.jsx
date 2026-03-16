import { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

export default function DemoModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    inmobiliaria: '',
    whatsapp: '',
    propiedades: '1-50'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-primary/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-bg-light border border-white/10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(117,170,219,0.2)] p-8 md:p-10 transform transition-all duration-300 translate-y-0 opacity-100 scale-100">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-text-muted/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">Reserva tu Demo</h2>
              <p className="text-text-muted font-light">Completa tus datos y te contactaremos para mostrarte el potencial 24/7 de LidIA.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-text-muted mb-1">Nombre completo</label>
                <input 
                  required
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-brand-primary/50 text-white border border-white/10 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all placeholder:text-white/20"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-muted mb-1">Inmobiliaria</label>
                <input 
                  required
                  type="text" 
                  name="inmobiliaria"
                  value={formData.inmobiliaria}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-brand-primary/50 text-white border border-white/10 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all placeholder:text-white/20"
                  placeholder="Remax, Century21..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-muted mb-1">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-brand-primary/50 text-white border border-white/10 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all placeholder:text-white/20"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-muted mb-1">Volumen de Cartera Activa</label>
                <select 
                  name="propiedades"
                  value={formData.propiedades}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-brand-primary/50 text-white border border-white/10 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
                >
                  <option value="1-50" className="bg-bg-light">1 a 50 propiedades</option>
                  <option value="51-200" className="bg-bg-light">51 a 200 propiedades</option>
                  <option value="200+" className="bg-bg-light">Más de 200 propiedades</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-4 mt-6 bg-white hover:bg-white/90 text-brand-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer pulse-soft"
              >
                Solicitar Acceso <ArrowRight size={20} />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-brand-secondary/10 border border-brand-secondary/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-brand-secondary" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">¡Reserva Prioritaria!</h2>
            <p className="text-text-muted mb-8 max-w-sm mx-auto font-light">
              Excelente {formData.nombre}. Un especialista técnico de Pitau.Tech te contactará por WhatsApp para habilitar tu demostración Privada.
            </p>
            <button 
              onClick={onClose}
              className="px-8 py-3 border border-white/20 text-white hover:bg-white/5 rounded-xl font-bold transition-colors cursor-pointer"
            >
              Cerrar y Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
