import { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

export default function DemoModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    inmobiliaria: 'Independiente',
    whatsapp: '',
    ciudad: '',
    propiedades: '1-50'
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            source: 'Agendar Demo Landing',
            fecha: new Date().toISOString()
          }),
        });
      } else {
        console.warn('Webhook no configurado. Simulando...');
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setSubmitted(true);
      
      // Auto-redirect to Instagram after 6 seconds
      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/pitau.tech/';
      }, 6000);

    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-primary/95 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-xl bg-[#111B21] border border-white/10 rounded-[2rem] shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[95vh]">
        
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Reserva tu Demo</h2>
              <p className="text-text-muted font-light">Acceso prioritario al cerebro digital de tus ventas.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2">Nombre completo *</label>
                <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all"
                  placeholder="Juan Pérez" />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all"
                  placeholder="juan@empresa.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2">WhatsApp (Opcional)</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all"
                  placeholder="+54 9 11 ..." />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2">Inmobiliaria *</label>
                <select name="inmobiliaria" value={formData.inmobiliaria} onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all">
                  <option value="Independiente">Independiente</option>
                  <option value="Remax">Remax</option>
                  <option value="Century 21">Century 21</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2">Ciudad / País *</label>
                <input required type="text" name="ciudad" value={formData.ciudad} onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all"
                  placeholder="CABA, Argentina" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2">Propiedades en Cartera</label>
                <select name="propiedades" value={formData.propiedades} onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all">
                  <option value="1-50">1 a 50 propiedades</option>
                  <option value="51-200">51 a 200 propiedades</option>
                  <option value="200+">Más de 200 propiedades</option>
                </select>
              </div>

              <button type="submit" disabled={loading}
                className="md:col-span-2 py-4 mt-4 bg-white text-brand-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-50 cursor-pointer">
                {loading ? 'Procesando LidIA...' : 'Solicitar Acceso Prioritario'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-brand-secondary" size={60} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">¡Solicitud Recibida!</h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Excelente {formData.nombre}. Comprobá tu bandeja de entrada; te hemos enviado la confirmación. Uno de nuestros asesores te contactará por WhatsApp a la brevedad.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-8">
              <p className="text-sm text-brand-secondary font-medium animate-pulse">
                Redirigiendo a Instagram en unos segundos...
              </p>
            </div>
            <a href="https://www.instagram.com/pitau.tech/" className="text-white/60 hover:text-white text-sm transition-colors decoration-brand-secondary underline underline-offset-4">
              Ir a Instagram ahora
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
