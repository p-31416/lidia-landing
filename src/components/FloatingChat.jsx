import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '¡Hola! Soy LidIA. ¿En qué te puedo ayudar hoy?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');

    // Simulated AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Esa es una excelente pregunta. Por ahora soy un asistente demo de la landing page, ¡pero pronto podré responderte con la inteligencia real de LidIA!' 
      }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-brand-secondary text-brand-primary rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Abrir asistente LidIA"
      >
        <MessageCircle size={28} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[500px] max-h-[80vh] bg-[#111B21] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          <div className="bg-[#202C33] px-4 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center font-bold text-brand-primary text-sm">
                L
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">LidIA Asistente</h3>
                <span className="text-brand-secondary text-[11px]">En línea</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-md ${
                msg.type === 'user' 
                  ? 'bg-brand-secondary text-brand-primary font-medium self-end rounded-br-none' 
                  : 'bg-[#202C33] text-white self-start rounded-bl-none border border-white/5'
              }`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="bg-[#202C33] p-3 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre LidIA..."
              className="flex-1 bg-[#2A3942] text-white text-sm rounded-full px-4 py-2 outline-none focus:ring-1 focus:ring-brand-secondary placeholder-white/40"
            />
            <button type="submit" className="w-10 h-10 shrink-0 bg-brand-secondary text-brand-primary rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <Send size={18} className="mr-0.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
