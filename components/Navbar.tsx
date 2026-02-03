
import React from 'react';

interface NavbarProps {
  view: 'deck' | 'cv';
  setView: (view: 'deck' | 'cv') => void;
}

const Navbar: React.FC<NavbarProps> = ({ view, setView }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-600 rounded-lg md:rounded-xl flex items-center justify-center font-black text-white shadow-xl shadow-orange-600/20 text-xs md:text-sm">
          FP
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-xs md:text-sm tracking-tight text-slate-900 leading-tight">Rajat S.</span>
          <span className="text-[8px] md:text-[10px] font-bold text-orange-600 uppercase tracking-tighter">Candidate x Fitpass</span>
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-1 rounded-xl md:rounded-2xl shadow-xl pointer-events-auto flex gap-1">
        <button 
           onClick={() => setView('deck')}
           className={`px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[9px] md:text-xs font-extrabold uppercase tracking-wide transition-all ${view === 'deck' ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' : 'text-slate-500 hover:text-orange-600 hover:bg-orange-50'}`}
        >
          Microsite
        </button>
        <button 
           onClick={() => setView('cv')}
           className={`px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[9px] md:text-xs font-extrabold uppercase tracking-wide transition-all ${view === 'cv' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
        >
          Performance CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
