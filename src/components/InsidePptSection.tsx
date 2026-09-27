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
      tag: "SLIDE 01 // PROBLEM STATEMENT & BASELINE",
      title: "Problem Statement 26064 & Current Systems Analysis",
      subtitle: "Ministry of Earth Sciences (MoES) • National Centre for Polar and Ocean Research (NCPOR)",
      keyHighlights: [
        "Problem Statement ID: 26064 (Category: Hardware | Theme: Robotics and Drones)",
        "Team Lorenzini | Team ID: 179424 | Smart India Hackathon 2026",
        "Target Deposit Types: Polymetallic Nodules, Hydrothermal Sulphides, Cobalt-Rich Crusts, REE Sediments",
        "Existing Systems Review: Analysis of NIOT ROSUB 6000 tethered ROV and commercial deep-water survey platforms."
      ],
      details: `Slide 1 establishes the core mission mandated by MoES and NCPOR under India's Deep Ocean Mission. Conventional seafloor metal exploration relies on massive, million-dollar tethered ROVs (such as ROSUB 6000) or exhaustive physical grab-sampling. 
      VARUNA 06 addresses this bottleneck by providing a rapid, low-cost deployable seafloor sensor payload capable of preliminary screening to locate high-probability mineral deposits prior to heavy equipment deployment.`,
      sections: [
        {
          heading: "Official Problem Description",
          content: "Design and develop a low-cost deployable ocean-bottom sensor that can be released from a research vessel during surveys to detect and map metal-rich seabed deposits, including polymetallic nodules, hydrothermal sulphides, cobalt-rich crusts and rare-earth element-bearing sediments."
        },
        {
          heading: "Current Approach & NIOT Baseline",
          content: "NIOT has developed deep-water Remotely Operated Vehicles (ROVs), including ROSUB 6000, carrying optical cameras, sonar, and tools. While powerful, operating tethered ROVs across vast ocean basins incurs extreme hourly operational costs ($30,000+/day). VARUNA 06 acts as a preliminary target screener to optimize survey vessel time."
        }
      ]
    },
    {
      slideNum: 2,
      tag: "SLIDE 02 // IDEA & MULTI-PHYSICS SENSING",
      title: "What is VARUNA 06? Core Innovation & Motive",
      subtitle: "Shark-Inspired Sensing (Ampullae of Lorenzini) • Evidence-Driven Seafloor Screening",
      keyHighlights: [
        "Product: Low-cost tethered underwater robotic platform for preliminary seabed metal detection & mapping",
        "Motive: Make seafloor resource exploration affordable, accessible, and data-driven before dredging",
        "Target: Enable research institutes and oceanographic agencies to rapidly screen vast maritime zones",
        "4 Innovation Pillars: Multi-Physics Sensing, Metal-Specific Scoring, Multi-Position Verification, Evidence-Based Confidence"
      ],
      details: `Inspired by the electro-receptive organs of sharks (Ampullae of Lorenzini), Team Lorenzini designed VARUNA 06 to synthesize multiple physical field variations (electromagnetic, magnetic, electrical conductivity, acoustic backscatter, and optical imagery). 
      Instead of relying on a single detection pass, VARUNA 06 executes a closed-loop MOVE → RESCAN protocol to confirm real subsea anomalies and eliminate false positives caused by marine debris or geological noise.`,
      sections: [
        {
          heading: "Multi-Physics Sensing Engine",
          content: "Combines EMI (Electromagnetic Induction), 3-axis Magnetic Anomaly Detection (RM3100), Self-Potential (SP) Galvanic Electrodes, Hydroacoustic Altimetry, and High-Resolution Optical Imaging to map seafloor mineral deposits."
        },
        {
          heading: "Metal-Specific Prospectivity Scoring (0-100)",
          content: "Converts raw sensor signatures into calibrated prospectivity indices (0 to 100%) for specific targets (e.g., Manganese Nodules vs. Ferromanganese Crusts) based on conductivity, permeability, and acoustic backscatter signatures."
        }
      ]
    },
    {
      slideNum: 3,
      tag: "SLIDE 03 // ARCHITECTURE & HARDWARE EVOLUTION",
      title: "Engineering Workflow & 3-Stage Prototype Evolution",
      subtitle: "V1 Benchtop → V2 25m Integrated Prototype → Final VARUNA06 ROV Platform",
      keyHighlights: [
        "V1 Sensor Prototype: Proof-of-concept EM coils, RM3100 magnetometer, ESP32 data logger, shallow water testing.",
        "V2 Integrated Prototype: 25m depth-rated waterproof housing, 1 thruster mobility, MS5803 depth sensor, live telemetry.",
        "Final VARUNA06 Platform: 4-thruster vector propulsion, modular sensor cartridge, marine tether, surface control station.",
        "12-Step Closed-Loop Survey Workflow: From survey launch and signal filtering to AI anomaly scoring and 3D bathymetric mapping."
      ],
      details: `Slide 3 highlights the rigorous engineering progression achieved by Team Lorenzini. Starting from laboratory benchtop coil calibration (V1), the team advanced to a functional 25-meter depth-rated prototype (V2) with integrated thruster mobility and live telemetry. 
      The final VARUNA 06 architecture features a modular sensor cartridge housing 3-axis fluxgate magnetometers, dual EM TX/RX coils, acoustic altimeters, and real-time operator surface dashboards.`,
      sections: [
        {
          heading: "Comprehensive Hardware & Software Tech Stack",
          content: "Hardware: Raspberry Pi 4, ESP32, RM3100 Magnetometer, MS5803 Depth Sensor, Brushless Thrusters, custom PCB frontend. Software: Python, C++, TensorFlow, Scikit-learn, OpenCV, MATLAB, Proteus, KiCad, QGroundControl, PostgreSQL, Next.js dashboard."
        },
        {
          heading: "12-Stage Operational Pipeline",
          content: "1. Launch & Recovery → 2. Acquisition → 3. Filtering & Noise Cancellation → 4. Motion Correction → 5. Anomaly Detection (Isolation Forest) → 6. Multi-Frequency Scan → 7. Adaptive Repositioning → 8. Visual Confirmation → 9. Telemetry → 10. Dashboard Plot → 11. GIS Mapping → 12. Safety Surfacing."
        }
      ]
    },
    {
      slideNum: 4,
      tag: "SLIDE 04 // FEASIBILITY, VIABILITY & WOW FACTORS",
      title: "Technical Feasibility & Differentiating WOW Factors",
      subtitle: "COTS Architecture • Practical Advantage over Conventional Survey Systems",
      keyHighlights: [
        "Technical Feasibility: Modular replaceable sensor cartridges, tethered power & data, pressure-tested seals",
        "Operational Practicability: Controlled ROV maneuvers, real-time surface monitoring, multi-angle verification",
        "WOW Factor 1: Multi-sensor cross-validation reduces false-positive detection rates to near zero",
        "WOW Factor 2: Adaptive rescanning focuses high-resolution multi-frequency scans only where candidate zones exist"
      ],
      details: `Slide 4 demonstrates why VARUNA 06 is both economically viable and technically superior to traditional oceanographic survey methods. By using Commercial Off-The-Shelf (COTS) precision sensors combined with proprietary signal processing algorithms, VARUNA 06 achieves full multi-physics anomaly scoring at a fraction of standard commercial costs.`,
      sections: [
        {
          heading: "Conventional ROV vs. VARUNA 06 Comparison",
          content: "Conventional systems perform fixed, single-pass surveys with limited sensors, resulting in high false alarm rates and expensive physical re-surveys. VARUNA 06 uses adaptive multi-frequency scanning and automatic repositioning to verify target signatures before logging."
        },
        {
          heading: "Field Validation Roadmap",
          content: "Build → Validate (Lab Tank & 25m Marine Tests) → Improve (Multi-Thruster Upgrade & Noise Cancellation) → Scale (4000m Pressure-Rated Deep-Water Platform)."
        }
      ]
    },
    {
      slideNum: 5,
      tag: "SLIDE 05 // BUSINESS MODEL & SOCIETAL IMPACT",
      title: "Startup Potential, RaaS Model & Environmental Benefits",
      subtitle: "ROV-as-a-Service (RaaS) • ~97.5% Cost Reduction • Sustainable Exploration",
      keyHighlights: [
        "Target Audience: Oceanographic research institutes, universities, marine survey firms, mineral exploration teams",
        "RaaS Business Model: Pay-per-mission deployment, survey data analytics reports, and platform hardware upgrades",
        "Extreme Cost Advantage: ~97.5% lower cost compared to $2M+ heavy commercial survey AUVs",
        "Societal & Environmental Impact: Prevents unnecessary seabed scarring by targeting only high-confidence mineral zones"
      ],
      details: `Slide 5 details the commercialization strategy for VARUNA 06 under the ROV-as-a-Service (RaaS) model. Instead of requiring research agencies to capital-invest millions in heavy survey ships and ROVs, VARUNA 06 offers deployable survey missions providing turnkey mineral prospectivity maps and raw sensor telemetry.`,
      sections: [
        {
          heading: "From Detection to Decision (Execution Pipeline)",
          content: "Deploy → Scan → Score → Rescan → Confirm → Map. Strengthens India's marine resource security while providing accessible survey capabilities to national research universities."
        },
        {
          heading: "Environmental & Blue Economy Alignment",
          content: "Minimizes benthic ecosystem disturbance by eliminating blind physical grab-sampling. Supports India's Deep Ocean Mission and Blue Economy policies through targeted, non-destructive electromagnetic survey techniques."
        }
      ]
    },
    {
      slideNum: 6,
      tag: "SLIDE 06 // IEEE RESEARCH SOURCES & EXPERT VALIDATION",
      title: "IEEE Literature Foundation & Marine Dataset Cross-Validation",
      subtitle: "5 Published IEEE Papers • GEBCO Bathymetry • NOAA NCEI • EMODnet • ISA • NIOT Guidance",
      keyHighlights: [
        "IEEE Paper 1: Theories & Applications for Magnetic Anomaly Detection (MAD) Technology",
        "IEEE Paper 2: Controlled Source Electromagnetic (CEMS) Sensing for Compact Seabed Targets",
        "IEEE Paper 3: Mixed Seabed Sediment Classification via Transferred CNNs",
        "IEEE Paper 4: Seafloor Classification by Fusing AUV Acoustic & Magnetic Data",
        "IEEE Paper 5: Advances in Fusion of High-Resolution Underwater Optical & Acoustic Data",
        "Global Datasets Integrated: GEBCO Bathymetric Grids, NOAA Marine Geophysics, EMODnet Geology, ISA Mineral Records",
        "Domain Mentorship: Expert guidance from senior scientists & researchers at NIOT Chennai"
      ],
      details: `Slide 6 establishes the solid academic foundation backing VARUNA 06. Every sensor frequency, magnetic threshold, and multi-modal fusion layer is grounded in 5 peer-reviewed IEEE papers and verified against official marine geophysical repositories (GEBCO, NOAA, EMODnet, ISA). 
      Furthermore, field design feedback was obtained directly through research interactions with ocean technology experts at NIOT Chennai.`,
      sections: [
        {
          heading: "Primary Source Research Validation",
          content: "Following IEEE multi-sensor fusion guidelines, VARUNA 06 combines independent physical measurements (EM response, magnetic anomaly, galvanic SP, bathymetry, and optical frames) so that isolated sensor glitches cannot trigger false deposit alerts."
        },
        {
          heading: "Expert Guidance & Deep-Sea Pressure Readiness",
          content: "Interactions with NIOT marine scientists confirmed the need for modular 4000m pressure-tolerant enclosures and real-time noise decoupling from thruster motor harmonics."
        }
      ]
    }
  ];

  const activeSlideData = slidesData.find(s => s.slideNum === currentSlide) || slidesData[0];

  return (
    <section id="inside-ppt" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative font-sans scroll-mt-20">
      
      {/* Decorative Government Header Strip */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-extrabold mb-4 shadow-sm">
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>OFFICIAL SIH 2026 PRESENTATION DECK // TEAM LORENZINI</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          INSIDE PPT — Detailed Presentation Breakdown
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Explore the official 6-slide Smart India Hackathon presentation submitted for <strong className="text-amber-800">Problem Statement 26064</strong> under the Ministry of Earth Sciences (MoES).
        </p>

        {/* PDF Download & Quick Actions Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/assets/SIH_TEAM_LORENZINI.pdf"
            download="SIH_TEAM_LORENZINI_VARUNA06_PPT.pdf"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Download Official PPT PDF (6 Slides)</span>
          </a>

          <button
            onClick={() => setViewPdfModal(true)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>View Full PDF Document</span>
          </button>
        </div>
      </div>

      {/* Slide Navigation Tabs (Slides 1 - 6) */}
      <div className="flex items-center justify-between mb-6 bg-white p-2 rounded-2xl border border-slate-200 shadow-md overflow-x-auto gap-2">
        {slidesData.map((slide) => {
          const isActive = currentSlide === slide.slideNum;
          return (
            <button
              key={slide.slideNum}
              onClick={() => setCurrentSlide(slide.slideNum)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                isActive ? 'bg-slate-950 text-amber-400 font-black' : 'bg-slate-200 text-slate-800'
              }`}>
                {slide.slideNum}
              </span>
              <span>Slide 0{slide.slideNum}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Slide Display Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden mb-12">
        {/* Top Slide Header Bar */}
        <div className="bg-[#0b132b] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest">
              {activeSlideData.tag}
            </span>
            <span className="text-xs text-slate-400 font-bold hidden sm:inline">
              SIH Idea Submission Template • MoES / NCPOR
            </span>
          </div>

          {/* Slide Prev/Next Controls */}
          <div className="flex items-center gap-2">
            <button
              disabled={currentSlide === 1}
              onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
              title="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-amber-400 font-mono px-2">
              {currentSlide} / {slidesData.length}
            </span>

            <button
              disabled={currentSlide === slidesData.length}
              onClick={() => setCurrentSlide(prev => Math.min(slidesData.length, prev + 1))}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
              title="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content Body */}
        <div className="p-6 md:p-10 space-y-8">
          
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              {activeSlideData.title}
            </h3>
            <p className="text-sm md:text-base text-amber-800 font-bold">
              {activeSlideData.subtitle}
            </p>
          </div>

          {/* Key Bullet Highlights Box */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 shadow-inner space-y-3">
            <h4 className="text-xs font-extrabold text-amber-900 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Slide Key Technical Takeaways:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
              {activeSlideData.keyHighlights.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Narrative Explanation */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>In-Depth Slide Technical Explanation</span>
            </h4>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              {activeSlideData.details}
            </p>
          </div>

          {/* Specific Slide Section Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {activeSlideData.sections.map((sec, sIdx) => (
              <div key={sIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all shadow-xs">
                <h5 className="text-sm font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>{sec.heading}</span>
                </h5>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Slide Bottom Bar Navigation Footer */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Smart India Hackathon 2026 • Official Presentation Deck</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentSlide(prev => prev > 1 ? prev - 1 : slidesData.length)}
              className="text-amber-800 hover:text-amber-900 font-extrabold"
            >
              ← Previous
            </button>
            <span>|</span>
            <button
              onClick={() => setCurrentSlide(prev => prev < slidesData.length ? prev + 1 : 1)}
              className="text-amber-800 hover:text-amber-900 font-extrabold"
            >
              Next Slide →
            </button>
          </div>
        </div>

      </div>

      {/* PDF View Modal */}
      {viewPdfModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-300 flex flex-col animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-700">
              <span className="font-extrabold text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                SIH TEAM LORENZINI Presentation Deck (SIH TEAM LORENZINI.pdf)
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/assets/SIH_TEAM_LORENZINI.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in New Tab</span>
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
