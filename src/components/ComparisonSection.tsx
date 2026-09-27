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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-sans mb-4 font-bold shadow-sm tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 05 // PARADIGM SHIFT</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          From Detection to Investigation
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Traditional marine surveys stop at raw detection. VARUNA06 transforms the payload into an active investigator that questions, rescans, and validates before logging.
        </p>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl mb-14 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-sans font-bold">
              <th className="py-4 px-4 text-slate-800 uppercase w-1/4">Capability Dimension</th>
              <th className="py-4 px-4 text-rose-800 uppercase w-3/8 bg-rose-50 rounded-t-xl">
                Existing Conventional Approach
              </th>
              <th className="py-4 px-4 text-blue-900 uppercase w-3/8 bg-blue-50 rounded-t-xl">
                VARUNA06 Platform
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-xs font-sans">
            {comparisonItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-900">
                  {item.feature}
                </td>
                <td className="py-4 px-4 text-slate-700 bg-rose-50/40 font-medium">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{item.existing}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-900 bg-blue-50/40 font-semibold">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5 font-bold" />
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
        <h3 className="text-2xl md:text-3xl font-black font-sans text-blue-900 tracking-wide">
          “VARUNA06 DOES NOT STOP AT DETECTION.”
        </h3>
        <p className="text-xs font-sans text-slate-600 mt-2 font-bold">
          Autonomous Seafloor Decision Progression
        </p>
      </div>

      {/* Animated 5-Step Progression Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-16">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:border-blue-500 flex flex-col items-center text-center transition-all group hover:-translate-y-1"
          >
            <span className="text-xs font-sans text-blue-700 font-extrabold mb-1">
              0{idx + 1}
            </span>
            <span className="text-base font-bold font-sans text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
              {s.title}
            </span>
            <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🏛️ 05 — WHAT "INDUSTRY STANDARD" LOOKS LIKE BENCHMARK TABLE 🏛️ */}
      <div id="industry-benchmark" className="pt-10 border-t border-slate-300 font-sans">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest block mb-1">
            05 — INDUSTRY BENCHMARK COMPARISON
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">
            What "Industry Standard" Looks Like
          </h3>
          <p className="text-xs md:text-sm text-slate-600 font-medium mt-2">
            Benchmarking VARUNA06's Target Architecture against world-class 6,000 m oceanographic ROVs such as NOAA's <strong className="text-slate-900">Deep Discoverer</strong> & India's NIOT <strong className="text-slate-900">ROSUB-6000</strong>.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b-2 border-slate-300 text-xs font-extrabold bg-slate-100 text-slate-900 uppercase">
                <th className="py-4 px-4 rounded-tl-xl w-1/4">System Subsystem</th>
                <th className="py-4 px-4 text-emerald-900 bg-emerald-50/80 w-3/8 border-x border-slate-200">
                  VARUNA06 Target Architecture
                </th>
                <th className="py-4 px-4 text-blue-900 bg-blue-50/80 rounded-tr-xl w-3/8">
                  Deep-Ocean ROV Benchmark (e.g. NOAA Deep Discoverer)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs font-medium text-slate-800">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Depth Rating</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  6,000 m target (~596 atm pressure housing)
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  6,000 m class ultra-deep ROV
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Operation Mode</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  Tethered ROV with high-tension umbilical
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  Tethered ROV with fiber-optic umbilical
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Navigation Payload</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  IMU + Depth → DVL / INS / USBL positioning
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  FOG / INS + DVL + USBL positioning
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Optical Imaging</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  4K Low-Light Camera + Dual 3000-lumen LEDs
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  HD / 4K Cameras + High-power lighting grid
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Acoustic Payload</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  500 kHz Acoustic Altimetry & Standoff tracking
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  Multibeam sonar / Forward-looking acoustic sonar
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Depth Transducer</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  Pressure Sensor (25 m prototype → 6,000 m scaling)
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  Deep-rated quartz crystal pressure transducer
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Environmental Sensors</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  Seawater Conductivity, Temperature & Depth (CTD)
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  CTD + Dissolved Oxygen + Turbidity Sensors
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Mapping Output</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  Georeferenced Anomaly GIS (0–100 MRP Score)
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  High-resolution seafloor bathymetry & GIS
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-extrabold text-slate-900">Sampling Payload</td>
                <td className="py-3.5 px-4 text-emerald-950 font-bold bg-emerald-50/30 border-x border-slate-200">
                  Future Modular Sampler Module
                </td>
                <td className="py-3.5 px-4 text-blue-950 font-bold bg-blue-50/30">
                  Dual Hydraulic Manipulators + Core Samplers
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
