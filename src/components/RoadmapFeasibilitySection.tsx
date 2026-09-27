import React, { useState } from 'react';
import { Milestone, Sparkles, Cpu, Layers, Cable, ShieldCheck, Play, Eye, X, ExternalLink, Radio } from 'lucide-react';

export const RoadmapFeasibilitySection: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const prototypePhotos = [
    {
      title: 'V1.0 Sensor Benchtop Prototype',
      subtitle: 'Initial Coil & Sensor Hardware Test',
      image: '/assets/PROTOTYPE%20IMG%20V1.0.jpeg',
      badge: 'V1.0 BENCHTOP',
      fit: 'object-cover'
    },
    {
      title: 'V1.0 Sensor Circuitry & PCB',
      subtitle: 'Differential ADC & Sensor Signal Chain',
      image: '/assets/PROTOTYPE%20V1.0%20CIRCUITS.jpeg',
      badge: 'V1.0 CIRCUITS',
      fit: 'object-cover'
    },
    {
      title: 'V2.0 Integrated ROV Prototype',
      subtitle: '25m Field Rated ROV Enclosure',
      image: '/assets/PROTOTYPE%20IMG%20V2.0.jpeg',
      badge: 'V2.0 CURRENT PROTOTYPE',
      fit: 'object-cover'
    },
    {
      title: 'VARUNA 06 Final Hardware Architecture',
      subtitle: 'Integrated Modular Subsea Payload',
      image: '/assets/FINAL%20PRODUCT%20OR%20PROTOTYPE%20IMG.jpeg',
      badge: 'FINAL PROTOTYPE',
      fit: 'object-cover'
    },
    {
      title: 'VARUNA 06 Entire System Schematic',
      subtitle: 'Complete Hardware Circuit & Interconnects',
      image: '/assets/ENTIRE%20SCHEMATIC%20DIAGRAM%20VARUNA06.jpeg',
      badge: 'SYSTEM SCHEMATIC',
      fit: 'object-contain p-2'
    }
  ];

  const prototypeVideos = [
    {
      title: 'Current Prototype & 6-Node Concept Explanation',
      video: '/assets/sixnode_explaining_concept.mp4',
      badge: 'CONCEPT EXPLANATION'
    },
    {
      title: 'V2.0 Current Prototype Live Demo',
      video: '/assets/CURRENT%20PROTOTYPE%20V2.0%20LIVE%20DEMO.mp4',
      badge: 'V2.0 LIVE DEMO'
    },
    {
      title: 'V1.0 Prototype Initial Test Demo',
      video: '/assets/PROTOTYPE%20V1.0%20LIVE%20DEMO.mp4',
      badge: 'V1.0 TEST DEMO'
    },
    {
      title: 'VARUNA 06 Emergency System & Underwater Testing',
      video: '/assets/WORKING%20VIDEO%20OF%20PROTO%20UNDERWATER.mp4',
      badge: 'EMERGENCY SYSTEM'
    }
  ];

  return (
    <section id="roadmap-feasibility" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative font-sans">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold mb-4">
          <Milestone className="w-3.5 h-3.5 text-blue-600" />
          <span>PROTOTYPE EVOLUTION & SCHEMATICS // V1 → V2 → FINAL</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Prototype Evolution & Hardware Schematics
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Physical prototypes, circuit schematics, and underwater working videos documenting Team LORENZINI's engineering iteration from V1 benchtop to V2 field trials and 6,000 m target architecture.
        </p>
      </div>

      {/* 🛠️ 04 — FROM PROTOTYPE TO INDUSTRY-GRADE PLATFORM 🛠️ */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border-2 border-amber-400/50 shadow-2xl mb-16">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
            04 — INDUSTRY STANDARD ARCHITECTURE
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            From 25 m Prototype to 6,000 m Industry Platform
          </h3>
          <p className="text-xs md:text-sm text-slate-300 font-medium mt-1">
            At 6,000 m, seawater hydrostatic pressure reaches ~596 atm, requiring engineered pressure housings, wet-mate connectors, and Kevlar-armored tethers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stage 1 */}
          <div className="p-5 rounded-2xl bg-slate-800/90 border border-amber-400/40 flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase block w-fit mb-3">
                STAGE 01 — CURRENT PROTOTYPE
              </span>
              <h4 className="text-lg font-extrabold text-white mb-2">25 m Field Prototype</h4>
              <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                <li>• ESP32 dual-core control core</li>
                <li>• 6+ multi-modal sensor cartridge</li>
                <li>• Pulsed EMI + RM3100 Magnetometer</li>
                <li>• Shallow-water O-ring sealed housing</li>
                <li>• Tethered surface power & telemetry</li>
              </ul>
            </div>
            <span className="mt-4 pt-2 border-t border-slate-700 text-[10px] text-amber-300 font-bold block">
              ✓ Validated in 25m Field Trials
            </span>
          </div>

          {/* Stage 2 */}
          <div className="p-5 rounded-2xl bg-slate-800/90 border border-blue-400/40 flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-blue-500 text-white font-extrabold text-[10px] uppercase block w-fit mb-3">
                STAGE 02 — FIELD-READY PLATFORM
              </span>
              <h4 className="text-lg font-extrabold text-white mb-2">Field-Ready Platform</h4>
              <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                <li>• Multi-thruster vector propulsion</li>
                <li>• Improved auto-heading & depth hold</li>
                <li>• Modular subsea swap electronics</li>
                <li>• Enhanced acoustic altimetry sonar</li>
                <li>• Automated tether management winch</li>
              </ul>
            </div>
            <span className="mt-4 pt-2 border-t border-slate-700 text-[10px] text-blue-300 font-bold block">
              ⚡ Scaled Commercial Prototype
            </span>
          </div>

          {/* Stage 3 */}
          <div className="p-5 rounded-2xl bg-emerald-950/90 border border-emerald-400/60 flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase block w-fit mb-3">
                STAGE 03 — TARGET DEEP-WATER
              </span>
              <h4 className="text-lg font-extrabold text-white mb-2">6,000 m Deep Architecture</h4>
              <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                <li>• Titanium pressure housing (596 atm)</li>
                <li>• Glass/ceramic wet-mate connectors</li>
                <li>• Deep-rated quartz pressure transducer</li>
                <li>• High-strength Kevlar neutral tether</li>
                <li>• FOG/INS + DVL + USBL navigation</li>
                <li>• Redundant power & ballast drop</li>
              </ul>
            </div>
            <span className="mt-4 pt-2 border-t border-emerald-800 text-[10px] text-emerald-300 font-bold block">
              🎯 MoES Deep Ocean Mission Benchmark
            </span>
          </div>
        </div>
      </div>

      {/* 🖼️ PHYSICAL PROTOTYPE PHOTO & SCHEMATIC GALLERY 🖼️ */}
      <div className="mb-16">
        <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
          <Eye className="w-5 h-5 text-amber-600" />
          <span>Physical Prototypes & System Schematics</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prototypePhotos.map((item, idx) => (
            <div key={idx} className="p-4 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between hover:border-amber-400 transition-all group">
              <div 
                onClick={() => setSelectedImg({ src: item.image, title: item.title })}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-slate-200 bg-slate-950 shadow-inner cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${item.fit} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-amber-600" />
                    <span>Expand View</span>
                  </span>
                </div>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase shadow-md tracking-wider">
                  {item.badge}
                </span>
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600 font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⚡ SOFTWARE DESIGN & CUSTOM PCB DESIGN CAD INTERFACE FEATURE BANNERS ⚡ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* Banner 1: THIS IS OUR SOFTWARE DESIGN (VARUNA 06) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-2 border-emerald-400/50 shadow-2xl flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>THIS IS OUR SOFTWARE DESIGN (VARUNA 06)</span>
            </div>
            <h3 className="text-xl font-black text-white tracking-tight">
              VARUNA 06 Official Topside Dashboard Interface
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Explore the real-time software telemetry, multi-physics anomaly scoring, and GIS bathymetric target mapping interface engineered for VARUNA 06 operations.
            </p>
          </div>

          <a
            href="https://dashboard-varuna-06.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-black text-xs shadow-lg hover:shadow-emerald-500/30 transition-all shrink-0 flex items-center justify-between group"
          >
            <span>Launch VARUNA 06 Software Dashboard</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Banner 2: CUSTOM PCB DESIGN CAD INTERFACE */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-2 border-amber-400/50 shadow-2xl flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold font-mono">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>INTERACTIVE PCB DESIGN CAD INTERFACE</span>
            </div>
            <h3 className="text-xl font-black text-white tracking-tight">
              VARUNA 06 Custom PCB Design & EDA Tool
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Team Lorenzini is actively designing and refining custom differential analog frontend PCBs for microvolt sensor acquisition.
            </p>
          </div>

          <a
            href="https://pcbdesign-varuna-06.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs shadow-lg hover:shadow-amber-500/30 transition-all shrink-0 flex items-center justify-between group"
          >
            <span>Launch PCB CAD Interface</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* 🎥 PROTOTYPE DEMO VIDEOS GALLERY 🎥 */}
      <div className="mb-16 pt-10 border-t border-slate-200">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Play className="w-5 h-5 text-emerald-600" />
            <span>Prototype Live Demo & Underwater Videos</span>
          </h3>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono font-bold shadow-xs">
            <Radio className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>HD Media: Loading speed depends on your network connection</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prototypeVideos.map((item, idx) => (
            <div key={idx} className="p-4 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between hover:border-emerald-400 transition-all">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-3 border border-slate-900 bg-black">
                <video
                  src={item.video}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] uppercase">
                  {item.badge}
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Schematics / Photos */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-300 animate-in fade-in zoom-in duration-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="font-extrabold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {selectedImg.title}
              </span>
              <button 
                onClick={() => setSelectedImg(null)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 bg-slate-950 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

