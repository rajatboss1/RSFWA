
import React from 'react';
import ImpactCards from './ImpactCards';

const SectionOne: React.FC = () => {
  return (
    <section id="why-me" className="min-h-screen pt-24 pb-16 px-6 max-w-5xl mx-auto flex flex-col justify-center overflow-hidden">
      <div className="space-y-8 md:text-center">
        <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm animate-pulse">
          01. Why Me for Pocket FM
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          Building Content That <br className="hidden md:block" />
          <span className="gradient-text">Retains & Scales</span>
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          At <span className="text-white font-semibold">JioCinema</span>, <span className="text-white font-semibold">TrueFan AI</span>, and <span className="text-white font-semibold">Ormax</span>, I've worked at the exact intersection Pocket FM owns: <br className="hidden md:block" />
          <span className="text-white underline decoration-orange-500/50 underline-offset-4 decoration-2">Content as the Growth Engine.</span>
        </p>

        {/* Mobile-first Stack */}
        <div className="mt-12 md:mt-16 mb-12">
           <ImpactCards />
        </div>

        <div className="hidden md:block mt-16 text-center">
           <div className="inline-block p-[1px] bg-gradient-to-r from-zinc-800 via-orange-500/50 to-zinc-800 rounded-2xl w-full max-w-3xl">
              <div className="bg-zinc-950 p-6 rounded-2xl flex items-center justify-center gap-6">
                <p className="text-xl font-bold italic tracking-tight text-white">
                  "Content wins when creativity, data, and operations move together."
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
