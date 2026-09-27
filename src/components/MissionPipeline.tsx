import React, { useState } from 'react';
import { MISSION_STAGES } from '../data/mockData';
import {
  Anchor,
  Search,
  BarChart3,
  GitBranch,
  Navigation,
  RefreshCw,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Check
} from 'lucide-react';

export const MissionPipeline: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const currentStage = MISSION_STAGES[activeStageIndex];

  const getStageIcon = (name: string) => {
    switch (name) {
      case 'Anchor': return <Anchor className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Navigation': return <Navigation className="w-5 h-5" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="mission-intelligence" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* 🌊 03 — SENSOR → EVIDENCE PIPELINE VISUAL FLOWCHART 🌊 */}
      <div className="bg-[#0f172a] text-white border-2 border-blue-500/40 rounded-3xl p-6 md:p-8 shadow-2xl mb-12">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
            03 — SENSOR → EVIDENCE PROCESSING PIPELINE
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold text-white">
            Raw Physics to Verified Target GIS Map
          </h3>
          <p className="text-xs text-slate-300 font-medium mt-1">
            The core intelligence of VARUNA06: transforming continuous multi-modal physics signals into verified anomaly entries.
          </p>
        </div>

        {/* Visual Step-by-Step Flowchart */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
          
          {/* Step 1 */}
          <div className="w-full md:w-auto p-3 rounded-2xl bg-slate-800 border border-slate-700 text-center flex-1">
            <span className="text-amber-400 font-bold block mb-1">01 SEAFLOOR</span>
            <span className="text-slate-300 font-sans text-[11px] block">Ocean Seabed Survey</span>
          </div>

          <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 hidden md:block" />
          <span className="text-blue-400 font-bold md:hidden">↓</span>

          {/* Step 2: Multi-Sensor Suite */}
          <div className="w-full md:w-auto p-3 rounded-2xl bg-blue-950 border border-blue-500/50 text-center flex-2">
            <span className="text-blue-300 font-bold block mb-1">02 MULTI-SENSOR SUITE</span>
            <div className="grid grid-cols-3 gap-1 text-[9px] text-slate-300 font-sans">
              <span className="bg-slate-900 px-1 py-0.5 rounded">EMI</span>
              <span className="bg-slate-900 px-1 py-0.5 rounded">MAG</span>
              <span className="bg-slate-900 px-1 py-0.5 rounded">GALV SP</span>
              <span className="bg-slate-900 px-1 py-0.5 rounded">ACOUSTIC</span>
              <span className="bg-slate-900 px-1 py-0.5 rounded">CAMERA</span>
              <span className="bg-slate-900 px-1 py-0.5 rounded">DEPTH</span>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 hidden md:block" />
          <span className="text-blue-400 font-bold md:hidden">↓</span>

          {/* Step 3 */}
          <div className="w-full md:w-auto p-3 rounded-2xl bg-slate-800 border border-slate-700 text-center flex-1">
            <span className="text-emerald-400 font-bold block mb-1">03 FUSION</span>
            <span className="text-slate-300 font-sans text-[11px] block">Signal Processing & Physics Fusion</span>
          </div>

          <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 hidden md:block" />
          <span className="text-blue-400 font-bold md:hidden">↓</span>

          {/* Step 4 */}
          <div className="w-full md:w-auto p-3 rounded-2xl bg-purple-950 border border-purple-500/50 text-center flex-1">
            <span className="text-purple-300 font-bold block mb-1">04 CONFIDENCE</span>
            <span className="text-amber-300 font-extrabold text-sm block">0 – 100 Score</span>
          </div>

          <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 hidden md:block" />
          <span className="text-blue-400 font-bold md:hidden">↓</span>

          {/* Step 5 */}
          <div className="w-full md:w-auto p-3 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-center flex-1">
            <span className="text-emerald-300 font-bold block mb-1">05 VERIFIED MAP</span>
            <span className="text-slate-300 font-sans text-[11px] block">Spatial Rescan & GIS Entry</span>
          </div>

        </div>
      </div>

      {/* Stage Number Tabs */}
      <div className="flex items-center justify-between gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {MISSION_STAGES.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          const isPassed = idx < activeStageIndex;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`flex-1 min-w-[120px] p-3 rounded-xl border text-left transition-all backdrop-blur-md ${
                isActive
                  ? 'bg-blue-600 border-blue-700 text-white shadow-lg font-bold'
                  : isPassed
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-semibold'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 font-medium'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                  STAGE {stage.stageNumber}
                </span>
                {isPassed && <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />}
              </div>
              <div className="text-xs font-bold font-mono truncate">{stage.title}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-900">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-700 shadow-md shrink-0">
              {getStageIcon(currentStage.iconName)}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-blue-800 tracking-widest uppercase">
                STAGE {currentStage.stageNumber} OF 08
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-0.5">
                {currentStage.title}
              </h3>
              <p className="text-sm font-mono text-blue-700 mt-1 font-bold">{currentStage.tagline}</p>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveStageIndex(Math.max(0, activeStageIndex - 1))}
              disabled={activeStageIndex === 0}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-slate-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              title="Previous Stage"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-slate-600 font-bold">
              {activeStageIndex + 1} / {MISSION_STAGES.length}
            </span>

            <button
              onClick={() => setActiveStageIndex(Math.min(MISSION_STAGES.length - 1, activeStageIndex + 1))}
              disabled={activeStageIndex === MISSION_STAGES.length - 1}
              className="p-2.5 rounded-xl bg-blue-600 border border-blue-700 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed font-bold"
              title="Next Stage"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-sm md:text-base text-slate-800 leading-relaxed font-sans mb-8 font-medium">
          {currentStage.description}
        </p>

        {/* Technical Sub-Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-mono text-blue-800 font-extrabold block uppercase mb-1.5">
              ACTION PROTOCOL
            </span>
            <p className="text-xs text-slate-800 font-mono leading-relaxed font-medium">
              {currentStage.actionProtocol}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-mono text-emerald-800 font-extrabold block uppercase mb-1.5">
              SENSOR VERIFICATION BUS
            </span>
            <p className="text-xs text-slate-800 font-mono leading-relaxed font-medium">
              {currentStage.sensorVerification}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-[10px] font-mono text-amber-900 font-extrabold block uppercase mb-1.5">
              DECISION GATE RULE
            </span>
            <p className="text-xs text-slate-900 font-mono font-bold leading-relaxed">
              {currentStage.decisionGate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
