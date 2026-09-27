import React, { useState } from 'react';
import { RefreshCw, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Compass, Sliders, AlertOctagon } from 'lucide-react';

export const AdaptiveRescanSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'true_deposit' | 'false_positive'>('true_deposit');

  const scenarioData = {
    true_deposit: {
      zone: 'Zone C-03 (Massive Sulfide / Polymetallic Accumulation)',
      initialScore: 81,
      positions: [
        { id: 'Pos 1 (North +0.8m)', emAmp: '23.8 mV', phase: '41.8°', magDelta: '+460 nT', score: 82 },
        { id: 'Pos 2 (East +0.8m)', emAmp: '24.2 mV', phase: '42.5°', magDelta: '+490 nT', score: 84 },
        { id: 'Pos 3 (South -0.8m)', emAmp: '22.9 mV', phase: '40.9°', magDelta: '+440 nT', score: 80 },
        { id: 'Pos 4 (West -0.8m)', emAmp: '23.4 mV', phase: '41.6°', magDelta: '+475 nT', score: 81 }
      ],
      consistency: 87,
      finalConfidence: 84,
      verdict: 'CONFIRMED HIGH-CONFIDENCE SEABED TARGET',
      verdictType: 'success',
      reasoning: 'Spatial continuity observed across all 4 quadrants. Eddy current phase lag and magnetic gradient remained coherent with an extended conductive mineral body.'
    },
    false_positive: {
      zone: 'Zone D-02 (Discarded Trawl Cable / Ferrous Debris)',
      initialScore: 54,
      positions: [
        { id: 'Pos 1 (North +0.8m)', emAmp: '3.1 mV', phase: '6.2°', magDelta: '+45 nT', score: 19 },
        { id: 'Pos 2 (East +0.8m)', emAmp: '2.4 mV', phase: '4.8°', magDelta: '+20 nT', score: 14 },
        { id: 'Pos 3 (South -0.8m)', emAmp: '2.8 mV', phase: '5.1°', magDelta: '+35 nT', score: 16 },
        { id: 'Pos 4 (West -0.8m)', emAmp: '4.2 mV', phase: '8.4°', magDelta: '+60 nT', score: 23 }
      ],
      consistency: 42,
      finalConfidence: 28,
      verdict: 'FALSE POSITIVE IDENTIFIED & REJECTED',
      verdictType: 'rejected',
      reasoning: 'Signal dissipated sharply beyond the isolated metallic object (1/r^6 dipolar drop-off). Lack of spatial volume or galvanic self-potential halo proves it is not a mineral deposit.'
    }
  };

  const current = scenarioData[selectedScenario];

  return (
    <section id="adaptive-rescan" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 10 // CLOSED-LOOP ADAPTIVE RESCANNING</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Adaptive Rescan: Eliminating False Positives
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          VARUNA06 does not blindly trust a single-pass spike. When an anomaly is detected, the platform autonomously commands a 4-point cross-pattern inspection to evaluate spatial coherence before logging.
        </p>

        {/* Interactive Scenario Switcher */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setSelectedScenario('true_deposit')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              selectedScenario === 'true_deposit'
                ? 'bg-emerald-600 border-emerald-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            DEMO A: TRUE GEOLOGICAL DEPOSIT (ZONE C-03)
          </button>
          <button
            onClick={() => setSelectedScenario('false_positive')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              selectedScenario === 'false_positive'
                ? 'bg-amber-600 border-amber-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            DEMO B: FALSE POSITIVE REJECTION (ZONE D-02)
          </button>
        </div>
      </div>

      {/* Main Visualizer Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
        {/* Left: Star Pattern Cross Visualizer */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
          <div className="text-xs font-mono text-blue-900 font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>4-POINT CROSS-PATTERN GEOMETRY</span>
          </div>

          {/* Compass Star Diagram */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-blue-200" />
            <div className="absolute inset-8 rounded-full border border-blue-300 border-dashed" />
            <div className="absolute inset-16 rounded-full border border-blue-400" />

            <div className="absolute w-full h-[1px] bg-blue-300" />
            <div className="absolute h-full w-[1px] bg-blue-300" />

            {/* Epicenter */}
            <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-blue-600 shadow-md text-center">
              <span className="text-[10px] font-mono text-slate-500 font-bold">INITIAL</span>
              <span className="text-sm font-bold font-mono text-blue-900">{current.initialScore}/100</span>
            </div>

            {/* Position 1 (North) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                P1
              </div>
              <span className="text-[9px] font-mono text-slate-700 font-bold mt-1">+0.8m N</span>
            </div>

            {/* Position 2 (East) */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                P2
              </div>
              <span className="text-[9px] font-mono text-slate-700 font-bold mt-1">+0.8m E</span>
            </div>

            {/* Position 3 (South) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                P3
              </div>
              <span className="text-[9px] font-mono text-slate-700 font-bold mt-1">-0.8m S</span>
            </div>

            {/* Position 4 (West) */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                P4
              </div>
              <span className="text-[9px] font-mono text-slate-700 font-bold mt-1">-0.8m W</span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-600 font-medium mt-6 text-center">
            Standard offset: 0.8 meters radius with acoustic standoff lock at 1.25m
          </div>
        </div>

        {/* Right: Rescan Telemetry Breakdown */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="pb-3 border-b border-slate-200">
            <span className="text-xs font-mono text-slate-500 font-bold">TARGET UNDER EVALUATION:</span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">{current.zone}</h3>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {current.positions.map((pos, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center justify-between font-mono font-bold text-blue-900 mb-1">
                  <span>{pos.id}</span>
                  <span className="text-slate-900">{pos.score}/100</span>
                </div>
                <div className="text-[11px] text-slate-700 space-y-0.5 font-mono font-medium">
                  <div>EM: {pos.emAmp} ({pos.phase})</div>
                  <div>Mag: {pos.magDelta}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Initial Score</span>
              <span className="text-2xl font-black font-mono text-slate-900 mt-1 block">
                {current.initialScore}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Single pass</span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Consistency</span>
              <span className={`text-2xl font-black font-mono mt-1 block ${
                current.consistency > 75 ? 'text-emerald-700' : 'text-rose-700'
              }`}>
                {current.consistency}%
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Spatial coherence</span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Final Confidence</span>
              <span className={`text-2xl font-black font-mono mt-1 block ${
                current.finalConfidence > 70 ? 'text-blue-900' : 'text-amber-700'
              }`}>
                {current.finalConfidence}/100
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Fusion validated</span>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-start gap-3 ${
            current.verdictType === 'success'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-rose-50 border-rose-300 text-rose-900'
          }`}>
            {current.verdictType === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
            )}
            <div>
              <h4 className="text-sm font-bold font-mono tracking-wide uppercase">{current.verdict}</h4>
              <p className="text-xs text-slate-800 mt-1 leading-relaxed font-medium">{current.reasoning}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
