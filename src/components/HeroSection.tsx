import React from 'react';
import { Compass, Play, Box, ArrowDown, Activity, Radio, Waves, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenMission: () => void;
  onOpenJudgeMode: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMission, onOpenJudgeMode }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background caustics and subtle bathymetric glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Marine Particles (Marine Snow) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-sky-200 rounded-full animate-ping duration-1000" />
      </div>

      {/* Top Status Indicators (Prominently fulfilling Section 3 specifications) */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <div className="px-3.5 py-1.5 rounded-full bg-[#071732]/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2 backdrop-blur-md shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>● SYSTEM CONCEPT</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-[#071732]/90 border border-teal-500/30 text-xs font-mono text-teal-300 flex items-center gap-2 backdrop-blur-md shadow-lg shadow-teal-500/10">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          <span>● SENSOR FUSION ACTIVE</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-[#071732]/90 border border-amber-500/30 text-xs font-mono text-amber-300 flex items-center gap-2 backdrop-blur-md shadow-lg shadow-amber-500/10">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>● MISSION MODE: SIMULATION</span>
        </div>
      </div>

      {/* Main Hero Typography */}
      <div className="text-center max-w-4xl mx-auto my-auto relative z-10">
        <div className="inline-block mb-3">
          <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-cyan-400 uppercase bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-500/30">
            “Exploring the Unseen”
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-4">
          VARUNA<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">06</span>
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-mono tracking-wider text-slate-200 uppercase mb-4">
          LOW-COST TETHERED SEAFLOOR RESOURCE ANOMALY DETECTION
        </h2>

        <p className="text-base sm:text-xl font-mono text-cyan-300 font-semibold mb-8">
          “Detect. Score. Rescan. Confirm. Map.”
        </p>

        <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          A closed-loop subsea robotic payload combining multi-frequency electromagnetic induction, 3-axis magnetometry, galvanic self-potentials, acoustic altimetry, and optical confirmation to identify resource-related physical anomalies without blind guessing.
        </p>

        {/* Hero Interactive CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#robot-3d"
            className="px-6 py-3.5 rounded-2xl bg-cyan-500 text-black font-mono font-bold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/25 active:scale-95"
          >
            <Box className="w-4 h-4" />
            <span>EXPLORE 3D VARUNA06</span>
          </a>

          <a
            href="#simulator"
            className="px-6 py-3.5 rounded-2xl bg-[#091f3e] border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center gap-2 hover:bg-cyan-950/80 hover:border-cyan-400 transition-all shadow-xl active:scale-95"
          >
            <Radio className="w-4 h-4 text-cyan-400" />
            <span>LAUNCH LIVE SIMULATION</span>
          </a>

          <button
            onClick={onOpenMission}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-400 text-teal-200 font-mono font-bold text-sm flex items-center gap-2 hover:bg-teal-500/30 transition-all shadow-lg active:scale-95"
          >
            <Play className="w-4 h-4 text-teal-400" />
            <span>RUN FULL MISSION DEMO</span>
          </button>
        </div>
      </div>

      {/* Bottom Live Environmental Banner */}
      <div className="mt-12 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span>OPERATIONAL STANDOFF: <strong className="text-slate-200">1.25m LOCK</strong></span>
          <span className="hidden sm:inline">•</span>
          <span>ESTIMATED DEPTH: <strong className="text-slate-200">142.5m</strong></span>
        </div>

        <div className="flex items-center gap-4">
          <span>SMART INDIA HACKATHON 2026 // PS: SIH26064</span>
          <a href="#problem" className="text-cyan-400 flex items-center gap-1 hover:text-cyan-300">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
