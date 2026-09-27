import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle, ArrowUpRight, Wrench } from 'lucide-react';

export const LimitationsSection: React.FC = () => {
  return (
    <section id="limitations" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>SECTION 17 // CRITICAL SCIENTIFIC INTEGRITY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Engineering Boundaries & Scope
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Scientific honesty is central to our engineering methodology. We clearly distinguish between what has been proven, what is currently simulated, and what remains future work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Current Prototype Scope */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold font-mono text-emerald-900 uppercase">
              Current Prototype Reality (TRL 4–5)
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-slate-700 font-medium">
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">•</span>
              <span><strong>Proof-of-Concept Hardware:</strong> Multi-sensor bench testing of RM3100 magnetometer, multi-frequency EM TX/RX coils, and Ag/AgCl galvanic probes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">•</span>
              <span><strong>Controlled Tank Validation:</strong> Shallow-water and test tank trials verifying coil decoupling and seawater inductive baseline nulling.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">•</span>
              <span><strong>Simulation-Assisted Digital Twin:</strong> 10-Hz physics simulation engine modeling full 8-stage closed-loop mission workflows.</span>
            </li>
          </ul>
        </div>

        {/* Column 2: What We Do NOT Claim */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
            <XCircle className="w-5 h-5 text-rose-600" />
            <h3 className="text-base font-bold font-mono text-rose-900 uppercase">
              Strictly Not Claimed Today
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-slate-700 font-medium">
            <li className="flex items-start gap-2">
              <span className="text-rose-700 font-bold">•</span>
              <span><strong>No Direct Chemical Assay:</strong> VARUNA06 measures physical properties (conductivity, susceptibility, SP). It does <em>not</em> claim chemical spectrometry.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-700 font-bold">•</span>
              <span><strong>Not Full Abyssal Deployment:</strong> Not yet field-tested at 1,000 – 6,000m abyssal depths (600 bar hydrostatic pressure).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-700 font-bold">•</span>
              <span><strong>No Commercial Tonnage Assay:</strong> Scores indicate prospectivity similarity, not commercial reserve valuations.</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Future Engineering Roadmap */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
            <Wrench className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold font-mono text-amber-900 uppercase">
              Future Engineering Roadmap
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-slate-700 font-medium">
            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>Full Titanium Subsea Enclosures:</strong> Pressure-rated structural pods rated for 4,000m abyssal zones.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>Non-Magnetic Structural Keel:</strong> Specialized carbon fiber and PEEK fasteners near magnetometer to minimize vehicle magnetic self-noise.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>Subsea USBL / DVL Navigation:</strong> Precision acoustic positioning for sub-meter georeferenced anomaly mapping.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
