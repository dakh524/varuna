import React, { useState } from 'react';
import { Layers, Cpu, Server, Cable, Activity, Database, GitCommit, CheckCircle } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'system' | 'hardware' | 'software'>('system');

  const hardwareModules = [
    { name: 'Core MCU Engine', item: 'STM32H7 / ESP32-S3 Dual-Core', role: 'Real-time 24-bit ADC sampling, digital filtering, Kalman attitude fusion.' },
    { name: 'Analog Acquisition', item: '24-bit Delta-Sigma Differential ADC', role: 'High-precision microvolt sensing for secondary EM coils and SP electrodes.' },
    { name: 'Magnetometer', item: 'RM3100 3-Axis Geomagnetic', role: 'Vector magnetic anomaly detection, 13 nT resolution.' },
    { name: 'EM Transceiver', item: 'Tuned Resonant TX/RX Coils', role: 'Multi-frequency induction generator (200Hz - 10kHz) and differential receiver.' },
    { name: 'Environmental Pack', item: 'MS5803-30BA + Toroidal Cell', role: 'Hydrostatic pressure (depth), seawater conductivity, and in-situ temperature.' },
    { name: 'Acoustic Altimeter', item: '500 kHz Narrow-Beam Transducer', role: 'Sub-centimeter standoff altitude tracking and bottom reflection hardness.' },
    { name: 'Optical Module', item: 'Sony Starvis 4K Low-Light + LEDs', role: 'Seabed imagery ground-truthing under dual 3000-lumen strobe illumination.' },
    { name: 'Umbilical Interface', item: 'Neutral Buoyancy Single Tether', role: '48V DC isolated power transmission and high-speed RS-485 / Ethernet telemetry.' }
  ];

  const softwareModules = [
    { step: '01', name: 'Digital Filtering & Baseline Nulling', desc: 'Removes 50Hz/60Hz ship harmonics and applies bandpass filters tuned to TX excitation frequencies.' },
    { step: '02', name: 'Environmental Correction Layer', desc: 'Compensates for seawater conductivity damping, temperature drift, and hydrostatic pressure changes.' },
    { step: '03', name: 'Attitude & Standoff Normalization', desc: 'Applies Euler rotation matrices from 6-DOF IMU and normalizes EM signals for 1/r^3 acoustic distance decay.' },
    { step: '04', name: 'Multi-Physics Feature Extraction', desc: 'Computes in-phase/quadrature amplitude ratio, magnetic gradient tensor, and galvanic potential slope.' },
    { step: '05', name: 'Target-Signature Comparison', desc: 'Calculates cosine similarity and Euclidean distance against calibrated SMS and polymetallic reference profiles.' },
    { step: '06', name: 'Adaptive Rescan Decision Engine', desc: 'Evaluates anomaly significance and automatically generates 4-point offset survey paths for verification.' },
    { step: '07', name: 'Spatial Consistency Fusion', desc: 'Cross-checks multi-position observations, rejecting transient spikes and solitary scrap debris.' },
    { step: '08', name: 'Bathymetric GIS Mapping Engine', desc: 'Georeferences verified target anomalies with full sensor metadata into surface GIS navigation databases.' }
  ];

  return (
    <section id="architecture" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 07 // SYSTEM & DATA PIPELINE ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          End-to-End Engineering Architecture
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          From surface winch power delivery down to microvolt differential sensing and topside prospectivity mapping, every hardware module and software layer is purpose-built for low-cost marine geophysics.
        </p>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab('system')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'system'
                ? 'bg-blue-600 border-blue-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            SYSTEM PIPELINE
          </button>
          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'hardware'
                ? 'bg-blue-600 border-blue-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            HARDWARE SUBSYSTEMS
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'software'
                ? 'bg-blue-600 border-blue-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            SOFTWARE PROCESSING STACK
          </button>
        </div>
      </div>

      {/* Tab 1: System Pipeline Flowchart */}
      {activeTab === 'system' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            {/* Stage 1 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-700 font-extrabold block mb-1">01 TOPSIDE</span>
                <h4 className="text-sm font-bold text-slate-900 mb-2">SURFACE VESSEL & WINCH</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  Automated heave-compensating winch, 48V DC isolated power supply, and navigation GPS.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] font-mono text-slate-600 font-bold">
                Topside Mission Control
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-700 font-extrabold block mb-1">02 CONDUIT</span>
                <h4 className="text-sm font-bold text-slate-900 mb-2">POWER + DATA TETHER</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  Single neutral buoyancy umbilical carrying high-voltage DC and differential 10 Mbps telemetry.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] font-mono text-slate-600 font-bold">
                Bidirectional Subsea Link
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-300 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-mono text-blue-900 font-extrabold block mb-1">03 SUBSEA PLATFORM</span>
                <h4 className="text-sm font-bold text-slate-900 mb-2">VARUNA06 SENSOR SUITE</h4>
                <p className="text-xs text-slate-800 leading-relaxed font-sans font-medium">
                  Multi-frequency EM TX/RX, RM3100 magnetometer, Ag/AgCl galvanic SP, and acoustic altimeter.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-blue-200 text-[10px] font-mono text-blue-800 font-bold">
                Edge In-Situ Acquisition
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-700 font-extrabold block mb-1">04 PROCESSING</span>
                <h4 className="text-sm font-bold text-slate-900 mb-2">EDGE & INVERSION ENGINE</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  Conductivity correction, 1/r^3 standoff normalization, Kalman IMU attitude filtering, and signature matching.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] font-mono text-slate-600 font-bold">
                Closed-Loop Decision Core
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-700 font-extrabold block mb-1">05 DELIVERABLE</span>
                <h4 className="text-sm font-bold text-slate-900 mb-2">PROSPECTIVITY MAP</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  Georeferenced 0–100 target similarity scores, spatial rescan validation status, and visual snapshots.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] font-mono text-slate-600 font-bold">
                Actionable Exploration GIS
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Hardware Breakdown */}
      {activeTab === 'hardware' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hardwareModules.map((hw, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-blue-700" />
                <span className="text-xs font-mono font-bold text-blue-900 uppercase">{hw.name}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">{hw.item}</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">{hw.role}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Software Processing Stack */}
      {activeTab === 'software' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softwareModules.map((sw, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-start gap-3">
              <span className="text-sm font-bold font-mono text-blue-800 bg-blue-50 px-2 py-1 rounded border border-blue-200 shrink-0">
                {sw.step}
              </span>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{sw.name}</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{sw.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Interactive ROV Payload Decoupling Architecture Diagram */}
      <div className="mt-10 bg-slate-950 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl overflow-hidden relative">
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" />
            <h3 className="text-base md:text-lg font-extrabold tracking-tight text-white font-mono">
              VARUNA06 ROV SUBSYSTEM DECOUPLING DIAGRAM
            </h3>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
            PRESSURE HOUSING & SENSOR CARTRIDGE DECOUPLING
          </span>
        </div>

        <div className="max-w-4xl mx-auto py-2">
          {/* Top Level: VARUNA06 ROV */}
          <div className="flex flex-col items-center">
            <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm shadow-xl flex items-center gap-2 border border-amber-300">
              <Layers className="w-4 h-4 text-slate-950" />
              <span>VARUNA06 ROV PLATFORM</span>
            </div>

            {/* Down Stem */}
            <div className="w-0.5 h-6 bg-slate-700"></div>
            
            {/* Horizontal Split Line */}
            <div className="w-64 sm:w-80 md:w-96 h-0.5 bg-slate-700 relative">
              <div className="absolute left-0 top-0 w-0.5 h-6 bg-slate-700"></div>
              <div className="absolute right-0 top-0 w-0.5 h-6 bg-slate-700"></div>
            </div>

            {/* Two Columns: Pressure Housing vs Sensor Cartridge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 w-full pt-6">
              
              {/* Left Column: Pressure Housing */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-3 shadow-lg hover:border-blue-500 transition-all">
                <div className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold font-mono uppercase tracking-wider">
                  PRESSURE HOUSING
                </div>
                <p className="text-[11px] text-slate-400 font-sans">Dry Pressure Vessel (25m / 4000m Rated)</p>
                <div className="w-full space-y-2 pt-2 border-t border-slate-800 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-blue-300 font-bold flex items-center justify-between">
                    <span>ESP32 / DAQ MCU</span>
                    <span className="text-[9px] bg-blue-900/60 px-1.5 py-0.5 rounded text-blue-200">24-bit ADC</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 font-bold flex items-center justify-between">
                    <span>POWER MODULE</span>
                    <span className="text-[9px] bg-amber-900/60 px-1.5 py-0.5 rounded text-amber-200">48V to 5V/12V</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-emerald-300 font-bold flex items-center justify-between">
                    <span>COMMUNICATION</span>
                    <span className="text-[9px] bg-emerald-900/60 px-1.5 py-0.5 rounded text-emerald-200">Tether Link</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Sensor Cartridge */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-3 shadow-lg hover:border-amber-500 transition-all">
                <div className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold font-mono uppercase tracking-wider">
                  SENSOR CARTRIDGE
                </div>
                <p className="text-[11px] text-slate-400 font-sans">External Multi-Physics Wetted Array</p>
                <div className="w-full space-y-1.5 pt-2 border-t border-slate-800 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-amber-300 font-bold text-left flex items-center justify-between">
                    <span>EMI TX/RX COILS</span>
                    <span className="text-[9px] text-slate-400">Multi-Freq</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-amber-300 font-bold text-left flex items-center justify-between">
                    <span>RM3100 MAGNETOMETER</span>
                    <span className="text-[9px] text-slate-400">13 nT 3-Axis</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-amber-300 font-bold text-left flex items-center justify-between">
                    <span>GALVANIC SP ELECTRODES</span>
                    <span className="text-[9px] text-slate-400">Ag/AgCl</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-amber-300 font-bold text-left flex items-center justify-between">
                    <span>ACOUSTIC ALTIMETER</span>
                    <span className="text-[9px] text-slate-400">500 kHz</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 text-amber-300 font-bold text-left flex items-center justify-between">
                    <span>OPTICAL CAMERA & LIGHTS</span>
                    <span className="text-[9px] text-slate-400">4K Sony</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Downward Flow Arrow to Seafloor Response */}
            <div className="flex flex-col items-center mt-6">
              <div className="w-0.5 h-8 bg-amber-500 animate-pulse"></div>
              <div className="w-3 h-3 border-r-2 border-b-2 border-amber-500 transform rotate-45 -mt-2"></div>
              <div className="mt-2 px-6 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 font-black text-xs font-mono tracking-widest uppercase shadow-lg shadow-emerald-950/50 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>SEAFLOOR RESPONSE (MULTI-PHYSICS PROSPECTIVITY SIGNATURE)</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
