
import React, { useState, useEffect, useRef } from 'react';

interface OnboardingModalProps {
  onComplete: () => void;
}

const SKILLS = [
  "Execution Speed",
  "Problem Solving",
  "Communication",
  "Ownership / Accountability",
  "Strategic Growth"
];

const OnboardingModal: React.FC<OnboardingModalProps> = ({ onComplete }) => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OnboardingModal.tsx:17',message:'OnboardingModal component called',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  
  const [rating, setRating] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isAutoFilled, setIsAutoFilled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [interactionDetected, setInteractionDetected] = useState(false);
  
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationRef = useRef<number | null>(null);

  const stopAutoAction = () => {
    if (!interactionDetected) {
      setInteractionDetected(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    // Start 3-second inactivity timer
    timerRef.current = setTimeout(() => {
      if (!interactionDetected) {
        startAutoComplete();
      }
    }, 3000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [interactionDetected]);

  const startAutoComplete = () => {
    setIsAutoFilled(true);
    // Animate slider 0 -> 100
    let startTimestamp: number | null = null;
    const duration = 1500; // Slightly slower animation for visual impact

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const currentRating = Math.min(Math.floor((progress / duration) * 100), 100);
      
      setRating(currentRating);

      if (progress < duration) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setSelectedSkills(SKILLS);
        // AUTO SUBMIT after a tiny delay for the user to see the selection
        setTimeout(() => {
          handleSubmit();
        }, 400);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const toggleSkill = (skill: string) => {
    stopAutoAction();
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    stopAutoAction();
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Reveal the site after celebration
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  const isCtaEnabled = rating > 0 && selectedSkills.length > 0;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 overflow-hidden">
        {/* Celebration Confetti Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                backgroundColor: ['#ff5722', '#10b981', '#3b82f6', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-12 shadow-[0_50px_100px_-20px_rgba(16,185,129,0.3)] border-4 border-emerald-500 text-center animate-in zoom-in duration-500 relative z-10">
          <div className="w-24 h-24 bg-emerald-100 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-emerald-600 shadow-xl shadow-emerald-500/20 rotate-12 scale-110 animate-bounce">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">Meet Rajat</h2>
          <p className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs">Unlocking Performance</p>
          
          <div className="mt-10 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 animate-[loading_3s_linear_forwards]" style={{width: '0%'}}></div>
          </div>
        </div>
        <style>{`
          @keyframes loading {
            to { width: 100%; }
          }
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
          }
          .animate-confetti {
            animation-name: confetti;
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            animation-iteration-count: infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-2 border-slate-100 p-8 md:p-12 relative overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-emerald-500 to-orange-500"></div>
        
        <header className="mb-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
            Candidate Feedback
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Onboarding Assessment</h2>
          <p className="text-slate-500 text-xs font-bold mt-2">Help us evaluate Rajat's fit for the growth team.</p>
        </header>

        <div className="space-y-10">
          {/* Rating Slider */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Performance Score</label>
              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-black transition-colors duration-300 ${rating > 70 ? 'text-emerald-500' : 'text-slate-900'}`}>{rating}</span>
                <span className="text-sm font-bold text-slate-400">/100</span>
              </div>
            </div>
            <div className="relative h-12 flex items-center">
              <input 
                type="range"
                min="0"
                max="100"
                value={rating}
                onChange={handleSliderChange}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Skill Selection */}
          <div className="space-y-6">
            <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Expertise Checklist</label>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`
                    px-5 py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 border-2
                    ${selectedSkills.includes(skill) 
                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                      : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'}
                  `}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer & CTA */}
        <footer className="mt-12 flex flex-col items-center gap-6">
          <button
            onClick={handleSubmit}
            disabled={!isCtaEnabled}
            className={`
              w-full py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 active:scale-95
              ${isCtaEnabled 
                ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 hover:bg-emerald-600 hover:shadow-emerald-500/30' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'}
            `}
          >
            Submit Performance Review
          </button>
          
          {isAutoFilled && !interactionDetected && (
             <div className="flex items-center gap-2 text-emerald-600 animate-pulse">
                <span className="text-[10px] font-black uppercase tracking-widest">Analyzing track record... Please wait</span>
             </div>
          )}
          
          {!interactionDetected && !isAutoFilled && (
             <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                Starting system diagnostic...
             </div>
          )}
        </footer>
      </div>

      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 4px solid #fff;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
          transition: transform 0.2s ease;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default OnboardingModal;
