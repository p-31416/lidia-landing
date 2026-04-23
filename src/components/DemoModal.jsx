import { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

export default function DemoModal({ onClose, onOpenPrivacy }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    inmobiliaria: 'Independiente',
    otraInmobiliaria: '',
    whatsapp: '',
    ciudad: '',
    propiedades: '1-50'
  });

  const [loading, setLoading] = useState(false);
  const [showOtroInput, setShowOtroInput] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Sanitización básica para evitar XSS
  const cleanInput = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/[<>]/g, '').trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Get URL and ensure it's not just an empty string
    const rawUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
    const webhookUrl = (rawUrl && rawUrl.length > 5) ? rawUrl : null;

    try {
      if (webhookUrl) {
        if (!privacyAccepted) {
          alert('Por favor, acepta la política de privacidad para continuar.');
          setLoading(false);
          return;
        }

        // Sanitizar datos antes de enviar
        const cleanData = {
          nombre: cleanInput(formData.nombre),
          email: cleanInput(formData.email),
          inmobiliaria: formData.inmobiliaria === 'Otro' ? cleanInput(formData.otraInmobiliaria) : formData.inmobiliaria,
          whatsapp: cleanInput(formData.whatsapp),
          ciudad: cleanInput(formData.ciudad),
          propiedades: formData.propiedades,
          source: 'Agendar Demo Landing',
          fecha: new Date().toISOString()
        };

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'X-Lidia-Api-Key': 'lidia_secure_v1_2026' // Validación de origen
          },
          body: JSON.stringify(cleanData),
        });
        
        if (!response.ok) throw new Error('Servidor no responde');
      } else {
        console.warn('Webhook no configurado en variables de entorno. Simulando éxito...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      setSubmitted(true);
      
      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/pitau.tech/';
      }, 6000);

    } catch (error) {
      console.error('Submission Error:', error);
      // Even if it fails, if developers haven't set the URL, let's not block the user's "success" feel
      // unless it's a real network error with a defined URL.
      if (!webhookUrl) {
        setSubmitted(true);
      } else {
        alert('Lo sentimos, hubo un problema de conexión. Por favor reintenta o escríbenos por Instagram.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'inmobiliaria') {
      setShowOtroInput(value === 'Otro');
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-bg-dark/90 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full max-w-xl bg-bg-light border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[95vh] selection:bg-brand-secondary/30">
        
        <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors cursor-pointer">
          <X size={28} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-display font-extrabold text-white mb-3">Reserva tu Demo</h2>
              <p className="text-text-muted font-light text-lg">Únete a la nueva era del Real Estate con IA.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">Nombre completo *</label>
                <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all placeholder:text-white/10"
                  placeholder="Ej: Alejandro Pitau" />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">Email Profesional *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all placeholder:text-white/10"
                  placeholder="tu@email.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">WhatsApp (Opcional)</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all placeholder:text-white/10"
                  placeholder="+54 9 11 ..." />
              </div>

              <div className={showOtroInput ? 'md:col-span-1' : 'md:col-span-2'}>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">Inmobiliaria *</label>
                <select name="inmobiliaria" value={formData.inmobiliaria} onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-bg-dark text-white border border-white/10 focus:border-brand-secondary outline-none transition-all appearance-none cursor-pointer">
                  <option value="Independiente" className="bg-bg-dark text-white">Independiente</option>
                  <option value="Remax" className="bg-bg-dark text-white">Remax</option>
                  <option value="Century 21" className="bg-bg-dark text-white">Century 21</option>
                  <option value="Otro" className="bg-bg-dark text-white">Otro / Cuál?</option>
                </select>
              </div>

              {showOtroInput && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                  <label className="block text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">¿Cuál? *</label>
                  <input required={showOtroInput} type="text" name="otraInmobiliaria" value={formData.otraInmobiliaria} onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all"
                    placeholder="Nombre de la agencia" />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">Ciudad / País *</label>
                <input required type="text" name="ciudad" value={formData.ciudad} onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 text-white border border-white/10 focus:border-brand-secondary outline-none transition-all placeholder:text-white/10"
                  placeholder="CABA, Argentina" />
              </div>

              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">Propiedades</label>
                <select name="propiedades" value={formData.propiedades} onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-bg-dark text-white border border-white/10 focus:border-brand-secondary outline-none transition-all appearance-none cursor-pointer">
                  <option value="1-50" className="bg-bg-dark text-white">1 a 50 props</option>
                  <option value="51-200" className="bg-bg-dark text-white">51 a 200 props</option>
                  <option value="200+" className="bg-bg-dark text-white">200+ props</option>
                </select>
              </div>

              <div className="md:col-span-2 flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                <input 
                  required 
                  type="checkbox" 
                  id="privacy"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-transparent text-brand-secondary focus:ring-brand-secondary cursor-pointer"
                />
                <label className="text-xs text-text-muted leading-tight">
                  Acepto la <span 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onOpenPrivacy();
                    }} 
                    className="text-white underline hover:text-brand-secondary transition-colors cursor-pointer"
                  >
                    Política de Privacidad
                  </span> y autorizo el tratamiento de mis datos para la demo de LidIA.
                </label>
              </div>

              <button type="submit" disabled={loading || !privacyAccepted}
                className="md:col-span-2 py-5 mt-2 bg-white text-[#0D1520] rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-secondary hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-30 disabled:hover:scale-100 cursor-pointer shadow-xl">
                {loading ? 'Sincronizando LidIA...' : 'Solicitar Acceso Ahora'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-brand-secondary/20 rounded-full flex items-center justify-center border border-brand-secondary/40">
                <CheckCircle className="text-brand-secondary" size={48} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">¡Solicitud Exitosa!</h2>
            <p className="text-text-muted mb-8 leading-relaxed text-lg font-light">
              Excelente {formData.nombre}, ya estamos preparando tu acceso.<br/>
              <span className="text-white font-medium">Revisá tu mail en los próximos minutos.</span>
            </p>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 mb-8 inline-block max-w-sm">
              <p className="text-xs text-brand-secondary font-bold uppercase tracking-widest animate-pulse">
                Redirigiendo a Instagram...
              </p>
            </div>
            <br />
            <a href="https://www.instagram.com/pitau.tech/" className="text-text-muted hover:text-white text-sm transition-colors border-b border-white/10 pb-1">
              Ir a Instagram manualmente
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
