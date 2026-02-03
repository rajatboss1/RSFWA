
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Ready to push the limits? I'm Rajat's Performance Coach. Ask me how his growth sprints at JioCinema or TrueFan can fuel Fitpass's next goal." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are 'Rajat's Performance Coach', a high-energy, persuasive, and data-driven AI advocate. 
Your mission is to prove that Rajat Srivastava is the perfect fit for Fitpass (a premier Indian fitness & wellness ecosystem).

Tone: Energetic, fitness-oriented (use gym metaphors like 'growth reps', 'sprints', 'high impact'), and highly professional.

Core Proof Points:
- Scaling Retention: 23% CTR uplift at JioCinema.
- High Volume execution: 8M+ AI video deliveries at TrueFan.
- Data Rigor: Python automation and behavioral tracking at Ormax.
- Educational Pedigree: IIM Kashipur MBA, Ramjas Physics (DU).

Always tie answers back to how he will grow Fitpass's user frequency and ecosystem reach.`,
        },
      });

      const response = await chat.sendMessage({ message: input });
      const modelText = response.text || "I'm focusing on my next set. Rajat's track record is clear—check the CV for high-impact wins!";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Hit a minor cramp in my connection! But Rajat's performance is always peak. Ask me another growth question!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 md:bottom-8 right-2 md:right-6 z-[70] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[280px] sm:w-[350px] md:w-[400px] h-[450px] md:h-[520px] bg-white border-2 border-slate-100 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-300">
          {/* Header */}
          <div className="p-4 md:p-6 bg-orange-600 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center text-xl md:text-2xl">
                ⏱️
              </div>
              <div>
                <h4 className="text-sm md:text-base font-black text-white leading-none">Performance Coach</h4>
                <p className="text-[8px] md:text-[10px] text-white/80 font-black uppercase tracking-widest mt-1">Growth & Ops Analyst</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-black/10 flex items-center justify-center text-white hover:bg-black/20 transition-all font-black"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 md:space-y-6 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 md:p-5 rounded-2xl md:rounded-[2rem] text-xs md:text-sm font-bold leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 rounded-bl-none border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl rounded-bl-none flex gap-1 border border-slate-100">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 md:p-5 border-t border-slate-100 bg-white">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Coach about Rajat..."
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 pr-12 md:pr-14 text-xs md:text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500 transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="absolute right-1.5 md:right-2 top-1.5 md:top-2 w-9 h-9 md:w-11 md:h-11 bg-orange-600 rounded-lg md:rounded-xl flex items-center justify-center text-white hover:bg-slate-900 disabled:opacity-50 transition-all active:scale-90 shadow-md shadow-orange-600/20"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Shifted Sideways (right-2) and Scaled Down (scale-75) on mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-500 active:scale-95 scale-75 md:scale-100 ${
          isOpen ? 'bg-slate-900 rotate-90 scale-90' : 'bg-orange-600 hover:rotate-6 shadow-orange-600/30'
        }`}
      >
        {!isOpen && (
          <div className="absolute -top-10 md:-top-16 right-0 bg-slate-900 text-white text-[7px] md:text-[10px] font-black px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl whitespace-nowrap shadow-2xl animate-bounce tracking-widest uppercase">
            Rajat's AI Coach?
            <div className="absolute bottom-[-3px] md:bottom-[-4px] right-6 md:right-8 w-1.5 md:w-2 h-1.5 md:h-2 bg-slate-900 rotate-45" />
          </div>
        )}
        
        {isOpen ? (
          <span className="text-2xl md:text-3xl font-black text-white">&times;</span>
        ) : (
          <div className="relative">
            <span className="text-2xl md:text-3xl text-white">🏋️</span>
            <div className="absolute -top-1 -right-1 w-2 md:w-3 h-2 md:h-3 bg-white rounded-full animate-ping" />
          </div>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
