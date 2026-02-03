
import React from 'react';

interface CVProps {
  onContactClick: () => void;
}

const CV: React.FC<CVProps> = ({ onContactClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-28 pb-24 text-slate-600">
      {/* Header */}
      <div className="mb-16 border-b-2 border-slate-100 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
           <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-none">Rajat <br className="md:hidden" /><span className="text-orange-600">Srivastava</span></h1>
           <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Growth Operations • AI Strategist • Content Lead</p>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-sm font-bold">
          <a href="mailto:rajatwork2000@gmail.com" className="text-orange-600 hover:text-orange-700 transition-colors">rajatwork2000@gmail.com</a>
          <span className="text-slate-900">+91-8750978316</span>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] text-slate-500 uppercase">New Delhi</span>
            <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] text-slate-500 uppercase">IIM Kashipur</span>
          </div>
        </div>
      </div>

      {/* Performance Summary / Experience */}
      <section className="mb-20">
        <div className="flex items-center gap-6 mb-10">
           <h2 className="text-3xl font-black text-slate-900 tracking-tight">Career Workout</h2>
           <div className="h-1 bg-orange-100 flex-1 rounded-full"></div>
           <span className="text-xs font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">2.5 Years Total</span>
        </div>

        <div className="space-y-16">
          {/* TrueFan AI */}
          <div className="relative pl-10 border-l-4 border-slate-100">
            <span className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-orange-600 rounded-full shadow-[0_0_15px_rgba(255,87,34,0.3)]"></span>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900">Manager Strategy & Operations (FO)</h3>
                <p className="text-orange-600 font-bold uppercase tracking-wide text-xs">TrueFan AI</p>
              </div>
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest bg-slate-50 px-3 py-1 rounded mt-2 md:mt-0">Nov’24 - Dec’25</span>
            </div>
            <ul className="space-y-3 text-base leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-orange-600 font-black">/</span> Delivered <strong className="text-slate-900">8M+ personalized AI videos</strong> at scale, orchestrating campaigns for Goibibo & Adani Wilmar.</li>
              <li className="flex gap-3"><span className="text-orange-600 font-black">/</span> Achieved <strong className="text-orange-600">7% conversion lift</strong> for Goibibo by designing seamless API integrations between marketing stacks.</li>
              <li className="flex gap-3"><span className="text-orange-600 font-black">/</span> Compressed AI GAN model training workflows from <strong className="text-slate-900">3 days to one-shot real-time</strong> pipelines.</li>
              <li className="flex gap-3"><span className="text-orange-600 font-black">/</span> Managed a 12-member cross-functional squad (editors, audio engineers) to own delivery SLAs and quality.</li>
            </ul>
          </div>

          {/* JioCinema */}
          <div className="relative pl-10 border-l-4 border-slate-100">
            <span className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-slate-900 rounded-full"></span>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                 <h3 className="text-2xl font-black text-slate-900">Sr. Executive – Content Strategy</h3>
                 <p className="text-slate-400 font-bold uppercase tracking-wide text-xs">JioCinema</p>
              </div>
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest bg-slate-50 px-3 py-1 rounded mt-2 md:mt-0">Jun’24 - Oct'24</span>
            </div>
            <ul className="space-y-3 text-base leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-slate-400 font-black">/</span> Drove <strong className="text-orange-600">23% CTR uplift</strong> via Mixpanel cohort diagnostics and strategic content placement.</li>
              <li className="flex gap-3"><span className="text-slate-400 font-black">/</span> Analyzed episodic retention for <strong className="text-slate-900">Bigg Boss</strong> (CEO’s Office) to guide programming decisions.</li>
              <li className="flex gap-3"><span className="text-slate-400 font-black">/</span> Built 6 real-time executive dashboards, saving <strong className="text-slate-900">5+ manual hours weekly</strong> for creative teams.</li>
            </ul>
          </div>

          {/* Ormax */}
          <div className="relative pl-10 border-l-4 border-slate-100">
            <span className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-slate-300 rounded-full"></span>
             <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                 <h3 className="text-2xl font-black text-slate-900">Data Analyst</h3>
                 <p className="text-slate-400 font-bold uppercase tracking-wide text-xs">Ormax Media</p>
              </div>
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest bg-slate-50 px-3 py-1 rounded mt-2 md:mt-0">Apr’23 - May’24</span>
            </div>
            <ul className="space-y-3 text-base leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-slate-400 font-black">/</span> Automated analytics workflows using Python, achieving <strong className="text-slate-900">20x operational efficiency</strong> gains.</li>
              <li className="flex gap-3"><span className="text-slate-400 font-black">/</span> Synthesized insights from 1,000+ weekly interviews to drive <strong className="text-slate-900">15% QoQ engagement growth</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training & Education */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <section>
          <div className="flex items-center gap-4 mb-8">
             <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Educational Base</h2>
             <div className="h-1 bg-slate-100 flex-1 rounded-full"></div>
          </div>
          <div className="space-y-4">
             <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-orange-200 transition-colors">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-black text-slate-900 text-lg">MBA</h3>
                   <p className="text-slate-500 font-bold text-sm">IIM Kashipur</p>
                 </div>
                 <span className="text-xs font-black text-orange-600 bg-white px-2 py-1 rounded">2023</span>
               </div>
             </div>
             <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-orange-200 transition-colors">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-black text-slate-900 text-lg">BSc Physics (H)</h3>
                   <p className="text-slate-500 font-bold text-sm">Ramjas College, DU</p>
                 </div>
                 <span className="text-xs font-black text-orange-600 bg-white px-2 py-1 rounded">2021</span>
               </div>
             </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
             <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Tech & Awards</h2>
             <div className="h-1 bg-slate-100 flex-1 rounded-full"></div>
          </div>
          <ul className="space-y-6">
             <li className="flex gap-4">
               <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 text-orange-600">🤖</div>
               <div>
                  <h4 className="font-black text-slate-900 leading-tight">RAG Pipeline Architect</h4>
                  <p className="text-sm text-slate-500 mt-1">Built retrieval agents in Python synthesizing 300+ sources.</p>
               </div>
             </li>
             <li className="flex gap-4">
               <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">🏅</div>
               <div>
                  <h4 className="font-black text-slate-900 leading-tight">HUL Changemaker</h4>
                  <p className="text-sm text-slate-500 mt-1">Selected Top 50 B-School candidates nationwide (2021).</p>
               </div>
             </li>
          </ul>
        </section>
      </div>
      
      <div className="text-center pt-16 border-t-2 border-slate-100">
        <button 
          onClick={onContactClick}
          className="inline-flex items-center gap-3 px-12 py-5 bg-orange-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all active:scale-95 shadow-2xl shadow-orange-600/20"
        >
          <span>🔥</span> Ready for the Fitpass Workout
        </button>
      </div>

    </div>
  );
};

export default CV;
