import React from 'react';
import { X } from 'lucide-react';

export default function PrivacyPolicy({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-brand-primary/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-[#111B21] border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 sm:p-10 font-sans text-text-muted">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-white mb-6">Política de Privacidad</h2>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h3 className="text-white font-semibold mb-2">1. Información General</h3>
            <p>
              LidIA, un servicio de <strong>Pitau Tech</strong>, se compromete a proteger la privacidad de los usuarios. Esta política describe cómo manejamos la información cuando utilizas nuestra landing page y servicios de IA.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">2. Recopilación de Datos</h3>
            <p>
              Recopilamos información que proporcionas voluntariamente a través de nuestros formularios de "Reserva de Demo", incluyendo nombre, empresa y datos de contacto. Además, procesamos las interacciones de chat con nuestro agente de IA para mejorar la calidad del servicio.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">3. Uso de la Información</h3>
            <p>
              Los datos recopilados se utilizan exclusivamente para:
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Gestionar demostraciones del producto.</li>
                <li>Personalizar la experiencia de LidIA para tu inmobiliaria.</li>
                <li>Enviar comunicaciones técnicas y comerciales relacionadas con Pitau Tech.</li>
              </ul>
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">4. Seguridad</h3>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o alteración.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">5. Contacto</h3>
            <p>
              Para cualquier duda sobre tus datos, puedes contactarnos en <span className="text-brand-secondary">info@pitautech.com.ar</span>.
            </p>
          </section>

          <div className="pt-6 border-t border-white/5 text-[12px] opacity-50">
            Última actualización: Abril 2026. CABA, Argentina.
          </div>
        </div>
      </div>
    </div>
  );
}
