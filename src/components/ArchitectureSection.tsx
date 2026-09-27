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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 07 // SYSTEM & DATA PIPELINE ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          End-to-End Engineering Architecture
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          From surface winch power delivery down to microvolt differential sensing and topside prospectivity mapping, every hardware module and software layer is purpose-built for low-cost marine geophysics.
        </p>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab('system')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'system'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            SYSTEM PIPELINE
          </button>
          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'hardware'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            HARDWARE SUBSYSTEMS
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'software'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            SOFTWARE PROCESSING STACK
          </button>
        </div>
      </div>

      {/* Tab 1: System Pipeline Flowchart */}
      {activeTab === 'system' && (
        <div className="bg-[#06142a]/90 border border-cyan-500/25 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            {/* Stage 1 */}
            <div className="p-4 rounded-xl bg-[#081b38] border border-cyan-900/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">01 TOPSIDE</span>
                <h4 className="text-sm font-bold text-white mb-2">SURFACE VESSEL & WINCH</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Automated heave-compensating winch, 48V DC isolated power supply, and navigation GPS.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-cyan-500/15 text-[10px] font-mono text-slate-400">
                Topside Mission Control
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-xl bg-[#081b38] border border-cyan-900/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-sky-400 font-bold block mb-1">02 CONDUIT</span>
                <h4 className="text-sm font-bold text-white mb-2">POWER + DATA TETHER</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Single neutral buoyancy umbilical carrying high-voltage DC and differential 10 Mbps telemetry.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-cyan-500/15 text-[10px] font-mono text-slate-400">
                Bidirectional Subsea Link
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex flex-col justify-between shadow-lg shadow-cyan-500/10">
              <div>
                <span className="text-[10px] font-mono text-cyan-300 font-bold block mb-1">03 SUBSEA PLATFORM</span>
                <h4 className="text-sm font-bold text-white mb-2">VARUNA06 SENSOR SUITE</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Multi-frequency EM TX/RX, RM3100 magnetometer, Ag/AgCl galvanic SP, and acoustic altimeter.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-cyan-500/15 text-[10px] font-mono text-cyan-300">
                Edge In-Situ Acquisition
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded-xl bg-[#081b38] border border-cyan-900/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-teal-400 font-bold block mb-1">04 PROCESSING</span>
                <h4 className="text-sm font-bold text-white mb-2">EDGE & INVERSION ENGINE</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Conductivity correction, 1/r^3 standoff normalization, Kalman IMU attitude filtering, and signature matching.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-cyan-500/15 text-[10px] font-mono text-slate-400">
                Closed-Loop Decision Core
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-4 rounded-xl bg-[#081b38] border border-cyan-900/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">05 DELIVERABLE</span>
                <h4 className="text-sm font-bold text-white mb-2">PROSPECTIVITY MAP</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Georeferenced 0–100 target similarity scores, spatial rescan validation status, and visual snapshots.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-cyan-500/15 text-[10px] font-mono text-slate-400">
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
            <div key={idx} className="p-4 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">{hw.name}</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{hw.item}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{hw.role}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Software Processing Stack */}
      {activeTab === 'software' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softwareModules.map((sw, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md flex items-start gap-3">
              <span className="text-sm font-bold font-mono text-cyan-400 bg-cyan-950 px-2 py-1 rounded border border-cyan-800">
                {sw.step}
              </span>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{sw.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{sw.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
