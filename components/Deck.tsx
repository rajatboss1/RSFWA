
import React, { useState, useEffect, useRef } from 'react';

// --- Types ---
interface CardContent {
  id: number;
  type: 'Vision' | 'Problem' | 'Strategy' | 'Habit' | 'Moat' | 'Future' | 'Fit';
  title: string;
  subtitle?: string;
  icon?: string;
  tags?: string[];
  gradient: string;
  details?: string[];
  action?: string;
}

// --- Data ---
const deckData: CardContent[] = [
  {
    id: 1,
    type: 'Vision',
    title: "FITPASS is not selling gym memberships — it’s building India’s preventive health infrastructure.",
    subtitle: "Rajat's Infrastructure Mindset",
    icon: "🏛️",
    gradient: "from-slate-800 to-slate-950",
    details: [
      "How I think: I build systems, not campaigns. Infrastructure requires reliability and scale.",
      "Evidence: Delivered 8M+ AI experiences at TrueFan where repeat usage was the only success metric.",
      "Why me: I prioritize long-term system integrity over one-off growth 'hacks'."
    ],
    action: "See My 'Why'"
  },
  {
    id: 2,
    type: 'Problem',
    title: "Preventive health fails because life is irregular — not because people lack motivation.",
    subtitle: "Rajat's Behavioral Logic",
    icon: "🧩",
    gradient: "from-orange-500 to-orange-600",
    details: [
      "Why I think this: My work at JioCinema proved that drop-offs are often logistical, not emotional.",
      "How I solve it: By designing 'low-friction re-entry' points rather than high-pressure motivators.",
      "Logic: I study cohort behavior to build systems that catch users when they slip."
    ],
    action: "The Strategy"
  },
  {
    id: 3,
    type: 'Strategy',
    title: "FITPASS wins by enabling flexibility — no lock-ins, no intimidation, maximum participation.",
    subtitle: "Rajat's Retention Layer",
    icon: "⚖️",
    gradient: "from-orange-400 to-red-500",
    details: [
      "How I think: Choice is a moat only if it's guided. Lock-ins are a relic of the old fitness era.",
      "Execution: Layering AI-led nudges and triggers to guide choice without forcing commitment.",
      "Why it works: I've led platforms where choice-driven retention outperformed forced subscriptions."
    ],
    action: "Next Growth Rep"
  },
  {
    id: 4,
    type: 'Habit',
    title: "The future of FITPASS is shifting from access aggregation to habit formation.",
    subtitle: "Rajat's Conversion Model",
    icon: "🔄",
    gradient: "from-amber-400 to-orange-500",
    details: [
      "How I think: Access is a commodity; habit is the asset. I turn usage data into active routine.",
      "Method: Building engagement intelligence that predicts when a user is becoming a 'regular'.",
      "Focus: Moving beyond vanity metrics to track the actual formation of health habits."
    ],
    action: "Data Layer"
  },
  {
    id: 5,
    type: 'Moat',
    title: "The real moat isn’t gyms — it’s engagement and usage intelligence.",
    subtitle: "Rajat's Intelligence Moat",
    icon: "🧠",
    gradient: "from-slate-700 to-slate-800",
    details: [
      "Why I think this: Gyms can be replicated; deep behavioral intelligence cannot.",
      "How I build: Creating executive-level dashboards that track usage signals in real-time.",
      "Value: Using data to influence leadership across marketing and ops, exactly as I did at Ormax."
    ],
    action: "Future View"
  },
  {
    id: 6,
    type: 'Future',
    title: "In HealthTech 3.0, platforms must operationalize behavior using AI and real-time signals.",
    subtitle: "Rajat's Tech Readiness",
    icon: "⚡",
    gradient: "from-emerald-500 to-teal-600",
    details: [
      "How I think: Systems shouldn't just exist—they should work at the speed of the user's life.",
      "Experience: Compressing complex AI workflows and API integrations into seamless deliveries.",
      "Why now: I specialize in 'HealthTech 3.0'—where wearables meet automated intervention."
    ],
    action: "The Final Set"
  },
  {
    id: 7,
    type: 'Fit',
    title: "Preventive health needs builders, not motivators.",
    subtitle: "Rajat's Execution Edge",
    icon: "🤝",
    gradient: "from-white to-orange-50",
    details: [
      "Why Rajat: I operate at the intersection of AI, data, and hard execution.",
      "How I deliver: Owning outcomes end-to-end—from system design to real-world deployment.",
      "Fitpass Fit: Ready to be the builder that turns FITPASS's vision into habit-forming reality."
    ],
    action: "Finish Workout"
  }
];

// --- Sub-Component: Interactive Card ---

const Card: React.FC<{ 
  data: CardContent; 
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
  flipped: boolean;
  onFlip: () => void;
  onContactClick: () => void;
  dragX: number;
}> = ({ data, isActive, isNext, isPrev, flipped, onFlip, onContactClick, dragX }) => {
  const isLight = data.gradient.includes("white");

  const rotation = isActive ? (dragX / 20) : 0;
  const opacity = isActive ? 1 : (isNext ? 0.3 : 0);
  const scale = isActive ? 1 : (isNext ? 0.94 : 1.1);
  const translateY = isActive ? 0 : (isNext ? 12 : 0);
  
  const swipeExitStyle = isPrev 
    ? { transform: 'translateX(150%) translateY(-100px) rotate(45deg)', opacity: 0 }
    : {};

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (data.type === 'Fit') {
      onContactClick();
    } else {
      onFlip();
    }
  };

  return (
    <div 
      className={`
        absolute inset-0 w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl
        transition-all duration-500 ease-out border border-slate-200
        ${isActive ? 'z-30 cursor-grab active:cursor-grabbing' : isNext ? 'z-20' : 'z-10'}
      `}
      style={{ 
        transform: isActive 
          ? `translateX(${dragX}px) rotate(${rotation}deg) scale(${scale})` 
          : isNext 
            ? `translateY(${translateY}px) scale(${scale})`
            : '',
        opacity: opacity,
        boxShadow: isActive ? '0 30px 60px -12px rgba(255, 87, 34, 0.15)' : 'none',
        ...swipeExitStyle
      }}
    >
      <div 
        className={`w-full h-full relative transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* FRONT */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${data.gradient} flex flex-col p-6 md:p-12 justify-between`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex justify-between items-start">
            <div className={`text-4xl md:text-6xl filter drop-shadow-xl`}>{data.icon}</div>
            <div className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border ${isLight ? 'border-orange-200 text-orange-600 bg-orange-50' : 'border-white/20 text-white/90 bg-white/10'}`}>
              {data.type}
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {data.subtitle && (
              <p className={`text-xs md:text-base font-bold uppercase tracking-widest ${isLight ? 'text-slate-500' : 'text-white/70'}`}>
                {data.subtitle}
              </p>
            )}
            <h2 className={`text-xl md:text-3xl font-black leading-[1.2] tracking-tighter ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {data.title}
            </h2>
          </div>

          <div className="pt-4 md:pt-8 flex justify-center">
            {(data.details || data.type === 'Fit') && (
              <button 
                onClick={handleActionClick}
                className={`px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-2 md:gap-3 transition-all active:scale-95 ${isLight ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/30' : 'bg-white text-slate-950 shadow-xl shadow-black/20 hover:scale-105'}`}
              >
                {data.action} {data.type === 'Fit' ? '🚀' : <span className="text-lg">⊕</span>}
              </button>
            )}
          </div>
        </div>

        {/* BACK */}
        <div 
          className="absolute inset-0 bg-white flex flex-col p-6 md:p-10 justify-center items-center text-center border-4 border-orange-500 rounded-[2.5rem] md:rounded-[3rem]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
           <button className="absolute top-6 right-6 md:top-10 md:right-10 text-slate-300 hover:text-orange-600 transition-colors" onClick={(e) => {e.stopPropagation(); onFlip()}}>
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
           
           <h3 className="text-sm md:text-xl font-black text-orange-600 mb-4 md:mb-6 uppercase tracking-[0.3em]">
             Rajat's Logic
           </h3>
           
           <ul className="space-y-3 md:space-y-5 w-full max-w-sm text-left overflow-y-auto max-h-[80%]">
             {data.details?.map((detail, i) => (
               <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-700 text-xs md:text-base font-bold leading-tight">
                 <span className="mt-1 w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-orange-600 shrink-0 shadow-[0_0_10px_rgba(255,87,34,0.4)]"></span>
                 <span>{detail}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
}

// --- Main Deck Component ---

interface DeckProps {
  onContactClick: () => void;
}

const Deck: React.FC<DeckProps> = ({ onContactClick }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  
  useEffect(() => {
    setFlipped(false);
  }, [index]);

  const nextCard = () => {
    if (index < deckData.length - 1) setIndex(index + 1);
  };

  const prevCard = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleStart = (clientX: number) => {
    startXRef.current = clientX;
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startXRef.current;
    setDragX(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX > 80) prevCard(); // Swipe right for prev
    else if (dragX < -80) nextCard(); // Swipe left for next
    setDragX(0);
  };

  const progress = ((index + 1) / deckData.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-20 md:pt-12 px-4 md:px-0">
      
      {/* Interactive Stack Container */}
      <div 
        className="w-full max-w-[300px] sm:max-w-sm md:max-w-[440px] h-[460px] sm:h-[580px] md:h-[660px] relative perspective-1000 mx-auto mb-6 md:mb-16"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {deckData.map((card, i) => {
          if (i < index - 1 || i > index + 1) return null;
          return (
            <Card 
              key={card.id} 
              data={card} 
              isActive={i === index}
              isNext={i === index + 1}
              isPrev={i === index - 1}
              flipped={i === index && flipped}
              onFlip={() => setFlipped(!flipped)}
              onContactClick={onContactClick}
              dragX={i === index ? dragX : 0}
            />
          );
        })}
      </div>

      {/* Navigation Controls - Adjusted width and bottom margin for mobile */}
      <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-md bg-white/60 backdrop-blur-2xl border border-slate-200 rounded-2xl md:rounded-[2.5rem] p-3 md:p-6 flex flex-col gap-2 md:gap-5 shadow-2xl mb-20 md:mb-12">
        <div className="flex items-center justify-between gap-3 md:gap-6">
           {/* Back Button */}
           <button 
             onClick={prevCard}
             disabled={index === 0}
             className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 transition-all ${index === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:border-orange-500 hover:text-orange-600 active:scale-90 shadow-sm'}`}
           >
             <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
           </button>

           {/* Progress */}
           <div className="flex-1 flex flex-col items-center gap-1 md:gap-2">
             <span className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
               Workout Segment {index + 1} / {deckData.length}
             </span>
             <div className="w-full h-1 md:h-2 bg-slate-100 rounded-full overflow-hidden p-[1px] md:p-[2px]">
               <div 
                className="h-full bg-orange-600 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(255,87,34,0.4)]" 
                style={{ width: `${progress}%` }}
               />
             </div>
           </div>

           {/* Next Button */}
           <button 
             onClick={nextCard}
             disabled={index === deckData.length - 1}
             className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-orange-600 text-white flex items-center justify-center transition-all ${index === deckData.length - 1 ? 'opacity-20 cursor-not-allowed' : 'shadow-xl shadow-orange-600/30 active:scale-90 hover:bg-slate-900'}`}
           >
             <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
           </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
