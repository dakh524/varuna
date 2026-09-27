import React, { useState } from 'react';
import { Box, Radio, FileText, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Award, Sparkles, Compass, Cpu, Layers, Activity } from 'lucide-react';

interface HeroSectionProps {
  onOpenMission: () => void;
  onOpenJudgeMode: () => void;
  onOpenReport: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMission, onOpenJudgeMode, onOpenReport }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      version: 'V2 PROTOTYPE (CURRENT)',
      tag: 'STAGE 01 // CURRENT FIELD-TESTED PROTOTYPE (25 m)',
      title: 'VARUNA 06 — Low-Cost Intelligent Seafloor Investigation Platform',
      subtitle: 'A modular tethered ROV for preliminary seafloor anomaly detection, adaptive investigation and geo-referenced mapping.',
      desc: '25 m shallow-water field-tested prototype featuring 6+ multi-modal sensing payload, ESP32 real-time control, and adaptive 4-point rescan verification.',
      badge: 'V2 CURRENT PROTOTYPE • 25m DEPTH RATED',
      videoCaption: 'This explains our current prototype and six node concept'
    },
    {
      version: 'V1 PROTOTYPE (BENCHTOP)',
      tag: 'STAGE 02 // PROOF OF CONCEPT BENCHTOP (V1)',
      title: 'V1 — Initial Sensor Prototype (Benchtop Validation)',
      subtitle: 'Laboratory Benchtop Testing & Multi-Physics Sensor Integration',
      desc: 'Initial testing of EM TX/RX induction coils, RM3100 magnetometer, MS5803 pressure sensor, and ESP32 microcontroller signal processing.',
      badge: 'V1 PROTOTYPE • BENCHTOP VALIDATED',
      videoCaption: 'V1 Concept: Initial Sensor Coil & Electronics Bench Testing'
    },
    {
      version: 'FINAL TARGET ARCHITECTURE',
      tag: 'STAGE 03 // 6,000 m DEEP-WATER TARGET ARCHITECTURE',
      title: 'FINAL VARUNA 06 — Industry-Grade Target Platform',
      subtitle: 'Target 6,000 m Ultra-Deep Ocean Architecture (596 atm Hydrostatic Rating)',
      desc: 'Target architecture benchmarked against 6,000 m class deep ocean ROVs (NOAA Deep Discoverer / NIOT ROSUB-6000) with titanium pressure vessel, USBL/INS navigation, and heavy thrusters.',
      badge: 'FINAL ARCHITECTURE • 6,000 m TARGET RATED',
      videoCaption: 'Final Target Architecture: Industrial Deep Ocean Deployment'
    }
  ];

  const currentSlide = heroSlides[activeSlide];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="hero" className="w-full font-sans bg-[#f8fafc]">
      
      {/* 🌟 1. SAFFRON & WARM AMBER OFFICIAL HERO BANNER (RECREATING IMAGE HERO LAYOUT) 🌟 */}
      <div className="relative bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 text-white py-12 md:py-16 px-4 md:px-8 shadow-lg overflow-hidden">
        {/* Background Decorative Waves */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_50%,#ffffff_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Version Slide Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                    activeSlide === idx
                      ? 'bg-white text-slate-950 border-white shadow-md scale-105'
                      : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                  }`}
                >
                  {slide.version}
                </button>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>{currentSlide.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {currentSlide.title}
            </h1>

            <div className="text-base sm:text-lg font-bold text-amber-100">
              {currentSlide.subtitle}
            </div>

            <p className="text-sm md:text-base text-amber-50 leading-relaxed font-medium max-w-2xl">
              {currentSlide.desc}
            </p>

            {/* 📊 4 KEY HERO STATS BADGES REQUESTED BY USER 📊 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-2.5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/20 text-center">
                <span className="text-xl font-extrabold text-amber-300 block">25 m</span>
                <span className="text-[10px] text-amber-100 font-bold uppercase tracking-wider block">Current Prototype</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/20 text-center">
                <span className="text-xl font-extrabold text-emerald-300 block">6,000 m</span>
                <span className="text-[10px] text-emerald-100 font-bold uppercase tracking-wider block">Target Architecture</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/20 text-center">
                <span className="text-xl font-extrabold text-blue-300 block">6+</span>
                <span className="text-[10px] text-blue-100 font-bold uppercase tracking-wider block">Sensing Modalities</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/20 text-center">
                <span className="text-xl font-extrabold text-purple-300 block">0–100</span>
                <span className="text-[10px] text-purple-100 font-bold uppercase tracking-wider block">Anomaly Score</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenMission}
                className="px-6 py-3 rounded-xl bg-white text-slate-950 font-extrabold text-xs shadow-lg hover:bg-amber-100 transition-all active:scale-95 flex items-center gap-2"
              >
                <Box className="w-4 h-4 text-amber-600" />
                <span>EXECUTE MISSION</span>
              </button>

              <button
                onClick={onOpenJudgeMode}
                className="px-6 py-3 rounded-xl bg-[#0b132b] text-amber-300 font-extrabold text-xs shadow-lg hover:bg-slate-900 transition-all border border-amber-400/50 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>AUDIT BRIEFING (60s)</span>
              </button>
            </div>
          </div>

          {/* Right Featured Video Card with Slide Controls */}
          <div className="lg:col-span-5 relative">
            <div className="p-3.5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl relative">
              
              {/* Preview Graphic / Video Box */}
              <div className="relative rounded-2xl bg-[#0b132b] border-2 border-amber-400/60 overflow-hidden flex flex-col justify-between shadow-2xl">
                
                {/* Status Pills Top Bar */}
                <div className="flex items-center justify-between z-10 p-3 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{currentSlide.version} DEMO</span>
                  </span>
                  <span className="text-[10px] text-amber-300 font-bold">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* HTML5 Video Player */}
                <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <video
                    src="/sixnode%20explaining%20concept.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover shadow-inner"
                  />
                </div>

                {/* Explicit Caption Requested by User */}
                <div className="p-3 bg-[#0b132b] border-t border-amber-400/30 text-center">
                  <p className="text-xs font-bold text-amber-300 tracking-wide font-sans">
                    {currentSlide.videoCaption}
                  </p>
                  <p className="text-[10px] text-slate-300 font-medium">
                    VARUNA 06 • Team LORENZINI • MoES PS 26064
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-center gap-3 mt-3">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors border border-white/30"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="text-xs font-bold text-white">
                  0{activeSlide + 1} / 0{heroSlides.length} — {currentSlide.version}
                </span>

                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors border border-white/30"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🇮🇳 2. COMMEMORATIVE DEEP OCEAN MISSION STRIP (MATCHING AZADI KA AMRIT MAHOTSAV BANNER) 🇮🇳 */}
      <div className="bg-[#fefce8] border-y border-amber-200 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Emblem Badge */}
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xl shadow-md shrink-0">
              MoES
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
                DEEP OCEAN MISSION // SAMUDRAYAN INITIATIVE (2026)
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Ocean Resource Exploration & Seafloor Mineral Mapping
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                National Centre for Polar and Ocean Research (NCPOR) • Problem Statement ID: 26064
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-4 py-2 rounded-xl bg-white border border-amber-300 text-amber-900 text-xs font-bold shadow-xs">
              CATEGORY: HARDWARE
            </span>
            <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold shadow-xs">
              THEME: ROBOTICS & DRONES
            </span>
          </div>
        </div>
      </div>

      {/* 🏛️ 3. ABOUT & PROBLEM STATEMENT 26064 SECTION (MATCHING REFERENCE ABOUT SECTION LAYOUT) 🏛️ */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">
            OFFICIAL SIH PROBLEM STATEMENT 26064
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            About Problem Statement 26064 & VARUNA 06 Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar: Quick Navigation List (Matching reference image left sidebar) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3 mb-4">
              General Information & Quick Links
            </h4>

            <a href="#problem" className="block p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs font-bold hover:bg-amber-100 transition-all flex items-center justify-between">
              <span>01. Problem Statement 26064</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
            </a>

            <a href="#robot-3d" className="block p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-between">
              <span>02. ROV 3D Platform Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a href="#sensor-fusion" className="block p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-between">
              <span>03. Sensor Suite (7 Modalities)</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a href="#prospectivity-map" className="block p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-between">
              <span>04. Bathymetric Seafloor Map</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a href="#sih-alignment" className="block p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-between">
              <span>05. SIH Pitch & Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a href="#team" className="block p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-between">
              <span>06. Team LORENZINI</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Right Main Featured Card (Matching reference image right card layout) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                  MINISTRY OF EARTH SCIENCES (MoES) • NCPOR
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Low-Cost Deployable Seafloor Metal Detection Sensor
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold shrink-0">
                ACTIVE SOLUTION
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium mb-6">
              Design and develop a low-cost deployable ocean-bottom sensor that can be released from a research vessel during surveys to detect and map metal-rich seabed deposits, including polymetallic nodules, hydrothermal sulphides, cobalt-rich crusts and rare-earth-element-bearing sediments, providing a rapid and cost-effective tool for deep-ocean mineral exploration.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-slate-800">
                Polymetallic Nodules
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-slate-800">
                Hydrothermal Sulphides
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-slate-800">
                Cobalt-Rich Crusts
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-slate-800">
                REE Sediments
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🛠️ 4 CORE PROGRAMME / MODULE CARDS (MATCHING ITEC PROGRAMME 4-CARD GRID FROM REFERENCE IMAGE) 🛠️ */}
      <div className="py-12 bg-white border-t border-slate-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">
              VARUNA 06 CORE TECHNICAL MODULES
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              End-to-End Oceanic Exploration Stack
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">01 — Pulsed EMI Sensing</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  TX/RX resonant coils with multi-frequency excitation (200Hz - 10kHz) for electromagnetic response measurement.
                </p>
              </div>
              <a href="#architecture" className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1">
                <span>Explore Sensing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">02 — Multi-Sensor Fusion</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  Fusing RM3100 magnetometer, galvanic SP, acoustic standoff, and optical camera to eliminate false alerts.
                </p>
              </div>
              <a href="#sensor-fusion" className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                <span>Explore Fusion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">03 — Adaptive Rescan</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  4-Step coarse-to-fine rescan loop to verify spatial persistence before scoring targets.
                </p>
              </div>
              <a href="#adaptive-rescan" className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
                <span>Explore Rescan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center font-bold mb-4 shadow-xs">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">04 — Bathymetric Map</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  Geo-referenced 0–100 MRP confidence scoring and spatial rescan verification output into GIS.
                </p>
              </div>
              <a href="#prospectivity-map" className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1">
                <span>Explore Mapping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
