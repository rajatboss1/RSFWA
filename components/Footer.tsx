
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Interested in a deeper conversation?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:rajat.srivastava@example.com" 
              className="px-8 py-4 bg-white text-zinc-950 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Let’s build the next phase of content-led growth
            </a>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
            © 2024 / RS / Confidential Application
          </p>
          <p className="text-zinc-400 text-xs font-medium italic max-w-xs md:text-right leading-relaxed">
            “This application experience was built using AI-native workflows—reflecting how I approach scale, speed, and experimentation.”
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
