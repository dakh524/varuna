import React from 'react';
import { AlertTriangle, DollarSign, Search, EyeOff, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-sans mb-4 font-bold shadow-sm tracking-wide">
          <EyeOff className="w-3.5 h-3.5 text-rose-600" />
          <span>SECTION 04 // THE GEOPHYSICAL EXPLORATION BOTTLENECK</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          The Ocean Floor is Still a Blind Spot
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-4">
          Seafloor resource exploration normally requires expensive underwater platforms, specialized sensing systems, and extensive survey operations.
        </p>
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 font-bold text-sm md:text-base max-w-2xl mx-auto shadow-sm">
          “The challenge is not simply: 'Find a mineral.' Instead, the practical first step is: 'Where are the areas that deserve detailed investigation?' VARUNA06 addresses this preliminary screening and target-prioritization stage.”
        </div>
      </div>

      {/* Visual Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Astronomical Survey Costs */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 shadow-sm">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-xs font-sans text-rose-700 font-extrabold block mb-1 tracking-wider">PROHIBITIVE COST</span>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Specialized Research Vessels</h3>
            <p className="text-xs text-slate-700 leading-relaxed font-sans mb-4 font-medium">
              Heavy seismic, CSEM, and deep ROV vessels cost upwards of <strong className="text-slate-900 font-bold">$40,000 to $80,000/day</strong>. Preliminary screening is often too expensive for universities and regional exploration.
            </p>
          </div>
          <div className="text-xs font-sans text-slate-700 p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold">
            • High mobilization barriers<br/>• Bulky ship-scale winches
          </div>
        </div>

        {/* Card 2: False Positive Plagues */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 shadow-sm">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <span className="text-xs font-sans text-amber-700 font-extrabold block mb-1 tracking-wider">DATA AMBIGUITY</span>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Single-Sensor False Positives</h3>
            <p className="text-xs text-slate-700 leading-relaxed font-sans mb-4 font-medium">
              A single magnetic or EM perturbation does <strong className="text-slate-900 font-bold">not</strong> equal a valuable resource. Basalt bedrock, discarded ship steel, salinity variations, and vehicle pitch create false alerts.
            </p>
          </div>
          <div className="text-xs font-sans text-slate-700 p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold">
            • Conductivity masking<br/>• Vehicle tilt distortions
          </div>
        </div>

        {/* Card 3: One-Pass Blind Spot */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-sm">
              <Search className="w-6 h-6" />
            </div>
            <span className="text-xs font-sans text-blue-700 font-extrabold block mb-1 tracking-wider">NO LOCAL INVESTIGATION</span>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">One-Pass Fly-By Surveys</h3>
            <p className="text-xs text-slate-700 leading-relaxed font-sans mb-4 font-medium">
              Traditional towed bodies cannot stop or turn back easily. They record a spike and fly onward, leaving anomalies unverified until expensive follow-up cruises months later.
            </p>
          </div>
          <div className="text-xs font-sans text-slate-700 p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold">
            • Zero local rescan capability<br/>• Delayed, disconnected analysis
          </div>
        </div>
      </div>

      {/* VARUNA06 Remedy Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-[#0f172a] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-sans font-bold text-amber-400 tracking-widest uppercase block mb-1">
            THE VARUNA06 ARCHITECTURAL RESPONSE
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Closed-Loop Multi-Physics Anomaly Investigation
          </h3>
          <p className="text-xs md:text-sm text-slate-200 mt-2 max-w-2xl font-sans leading-relaxed font-medium">
            By coupling multi-modal physics (EM + Magnetic + Electrical + Acoustic + Optical) with real-time autonomous 4-point rescan, VARUNA06 filters out false positives directly at the seafloor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-center backdrop-blur-md">
            <span className="text-lg font-bold font-sans text-amber-300 block">4 Physics</span>
            <span className="text-xs text-slate-300 font-sans">Independent Domains</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-center backdrop-blur-md">
            <span className="text-lg font-bold font-sans text-emerald-300 block">87% Coherence</span>
            <span className="text-xs text-slate-300 font-sans">Target Validation</span>
          </div>
        </div>
      </div>

      {/* 📊 01 — VARUNA06 SPECIFICATIONS (25 m CURRENT PROTOTYPE vs 6,000 m TARGET ARCHITECTURE) 📊 */}
      <div id="specifications" className="pt-10 border-t border-slate-300">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest block mb-1">
            01 — TECHNICAL SYSTEM SPECIFICATIONS
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">
            25 m Current Prototype vs 6,000 m Target Architecture
          </h3>
          <p className="text-xs md:text-sm text-slate-600 font-medium mt-2">
            Presenting VARUNA06 as a field-tested prototype evolving toward an industry-grade deep-ocean platform benchmarked against NOAA's <strong className="text-slate-900">Deep Discoverer</strong> & NIOT's <strong className="text-slate-900">ROSUB-6000</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Box 1: 25 m Current Prototype */}
          <div className="p-6 rounded-3xl bg-white border-2 border-amber-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-amber-200 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase">
                  CURRENT FIELD PROTOTYPE
                </span>
                <span className="text-xl font-extrabold text-amber-800">25 m Depth</span>
              </div>
              <h4 className="text-lg font-extrabold text-slate-900 mb-4">
                VARUNA 06 V2.0 Shallow-Water Platform
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Depth Rating:</strong> 25 m field-tested operational depth.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Vehicle Class:</strong> Tethered ROV with active mobility thrusters.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Control Core:</strong> ESP32-based dual-core microcontroller processing.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Sensor Cartridge:</strong> Modular subsea sensor cartridge with quick swap.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Pulsed EMI Sensing:</strong> Resonant TX/RX coils for conductivity screening.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Geomagnetic Sensing:</strong> RM3100 3-Axis magnetometer vector anomaly detection.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Hydrostatic & IMU:</strong> MS5803 depth sensor + 6-DOF IMU attitude compensation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Camera & Lighting:</strong> Low-light optical sensor under dual 3000-lumen LEDs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong className="text-slate-900 font-bold">Tether Telemetry:</strong> Surface power delivery & high-speed differential serial data link.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-bold text-amber-800 bg-amber-50 p-2.5 rounded-xl">
              ✓ Field Validated in 25m Shallow Water Trials (Team Lorenzini R&D)
            </div>
          </div>

          {/* Box 2: 6,000 m Final Target Architecture */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white border-2 border-emerald-400/60 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-extrabold uppercase">
                  FINAL TARGET ARCHITECTURE
                </span>
                <span className="text-xl font-extrabold text-emerald-400">6,000 m Depth</span>
              </div>
              <h4 className="text-lg font-extrabold text-white mb-2">
                VARUNA 06 — 6,000 m Deep-Water Platform
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium mb-4">
                A scalable deep-water ROV architecture extending VARUNA06's multi-sensor anomaly investigation concept to the 6,000 m class.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 font-medium">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong className="text-white font-bold">Target Depth:</strong> 6,000 m deep-ocean class (~596 atm)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong className="text-white font-bold">Pressure Architecture:</strong> Deep-rated pressure housings + FEA & hydrostatic validation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong className="text-white font-bold">Sensor Cartridge:</strong> Multi-frequency EMI + Magnetometer + Galvanic + Acoustic + Optical</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong className="text-white font-bold">Navigation:</strong> FOG/INS + DVL + USBL acoustic positioning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong className="text-white font-bold">Umbilical:</strong> Armored electro-optical-mechanical tether for power + data</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong className="text-white font-bold">Propulsion:</strong> Multi-thruster vector configuration with heading/depth/altitude control</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong className="text-white font-bold">Safety:</strong> Redundant power, health monitoring & tether-assisted recovery</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-extrabold text-emerald-300 bg-emerald-950/80 p-3 rounded-xl border border-emerald-500/40 text-center tracking-wide">
              ⚡ SCALABLE TARGET — 25 m PROTOTYPE → FIELD PLATFORM → 6,000 m DEEP-WATER CONFIGURATION
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
