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
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Navigation className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 08 // CLOSED-LOOP MISSION INTELLIGENCE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          The Closed-Loop Investigation Engine
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          VARUNA06 goes beyond simple detection. It autonomously drives an iterative 8-stage investigation loop:
          <span className="text-cyan-300 font-mono font-bold block mt-1">
            DEPLOY → DETECT → SCORE → DECIDE → MOVE → RESCAN → CONFIRM → MAP
          </span>
        </p>
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
                  ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400'
                  : isPassed
                  ? 'bg-[#091b36] border-cyan-900/50 text-slate-300 hover:border-cyan-500/40'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                  STAGE {stage.stageNumber}
                </span>
                {isPassed && <Check className="w-3.5 h-3.5 text-emerald-400" />}
              </div>
              <div className="text-xs font-bold font-mono truncate">{stage.title}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Card */}
      <div className="bg-[#06142a]/95 border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-cyan-500/20 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-xl shadow-cyan-500/20 shrink-0">
              {getStageIcon(currentStage.iconName)}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">
                STAGE {currentStage.stageNumber} OF 08
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-0.5">
                {currentStage.title}
              </h3>
              <p className="text-sm font-mono text-cyan-300/80 mt-1">{currentStage.tagline}</p>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveStageIndex(Math.max(0, activeStageIndex - 1))}
              disabled={activeStageIndex === 0}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              title="Previous Stage"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-slate-400">
              {activeStageIndex + 1} / {MISSION_STAGES.length}
            </span>

            <button
              onClick={() => setActiveStageIndex(Math.min(MISSION_STAGES.length - 1, activeStageIndex + 1))}
              disabled={activeStageIndex === MISSION_STAGES.length - 1}
              className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400 hover:bg-cyan-500/30 text-cyan-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              title="Next Stage"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans mb-8">
          {currentStage.description}
        </p>

        {/* Technical Sub-Panels: Action Protocol, Sensor Verification, Decision Gate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Action Protocol */}
          <div className="p-4 rounded-2xl bg-[#091e3e] border border-cyan-900/50">
            <span className="text-[10px] font-mono text-cyan-400 font-bold block uppercase mb-1.5">
              ACTION PROTOCOL
            </span>
            <p className="text-xs text-slate-300 font-mono leading-relaxed">
              {currentStage.actionProtocol}
            </p>
          </div>

          {/* Sensor Verification */}
          <div className="p-4 rounded-2xl bg-[#091e3e] border border-cyan-900/50">
            <span className="text-[10px] font-mono text-teal-400 font-bold block uppercase mb-1.5">
              SENSOR VERIFICATION BUS
            </span>
            <p className="text-xs text-slate-300 font-mono leading-relaxed">
              {currentStage.sensorVerification}
            </p>
          </div>

          {/* Decision Gate */}
          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
            <span className="text-[10px] font-mono text-amber-400 font-bold block uppercase mb-1.5">
              DECISION GATE RULE
            </span>
            <p className="text-xs text-slate-200 font-mono font-semibold leading-relaxed">
              {currentStage.decisionGate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
