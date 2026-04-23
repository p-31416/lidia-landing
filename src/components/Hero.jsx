import { useEffect, useState } from 'react';
import { BotMessageSquare, CalendarCheck, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

const CHAT_SEQUENCE = [
  { type: 'lead', text: "Hola, busco un departamento de 2 ambientes en Palermo, hasta USD 150.000", time: "10:30" },
  { type: 'lidia', text: "¡Hola! Soy LidIA. Tenemos 3 opciones que se ajustan a tu búsqueda. ¿Querés que te las comparta?", time: "10:30" },
  { type: 'lead', text: "Sí, mandame", time: "10:31" },
  { type: 'lidia', text: "Palermo Soho — 2 amb, 52m², USD 148.000. Piso 4, luminoso, expensas bajas. ¿Te interesa coordinar una visita?", time: "10:31" },
  { type: 'lead', text: "Me interesa el primero", time: "10:32" },
  { type: 'lidia', text: "Perfecto. ¿Cuándo tenés disponibilidad? Tengo turnos el martes 18 a las 10hs o el miércoles 19 a las 16hs", time: "10:32" },
  { type: 'lead', text: "El martes está bien", time: "10:33" },
  { type: 'lidia', text: "¡Listo! Visita confirmada para el martes 18 a las 10hs. Te llega un recordatorio 24hs antes.", time: "10:33" }
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
            className={`flex flex-col max-w-[85%] rounded-2xl px-3 py-2.5 text-[14px] leading-snug shadow-lg ${
              msg.type === 'lead' 
                ? 'self-end bg-[#005C4B] text-[#E9EDEF] rounded-tr-none' 
                : 'self-start bg-[#202C33] text-[#E9EDEF] rounded-tl-none border-l-2 border-brand-secondary/50'
            }`}
          >
            <span className="mb-1 font-medium">{msg.text}</span>
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
      
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-8 lg:w-[55%] pt-10 lg:pt-0">
          
          <div 
            className="fade-in-initial fade-in-active inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-secondary/20 bg-brand-secondary/5 text-brand-secondary font-semibold tracking-wider text-xs uppercase"
            style={{ animationDelay: '0.2s' }}
          >
            <BotMessageSquare size={14} />
            <span>Inteligencia Artificial Real Estate</span>
          </div>

          <h1 
            className="fade-in-initial fade-in-active font-display font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ animationDelay: '0.5s', fontSize: 'clamp(38px, 6vw, 64px)' }}
          >
            Vende más,<br />
            atendiendo <span className="text-brand-secondary italic">leads 24/7</span><br />
            en piloto automático.
          </h1>
          
          <p 
            className="fade-in-initial fade-in-active text-xl max-w-2xl leading-relaxed text-text-muted font-normal"
            style={{ animationDelay: '0.8s' }}
          >
            LidIA automatiza tus consultas por WhatsApp, califica interesados y agenda visitas sin que tengas que tocar el celular.
          </p>

          <div 
            className="fade-in-initial fade-in-active pt-6 w-full flex flex-col gap-6"
            style={{ animationDelay: '1.1s' }}
          >
            <div className="flex flex-col gap-4">
              <button 
                onClick={onOpenDemo}
                className="pulse-soft relative inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-bold text-brand-primary bg-white rounded-xl overflow-hidden w-full sm:w-auto transition-transform hover:scale-[1.03] cursor-pointer"
              >
                <CalendarCheck className="relative z-10" size={22} />
                <span className="relative z-10 tracking-wide">Reservar Demo</span>
              </button>
              <p className="text-sm text-text-muted/80 font-medium pl-1">
                Agendá una demostración gratuita de 20' y descubrí cuántas horas al día ahorrarás con LidIA trabajando para vos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-x-4 pt-4">
               <div className="flex items-center gap-2 text-sm text-white/90 font-medium">
                 <CheckCircle2 className="text-[#FF7A00]" size={18}/> 
                 Implementado en pocos días
               </div>
               <div className="flex items-center gap-2 text-sm text-white/90 font-medium">
                 <CheckCircle2 className="text-[#FF7A00]" size={18}/> 
                 Entrenado con tu cartera
               </div>
               <div className="flex items-center gap-2 text-sm text-white/90 font-medium">
                 <CheckCircle2 className="text-[#FF7A00]" size={18}/> 
                 Llave en mano para WhatsApp
               </div>
            </div>
          </div>
        </div>

        {/* Mockup Container */}
        <div 
          className="fade-in-initial fade-in-active lg:w-[45%] flex justify-center lg:justify-end pb-10 lg:pb-0"
          style={{ animationDelay: '1.4s' }}
        >
          <WhatsAppMockup />
        </div>

      </div>
    </section>
  );
}
