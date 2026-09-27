import React from 'react';
import { X, Check, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Sensing Modalities',
      existing: 'Single or limited sensing (e.g. magnetometer-only or acoustic-only)',
      varuna: 'Multi-modal fusion: EM induction + 3-Axis Mag + Galvanic SP + 500kHz Altimeter + Optical'
    },
    {
      feature: 'Survey Methodology',
      existing: 'Rigid single-pass survey (fly-by without dwell or local verification)',
      varuna: 'Adaptive investigation: Holds position and executes 4-quadrant precision rescan'
    },
    {
      feature: 'Anomaly Classification',
      existing: 'Generic binary threshold alarm ("Metal Detected" or raw peak spike)',
      varuna: 'Target-specific prospectivity scoring (Copper, Nickel, Cobalt, Manganese 0–100 similarity)'
    },
    {
      feature: 'False-Positive Handling',
      existing: 'Manual post-cruise filtering; scrap debris and basalt bedrock create false alarms',
      varuna: 'Automated spatial coherence test (rejects signals failing multi-angle rescan)'
    },
    {
      feature: 'Platform Capital Cost',
      existing: 'Specialized deep-submergence ROVs / AUVs ($2M – $15M+ capital)',
      varuna: 'Modular COTS-based tethered payload with subsea interchangeable cartridges'
    },
    {
      feature: 'Local Verification',
      existing: 'Delayed by months; requires secondary specialized imaging cruise',
      varuna: 'Instantaneous optical & acoustic ground-truthing under strobe illumination'
    }
  ];

  const steps = [
    { title: 'DETECT', desc: 'Identifies unusual multi-sensor deviation from baseline' },
    { title: 'UNDERSTAND', desc: 'Isolates phase lag, magnetic dipole, and self-potential slope' },
    { title: 'DECIDE', desc: 'Calculates prospectivity score & evaluates rescan feasibility' },
    { title: 'VERIFY', desc: 'Executes 4-position star rescan to confirm spatial volume' },
    { title: 'MAP', desc: 'Stamps georeferenced anomaly entry into permanent GIS registry' }
  ];

  return (
    <section id="comparison" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 05 // PARADIGM SHIFT</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          From Detection to Investigation
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Traditional marine surveys stop at raw detection. VARUNA06 transforms the payload into an active investigator that questions, rescans, and validates before logging.
        </p>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-[#06142a]/95 border border-cyan-500/25 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md mb-14 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-cyan-500/20 text-xs font-mono">
              <th className="py-4 px-4 text-slate-400 uppercase w-1/4">Capability Dimension</th>
              <th className="py-4 px-4 text-rose-400 uppercase w-3/8 bg-rose-950/20 rounded-t-xl">
                Existing Conventional Approach
              </th>
              <th className="py-4 px-4 text-cyan-300 uppercase w-3/8 bg-cyan-950/40 rounded-t-xl font-bold">
                VARUNA06 Platform
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-500/10 text-xs">
            {comparisonItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-cyan-950/20 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-slate-300">
                  {item.feature}
                </td>
                <td className="py-3.5 px-4 text-slate-400 bg-rose-950/10">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item.existing}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-slate-200 bg-cyan-950/30 font-medium">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item.varuna}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Signature Highlight Banner & Visual Sequence */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-black font-mono text-cyan-300 tracking-wider">
          “VARUNA06 DOES NOT STOP AT DETECTION.”
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-2">
          Autonomous Seafloor Decision Progression
        </p>
      </div>

      {/* Animated 5-Step Progression Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#071630] border border-cyan-500/20 hover:border-cyan-400 flex flex-col items-center text-center transition-all group hover:-translate-y-1 shadow-lg"
          >
            <span className="text-[10px] font-mono text-cyan-400 font-bold mb-1">
              0{idx + 1}
            </span>
            <span className="text-base font-bold font-mono text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {s.title}
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
