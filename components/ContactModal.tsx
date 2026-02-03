
import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Brand Card */}
      <div className="relative w-full max-w-sm bg-white border-2 border-orange-500 rounded-[3rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300 ease-out flex flex-col items-center">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-all font-black text-xl"
        >
          &times;
        </button>
        
        <div className="text-center space-y-8 w-full mt-6">
          <div className="w-24 h-24 bg-orange-600 rounded-[2rem] mx-auto flex items-center justify-center text-5xl shadow-2xl shadow-orange-600/30 rotate-3">
            🏁
          </div>
          
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-2">Connect Now</h3>
            <p className="text-orange-600 text-xs font-black uppercase tracking-[0.3em]">Fuel the Next Phase</p>
          </div>

          <div className="space-y-4 pt-4 w-full">
            <a 
              href="mailto:rajatwork2000@gmail.com" 
              className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-500/50 hover:bg-white transition-all group active:scale-[0.98] shadow-sm"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Email</span>
                <span className="text-sm font-black text-slate-900 truncate max-w-[180px]">rajatwork2000@gmail.com</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white text-slate-300 shadow-sm transition-all">
                →
              </div>
            </a>

            <a 
              href="tel:+918750978316" 
              className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-500/50 hover:bg-white transition-all group active:scale-[0.98] shadow-sm"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Phone</span>
                <span className="text-sm font-black text-slate-900">+91 8750978316</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white text-slate-300 shadow-sm transition-all">
                →
              </div>
            </a>
          </div>

          <button 
            onClick={onClose}
            className="w-full pt-10 pb-4 text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] hover:text-orange-600 transition-colors"
          >
            Finish Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
