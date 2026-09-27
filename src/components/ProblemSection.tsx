import React from 'react';
import { AlertTriangle, DollarSign, Search, EyeOff, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono mb-4">
          <EyeOff className="w-3.5 h-3.5 text-rose-400" />
          <span>SECTION 04 // THE GEOPHYSICAL EXPLORATION BOTTLENECK</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          The Ocean Floor is Still a Blind Spot
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Over 80% of the seabed remains unmapped at high resolution. Deep-sea mineral exploration currently demands multi-million dollar platforms, yet single-pass surveys frequently waste critical resources chasing false positives.
        </p>
      </div>

      {/* Visual Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Astronomical Survey Costs */}
        <div className="p-6 rounded-2xl bg-[#06142a]/90 border border-rose-500/25 shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-4">
            <DollarSign className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-rose-400 font-bold block mb-1">PROHIBITIVE COST</span>
          <h3 className="text-lg font-bold text-white mb-2">Specialized Research Vessels</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
            Heavy seismic, CSEM, and deep ROV vessels cost upwards of <strong className="text-white">$40,000 to $80,000/day</strong>. Preliminary screening is often too expensive for universities and regional exploration.
          </p>
          <div className="text-[11px] font-mono text-slate-400 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            • High mobilization barriers<br/>• Bulky ship-scale winches
          </div>
        </div>

        {/* Card 2: False Positive Plagues */}
        <div className="p-6 rounded-2xl bg-[#06142a]/90 border border-amber-500/25 shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-amber-400 font-bold block mb-1">DATA AMBIGUITY</span>
          <h3 className="text-lg font-bold text-white mb-2">Single-Sensor False Positives</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
            A single magnetic or EM perturbation does <strong className="text-white">not</strong> equal a valuable resource. Basalt bedrock, discarded ship steel, salinity variations, and vehicle pitch create false alerts.
          </p>
          <div className="text-[11px] font-mono text-slate-400 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            • Conductivity masking<br/>• Vehicle tilt distortions
          </div>
        </div>

        {/* Card 3: One-Pass Blind Spot */}
        <div className="p-6 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
            <Search className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">NO LOCAL INVESTIGATION</span>
          <h3 className="text-lg font-bold text-white mb-2">One-Pass Fly-By Surveys</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
            Traditional towed bodies cannot stop or turn back easily. They record a spike and fly onward, leaving anomalies unverified until expensive follow-up cruises months later.
          </p>
          <div className="text-[11px] font-mono text-slate-400 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            • Zero local rescan capability<br/>• Delayed, disconnected analysis
          </div>
        </div>
      </div>

      {/* VARUNA06 Remedy Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-[#071630] border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase block mb-1">
            THE VARUNA06 ARCHITECTURAL RESPONSE
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Closed-Loop Multi-Physics Anomaly Investigation
          </h3>
          <p className="text-xs md:text-sm text-slate-300 mt-2 max-w-2xl font-sans leading-relaxed">
            By coupling multi-modal physics (EM + Magnetic + Electrical + Acoustic + Optical) with real-time autonomous 4-point rescan, VARUNA06 filters out false positives directly at the seafloor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <div className="px-4 py-3 rounded-xl bg-[#081b38] border border-cyan-500/20 text-center">
            <span className="text-lg font-bold font-mono text-cyan-300 block">4 Physics</span>
            <span className="text-[10px] text-slate-400 font-mono">Independent Domains</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-[#081b38] border border-cyan-500/20 text-center">
            <span className="text-lg font-bold font-mono text-teal-300 block">87% Coherence</span>
            <span className="text-[10px] text-slate-400 font-mono">Target Validation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
