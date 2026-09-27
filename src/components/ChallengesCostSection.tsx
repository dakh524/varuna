import React from 'react';
import { CHALLENGES_AND_RESPONSES } from '../data/mockData';
import { AlertCircle, ArrowRight, ShieldCheck, DollarSign, TrendingDown, Layers, Zap } from 'lucide-react';

export const ChallengesCostSection: React.FC = () => {
  return (
    <section id="challenges-cost" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 20 & 21 // CHALLENGES & ECONOMIC IMPACT</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Engineering Challenges & Cost Multiplier
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Subsea ocean engineering demands pragmatic solutions to extreme physics. See how VARUNA06 addresses marine challenges and dramatically lowers the financial threshold for exploratory surveys.
        </p>
      </div>

      {/* Challenges & Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {CHALLENGES_AND_RESPONSES.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <span className="text-xs font-mono font-bold text-amber-800">CHALLENGE {item.id}</span>
                <span className="text-[10px] font-mono text-slate-500 font-bold">Subsea Physics</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.challenge}</h3>
              <p className="text-xs text-slate-700 leading-relaxed font-sans mb-4 font-medium">{item.problemDesc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue-900 mb-1">
                <Zap className="w-4 h-4 text-blue-700" />
                <span>ENGINEERING REMEDY:</span>
              </div>
              <h4 className="text-xs font-mono font-bold text-emerald-800 mb-1.5">{item.engineeringResponse}</h4>
              <p className="text-xs text-slate-800 leading-relaxed font-sans font-medium">{item.solutionDetail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 21: Cost Impact & Strategic Role */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono font-bold text-blue-800 tracking-widest uppercase block mb-1">
            STRATEGIC ROLE & PRELIMINARY SCREENING
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            “LOWER ENTRY COST → TARGETED DETAILED EXPLORATION”
          </h3>
          <p className="text-xs md:text-sm text-slate-700 mt-2 font-sans leading-relaxed font-medium">
            VARUNA06 is <strong className="text-slate-900 font-bold">not</strong> built to replace $20M multi-ton deep-sea survey systems.
            Instead, it acts as an agile, highly accessible <strong className="text-blue-800 font-bold">preliminary screening and investigation layer</strong> that narrows vast ocean expanses to high-potential target zones.
          </p>
        </div>

        {/* 3 Comparative Cost Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono font-medium">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 font-bold block uppercase mb-1">Traditional Approach</span>
            <span className="text-lg font-bold text-rose-800 block mb-2">$50,000+ / Day</span>
            <p className="text-slate-700 font-sans leading-relaxed font-medium">
              Research vessel day-rates, massive deep ROVs, and heavy winch crews deployed blindly across broad swathes with huge downtime.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-300 shadow-sm">
            <span className="text-blue-900 font-bold block uppercase mb-1">VARUNA06 Screening</span>
            <span className="text-lg font-bold text-blue-900 block mb-2">Fractional Mobilization</span>
            <p className="text-slate-800 font-sans leading-relaxed font-semibold">
              Compact tethered payload deployable from regional craft of opportunity. Screen 10x more area per exploration grant.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 font-bold block uppercase mb-1">Downstream Benefit</span>
            <span className="text-lg font-bold text-emerald-800 block mb-2">Zero Wasted Dives</span>
            <p className="text-slate-700 font-sans leading-relaxed font-medium">
              Heavy coring and commercial robotic assets are deployed <em>only</em> to locations with verified multi-physics prospectivity and optical backing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
