import React, { useState } from 'react';
import { Layers, Activity, ShieldCheck, ArrowDown, Sliders, Cpu, Compass } from 'lucide-react';

export const SensorFusionSection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'massive_sulfide' | 'magnetic_basalt' | 'salinity_plume'>('massive_sulfide');

  const scenarios = {
    massive_sulfide: {
      title: 'Polymetallic Massive Sulfide Deposit',
      em: 'HIGH (+24 mV, 42° lag)',
      mag: 'MEDIUM (+480 nT anomaly)',
      elec: 'HIGH (-68 mV galvanic SP)',
      acoust: 'MEDIUM (-13 dB hard reflection)',
      opt: 'CONFIRMATION (Pavement visible)',
      env: 'NORMALIZED (4.82 S/m, 1.25m standoff)',
      confidence: 88,
      verdict: 'HIGH-CONFIDENCE ANOMALY (Multi-Physics Corroborated)',
      verdictColor: 'text-emerald-700'
    },
    magnetic_basalt: {
      title: 'Volcanic Basalt Bedrock (Geologic False Alarm)',
      em: 'LOW (0.8 mV, zero phase lag)',
      mag: 'VERY HIGH (+850 nT anomaly)',
      elec: 'NONE (-2 mV neutral SP)',
      acoust: 'HIGH (-9 dB solid rock backscatter)',
      opt: 'BARE BASALT (No nodule or crust texture)',
      env: 'NORMALIZED',
      confidence: 22,
      verdict: 'REJECTED AS BASALT (High Mag, Zero Electrical/EM Conductivity)',
      verdictColor: 'text-rose-700'
    },
    salinity_plume: {
      title: 'Thermal / Saline Density Micro-Plume',
      em: 'MEDIUM-LOW (+4 mV apparent drift)',
      mag: 'NORMAL (0 nT baseline)',
      elec: 'DRIFT (-8 mV ionic variation)',
      acoust: 'SOFT (-24 dB pelagic sediment)',
      opt: 'MUDDY SEDIMENT (No solid mineralization)',
      env: 'CORRECTION APPLIED (Temp shifted by 0.4°C, canceled by N4)',
      confidence: 14,
      verdict: 'FILTERED BY ENVIRONMENTAL LAYER (Fluid Plume Nullified)',
      verdictColor: 'text-amber-700'
    }
  };

  const curr = scenarios[activeScenario];

  return (
    <section id="sensor-fusion" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 12 & 13 // MULTI-PHYSICS FUSION & ENVIRONMENTAL CORRECTIONS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Multi-Layer Fusion & Environmental Physics
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Why single-sensor detectors fail: a strong magnetic anomaly alone might simply be volcanic basalt; an EM shift might be a salinity change.
          VARUNA06 fuses 6 independent domains and corrects for environmental damping.
        </p>

        {/* Interactive Scenario Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-6">
          <button
            onClick={() => setActiveScenario('massive_sulfide')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeScenario === 'massive_sulfide'
                ? 'bg-emerald-600 border-emerald-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            SCENARIO 1: MASSIVE SULFIDE DEPOSIT
          </button>
          <button
            onClick={() => setActiveScenario('magnetic_basalt')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeScenario === 'magnetic_basalt'
                ? 'bg-rose-600 border-rose-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            SCENARIO 2: VOLCANIC BASALT BEDROCK
          </button>
          <button
            onClick={() => setActiveScenario('salinity_plume')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeScenario === 'salinity_plume'
                ? 'bg-amber-600 border-amber-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            SCENARIO 3: SEAWATER SALINITY DRIFT
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Multi-Layer Fusion Pipeline */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
            <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
              {curr.title}
            </span>
            <span className="text-xs font-mono text-blue-700 font-bold">Multi-Modal Inputs</span>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-blue-900 font-bold">1. MAGNETIC (RM3100)</span>
              <span className="text-slate-900 font-semibold">{curr.mag}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-blue-900 font-bold">2. ELECTROMAGNETIC (TX/RX)</span>
              <span className="text-slate-900 font-semibold">{curr.em}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-800 font-bold">3. ELECTRICAL (GALVANIC SP)</span>
              <span className="text-slate-900 font-semibold">{curr.elec}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-rose-800 font-bold">4. ACOUSTIC (500kHz ALTIMETER)</span>
              <span className="text-slate-900 font-semibold">{curr.acoust}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-purple-800 font-bold">5. OPTICAL CONFIRMATION</span>
              <span className="text-slate-900 font-semibold">{curr.opt}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-teal-800 font-bold">6. ENVIRONMENTAL NORMALIZATION</span>
              <span className="text-slate-900 font-semibold">{curr.env}</span>
            </div>

            <div className="flex justify-center text-blue-600 py-1">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div>
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">
                  FUSION VERDICT
                </span>
                <span className={`text-sm font-bold font-mono ${curr.verdictColor}`}>
                  {curr.verdict}
                </span>
              </div>
              <div className="text-right font-mono">
                <span className="text-2xl font-black text-slate-900">{curr.confidence}</span>
                <span className="text-xs text-blue-700 font-bold"> / 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Environmental Correction Engine */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
              <Cpu className="w-4 h-4 text-blue-700" />
              <span className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider">
                Why Environmental Correction Matters
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-sans mb-4 font-medium">
              Seawater is an electrically conductive fluid (~3.0 to 5.2 S/m depending on salinity and temperature).
              Without dynamic compensation, raw electromagnetic measurements drift continuously.
            </p>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-blue-900 font-bold mb-1">Seawater Salinity & Temp</div>
                <div className="text-slate-700 text-[11px] font-sans font-medium">
                  Node N4 continuously measures fluid conductivity and temperature, subtracting the seawater inductive baseline from EM receiver signals.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-blue-900 font-bold mb-1">Vehicle Motion & Tilt (6-DOF)</div>
                <div className="text-slate-700 text-[11px] font-sans font-medium">
                  The IMU applies Euler rotation matrices at 200 Hz. If the vehicle pitches 5°, magnetic vector projections are mathematically corrected.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-emerald-900 font-bold mb-1">Standoff Decay Normalization (1/r³)</div>
                <div className="text-slate-700 text-[11px] font-sans font-medium">
                  Dipolar magnetic and EM responses drop with the cube of distance. The 500 kHz acoustic altimeter scales signal intensity to standard 1.0m height.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🌊 02 — SEAFLOOR ANOMALY & RESOURCE INVESTIGATION MATRIX 🌊 */}
      <div id="investigation" className="mt-16 pt-10 border-t border-slate-300">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest block mb-1">
            02 — PHYSICAL SIGNATURE MATCHING
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">
            Seafloor Anomaly & Resource Investigation Matrix
          </h3>
          <p className="text-xs md:text-sm text-slate-600 font-medium mt-2">
            Sensors do not provide direct mineral names; instead, they measure physical properties (electromagnetic induction, geomagnetic vector, self-potential, acoustic impedance) that are fused to construct target confidence.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl mb-8 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-extrabold bg-slate-50 text-slate-900 uppercase">
                <th className="py-3.5 px-4 rounded-tl-xl">Investigation Target</th>
                <th className="py-3.5 px-4 text-amber-800">Primary Physical Signals</th>
                <th className="py-3.5 px-4 text-blue-900 rounded-tr-xl">Supporting Sensor Suite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs font-medium text-slate-800">
              <tr className="hover:bg-amber-50/50 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-900">
                  Polymetallic Nodules
                </td>
                <td className="py-4 px-4 text-amber-900 font-bold bg-amber-50/30">
                  EM response (In-Phase / Quadrature phase shift)
                </td>
                <td className="py-4 px-4 font-semibold text-slate-900">
                  Magnetometer + Optical Camera + Acoustic Altimeter
                </td>
              </tr>

              <tr className="hover:bg-amber-50/50 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-900">
                  Hydrothermal Sulphides
                </td>
                <td className="py-4 px-4 text-amber-900 font-bold bg-amber-50/30">
                  EM / Electrical response (-40 to -100 mV Galvanic SP)
                </td>
                <td className="py-4 px-4 font-semibold text-slate-900">
                  Magnetometer + Acoustic Altimeter + Optical Camera
                </td>
              </tr>

              <tr className="hover:bg-amber-50/50 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-900">
                  Cobalt-Rich Crusts
                </td>
                <td className="py-4 px-4 text-amber-900 font-bold bg-amber-50/30">
                  Magnetic / EM response (+300 to +900 nT anomaly)
                </td>
                <td className="py-4 px-4 font-semibold text-slate-900">
                  Acoustic Altimeter + Optical Camera
                </td>
              </tr>

              <tr className="hover:bg-amber-50/50 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-900">
                  REE-Bearing Sediments
                </td>
                <td className="py-4 px-4 text-amber-900 font-bold bg-amber-50/30">
                  Electrical / EM response (Bulk ionic conductivity change)
                </td>
                <td className="py-4 px-4 font-semibold text-slate-900">
                  Acoustic Altimeter + Optical Camera
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ⚠️ MANDATORY SCIENTIFIC DISCLAIMER BOX REQUESTED BY USER ⚠️ */}
        <div className="p-4 md:p-5 rounded-2xl bg-amber-50 border-2 border-amber-400 text-amber-950 flex items-start gap-3.5 shadow-md">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs font-medium leading-relaxed">
            <strong className="font-extrabold text-slate-900 block mb-1">MANDATORY GEOPHYSICAL DISCLAIMER:</strong>
            “Sensor responses indicate potential anomaly zones; they do not provide definitive mineral identification. Confirmation requires detailed geological analysis, assays, and physical sample collection.”
          </div>
        </div>
      </div>
    </section>
  );
};
