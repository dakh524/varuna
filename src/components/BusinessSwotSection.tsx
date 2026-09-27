import React, { useState } from 'react';
import { SWOT_ANALYSIS } from '../data/mockData';
import { Briefcase, Leaf, Shield, CheckCircle2, AlertTriangle, ArrowRight, TrendingUp } from 'lucide-react';

export const BusinessSwotSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'sustainability' | 'swot'>('business');

  const customerSegments = [
    { title: 'Universities & Academic Labs', desc: 'Affordable marine geophysics payloads for subsea research training and oceanography departments.' },
    { title: 'National Oceanographic Agencies', desc: 'Regional continental shelf surveys and sovereign seabed mapping (e.g., Deep Ocean Mission).' },
    { title: 'Offshore Survey Contractors', desc: 'Rapid preliminary screening layer prior to mobilizing heavy ROVs and geotechnical drill ships.' },
    { title: 'Environmental & Geological Surveys', desc: 'Non-invasive acoustic and optical baseline logging across marine protected boundaries.' }
  ];

  const revenueStreams = [
    { title: 'Modular Hardware Sales', desc: 'Core VARUNA06 platform and plug-and-play sensor cartridges (EM coils, Ag/AgCl dipoles).' },
    { title: 'Survey-as-a-Service (SaaS)', desc: 'Deploying our engineering team and payload for turn-key regional transect surveys.' },
    { title: 'Anomaly Analytics & GIS Inversion', desc: 'Proprietary post-cruise multi-physics signature matching and 3D bathymetric mapping.' },
    { title: 'Annual Service & Recalibration', desc: 'Routine pressure recertification, O-ring maintenance, and sensor zero-point recalibration.' }
  ];

  return (
    <section id="business-swot" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 22, 23 & 24 // MARKET VIABILITY, SUSTAINABILITY & SWOT</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Commercial Viability & Environmental Responsibility
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Evaluating VARUNA06 as a deployable research enterprise: viable institutional business models, targeted environmental conservation, and honest strategic SWOT positioning.
        </p>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab('business')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'business'
                ? 'bg-blue-600 border-blue-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            BUSINESS MODEL & VALUE
          </button>
          <button
            onClick={() => setActiveTab('sustainability')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'sustainability'
                ? 'bg-emerald-600 border-emerald-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            SUSTAINABILITY FOOTPRINT
          </button>
          <button
            onClick={() => setActiveTab('swot')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              activeTab === 'swot'
                ? 'bg-amber-600 border-amber-700 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            STRATEGIC SWOT MATRIX
          </button>
        </div>
      </div>

      {/* Tab 1: Business Model */}
      {activeTab === 'business' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <h3 className="text-base font-bold font-mono text-blue-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
              Target Customer Segments
            </h3>
            <div className="space-y-3">
              {customerSegments.map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{c.title}</h4>
                  <p className="text-xs text-slate-700 font-sans leading-relaxed font-medium">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <h3 className="text-base font-bold font-mono text-emerald-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
              Institutional Revenue Streams
            </h3>
            <div className="space-y-3">
              {revenueStreams.map((r, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{r.title}</h4>
                  <p className="text-xs text-slate-700 font-sans leading-relaxed font-medium">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Environmental Responsibility */}
      {activeTab === 'sustainability' && (
        <div className="p-6 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 mx-auto mb-3">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              “Targeted Exploration Reduces Unnecessary Survey Effort”
            </h3>
            <p className="text-xs md:text-sm text-slate-700 mt-2 font-sans leading-relaxed font-medium">
              We do not claim ocean mining is inherently benign. Rather, VARUNA06 provides the non-invasive screening fidelity needed to <strong className="text-emerald-800 font-bold">prevent blind, intrusive seabed dredging and redundant ship engine emissions</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[10px] font-mono text-slate-500 font-bold block mb-1">01 REGIONAL</span>
              <h4 className="text-xs font-bold font-mono text-slate-900 mb-1">Broad Ocean Area</h4>
              <p className="text-[11px] text-slate-700 font-sans font-medium">Thousands of sq. km with sparse bathymetry.</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <span className="text-[10px] font-mono text-blue-900 font-bold block mb-1">02 SCREENING</span>
              <h4 className="text-xs font-bold font-mono text-slate-900 mb-1">VARUNA06 Payload</h4>
              <p className="text-[11px] text-slate-800 font-sans font-medium">Non-invasive standoff screening & adaptive rescan.</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <span className="text-[10px] font-mono text-blue-900 font-bold block mb-1">03 DELINEATION</span>
              <h4 className="text-xs font-bold font-mono text-slate-900 mb-1">High-Potential Zones</h4>
              <p className="text-[11px] text-slate-800 font-sans font-medium">Pins exact verified coordinates; rejects 80% false alarms.</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-[10px] font-mono text-emerald-900 font-bold block mb-1">04 TARGETED</span>
              <h4 className="text-xs font-bold font-mono text-slate-900 mb-1">Minimal Invasive Work</h4>
              <p className="text-[11px] text-slate-800 font-sans font-medium">Physical coring restricted only to validated targets.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: SWOT Matrix */}
      {activeTab === 'swot' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <h3 className="text-sm font-bold font-mono text-emerald-800 uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              Strengths (Internal)
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              {SWOT_ANALYSIS.strengths.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <h3 className="text-sm font-bold font-mono text-amber-800 uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              Weaknesses & Engineering Constraints
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              {SWOT_ANALYSIS.weaknesses.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <h3 className="text-sm font-bold font-mono text-blue-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              Opportunities (External)
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              {SWOT_ANALYSIS.opportunities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <h3 className="text-sm font-bold font-mono text-rose-800 uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              Threats & Subsea Risks
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              {SWOT_ANALYSIS.threats.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
