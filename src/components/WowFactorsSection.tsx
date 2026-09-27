import React from 'react';
import { WOW_FACTORS } from '../data/mockData';
import { Sparkles, Trophy, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const WowFactorsSection: React.FC = () => {
  return (
    <section id="wow-factors" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Trophy className="w-3.5 h-3.5 text-amber-600" />
          <span>SECTION 25 // KEY INNOVATION DIFFERENTIATORS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          The Five WOW Factors
        </h2>
        <div className="p-5 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto shadow-xl">
          <p className="text-sm md:text-base font-bold font-mono text-blue-900">
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
            className={`p-6 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between hover:border-blue-400 transition-all hover:-translate-y-1 ${
              idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <span className="text-xs font-mono font-black text-blue-900">WOW FACTOR {wow.id}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 font-bold">
                  {wow.impactMetric}
                </span>
              </div>
              <h3 className="text-lg font-bold font-mono text-slate-900 mb-1">{wow.title}</h3>
              <p className="text-xs font-mono text-blue-700 font-bold mb-3">{wow.tagline}</p>
              <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">{wow.description}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600 font-bold">
              <span>National Subsea Exploration Authority</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
