import React from 'react';
import { Milestone, Check, Clock, Sparkles, Cpu, Layers, Cable, ShieldCheck } from 'lucide-react';

export const RoadmapFeasibilitySection: React.FC = () => {
  const roadmapSteps = [
    { version: 'V0', phase: 'EM Physics Proof', status: 'COMPLETED', desc: 'Benchtop induction coil math verification, multi-frequency skin-depth characterization, and differential bucking tests.' },
    { version: 'V1', phase: 'Multi-Sensor Bench Prototype', status: 'COMPLETED', desc: 'Integrated RM3100 magnetometer, TX/RX coils, and 24-bit ADC frontend on custom STM32/ESP32 bus.' },
    { version: 'V2', phase: 'Shallow-Water Tank Trials', status: 'COMPLETED', desc: 'Waterproof enclosure testing, conductive saline solution baseline nulling, and galvanic electrode validation.' },
    { version: 'V3', phase: 'Motion & Environmental Correction', status: 'IN PROGRESS', desc: 'Real-time 6-DOF IMU Euler orientation compensation and acoustic standoff altitude 1/r^3 scaling algorithms.' },
    { version: 'V4', phase: 'Closed-Loop Adaptive Rescan', status: 'CURRENT MILESTONE', desc: 'Autonomous 4-point offset translation logic and spatial consistency scoring implementation.' },
    { version: 'V5', phase: 'Coastal Marine Field Validation', status: 'PLANNED (Q3 2026)', desc: 'Deploying payload from shallow survey vessel over known coastal seabed geological formations.' },
    { version: 'FUTURE', phase: 'Deep-Ocean Abyssal Rating', status: 'LONG-TERM', desc: 'Titanium pressure housings rated for 4,000m depth, subsea USBL navigation, and autonomous surface vessel pairing.' }
  ];

  const feasibilityCards = [
    {
      title: 'COTS-Based Hardware Architecture',
      desc: 'Utilizes precision commercial-off-the-shelf electronics (STM32H7, RM3100, 24-bit ADCs, MS5803) avoiding exorbitant military-grade development cycles.',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Modular Sensor Cartridges',
      desc: 'Each physical modality (EM coils, magnetometer, galvanic probes) is housed in independent o-ring sealed bays, allowing field replacement in minutes.',
      icon: <Layers className="w-5 h-5 text-teal-400" />
    },
    {
      title: 'Single-Tether Umbilical Operation',
      desc: 'A single neutral buoyancy tether delivers 48V DC power and full-duplex telemetry, eliminating heavy high-pressure subsea battery packs.',
      icon: <Cable className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'Multi-Physics Validation Paradigm',
      desc: 'Does not rely on a single sensor or algorithm. High confidence demands concurrence across electromagnetic, magnetic, electrical, and optical domains.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="roadmap-feasibility" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Milestone className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 18 & 19 // DEVELOPMENT ROADMAP & FEASIBILITY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Prototype Roadmap: Build → Validate → Improve → Scale
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Our engineering timeline reflects systematic, de-risked prototype development from fundamental electromagnetic induction physics to planned abyssal trials.
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="bg-[#06142a]/95 border border-cyan-500/25 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md mb-14">
        <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-8">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Prototype Iteration Timeline
          </span>
          <span className="text-xs font-mono text-cyan-400">Current Phase: V4 Adaptive Rescan</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmapSteps.map((step, idx) => {
            const isCompleted = step.status === 'COMPLETED';
            const isCurrent = step.status === 'CURRENT MILESTONE' || step.status === 'IN PROGRESS';

            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : isCompleted
                    ? 'bg-[#081a36] border-emerald-500/30'
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-black font-mono text-cyan-300">{step.version}</span>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : isCurrent
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{step.phase}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feasibility 4 Cards Grid */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">System Feasibility & Engineering Viability</h3>
          <p className="text-xs font-mono text-slate-400 mt-1">Four cornerstones ensuring affordable subsea deployment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feasibilityCards.map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
