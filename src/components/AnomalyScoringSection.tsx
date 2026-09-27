import React, { useState } from 'react';
import { Sliders, AlertCircle, Database, Sparkles, Activity, Layers, ArrowDown } from 'lucide-react';

export const AnomalyScoringSection: React.FC = () => {
  // Interactive sensor inputs for judge experimentation
  const [emPhaseLag, setEmPhaseLag] = useState<number>(42); // degrees (0 - 90)
  const [magSusceptibility, setMagSusceptibility] = useState<number>(480); // nT (0 - 1000)
  const [galvanicPotential, setGalvanicPotential] = useState<number>(68); // mV negative (0 - 150)
  const [freqResponseRatio, setFreqResponseRatio] = useState<number>(2.4); // ratio high/low freq (1 - 5)

  // Dynamically compute prospectivity scores based on physical inversion weights
  // Copper-like: Dominant high electrical conductivity (large EM phase lag & strong galvanic SP)
  const copperScore = Math.min(
    100,
    Math.round(
      emPhaseLag * 1.1 +
        (galvanicPotential / 150) * 35 +
        (freqResponseRatio / 5) * 15 -
        (magSusceptibility / 1000) * 8
    )
  );

  // Nickel-like: Moderate EM phase, moderate magnetic susceptibility
  const nickelScore = Math.min(
    100,
    Math.round(
      emPhaseLag * 0.7 +
        (magSusceptibility / 1000) * 45 +
        (galvanicPotential / 150) * 20
    )
  );

  // Cobalt-like: Associated with ferromanganese crusts (high magnetic/manganese correlation, lower pure EM conductivity)
  const cobaltScore = Math.min(
    100,
    Math.round(
      (magSusceptibility / 1000) * 38 +
        (galvanicPotential / 150) * 18 +
        (emPhaseLag / 90) * 28
    )
  );

  // Manganese-like: Typical nodule signature (distinct acoustic backscatter, moderate magnetic, characteristic multi-frequency ratio)
  const manganeseScore = Math.min(
    100,
    Math.round(
      (freqResponseRatio / 5) * 42 +
        (magSusceptibility / 1000) * 32 +
        (emPhaseLag / 90) * 26
    )
  );

  const targetProfiles = [
    {
      name: 'COPPER-LIKE SIGNATURE',
      score: copperScore,
      reference: 'Seafloor Massive Sulfides (Chalcopyrite / Bornite)',
      physicalTraits: 'High electrical conductivity, steep secondary phase lag, distinct negative self-potential halo (-60 to -100 mV).',
      color: '#00e5ff',
      tag: 'Cu-Rich Sulfide Model'
    },
    {
      name: 'NICKEL-LIKE SIGNATURE',
      score: nickelScore,
      reference: 'Pentlandite / Ultramafic Associated Sulfides',
      physicalTraits: 'Elevated magnetic susceptibility paired with moderate electromagnetic eddy induction.',
      color: '#38bdf8',
      tag: 'Ni-Rich Geologic Model'
    },
    {
      name: 'COBALT-LIKE SIGNATURE',
      score: cobaltScore,
      reference: 'Cobalt-Rich Ferromanganese Crusts (Guyots/Seamounts)',
      physicalTraits: 'Associated with hard substrate volcanic basements; distinctive ratio of magnetic deflection to acoustic hardness.',
      color: '#818cf8',
      tag: 'Co-Crust Model'
    },
    {
      name: 'MANGANESE-LIKE SIGNATURE',
      score: manganeseScore,
      reference: 'Abyssal Polymetallic Nodules (Todorokite / Vernadite)',
      physicalTraits: 'High multi-frequency acoustic roughness signature with characteristic skin-depth decay.',
      color: '#00f0b5',
      tag: 'Mn-Nodule Model'
    }
  ];

  return (
    <section id="scoring-engine" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 11 // SIGNATURE-SIMILARITY PROSPECTIVITY ENGINE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          From “Anomaly Detected” to “What Signature Does It Resemble?”
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          VARUNA06 replaces naive threshold alerts with a multi-physics signature matching engine.
          The system evaluates measured response curves against calibrated target libraries to compute 0–100 prospectivity scores.
        </p>

        {/* Mandatory Scientific Honesty Banner */}
        <div className="mt-4 p-3.5 rounded-xl bg-[#081d38] border border-cyan-500/30 max-w-2xl mx-auto flex items-center gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0" />
          <p className="text-xs text-slate-300 font-mono leading-relaxed">
            <strong className="text-cyan-300">SCIENTIFIC DISTINCTION:</strong> Scores represent similarity to calibrated physical/geophysical signatures and are <strong className="text-white">NOT</strong> direct chemical identification or in-situ assaying.
          </p>
        </div>
      </div>

      {/* Main Grid: Left 4 Target Profiles, Right Interactive Sensor Sliders & Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 4 Target Prospectivity Meters */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Target Physical Similarity Meters (0 – 100)</span>
            <span className="text-cyan-400">Calibrated Multi-Physics Library</span>
          </div>

          <div className="space-y-4">
            {targetProfiles.map((target, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md relative overflow-hidden"
              >
                {/* Glow bar top */}
                <div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent"
                  style={{ width: `${target.score}%` }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 mr-2">
                      {target.tag}
                    </span>
                    <h3 className="text-base font-bold font-mono text-white inline-block">
                      {target.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{target.reference}</p>
                  </div>

                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-black text-cyan-300">{target.score}</span>
                    <span className="text-xs text-slate-400">/ 100</span>
                  </div>
                </div>

                {/* Horizontal Progress Bar */}
                <div className="w-full h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mb-2.5">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${target.score}%`,
                      backgroundColor: target.color,
                      boxShadow: `0 0 12px ${target.color}80`
                    }}
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {target.physicalTraits}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Sensor Input Sliders + Flow Diagram */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Interactive Sliders for Judges */}
          <div className="p-6 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Test Inversion Simulator
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Interactive Knobs</span>
            </div>

            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              Adjust measured subsea physics below to witness how the signature-matching algorithm shifts prospectivity scores in real time:
            </p>

            <div className="space-y-4">
              {/* Slider 1: EM Phase Lag */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">EM Secondary Phase Lag (N3):</span>
                  <span className="text-cyan-400 font-bold">{emPhaseLag}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={emPhaseLag}
                  onChange={(e) => setEmPhaseLag(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">High values indicate high electrical conductivity</span>
              </div>

              {/* Slider 2: Magnetic Susceptibility */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">Magnetic Anomaly Vector (N1):</span>
                  <span className="text-sky-400 font-bold">+{magSusceptibility} nT</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="900"
                  value={magSusceptibility}
                  onChange={(e) => setMagSusceptibility(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">Ferromagnetic pyrrhotite / magnetite presence</span>
              </div>

              {/* Slider 3: Galvanic Self-Potential */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">Galvanic Self-Potential (N4):</span>
                  <span className="text-emerald-400 font-bold">-{galvanicPotential} mV</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={galvanicPotential}
                  onChange={(e) => setGalvanicPotential(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">Active oxidation-reduction electrical gradient</span>
              </div>

              {/* Slider 4: Multi-Frequency Ratio */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">Multi-Frequency Ratio (N2/N3):</span>
                  <span className="text-teal-400 font-bold">{freqResponseRatio.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.1"
                  value={freqResponseRatio}
                  onChange={(e) => setFreqResponseRatio(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">Skin-depth attenuation across 200 Hz to 10 kHz</span>
              </div>
            </div>
          </div>

          {/* Workflow Pipeline Card */}
          <div className="p-5 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
              Decision Scoring Pipeline
            </span>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#081832] border border-cyan-900/40 text-slate-300 flex items-center justify-between">
                <span>INPUT SIGNALS (7 DOMAINS)</span>
                <span className="text-cyan-400">EM + Mag + SP + Standoff</span>
              </div>
              <div className="flex justify-center text-cyan-500">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-lg bg-[#081832] border border-cyan-900/40 text-slate-300 flex items-center justify-between">
                <span>TARGET SIGNATURE LIBRARY</span>
                <span className="text-sky-400">Calibrated Reference Vectors</span>
              </div>
              <div className="flex justify-center text-cyan-500">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-lg bg-[#081832] border border-cyan-900/40 text-slate-300 flex items-center justify-between">
                <span>PROSPECTIVITY SCORES</span>
                <span className="text-emerald-400">0 – 100 Similarity Rank</span>
              </div>
              <div className="flex justify-center text-cyan-500">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 flex items-center justify-between font-bold">
                <span>AUTONOMOUS RESCAN</span>
                <span className="text-cyan-300">Triggered if Score &gt; 60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
