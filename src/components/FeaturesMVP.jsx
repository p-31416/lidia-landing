import { MessageCircle, BrainCircuit, Key, Clock, CalendarDays } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function FeatureCard({ icon, title, description, delay }) {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`reveal-initial ${isVisible ? 'reveal-active' : ''} hover-elevate bg-bg-light/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col group`}
    >
      <div className="w-14 h-14 bg-brand-primary border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-brand-secondary/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-text-muted leading-relaxed font-light">{description}</p>
    </div>
  );
}

export default function FeaturesMVP() {
  const features = [
    {
      icon: <Clock className="text-brand-secondary" size={28} />,
      title: 'Atención 24/7 sin intervención',
      description: 'Responde instantáneamente en WhatsApp a cualquier hora, sin demoras ni requerir personal conectado.'
    },
    {
      icon: <BrainCircuit className="text-brand-accent" size={28} />,
      title: 'Personalizado para tu marca',
      description: 'LidIA adopta el tono de voz exacto de tu inmobiliaria y conoce tu cartera de punta a punta.'
    },
    {
      icon: <MessageCircle className="text-brand-secondary" size={28} />,
      title: 'Respuestas inteligentes',
      description: 'Resuelve consultas de requisitos, financiación, ubicación e información general de forma automática.'
    },
    {
      icon: <Key className="text-brand-accent" size={28} />,
      title: 'Ofrece propiedades activamente',
      description: 'LidIA analiza el perfil del lead y envía fichas de propiedades disponibles listas para alquilar o vender.'
    },
    {
      icon: <CalendarDays className="text-brand-secondary" size={28} />,
      title: 'Agenda citas calificadas',
      description: 'Si el cliente muestra alto interés, agenda la visita guiada directamente en el calendario de tu equipo.'
    }
  ];

  const [headerVisible, headerRef] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="py-24 bg-brand-primary relative">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 reveal-initial ${headerVisible ? 'reveal-active' : ''}`}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 text-brand-secondary text-sm font-semibold tracking-wider uppercase">
            Productividad Elevada
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            El cerebro digital de tus ventas
          </h2>
          <p className="text-lg text-text-muted font-light">
            Automatiza la fase crítica de captura y maduración de prospectos. Libera a tus asesores para que solo asistan a los cierres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <FeatureCard 
              key={idx}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              delay={`${idx * 0.15}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
