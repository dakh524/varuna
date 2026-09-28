import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, CheckCircle, ArrowRight, ShieldCheck, Activity, Radio, Waves, Anchor, Compass } from 'lucide-react';

interface FullMissionDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullMissionDemoModal: React.FC<FullMissionDemoModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const missionSequence = [
    {
      stage: '01. DEPLOY',
      title: 'Descent from Surface Vessel',
      telemetry: 'Depth: 45.0m -> 142.5m | Descent Rate: 0.6 m/s',
      detail: 'The automated winch pays out the neutral buoyancy umbilical. Hydrostatic pressure sensor MS5803 logs descending pressure until acoustic floor detection occurs.',
      statusColor: 'text-sky-400'
    },
    {
      stage: '02. DEPTH LOCK',
      title: 'Acoustic Floor Lock at 1.25m',
      telemetry: 'Standoff: 1.25m (±3cm) | Tilt: Roll 0.4°, Pitch -0.2°',
      detail: 'The 500 kHz acoustic altimeter establishes continuous bottom tracking. The winch enters active heave-compensation mode, maintaining a steady 1.25m altitude above the bathymetric contour.',
      statusColor: 'text-teal-400'
    },
    {
      stage: '03. SCAN',
      title: 'Multi-Frequency EM & Mag Logging',
      telemetry: 'TX Frequency: 200 Hz - 10 kHz | Mag Baseline: 48,120 nT',
      detail: 'Ventral transmitter coil induces primary magnetic dipoles into the seafloor. Edge ADCs continuously stream 24-bit differential RX voltages and 3-axis magnetic vectors to the baseline nulling filter.',
      statusColor: 'text-cyan-400'
    },
    {
      stage: '04. ANOMALY',
      title: 'Geophysical Perturbation Detected',
      telemetry: 'EM Amplitude: +24.6 mV | Mag Vector: +480 nT | SP: -68 mV',
      detail: 'At waypoint C3, the receiver detects a sharp in-phase voltage surge (+24.6 mV) accompanied by a -68 mV negative galvanic self-potential gradient. Preliminary anomaly confidence trips 78%.',
      statusColor: 'text-amber-400'
    },
    {
      stage: '05. SCORE',
      title: 'Target Signature Matching Inversion',
      telemetry: 'Cu-Like: 82 | Ni-Like: 64 | Co-Like: 47 | Mn-Like: 76',
      detail: 'Normalized secondary response curves are compared against calibrated physical reference models. The algorithm indicates strong similarity to copper-rich seafloor massive sulfides and manganese nodule aggregates.',
      statusColor: 'text-cyan-300'
    },
    {
      stage: '06. DECIDE',
      title: 'Autonomous Rescan Feasibility Check',
      telemetry: 'Bottom Slope: 4.2° | Current Drift: 0.15 kn | Tether Safety: Green',
      detail: 'The edge decision engine confirms the anomaly is significant (> 60) and subsea slope is safe for micro-maneuvering. System halts linear towing and arms the 4-point rescan routine.',
      statusColor: 'text-emerald-400'
    },
    {
      stage: '07. MOVE',
      title: '4-Point Cross-Pattern Micro-Translation',
      telemetry: 'Repositioning: 0.8m North -> 0.8m East -> 0.8m South -> 0.8m West',
      detail: 'The platform translates through 4 discrete observation coordinates around the anomaly epicenter to measure spatial continuity and geometric field decay.',
      statusColor: 'text-sky-300'
    },
    {
      stage: '08. RESCAN',
      title: 'Spatial Consistency Verification',
      telemetry: 'Consistency Index: 87% | Spatial Variance: Low',
      detail: 'All 4 quadrants maintain coherent phase lag and dipolar magnetic polarity, confirming a three-dimensional conductive geological body and eliminating scrap-metal false alarms.',
      statusColor: 'text-teal-300'
    },
    {
      stage: '09. CONFIRM',
      title: 'Optical Strobe & Acoustic Backscatter',
      telemetry: 'Strobe: 3000-Lumen 4K Frame Grab | Backscatter: -13.2 dB (Hard)',
      detail: 'Low-light 4K camera acquires contextual imagery of polymetallic nodule pavement. Acoustic backscatter confirms seafloor roughness and hard substratum consistency.',
      statusColor: 'text-purple-300'
    },
    {
      stage: '10. MAP & RECOVER',
      title: 'Permanent GIS Registry & Deck Recovery',
      telemetry: 'Logged: Zone C-03 (High Confidence 84%) | Winch Haul: 0.8 m/s',
      detail: 'The georeferenced anomaly package is committed to the seafloor bathymetric map. The platform is winched back to deck with verified coordinates for downstream resource characterization.',
      statusColor: 'text-emerald-400'
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < missionSequence.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return prev;
        }
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, missionSequence.length]);

  if (!isOpen) return null;

  const current = missionSequence[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-[#06142a] border border-cyan-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative flex flex-col overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-cyan-500/20 mb-4 sm:mb-6 shrink-0 gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider sm:tracking-widest block truncate">
                FULL CLOSED-LOOP MISSION DEMONSTRATION
              </span>
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white truncate">
                Automated Subsea Exploration Sequence
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-white transition-all shrink-0"
            title="Close Demonstration"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-4 sm:space-y-6">
          {/* Horizontal Progress Bar */}
          <div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 mb-2 gap-2">
              <span className="truncate">STEP {currentStep + 1} OF {missionSequence.length}: {current.stage}</span>
              <span className="shrink-0">{Math.round(((currentStep + 1) / missionSequence.length) * 100)}% COMPLETE</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${((currentStep + 1) / missionSequence.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#081a36] border border-cyan-500/30">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className={`text-xs font-mono font-bold tracking-wider uppercase ${current.statusColor}`}>
                {current.stage}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 break-all">
                {current.telemetry}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans mb-4">
              {current.detail}
            </p>

            <div className="p-3 rounded-xl bg-[#050e1f] border border-cyan-900/40 text-xs font-mono text-cyan-300 flex items-center justify-between gap-2">
              <span className="truncate">Subsea Telemetry: All sensors online & synchronized</span>
              <span className="text-emerald-400 font-bold shrink-0">● OK</span>
            </div>
          </div>

          {/* Step Selector Buttons (1 to 10) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {missionSequence.map((step, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentStep(idx);
                  setIsPlaying(false);
                }}
                className={`flex-1 min-w-[50px] sm:min-w-[70px] py-1.5 px-2 rounded-lg text-[10px] font-mono font-bold border transition-all ${
                  idx === currentStep
                    ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-md'
                    : idx < currentStep
                    ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-cyan-500/15 shrink-0">
          <div className="flex items-center gap-2 justify-between sm:justify-start">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 sm:px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-200 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-cyan-500/30 transition-all flex-1 sm:flex-none justify-center"
            >
              {isPlaying ? 'PAUSE AUTO-PLAY' : 'RESUME AUTO-PLAY'}
            </button>
            <button
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(true);
              }}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 hover:text-white transition-all justify-center"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESTART</span>
            </button>
          </div>

          <div className="flex items-center gap-2 justify-between sm:justify-end">
            <button
              onClick={() => {
                setCurrentStep(Math.max(0, currentStep - 1));
                setIsPlaying(false);
              }}
              disabled={currentStep === 0}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono disabled:opacity-40 flex-1 sm:flex-none"
            >
              PREVIOUS
            </button>
            <button
              onClick={() => {
                if (currentStep < missionSequence.length - 1) {
                  setCurrentStep(currentStep + 1);
                  setIsPlaying(false);
                } else {
                  onClose();
                }
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs font-mono flex items-center justify-center gap-1.5 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex-1 sm:flex-none"
            >
              <span>{currentStep === missionSequence.length - 1 ? 'COMPLETE' : 'NEXT'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
