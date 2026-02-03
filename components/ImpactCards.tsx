
import React, { useState } from 'react';

interface CardData {
  id: number;
  title: string;
  category: string;
  points: string[];
  gradient: string;
  icon: string;
}

const cards: CardData[] = [
  {
    id: 1,
    category: "Retention Strategy",
    title: "JioCinema",
    icon: "📈",
    gradient: "from-orange-500 to-red-600",
    points: [
      "360° Cohort Diagnostics",
      "Data-Backed Programming",
      "Watch-Time Optimization"
    ]
  },
  {
    id: 2,
    category: "Execution Lead",
    title: "TrueFan AI",
    icon: "⚡",
    gradient: "from-purple-500 to-blue-600",
    points: [
      "End-to-End AI Campaigns",
      "Cross-Functional Leadership",
      "Millions of Touchpoints"
    ]
  },
  {
    id: 3,
    category: "AI & Automation",
    title: "Scale Ops",
    icon: "🤖",
    gradient: "from-emerald-500 to-cyan-600",
    points: [
      "Automated Workflows",
      "Personalized Reactivation",
      "Scale Without Breakage"
    ]
  },
  {
    id: 4,
    category: "Analytics",
    title: "Ormax Media",
    icon: "🧠",
    gradient: "from-pink-500 to-rose-600",
    points: [
      "Consumer Behavior Insights",
      "Root Cause Analysis",
      "Leadership Storytelling"
    ]
  }
];

const ImpactCards: React.FC = () => {
  const [stack, setStack] = useState<CardData[]>(cards);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const handleNext = () => {
    setDirection('right');
    setTimeout(() => {
      setStack((prev) => {
        const newStack = [...prev];
        const first = newStack.shift();
        if (first) newStack.push(first);
        return newStack;
      });
      setDirection(null);
    }, 300);
  };

  const activeCard = stack[0];
  const nextCard = stack[1];

  return (
    <div className="relative w-full max-w-sm mx-auto h-[420px] md:h-[400px] perspective-1000">
      {/* Background/Next Card (Visual Cue) */}
      <div 
        className="absolute top-4 left-4 right-4 bottom-0 bg-zinc-900 rounded-3xl border border-zinc-800 opacity-60 scale-95 -z-10 transform translate-y-4 transition-all duration-300"
      >
        <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${nextCard.gradient} opacity-20`}></div>
      </div>

      {/* Active Card */}
      <div 
        onClick={handleNext}
        className={`
          absolute inset-0 cursor-pointer 
          bg-zinc-900 rounded-3xl border border-zinc-700 shadow-2xl shadow-black/50
          transform transition-all duration-300 ease-out select-none
          hover:scale-[1.02] active:scale-95
          ${direction === 'right' ? 'translate-x-[120%] rotate-12 opacity-0' : 'translate-x-0 rotate-0 opacity-100'}
        `}
      >
        {/* Card Content */}
        <div className="h-full flex flex-col relative overflow-hidden rounded-3xl">
          {/* Gradient Header */}
          <div className={`h-32 bg-gradient-to-br ${activeCard.gradient} p-6 flex flex-col justify-between relative`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] rounded-full -mr-10 -mt-10"></div>
            <div className="flex justify-between items-start z-10">
               <span className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white/90 border border-white/10">
                 {activeCard.category}
               </span>
               <span className="text-4xl filter drop-shadow-md">{activeCard.icon}</span>
            </div>
            <h3 className="text-3xl font-bold text-white z-10 tracking-tight">{activeCard.title}</h3>
          </div>

          {/* Body */}
          <div className="flex-1 p-8 flex flex-col justify-center bg-zinc-900/90 backdrop-blur-xl">
            <ul className="space-y-6">
              {activeCard.points.map((p, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCard.gradient}`}></span>
                  <span className="font-medium text-lg leading-tight">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Footer Hint */}
          <div className="p-4 text-center border-t border-zinc-800 bg-zinc-950/30">
            <p className="text-xs text-zinc-500 uppercase tracking-widest animate-pulse font-semibold">
              Tap to see next skill
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCards;
