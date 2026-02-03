
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Deck from './components/Deck';
import CV from './components/CV';
import ContactModal from './components/ContactModal';
import AIAssistant from './components/AIAssistant';
import OnboardingModal from './components/OnboardingModal';

const App: React.FC = () => {
  const [view, setView] = useState<'deck' | 'cv'>('deck');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const isComplete = localStorage.getItem('onboardingComplete');
    if (!isComplete) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setShowOnboarding(false);
  };

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
