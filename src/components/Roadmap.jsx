import { Sparkles, Map, Expand, Maximize2, Camera } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function RoadmapItem({ icon, title, desc, delay }) {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`reveal-initial ${isVisible ? 'reveal-active' : ''} hover-elevate bg-bg-light border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-start gap-6 group cursor-pointer`}
    >
      <div className="bg-brand-primary border border-white/10 p-4 rounded-xl group-hover:border-brand-accent/40 group-hover:scale-105 transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-text-muted font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const items = [
    {
      icon: <Camera className="text-brand-accent" size={28} />,
      title: 'Photo Staging Inmobiliario con IA',
      desc: 'Amuebla propiedades vacías virtualmente para mostrar todo su potencial geométrico sin gastar en físicos.'
    },
    {
      icon: <Sparkles className="text-brand-accent" size={28} />,
      title: 'Mejora automática de fotos',
      desc: 'Corrección de iluminación, HDR automático y alineación de perspectiva en todas tus capturas.'
    },
    {
      icon: <Map className="text-brand-accent" size={28} />,
      title: 'Planos Inteligentes',
      desc: 'Sube un boceto en papel y LidIA generará planos 2D profesionales para incluir en la ficha técnica.'
    },
    {
      icon: <Maximize2 className="text-brand-accent" size={28} />,
      title: 'Escala Humana Visual',
      desc: 'Detecta y añade modelos humanos o de referencia a espacios ambiguos para transmitir verdadero volumen.'
    },
    {
      icon: <Expand className="text-brand-accent" size={28} />,
      title: 'Motor de Copies Multicanal',
      desc: 'Creación automática de descriptions para Meta Ads, descripciones para Portales Inmobiliarios y Posts de IG.'
    }
  ];

  const [titleVisible, titleRef] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="py-24 bg-brand-primary relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div 
              ref={titleRef}
              className={`reveal-initial ${titleVisible ? 'reveal-active' : ''}`}
            >
              <div className="inline-block px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                Roadmap
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                El futuro visual está muy cerca
              </h2>
              <p className="text-text-muted text-lg font-light leading-relaxed">
                El motor de lenguaje fue solo el comienzo. Prepárate para equipar a todo tu equipo de agentes con el departamento de marketing y post-producción impulsado por IA más inteligente.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-6 w-full">
            {items.map((item, idx) => (
              <RoadmapItem 
                key={idx}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                delay={`${idx * 0.15}s`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
