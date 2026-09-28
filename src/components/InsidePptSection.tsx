import React, { useState } from 'react';
import {
  FileText, Download, ExternalLink, ChevronLeft, ChevronRight,
  Layers, ShieldCheck, Cpu, Database, Award, Sparkles, Eye, CheckCircle2,
  TrendingUp, BarChart3, Radio, Compass, Anchor, ArrowRight, BookOpen, AlertCircle
} from 'lucide-react';

export const InsidePptSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [viewPdfModal, setViewPdfModal] = useState<boolean>(false);

  const slidesData = [
    {
      slideNum: 1,
      tag: "TAB 01 // PROBLEM STATEMENT & BASELINE",
      tabTitle: "1. Problem Statement",
      title: "Problem Statement 26064 & Current Systems Bottleneck",
      subtitle: "Ministry of Earth Sciences (MoES) • National Centre for Polar and Ocean Research (NCPOR)",
      jumpAnchor: "#problem",
      keyHighlights: [
        "Problem Statement ID: 26064 (Category: Hardware | Theme: Robotics and Drones)",
        "Mandate: Design & develop low-cost ocean-bottom sensor for preliminary metal deposit screening.",
        "Target Deposit Types: Polymetallic Nodules, Hydrothermal Sulphides, Cobalt Crusts, REE Sediments.",
        "Current Bottleneck: Million-dollar ROV deployments (e.g., ROSUB 6000) cost $30,000–$80,000/day.",
        "Goal: Eliminate exhaustive physical grab-sampling by pre-screening high-probability mineral zones."
      ],
      details: `Tab 1 establishes the core problem mandated under India's Deep Ocean Mission. Conventional seafloor mineral exploration relies on massive, million-dollar tethered ROVs or blind physical grab-sampling across vast maritime zones. Operating these heavy survey vessels incurs extreme daily costs ($30,000+/day). VARUNA06 solves this bottleneck by serving as a rapid, low-cost deployable preliminary screening payload.`,
      sections: [
        {
          heading: "Official Problem Description",
          content: "Design and develop a low-cost deployable ocean-bottom sensor that can be released from a research vessel during surveys to detect and map metal-rich seabed deposits, including polymetallic nodules, hydrothermal sulphides, cobalt-rich crusts and REE sediments."
        },
        {
          heading: "Current Approach & NIOT Baseline",
          content: "NIOT has developed deep-water ROVs (such as ROSUB 6000) equipped with optical cameras, sonar, and manipulator tools. While powerful, deploying heavy ROVs across broad ocean basins is cost-prohibitive for initial screening. VARUNA06 acts as an agile preliminary target screener to optimize survey ship time."
        }
      ]
    },
    {
      slideNum: 2,
      tag: "TAB 02 // VARUNA06 INNOVATIVE SOLUTION",
      tabTitle: "2. Solution",
      title: "Multi-Physics Sensing Engine & Autonomous 4-Point Rescan",
      subtitle: "Shark-Inspired Electro-Reception (Ampullae of Lorenzini) • 1.25m Acoustic Lock • 0-100% Scoring",
      jumpAnchor: "#robot-viewer",
      keyHighlights: [
        "Multi-Physics Engine: Combines EMI, RM3100 Magnetometer, Galvanic SP Electrodes, Acoustics, and 4K Optics.",
        "Shark-Inspired Sensing: Modeled after Ampullae of Lorenzini electro-receptive organs in marine predators.",
        "1.25m Acoustic Standoff: 500 kHz acoustic altimeter holds constant standoff to counteract 1/r³ EM decay.",
        "Metal Prospectivity Scoring: Calibrates indices (0–100%) for Copper (82%), Manganese (76%), Nickel (64%), Cobalt (47%).",
        "Closed-Loop 4-Point Rescan: Repositioning routine (0.8m N → E → S → W) eliminating 80%+ false positive alarms."
      ],
      details: `Tab 2 presents the complete VARUNA06 technological solution. Inspired by the electro-receptive organs of sharks, VARUNA06 synthesizes 5 physical field signals into calibrated mineral prospectivity scores. On anomaly trip (>60 confidence score), the edge decision engine executes a 4-point cross-pattern micro-translation routine to verify 3D field decay and reject scrap-metal false alerts.`,
      sections: [
        {
          heading: "Multi-Sensor Fusion Architecture",
          content: "Ventral EM transmitter coils, differential receiver pairs, 3-axis RM3100 fluxgate magnetometers, and silver-chloride SP electrodes operate simultaneously to cross-validate subsea conductive signatures."
        },
        {
          heading: "Closed-Loop Autonomous Rescan Logic",
          content: "When preliminary prospectivity trips >60, vector thrusters translate 0.8m in 4 orthogonal directions around the anomaly epicenter to measure spatial consistency and confirm geological bodies."
        }
      ]
    },
    {
      slideNum: 3,
      tag: "TAB 03 // PROTOTYPE TESTING & RESEARCH FOUNDATION",
      tabTitle: "3. Our Test & Research",
      title: "3-Stage Prototype Evolution, IEEE Papers & Digital Twin",
      subtitle: "V1 Benchtop → V2 25m Prototype → Final Platform • 5 IEEE Papers • GEBCO / NOAA Datasets",
      jumpAnchor: "#simulator",
      keyHighlights: [
        "V1 Benchtop Prototype: Laboratory coil calibration, RM3100 magnetometer integration, ESP32 data logger.",
        "V2 Integrated Prototype: 25m depth-rated waterproof housing, 1 thruster mobility, MS5803 depth sensor, live telemetry.",
        "Final VARUNA06 Platform: 4-thruster vector propulsion, modular sensor cartridge, marine tether, surface control station.",
        "10-Hz Telemetry Digital Twin: Real-time operator dashboard streaming depth, standoff, EM voltage, and magnetic vectors.",
        "5 Published IEEE Papers: Grounded in peer-reviewed MAD, CEMS, and multi-modal subsea data fusion literature."
      ],
      details: `Tab 3 details our empirical testing and academic foundation. Team Lorenzini advanced from laboratory coil calibration (V1) to a functional 25m depth-rated prototype (V2) tested in marine environments. Every sensor frequency, filtering algorithm, and fusion layer is grounded in 5 peer-reviewed IEEE research papers and cross-validated against GEBCO, NOAA, and ISA global marine geophysics datasets.`,
      sections: [
        {
          heading: "Empirical Prototype Progression",
          content: "Field testing validated 24-bit ADC voltage resolution, MS5803 depth sensing, and real-time noise cancellation algorithms that isolate thruster motor harmonics from delicate EM receiver coils."
        },
        {
          heading: "IEEE Literature & Global Dataset Grounding",
          content: "Algorithms adhere to IEEE standards for Controlled Source Electromagnetic (CEMS) sensing and Magnetic Anomaly Detection (MAD), verified using GEBCO bathymetric grids and NOAA geophysics records."
        }
      ]
    },
    {
      slideNum: 4,
      tag: "TAB 04 // COMMERCIALIZATION & IMPACT",
      tabTitle: "4. Business Model",
      title: "ROV-as-a-Service (RaaS) Model & 97.5% Cost Reduction",
      subtitle: "RaaS Subscription • ~97.5% Cost Advantage vs. $2M Heavy AUVs • Blue Economy Alignment",
      jumpAnchor: "#business-swot",
      keyHighlights: [
        "Target Audience: Oceanographic research institutes, universities, marine survey firms, mineral exploration teams.",
        "RaaS Business Model: Pay-per-mission survey deployments, data analytics reports, and platform hardware upgrades.",
        "Extreme Cost Advantage: ~97.5% lower cost compared to $2M+ heavy commercial survey AUVs.",
        "Environmental Preservation: Prevents seabed scarring by eliminating blind physical dredging & grab-sampling.",
        "Blue Economy Alignment: Supports India's Deep Ocean Mission policies through non-destructive screening."
      ],
      details: `Tab 4 outlines the commercial viability and environmental impact of VARUNA06. Operating under an ROV-as-a-Service (RaaS) model, VARUNA06 enables academic institutions and government agencies to access turnkey mineral prospectivity maps without capital-investing millions in heavy survey vessels. Non-destructive electromagnetic screening protects benthic ecosystems while optimizing survey ship ROI.`,
      sections: [
        {
          heading: "RaaS Service Workflow",
          content: "Deploy → Scan → Score → Rescan → Confirm → Map. Delivers georeferenced GIS prospectivity layers and raw sensor telemetry logs to client agencies."
        },
        {
          heading: "Environmental & Strategic Blue Economy Alignment",
          content: "Non-destructive electromagnetic induction and passive magnetic measurement eliminate destructive preliminary dredging, directly aligning with UNCLOS maritime environmental guidelines."
        }
      ]
    },
    {
      slideNum: 5,
      tag: "TAB 05 // TEAM SECRETARIAT & MENTORSHIP",
      tabTitle: "5. Our Team & Mentors",
      title: "Team Lorenzini & NIOT Chennai Domain Mentorship",
      subtitle: "Smart India Hackathon 2026 Secretariat • Expert Guidance from NIOT Senior Scientists",
      jumpAnchor: "#team",
      keyHighlights: [
        "Team Lorenzini (Team ID: 179424): Multi-disciplinary hardware, software, robotics, and geophysics team.",
        "Domain Mentorship: Expert guidance from senior marine technology scientists & researchers at NIOT Chennai.",
        "NIOT Feedback Integration: 4000m pressure housing roadmap, modular cartridge bays, and thruster noise decoupling.",
        "Smart India Hackathon Secretariat: Full alignment with SIH hardware evaluation criteria and MoES guidelines.",
        "Open Ocean Readiness: Dedicated development roadmap from lab tank validation to deep-sea sea trials."
      ],
      details: `Tab 5 introduces Team Lorenzini and our domain mentorship network. Our hardware, software, and robotics engineers worked closely under the guidance of senior marine scientists at the National Institute of Ocean Technology (NIOT) Chennai. Technical feedback from NIOT expert interactions shaped our modular sensor cartridge system and noise cancellation algorithms.`,
      sections: [
        {
          heading: "Domain Guidance from NIOT Scientists",
          content: "Technical reviews with NIOT Chennai marine experts validated our acoustic standoff altitude requirements and informed our deep-water pressure-housing roadmap."
        },
        {
          heading: "SIH 2026 Secretariat & Deliverables",
          content: "Team Lorenzini delivers a fully integrated physical prototype, interactive 10-Hz digital twin telemetry simulator, 3D subsea robot viewer, and open GIS mapping portal."
        }
      ]
    }
  ];

  const activeSlideData = slidesData.find(s => s.slideNum === currentSlide) || slidesData[0];

  const handleJumpToSection = (anchor: string | null) => {
    if (!anchor) return;
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inside-ppt" className="py-12 sm:py-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto relative font-sans scroll-mt-20">

      {/* Decorative Government Header Strip */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-extrabold mb-3 sm:mb-4 shadow-sm">
          <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
          <span>OFFICIAL SIH 2026 PRESENTATION DECK // TEAM LORENZINI</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
          INSIDE PPT — 5 Core Presentation Tabs
        </h2>
        <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
          Explore the official Smart India Hackathon presentation submitted for <strong className="text-amber-800">Problem Statement 26064</strong> under the Ministry of Earth Sciences (MoES).
        </p>

        {/* PDF Download & Quick Actions Bar */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <a
            href="/assets/SIH_TEAM_LORENZINI.pdf"
            download="SIH_TEAM_LORENZINI_VARUNA06_PPT.pdf"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Download className="w-4 h-4 text-slate-950 shrink-0" />
            <span>Download Official PPT PDF</span>
          </a>

          <button
            onClick={() => setViewPdfModal(true)}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Eye className="w-4 h-4 text-amber-400 shrink-0" />
            <span>View Full PDF Document</span>
          </button>
        </div>
      </div>

      {/* 5 User Requested Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-6 bg-white p-2 rounded-2xl border border-slate-200 shadow-md">
        {slidesData.map((slide) => {
          const isActive = currentSlide === slide.slideNum;
          return (
            <button
              key={slide.slideNum}
              onClick={() => setCurrentSlide(slide.slideNum)}
              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-extrabold transition-all text-center ${isActive
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${isActive ? 'bg-slate-950 text-amber-400 font-black' : 'bg-slate-200 text-slate-800'
                }`}>
                {slide.slideNum}
              </span>
              <span className="truncate">{slide.tabTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Tab Content Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden mb-8 sm:mb-12">
        {/* Top Header Bar */}
        <div className="bg-[#0b132b] text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/30">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest truncate">
              {activeSlideData.tag}
            </span>
            <span className="text-xs text-slate-400 font-bold hidden md:inline">
              SIH Idea Submission Template • MoES / NCPOR
            </span>
          </div>

          {/* Prev/Next Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {activeSlideData.jumpAnchor && (
              <button
                onClick={() => handleJumpToSection(activeSlideData.jumpAnchor)}
                className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-[11px] font-mono font-bold flex items-center gap-1 transition-all mr-1"
                title="Jump to Interactive Live Portal View"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </button>
            )}

            <button
              disabled={currentSlide === 1}
              onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
              title="Previous Tab"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <span className="text-xs font-bold text-amber-400 font-mono px-1 sm:px-2">
              Tab {currentSlide} / {slidesData.length}
            </span>

            <button
              disabled={currentSlide === slidesData.length}
              onClick={() => setCurrentSlide(prev => Math.min(slidesData.length, prev + 1))}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
              title="Next Tab"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-1.5 sm:mb-2">
              {activeSlideData.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-amber-800 font-bold">
              {activeSlideData.subtitle}
            </p>
          </div>

          {/* Key Bullet Highlights Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 shadow-inner space-y-3">
            <h4 className="text-[11px] sm:text-xs font-extrabold text-amber-900 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Key Technical Highlights:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm">
              {activeSlideData.keyHighlights.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Narrative Explanation */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
              <Layers className="w-4 h-4 text-amber-600 shrink-0" />
              <span>In-Depth Technical Explanation</span>
            </h4>
            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              {activeSlideData.details}
            </p>
          </div>

          {/* Specific Section Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {activeSlideData.sections.map((sec, sIdx) => (
              <div key={sIdx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all shadow-xs">
                <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                  <span>{sec.heading}</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Tab Bottom Bar Navigation Footer */}
        <div className="bg-slate-100 px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">Smart India Hackathon 2026 • Official Presentation Deck</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setCurrentSlide(prev => prev > 1 ? prev - 1 : slidesData.length)}
              className="text-amber-800 hover:text-amber-900 font-extrabold"
            >
              ← Previous Tab
            </button>
            <span>|</span>
            <button
              onClick={() => setCurrentSlide(prev => prev < slidesData.length ? prev + 1 : 1)}
              className="text-amber-800 hover:text-amber-900 font-extrabold"
            >
              Next Tab →
            </button>
          </div>
        </div>

      </div>

      {/* PDF View Modal */}
      {viewPdfModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="relative max-w-5xl w-full h-[90vh] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-300 flex flex-col animate-in fade-in zoom-in duration-200">

            {/* Modal Header */}
            <div className="p-3 sm:p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-700 gap-3">
              <span className="font-extrabold text-xs sm:text-sm flex items-center gap-2 truncate">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SIH TEAM LORENZINI Presentation Deck (SIH TEAM LORENZINI.pdf)</span>
              </span>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href="/assets/SIH_TEAM_LORENZINI.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </a>
                <button
                  onClick={() => setViewPdfModal(false)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Frame */}
            <div className="flex-1 w-full bg-slate-100">
              <iframe
                src="/assets/SIH_TEAM_LORENZINI.pdf"
                title="SIH Presentation PDF"
                className="w-full h-full border-0"
              />
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
