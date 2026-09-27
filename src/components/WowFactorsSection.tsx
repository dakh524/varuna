import React from 'react';
import { WOW_FACTORS } from '../data/mockData';
import { Sparkles, Trophy, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const WowFactorsSection: React.FC = () => {
  return (
    <section id="wow-factors" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>SECTION 25 // COMPETITION DIFFERENTIATORS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          The Five WOW Factors
        </h2>
        <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-slate-900 border border-cyan-400/40 max-w-2xl mx-auto shadow-2xl">
          <p className="text-sm md:text-base font-bold font-mono text-cyan-300">
            “VARUNA06 does not just detect an anomaly.
            <br />
            It investigates whether the anomaly deserves attention.”
          </p>
        </div>
      </div>

      {/* 5 WOW Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WOW_FACTORS.map((wow, idx) => (
          <div
            key={wow.id}
            className={`p-6 rounded-3xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-cyan-400 transition-all hover:-translate-y-1 ${
              idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/15 mb-3">
                <span className="text-xs font-mono font-black text-cyan-400">WOW FACTOR {wow.id}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {wow.impactMetric}
                </span>
              </div>
              <h3 className="text-lg font-bold font-mono text-white mb-1">{wow.title}</h3>
              <p className="text-xs font-mono text-cyan-400/80 mb-3">{wow.tagline}</p>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{wow.description}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-cyan-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Smart India Hackathon 2026</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
