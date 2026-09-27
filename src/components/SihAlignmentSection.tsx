import React, { useState } from 'react';
import { Award, Trophy, CheckCircle2, Sparkles, Target, Zap, Shield, ArrowRight, Lightbulb, Compass, FileText } from 'lucide-react';

export const SihAlignmentSection: React.FC = () => {
  const [copiedPitch, setCopiedPitch] = useState(false);

  const judgePitch = `VARUNA06 is a low-cost tethered underwater ROV designed for preliminary seafloor anomaly detection and mapping. We combine pulsed electromagnetic sensing with magnetic, electrical, acoustic and optical observations. Instead of relying on a single sensor or one-time detection, our system performs coarse scanning, anomaly scoring, adaptive rescanning and multi-position verification. The verified anomalies are then converted into geo-referenced priority maps for detailed investigation. Our current prototype validates the architecture at shallow depth, while the platform is designed to scale through modular sensors, improved propulsion and pressure-rated hardware for deeper deployment.`;

  const sihTable = [
    { aspect: 'Novelty', evidence: 'Multi-sensor fusion + adaptive closed-loop rescan', tag: 'Innovation' },
    { aspect: 'Complexity', evidence: 'Underwater sensing + microvolt signal processing + ROV payload', tag: 'Engineering' },
    { aspect: 'Clarity', evidence: 'Sense → Process → Detect → Verify → Map workflow', tag: 'Architecture' },
    { aspect: 'Feasibility', evidence: 'COTS components + modular cartridge architecture', tag: 'Practicability' },
    { aspect: 'Practicability', evidence: 'Tethered operation + surface monitoring & recovery', tag: 'Deployment' },
    { aspect: 'Sustainability', evidence: 'Targeted investigation / reduced unnecessary re-surveys', tag: 'Ecology' },
    { aspect: 'Scale of Impact', evidence: 'Universities → Marine survey teams → Exploration', tag: 'Socio-Economic' },
    { aspect: 'User Experience', evidence: 'Real-time telemetry dashboard + geo-referenced GIS map', tag: 'Software' },
    { aspect: 'Future Progression', evidence: 'Prototype (25m) → Field Service → Deep-Water Platform', tag: 'Roadmap' },
    { aspect: 'Startup Potential', evidence: 'ROV-as-a-Service (RaaS) survey business model', tag: 'Commercial' },
  ];

  const mainDifferentiators = [
    { title: 'Multi-Physics Sensing', desc: 'EM + Magnetic + Electrical (SP) + Acoustic + Optical observations' },
    { title: 'Adaptive Scanning', desc: 'Large-area coarse screening followed by high-frequency rescan' },
    { title: 'Anomaly Scoring (MRP)', desc: 'Unified 0–100 confidence score combining multi-modal signals' },
    { title: 'Closed-Loop Verification', desc: 'Detect → Rescan → Verify → Update score → Map' },
    { title: 'Modular Architecture', desc: 'COTS components + reusable ROV + replaceable sensor cartridges' },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(judgePitch);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  return (
    <section id="sih-alignment" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-sans mb-4 font-bold shadow-xs">
          <Trophy className="w-3.5 h-3.5 text-amber-600" />
          <span>TEAM LORENZINI // EXECUTIVE PROJECT SUMMARY & SIH MATRIX</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-sans">
          SIH Evaluation Alignment & Differentiators
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Comprehensive project consolidation structured for hackathon judges, technical evaluators, and marine survey partners.
        </p>
      </div>

      {/* Core Technical Differentiator Highlight Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl mb-12 border border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-sans font-bold text-amber-400 uppercase tracking-widest block mb-2">
            CORE TECHNICAL STATEMENT
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans leading-tight">
            “VARUNA06 transforms one-time underwater anomaly detection into an evidence-driven seafloor investigation process.”
          </h3>
          <p className="text-sm text-slate-300 font-sans max-w-2xl mx-auto font-medium">
            Preliminary screening & target prioritization platform — not definitive mineral identification.
          </p>
        </div>
      </div>

      {/* 5 Main Differentiators Grid */}
      <div className="mb-14">
        <h3 className="text-xl font-bold text-slate-900 mb-6 font-sans text-center flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>The 5 Main VARUNA06 Differentiators</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mainDifferentiators.map((diff, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col justify-between hover:border-blue-400 transition-all">
              <div>
                <span className="text-xs font-bold text-blue-700 block mb-1">0{idx + 1}</span>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{diff.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Grid: 30-Second Judge Pitch & SIH Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 30-Second Verbatim Pitch */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-slate-900 font-sans">30-Second Judge Pitch</h3>
            </div>
            <button
              onClick={copyToClipboard}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200"
            >
              {copiedPitch ? 'Copied!' : 'Copy Pitch'}
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs md:text-sm font-sans leading-relaxed font-medium italic mb-6">
            "{judgePitch}"
          </div>

          {/* Key Metadata Table */}
          <div className="space-y-2 text-xs font-sans">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
              <span className="text-slate-600 font-semibold">Team Name</span>
              <span className="text-slate-900 font-bold">LORENZINI</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
              <span className="text-slate-600 font-semibold">Problem Statement</span>
              <span className="text-amber-800 font-bold">26064</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
              <span className="text-slate-600 font-semibold">Theme / Category</span>
              <span className="text-slate-900 font-bold">Robotics & Drones (Hardware)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
              <span className="text-slate-600 font-semibold">Prototype Depth Rating</span>
              <span className="text-emerald-700 font-bold">25 m (Shallow Water)</span>
            </div>
          </div>
        </div>

        {/* Right Column: SIH Guidance Evaluation Matrix */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900 font-sans">SIH Guidance Evaluation Alignment</h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              10 Criteria
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold">
                  <th className="py-2.5 px-3">SIH Aspect</th>
                  <th className="py-2.5 px-3">VARUNA06 Evidence</th>
                  <th className="py-2.5 px-3 text-right">Domain Tag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {sihTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-slate-900">{row.aspect}</td>
                    <td className="py-2.5 px-3 text-slate-700">{row.evidence}</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-bold text-[10px]">
                        {row.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
