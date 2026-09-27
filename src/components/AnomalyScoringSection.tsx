import React, { useState } from 'react';
import { Sliders, AlertCircle, Database, Sparkles, Activity, Layers, ArrowDown } from 'lucide-react';

export const AnomalyScoringSection: React.FC = () => {
  const [emPhaseLag, setEmPhaseLag] = useState<number>(42);
  const [magSusceptibility, setMagSusceptibility] = useState<number>(480);
  const [galvanicPotential, setGalvanicPotential] = useState<number>(68);
  const [freqResponseRatio, setFreqResponseRatio] = useState<number>(2.4);

  const copperScore = Math.min(
    100,
    Math.round(
      emPhaseLag * 1.1 +
        (galvanicPotential / 150) * 35 +
        (freqResponseRatio / 5) * 15 -
        (magSusceptibility / 1000) * 8
    )
  );

  const nickelScore = Math.min(
    100,
    Math.round(
      emPhaseLag * 0.7 +
        (magSusceptibility / 1000) * 45 +
        (galvanicPotential / 150) * 20
    )
  );

  const cobaltScore = Math.min(
    100,
    Math.round(
      (magSusceptibility / 1000) * 38 +
        (galvanicPotential / 150) * 18 +
        (emPhaseLag / 90) * 28
    )
  );

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
      color: '#0284c7',
      tag: 'Cu-Rich Sulfide Model'
    },
    {
      name: 'NICKEL-LIKE SIGNATURE',
      score: nickelScore,
      reference: 'Pentlandite / Ultramafic Associated Sulfides',
      physicalTraits: 'Elevated magnetic susceptibility paired with moderate electromagnetic eddy induction.',
      color: '#0d9488',
      tag: 'Ni-Rich Geologic Model'
    },
    {
      name: 'COBALT-LIKE SIGNATURE',
      score: cobaltScore,
      reference: 'Cobalt-Rich Ferromanganese Crusts (Guyots/Seamounts)',
      physicalTraits: 'Associated with hard substrate volcanic basements; distinctive ratio of magnetic deflection to acoustic hardness.',
      color: '#6366f1',
      tag: 'Co-Crust Model'
    },
    {
      name: 'MANGANESE-LIKE SIGNATURE',
      score: manganeseScore,
      reference: 'Abyssal Polymetallic Nodules (Todorokite / Vernadite)',
      physicalTraits: 'High multi-frequency acoustic roughness signature with characteristic skin-depth decay.',
      color: '#d97706',
      tag: 'Mn-Nodule Model'
    }
  ];

  return (
    <section id="scoring-engine" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Activity className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 11 // SIGNATURE-SIMILARITY PROSPECTIVITY ENGINE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          From “Anomaly Detected” to “What Signature Does It Resemble?”
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          VARUNA06 replaces naive threshold alerts with a multi-physics signature matching engine.
          The system evaluates measured response curves against calibrated target libraries to compute 0–100 prospectivity scores.
        </p>

        <div className="mt-4 p-3.5 rounded-xl bg-blue-50 border border-blue-200 max-w-2xl mx-auto flex items-center gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-blue-700 shrink-0" />
          <p className="text-xs text-slate-800 font-mono leading-relaxed font-semibold">
            <strong className="text-blue-900">SCIENTIFIC DISTINCTION:</strong> Scores represent similarity to calibrated physical/geophysical signatures and are <strong className="text-slate-900">NOT</strong> direct chemical identification or in-situ assaying.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 4 Target Prospectivity Meters */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="text-xs font-mono text-slate-700 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Target Physical Similarity Meters (0 – 100)</span>
            <span className="text-blue-700 font-bold">Calibrated Multi-Physics Library</span>
          </div>

          <div className="space-y-4">
            {targetProfiles.map((target, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-amber-500"
                  style={{ width: `${target.score}%` }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-300 mr-2 font-bold">
                      {target.tag}
                    </span>
                    <h3 className="text-base font-extrabold font-mono text-slate-900 inline-block">
                      {target.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">{target.reference}</p>
                  </div>

                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-black text-blue-900">{target.score}</span>
                    <span className="text-xs text-slate-500 font-bold">/ 100</span>
                  </div>
                </div>

                <div className="w-full h-3 rounded-full bg-slate-100 border border-slate-200 overflow-hidden mb-2.5">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${target.score}%`,
                      backgroundColor: target.color
                    }}
                  />
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  {target.physicalTraits}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Sensor Input Sliders */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                  Test Inversion Simulator
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-bold">Interactive Knobs</span>
            </div>

            <p className="text-xs text-slate-700 mb-5 leading-relaxed font-medium">
              Adjust measured subsea physics below to witness how the signature-matching algorithm shifts prospectivity scores in real time:
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-800 font-bold">EM Secondary Phase Lag (N3):</span>
                  <span className="text-blue-700 font-bold">{emPhaseLag}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={emPhaseLag}
                  onChange={(e) => setEmPhaseLag(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">High values indicate high electrical conductivity</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-800 font-bold">Magnetic Anomaly Vector (N1):</span>
                  <span className="text-blue-700 font-bold">+{magSusceptibility} nT</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="900"
                  value={magSusceptibility}
                  onChange={(e) => setMagSusceptibility(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">Ferromagnetic pyrrhotite / magnetite presence</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-800 font-bold">Galvanic Self-Potential (N4):</span>
                  <span className="text-emerald-700 font-bold">-{galvanicPotential} mV</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={galvanicPotential}
                  onChange={(e) => setGalvanicPotential(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">Active oxidation-reduction electrical gradient</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-800 font-bold">Multi-Frequency Ratio (N2/N3):</span>
                  <span className="text-amber-800 font-bold">{freqResponseRatio.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.1"
                  value={freqResponseRatio}
                  onChange={(e) => setFreqResponseRatio(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono">Skin-depth attenuation across 200 Hz to 10 kHz</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xl">
            <span className="text-xs font-mono text-slate-700 font-bold uppercase tracking-wider block mb-3">
              Decision Scoring Pipeline
            </span>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-between font-bold">
                <span>INPUT SIGNALS (7 DOMAINS)</span>
                <span className="text-blue-700">EM + Mag + SP + Standoff</span>
              </div>
              <div className="flex justify-center text-blue-600">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-between font-bold">
                <span>TARGET SIGNATURE LIBRARY</span>
                <span className="text-blue-700">Calibrated Reference Vectors</span>
              </div>
              <div className="flex justify-center text-blue-600">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-between font-bold">
                <span>PROSPECTIVITY SCORES</span>
                <span className="text-emerald-700">0 – 100 Similarity Rank</span>
              </div>
              <div className="flex justify-center text-blue-600">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-300 text-blue-900 flex items-center justify-between font-extrabold">
                <span>AUTONOMOUS RESCAN</span>
                <span className="text-blue-800">Triggered if Score &gt; 60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
