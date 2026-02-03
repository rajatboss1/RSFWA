
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Deck from './components/Deck';
import CV from './components/CV';
import ContactModal from './components/ContactModal';
import AIAssistant from './components/AIAssistant';
import OnboardingModal from './components/OnboardingModal';

// #region agent log
fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:9',message:'App.tsx module loaded - imports succeeded',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
// #endregion

const App: React.FC = () => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:14',message:'App component function called',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  
  const [view, setView] = useState<'deck' | 'cv'>('deck');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:24',message:'App useEffect running',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    const isComplete = localStorage.getItem('onboardingComplete');
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:30',message:'localStorage check',data:{onboardingComplete:isComplete},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    if (!isComplete) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setShowOnboarding(false);
  };

  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/3546312d-2b7a-4d7c-86c5-b3b2cdc98a8a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:42',message:'App render - returning JSX',data:{view,isContactOpen,showOnboarding},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden fixed inset-0 selection:bg-orange-100 selection:text-orange-600">
      <div className="absolute inset-0 bg-fitpass-grid -z-10" />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-orange-50/50 to-transparent pointer-events-none -z-10" />
      
      {/* Onboarding Modal Overlay */}
      {showOnboarding && <OnboardingModal onComplete={handleOnboardingComplete} />}

      <div className={`transition-all duration-700 h-full w-full ${showOnboarding ? 'blur-xl scale-110 pointer-events-none' : 'blur-0 scale-100'}`}>
        <Navbar view={view} setView={setView} />
        
        <main className={`w-full relative z-0 transition-all duration-300 ${view === 'deck' ? 'h-full flex flex-col items-center justify-center overflow-hidden' : 'h-full overflow-y-auto scroll-smooth'}`}>
          {view === 'deck' ? (
            <Deck onContactClick={() => setIsContactOpen(true)} />
          ) : (
            <CV onContactClick={() => setIsContactOpen(true)} />
          )}
        </main>
        
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        
        {/* Brand Hint */}
        {view === 'deck' && (
          <div className="fixed bottom-4 left-6 text-slate-400 text-[9px] font-bold uppercase tracking-widest pointer-events-none z-40">
            Fitness-First Growth Architecture
          </div>
        )}

        {/* AI Performance Coach */}
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;
