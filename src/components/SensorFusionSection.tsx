import React, { useState } from 'react';
import { Layers, Activity, ShieldCheck, ArrowDown, Sliders, Cpu, Compass } from 'lucide-react';

export const SensorFusionSection: React.FC = () => {
  // Preset sensor fusion scenarios
  const [activeScenario, setActiveScenario] = useState<'massive_sulfide' | 'magnetic_basalt' | 'salinity_plume'>('massive_sulfide');

  const scenarios = {
    massive_sulfide: {
      title: 'Polymetallic Massive Sulfide Deposit',
      em: 'HIGH (+24 mV, 42° lag)',
      emLevel: 'high',
      mag: 'MEDIUM (+480 nT anomaly)',
      magLevel: 'med',
      elec: 'HIGH (-68 mV galvanic SP)',
      elecLevel: 'high',
      acoust: 'MEDIUM (-13 dB hard reflection)',
      acoustLevel: 'med',
      opt: 'CONFIRMATION (Pavement visible)',
      optLevel: 'high',
      env: 'NORMALIZED (4.82 S/m, 1.25m standoff)',
      confidence: 88,
      verdict: 'HIGH-CONFIDENCE ANOMALY (Multi-Physics Corroborated)',
      verdictColor: 'text-emerald-400'
    },
    magnetic_basalt: {
      title: 'Volcanic Basalt Bedrock (Geologic False Alarm)',
      em: 'LOW (0.8 mV, zero phase lag)',
      emLevel: 'low',
      mag: 'VERY HIGH (+850 nT anomaly)',
      magLevel: 'high',
      elec: 'NONE (-2 mV neutral SP)',
      elecLevel: 'low',
      acoust: 'HIGH (-9 dB solid rock backscatter)',
      acoustLevel: 'high',
      opt: 'BARE BASALT (No nodule or crust texture)',
      optLevel: 'low',
      env: 'NORMALIZED',
      confidence: 22,
      verdict: 'REJECTED AS BASALT (High Mag, Zero Electrical/EM Conductivity)',
      verdictColor: 'text-rose-400'
    },
    salinity_plume: {
      title: 'Thermal / Saline Density Micro-Plume',
      em: 'MEDIUM-LOW (+4 mV apparent drift)',
      emLevel: 'med',
      mag: 'NORMAL (0 nT baseline)',
      magLevel: 'low',
      elec: 'DRIFT (-8 mV ionic variation)',
      elecLevel: 'low',
      acoust: 'SOFT (-24 dB pelagic sediment)',
      acoustLevel: 'low',
      opt: 'MUDDY SEDIMENT (No solid mineralization)',
      optLevel: 'low',
      env: 'CORRECTION APPLIED (Temp shifted by 0.4°C, canceled by N4)',
      confidence: 14,
      verdict: 'FILTERED BY ENVIRONMENTAL LAYER (Fluid Plume Nullified)',
      verdictColor: 'text-amber-400'
    }
  };

  const curr = scenarios[activeScenario];

  return (
    <section id="sensor-fusion" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 12 & 13 // MULTI-PHYSICS FUSION & ENVIRONMENTAL CORRECTIONS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Multi-Layer Fusion & Environmental Physics
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Why single-sensor detectors fail: a strong magnetic anomaly alone might simply be volcanic basalt; an EM shift might be a salinity change.
          VARUNA06 fuses 6 independent domains and corrects for environmental damping.
        </p>

        {/* Interactive Scenario Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-6">
          <button
            onClick={() => setActiveScenario('massive_sulfide')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeScenario === 'massive_sulfide'
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            SCENARIO 1: MASSIVE SULFIDE DEPOSIT
          </button>
          <button
            onClick={() => setActiveScenario('magnetic_basalt')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeScenario === 'magnetic_basalt'
                ? 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            SCENARIO 2: VOLCANIC BASALT BEDROCK
          </button>
          <button
            onClick={() => setActiveScenario('salinity_plume')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeScenario === 'salinity_plume'
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            SCENARIO 3: SEAWATER SALINITY DRIFT
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Multi-Layer Fusion Pipeline */}
        <div className="lg:col-span-7 bg-[#06142a]/90 border border-cyan-500/25 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-5">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {curr.title}
            </span>
            <span className="text-xs font-mono text-cyan-400">Multi-Modal Inputs</span>
          </div>

          <div className="space-y-2.5">
            {/* Layer 1: Magnetic */}
            <div className="p-3 rounded-xl bg-[#081934] border border-cyan-900/40 flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-400 font-bold">1. MAGNETIC (RM3100)</span>
              <span className="text-white">{curr.mag}</span>
            </div>

            {/* Layer 2: EM */}
            <div className="p-3 rounded-xl bg-[#081934] border border-cyan-900/40 flex items-center justify-between text-xs font-mono">
              <span className="text-sky-400 font-bold">2. ELECTROMAGNETIC (TX/RX)</span>
              <span className="text-white">{curr.em}</span>
            </div>

            {/* Layer 3: Electrical */}
            <div className="p-3 rounded-xl bg-[#081934] border border-cyan-900/40 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold">3. ELECTRICAL (GALVANIC SP)</span>
              <span className="text-white">{curr.elec}</span>
            </div>

            {/* Layer 4: Acoustic */}
            <div className="p-3 rounded-xl bg-[#081934] border border-cyan-900/40 flex items-center justify-between text-xs font-mono">
              <span className="text-rose-400 font-bold">4. ACOUSTIC (500kHz ALTIMETER)</span>
              <span className="text-white">{curr.acoust}</span>
            </div>

            {/* Layer 5: Optical */}
            <div className="p-3 rounded-xl bg-[#081934] border border-cyan-900/40 flex items-center justify-between text-xs font-mono">
              <span className="text-purple-400 font-bold">5. OPTICAL CONFIRMATION</span>
              <span className="text-white">{curr.opt}</span>
            </div>

            {/* Layer 6: Environmental */}
            <div className="p-3 rounded-xl bg-[#081934] border border-cyan-900/40 flex items-center justify-between text-xs font-mono">
              <span className="text-teal-400 font-bold">6. ENVIRONMENTAL NORMALIZATION</span>
              <span className="text-white">{curr.env}</span>
            </div>

            {/* Flow arrow */}
            <div className="flex justify-center text-cyan-400 py-1">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Fusion Output */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950 via-blue-950 to-slate-900 border border-cyan-400 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">
                  FUSION VERDICT
                </span>
                <span className={`text-sm font-bold font-mono ${curr.verdictColor}`}>
                  {curr.verdict}
                </span>
              </div>
              <div className="text-right font-mono">
                <span className="text-2xl font-black text-white">{curr.confidence}</span>
                <span className="text-xs text-cyan-400"> / 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Environmental Correction Engine */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-500/15">
              <Cpu className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider">
                Why Environmental Correction Matters
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
              Seawater is an electrically conductive fluid (~3.0 to 5.2 S/m depending on salinity and temperature).
              Without dynamic compensation, raw electromagnetic measurements drift continuously.
            </p>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#091f3e] border border-cyan-900/40">
                <div className="text-cyan-300 font-bold mb-1">Seawater Salinity & Temp</div>
                <div className="text-slate-400 text-[11px] font-sans">
                  Node N4 continuously measures fluid conductivity and temperature, subtracting the seawater inductive baseline from EM receiver signals.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#091f3e] border border-cyan-900/40">
                <div className="text-sky-300 font-bold mb-1">Vehicle Motion & Tilt (6-DOF)</div>
                <div className="text-slate-400 text-[11px] font-sans">
                  The IMU applies Euler rotation matrices at 200 Hz. If the vehicle pitches 5°, magnetic vector projections are mathematically corrected.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#091f3e] border border-cyan-900/40">
                <div className="text-emerald-300 font-bold mb-1">Standoff Decay Normalization (1/r³)</div>
                <div className="text-slate-400 text-[11px] font-sans">
                  Dipolar magnetic and EM responses drop with the cube of distance. The 500 kHz acoustic altimeter scales signal intensity to standard 1.0m height.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
