
import React from 'react';

const SectionTwo: React.FC = () => {
  // Video-style caption steps
  const steps = [
    { text: "Identify the behavior we need to change.", color: "text-white" },
    { text: "Design the content intervention.", color: "text-orange-400" },
    { text: "Measure the signal that proves it works.", color: "text-purple-400" },
    { text: "Scale the workflow efficiently.", color: "text-white" }
  ];

  const valueProps = [
    { title: "Content × Retention", desc: "Cohorts, episodic loops, and engagement.", icon: "🔥" },
    { title: "Execution Ownership", desc: "Strategy to rollout. No handoffs.", icon: "⚙️" },
    { title: "AI-Native Mindset", desc: "LLM workflows as default tools.", icon: "⚡" },
    { title: "Creative Enablement", desc: "Helping creators decide with data.", icon: "🎨" }
  ];

  return (
    <section id="how-i-think" className="min-h-screen pt-24 pb-32 px-6 max-w-md md:max-w-5xl mx-auto">
      <div className="space-y-20">
        
        {/* Header */}
        <div className="space-y-4 md:text-center">
          <p className="text-purple-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
            02. How I Think & Add Value
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Solving Problems <br/> <span className="text-zinc-600">at Scale</span>
          </h2>
        </div>

        {/* Video Style Steps */}
        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-1 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="mb-10 ml-8 md:ml-0 md:mb-0 md:text-center group">
               <div className="absolute -left-[9px] md:relative md:left-auto md:inline-flex md:mb-4 w-4 h-4 bg-zinc-800 rounded-full border-4 border-zinc-950 group-hover:bg-orange-500 transition-colors"></div>
               <p className={`text-2xl md:text-4xl font-extrabold leading-tight ${step.color}`}>
                 {step.text}
               </p>
            </div>
          ))}
        </div>

        {/* Value Props Grid - Clean Cards */}
        <div className="space-y-8">
           <h3 className="text-2xl font-bold text-center text-zinc-500 uppercase tracking-widest">The Toolkit</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {valueProps.map((v, i) => (
                <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 flex items-center gap-5 hover:bg-zinc-900 transition-colors">
                  <span className="text-3xl">{v.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-white">{v.title}</h4>
                    <p className="text-sm text-zinc-400 leading-snug mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Closing Statement */}
        <div className="pt-12 text-center space-y-6">
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            I’m not just executing a playbook. <br/>
            <span className="gradient-text">I’m helping build one.</span>
          </h3>
          
          <div className="inline-block px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            Rajat Srivastava • Ready to Scale
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionTwo;
