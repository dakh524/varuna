import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Trophy, Clock, Sparkles, ShieldCheck, Award } from 'lucide-react';

interface JudgeModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSimulation: () => void;
}

export const JudgeModeModal: React.FC<JudgeModeModalProps> = ({ isOpen, onClose, onOpenSimulation }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const auditSlides = [
    {
      step: '01',
      category: 'PROBLEM STATEMENT',
      title: 'High Economic Barrier in Subsea Exploration',
      subtitle: '80% of seafloor remains unmapped; single-sensor anomalies waste millions.',
      content: 'Deep-sea mineral surveys cost $40,000–$80,000 per day. Conventional single-pass surveys frequently chase false positives caused by volcanic basalt rock, discarded iron debris, or salinity variations.',
      takeaway: 'Challenge: Single-sensor magnetic spikes do not equal a viable mineral deposit.'
    },
    {
      step: '02',
      category: 'VARUNA06 PLATFORM',
      title: 'Low-Cost Tethered Autonomous Payload',
      subtitle: 'Multi-physics payload operated via single winch umbilical.',
      content: 'VARUNA06 lowers a lightweight, modular sensor array (EM, Magnetics, Galvanic SP, Acoustics, Optical) from any surface vessel. It maintains a 1.25m acoustic standoff above the seabed, enabling accessible preliminary screening.',
      takeaway: 'Solution: 1/10th the cost of heavy deep ROVs with continuous topside telemetry.'
    },
    {
      step: '03',
      category: 'SENSOR FUSION',
      title: '6-Domain Sensor Fusion Architecture',
      subtitle: 'RM3100 Mag + Multi-Frequency EM + Galvanic SP + 500kHz Altimeter.',
      content: 'Signals are corrected in real time: 200 Hz IMU compensates vehicle pitch, conductivity cells cancel seawater damping, and acoustic altimetry normalizes 1/r^3 EM attenuation.',
      takeaway: 'Technology: Multi-physics corroboration eliminates single-sensor ambiguity.'
    },
    {
      step: '04',
      category: 'INNOVATION',
      title: 'Signature Scoring & Adaptive Rescan',
      subtitle: 'From binary "Metal Detected" to 4 discrete 0–100 prospectivity scores.',
      content: 'Rather than a naive threshold alarm, VARUNA06 computes prospectivity similarity for Copper-like, Nickel-like, Cobalt-like, and Manganese-like targets. On anomaly trip, it autonomously commands a 4-point rescan to verify spatial coherence.',
      takeaway: 'Innovation: Autonomous closed-loop investigation that rejects false leads at the seabed.'
    },
    {
      step: '05',
      category: 'DIGITAL TWIN',
      title: '10-Hz Telemetry Digital Twin',
      subtitle: 'Interactive grid transects with reproducible geological anomalies.',
      content: 'Auditors can navigate the digital twin over seabed transects, execute 4-point rescans, observe EM phase lag (+42°) and galvanic gradients (-68 mV), and stamp georeferenced records into the permanent GIS map.',
      takeaway: 'Validation: Fully demonstrated closed-loop workflow with strict hydrographic boundaries.'
    },
    {
      step: '06',
      category: 'PUBLIC IMPACT',
      title: 'Scalable Socio-Economic & Environmental Impact',
      subtitle: 'Targeted exploration preserves seabed ecosystems and democratizes ocean science.',
      content: 'By filtering out 80% of false leads before heavy drill ships deploy, VARUNA06 saves millions in survey fuel and minimizes seabed habitat disturbance. Ready for academic, governmental, and industrial exploration.',
      takeaway: 'Impact: Lower entry barrier -> targeted, sustainable subsea resource mapping.'
    }
  ];

  if (!isOpen) return null;

  const current = auditSlides[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-[#06142a] border border-amber-400/50 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-400 flex items-center justify-center text-amber-300">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">
                  OFFICIAL AUDIT MODE (60-SECOND EXECUTIVE BRIEFING)
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold">
                  REGISTRY SE-2026-V6
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                VARUNA06 Official Executive Presentation
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-400 hover:text-white transition-all"
            title="Exit Audit Mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6-Step Visual Progress Indicator */}
        <div className="grid grid-cols-6 gap-2 mb-6">
          {auditSlides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`p-2 rounded-xl text-center border transition-all ${
                idx === currentStep
                  ? 'bg-amber-500/25 border-amber-400 text-white shadow-md'
                  : idx < currentStep
                  ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
            >
              <span className="text-[10px] font-mono font-bold block">{s.step}</span>
              <span className="text-[9px] font-mono truncate block uppercase">{s.category.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Slide Content Box */}
        <div className="p-6 rounded-2xl bg-[#081a36] border border-amber-500/30 mb-6">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
            {current.category}
          </span>
          <h3 className="text-2xl font-extrabold text-white mb-2">{current.title}</h3>
          <p className="text-sm font-mono text-cyan-300/90 mb-4">{current.subtitle}</p>
          <p className="text-sm text-slate-200 leading-relaxed font-sans mb-6">
            {current.content}
          </p>

          <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-400/40 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs font-mono font-bold text-amber-200">
              {current.takeaway}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-cyan-500/15">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenSimulation();
              }}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              JUMP TO LIVE TELEMETRY SIMULATOR
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono disabled:opacity-40"
            >
              PREVIOUS
            </button>

            <button
              onClick={() => {
                if (currentStep < auditSlides.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  onClose();
                }
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-black font-bold text-xs font-mono flex items-center gap-1.5 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              <span>{currentStep === auditSlides.length - 1 ? 'FINISH AUDIT' : 'NEXT: ' + auditSlides[currentStep + 1].category.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
