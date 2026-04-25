import { useEffect, useState } from 'react';
import { BotMessageSquare, CalendarCheck, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

const CHAT_SEQUENCE = [
  { type: 'lead', text: "Hola, busco un departamento de 2 ambientes en Palermo", time: "10:30" },
  { type: 'lidia', text: "¡Hola! Soy LidIA. Tenemos 2 opciones que se ajustan a tu búsqueda: un Depto en Palermo Soho y un PH en Palermo Hollywood. ¿Querés que te las comparta?", time: "10:30" },
  { type: 'lead', text: "Sí, mandame", time: "10:31" },
  { type: 'lidia', text: "- Depto Palermo Soho, 2 amb, 52m², USD 148.000. \n  - PH Palermo Hollywood, 2 amb, 60m², USD 150.000.", time: "10:31" },
  { type: 'lead', text: "Me interesa el primero", time: "10:32" },
  { type: 'lidia', text: "¡Excelente elección! ¿Querés ver fotos o preferís agendar una visita?", time: "10:32" },
  { type: 'lead', text: "Me gustaría agendar una visita", time: "10:33" },
  { type: 'lidia', text: "Perfecto. ¿Qué día y horario te queda mejor?", time: "10:33" },
  { type: 'lead', text: "El martes por la tarde estaría perfecto, tipo 17/18hs", time: "10:34" },
  { type: 'lidia', text: "Tengo horarios disponibles el martes 28 a las 17hs o el miércoles 29 a las 18hs", time: "10:34" },
  { type: 'lead', text: "El martes por la tarde estaría perfecto, tipo 17/18hs", time: "10:36" },
  { type: 'lidia', text: "¡Listo! Agendé tu reunión para el martes 28/04 a las 17:00hs. Te llegará un recordatorio 24hs antes con todos los detalles.", time: "10:36" }
];

function WhatsAppMockup() {
  const [messages, setMessages] = useState([CHAT_SEQUENCE[0]]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIdx = 1;
    let timeoutId;

    const playSequence = () => {
      if (currentIdx >= CHAT_SEQUENCE.length) return;

      const nextMsg = CHAT_SEQUENCE[currentIdx];
      setIsTyping(nextMsg.type === 'lidia');

      // Delay between messages for realistic feeling
      const delay = nextMsg.type === 'lidia' ? 2500 : 1500;

      timeoutId = setTimeout(() => {
        setMessages(prev => [...prev, nextMsg]);
        setIsTyping(false);
        currentIdx++;

        // Schedule next message only if not end
        if (currentIdx < CHAT_SEQUENCE.length) {
          const waitBeforeNext = CHAT_SEQUENCE[currentIdx].type === 'lead' ? 1000 : 500;
          timeoutId = setTimeout(playSequence, waitBeforeNext);
        }
      }, delay);
    };

    // Start sequence
    timeoutId = setTimeout(playSequence, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-[300px] h-[600px] bg-[#111B21] rounded-[40px] border-[6px] border-[#2A2F3B] shadow-2xl overflow-hidden float-mockup z-20 shrink-0">
      {/* Notch Layer */}
      <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30">
        <div className="w-32 h-6 bg-[#2A2F3B] rounded-b-3xl"></div>
      </div>

      {/* WhatsApp Header */}
      <div className="bg-[#202C33] px-4 py-3 flex items-center gap-3 pt-10 border-b border-white/5">
        <div className="w-10 h-10 rounded-full bg-brand-secondary/20 border border-brand-secondary/40 flex items-center justify-center shrink-0">
          <BrandLogo iconOnly size="xs" />
        </div>
        <div>
          <h4 className="text-[#E9EDEF] font-semibold text-base leading-tight">Tu Inmobiliaria</h4>
          <span className="text-xs text-brand-secondary font-medium tracking-wide">LidIA Agente Activo</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="bg-[#0B141A] p-4 h-[calc(100%-140px)] overflow-y-auto flex flex-col gap-3 relative scroll-smooth scrollbar-hide">
        {/* Date bubble */}
        <div className="self-center bg-[#182229] px-3 py-1 rounded-lg text-[10px] uppercase tracking-widest text-[#8696A0] mb-2 font-bold">Hoy</div>

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex flex-col max-w-[85%] rounded-2xl px-3 py-2.5 text-[14px] leading-snug shadow-lg ${msg.type === 'lead'
              ? 'self-end bg-[#005C4B] text-[#E9EDEF] rounded-tr-none'
              : 'self-start bg-[#202C33] text-[#E9EDEF] rounded-tl-none border-l-2 border-brand-secondary/50'
              }`}
          >
            <span className="mb-1 font-medium whitespace-pre-wrap">{msg.text}</span>
            <span className="text-[9px] text-white/30 self-end mt-0.5 font-bold tracking-tighter uppercase">{msg.time}</span>
          </div>
        ))}

        {isTyping && (
          <div className="self-start bg-[#202C33] rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 border-l-2 border-brand-secondary/30">
            <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce"></div>
          </div>
        )}
      </div>

      {/* Input area mockup */}
      <div className="absolute bottom-0 inset-x-0 h-[60px] bg-[#202C33] px-3 flex items-center gap-3">
        <div className="flex-1 bg-[#2A3942] rounded-full h-10 px-4 flex items-center">
          <span className="text-[#8696A0] text-sm">Mensaje</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenDemo }) {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax Effect en Background
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    const onScroll = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-bg-dark overflow-hidden px-5 pt-20 pb-16">

      {/* Background Parallax Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[30%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col gap-12 lg:gap-16">
        
        {/* Top Part: Text + Mockup */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex flex-col items-start text-left space-y-8 lg:w-[60%] pt-10 lg:pt-0">
            <div
              className="fade-in-initial fade-in-active inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary font-semibold tracking-wider text-xs uppercase"
              style={{ animationDelay: '0.2s' }}
            >
              <BotMessageSquare size={14} />
              <span>Inteligencia Artificial Real Estate</span>
            </div>

            <h1
              className="fade-in-initial fade-in-active font-display font-extrabold text-white leading-[1.1] tracking-tight w-full"
              style={{ animationDelay: '0.5s', fontSize: 'clamp(38px, 6vw, 64px)' }}
            >
              LidIA: Tu asesora inteligente con respuesta <span className="text-brand-secondary italic">inmediata 24/7</span>
            </h1>

            <div
              className="fade-in-initial fade-in-active text-xl w-full leading-relaxed text-text-muted font-normal"
              style={{ animationDelay: '0.8s' }}
            >
              <p className="w-full">
                LidIA es un agente de IA de nueva generación, que se convertirá en tu mano derecha. Mientras estás en una visita, en plena reunión o disfrutando de tu tiempo libre, ella asegura una atención <strong className="text-white">cálida y profesional</strong>:
              </p>
            </div>
          </div>

          {/* Mockup Container */}
          <div
            className="fade-in-initial fade-in-active lg:w-[35%] flex justify-center lg:justify-end pb-10 lg:pb-0"
            style={{ animationDelay: '1.4s' }}
          >
            <WhatsAppMockup />
          </div>
        </div>

        {/* Bottom Part: CTA Card & Features */}
        <div className="w-full flex flex-col gap-8">
          <div 
            className="fade-in-initial fade-in-active flex flex-col gap-7 w-full bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm"
            style={{ animationDelay: '1.1s' }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-lg text-white/90 font-medium w-full">
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-secondary/30 transition-colors"><span>💬</span> Responde consultas</li>
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-secondary/30 transition-colors"><span>🏠</span> Ofrece propiedades</li>
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-secondary/30 transition-colors"><span>📸</span> Muestra fotos</li>
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-secondary/30 transition-colors"><span>📅</span> Agenda visitas</li>
            </ul>

            <div className="flex flex-col gap-4 w-full border-t border-white/10 pt-8">
              <button
                onClick={onOpenDemo}
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 text-xl font-bold text-brand-primary bg-white rounded-2xl w-full transition-all duration-300 hover:scale-[1.01] shadow-[0_0_20px_rgba(0,188,228,0.2)] hover:shadow-[0_0_50px_rgba(0,188,228,0.6)] cursor-pointer"
              >
                <CalendarCheck className="relative z-10 transition-transform group-hover:rotate-12" size={26} />
                <span className="relative z-10 tracking-wide">Quiero mi demo personalizada</span>
              </button>
              <p className="text-base text-text-muted font-medium text-center leading-snug">
                Agendá una demostración gratuita de 20' y descubrí cuántas horas al día ahorrarás con LidIA trabajando para vos.
              </p>
            </div>
          </div>

          <div
            className="fade-in-initial fade-in-active grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-x-8 pt-4 w-full"
            style={{ animationDelay: '1.6s' }}
          >
            <div className="flex items-center gap-3 text-base text-white/90 font-medium">
              <CheckCircle2 className="text-[#FF7A00]" size={20} />
              Implementado en pocos días
            </div>
            <div className="flex items-center gap-3 text-base text-white/90 font-medium">
              <CheckCircle2 className="text-[#FF7A00]" size={20} />
              Entrenado con tu cartera
            </div>
            <div className="flex items-center gap-3 text-base text-white/90 font-medium">
              <CheckCircle2 className="text-[#FF7A00]" size={20} />
              Llave en mano para WhatsApp
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
