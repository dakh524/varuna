import React, { useState } from 'react';
import { Radio, Camera, Waves, Sparkles, AlertCircle, ArrowDown, Eye } from 'lucide-react';

export const AcousticOpticalSection: React.FC = () => {
  const [standoffDistance, setStandoffDistance] = useState<number>(1.2);

  const relativeSignalStrength = Math.round(100 / Math.pow(standoffDistance / 1.0, 3));

  return (
    <section id="acoustic-optical" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Radio className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 14 & 15 // ACOUSTIC STANDOFF & OPTICAL GROUND-TRUTHING</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Distance Normalization & Optical Confirmation
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Why distance matters: electromagnetic and magnetic fields decay steeply with distance.
          VARUNA06 uses high-frequency acoustic altimetry to mathematically normalize signals and low-light optical strobes to confirm seafloor morphology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Section 14: Acoustic Standoff Cross-Section Interactive Tool */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                Acoustic Standoff Cross-Section
              </span>
            </div>
            <span className="text-xs font-mono text-blue-700 font-bold">Node N6 Altimeter</span>
          </div>

          <p className="text-xs text-slate-700 mb-5 leading-relaxed font-sans font-medium">
            A weak anomaly close to the sensor can masquerade as a massive anomaly buried further away.
            Drag the altitude slider below to observe how electromagnetic dipolar intensity changes with the cube of distance ($1/r^3$):
          </p>

          <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-slate-800 font-bold">Sensor-to-Seafloor Standoff (r):</span>
              <span className="text-blue-900 font-bold text-base">{standoffDistance.toFixed(2)} m</span>
            </div>
            <input
              type="range"
              min="0.8"
              max="2.5"
              step="0.05"
              value={standoffDistance}
              onChange={(e) => setStandoffDistance(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 font-bold mt-1">
              <span>0.8m (Proximity Risk)</span>
              <span>1.0m – 1.5m (Optimal Survey Window)</span>
              <span>2.5m (Signal Decay)</span>
            </div>
          </div>

          <div className="relative h-60 rounded-2xl bg-slate-100 border border-slate-300 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-mono font-bold shadow-sm">
                <span>VARUNA06 PLATFORM</span>
              </div>
              <span className="text-[11px] font-mono text-slate-800 font-bold">
                Apparent EM Amplitude: <strong className="text-amber-800">{relativeSignalStrength}%</strong>
              </span>
            </div>

            <div
              className="mx-auto border-l-2 border-r-2 border-blue-500 border-dashed transition-all flex flex-col items-center justify-center"
              style={{
                width: `${Math.min(220, standoffDistance * 80)}px`,
                height: `${Math.min(130, standoffDistance * 60)}px`
              }}
            >
              <span className="text-[10px] font-mono text-blue-900 bg-white px-2 py-0.5 rounded border border-blue-300 font-bold shadow-sm">
                500 kHz Ping Echo: {standoffDistance.toFixed(2)}m
              </span>
            </div>

            <div className="z-10 pt-2 border-t-2 border-slate-300 flex items-center justify-between text-[11px] font-mono text-slate-700 font-bold">
              <span>SEAFLOOR BEDROCK / ANOMALY TARGET</span>
              <span className="text-blue-800">Normalized Factor: ×{(1 / Math.pow(standoffDistance, 3)).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Section 15: Optical Confirmation Pipeline */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-purple-700" />
              <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                Optical Ground-Truthing Module
              </span>
            </div>
            <span className="text-xs font-mono text-purple-800 font-bold">Sony Starvis 4K</span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono font-semibold">
              <span className="text-blue-900 font-bold">01. GEOPHYSICAL ANOMALY TRIP</span>
              <span className="text-slate-800">EM/Mag cross-threshold triggered</span>
            </div>
            <div className="flex justify-center text-blue-600">
              <ArrowDown className="w-4 h-4" />
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono font-semibold">
              <span className="text-blue-900 font-bold">02. ROBOT STABILIZATION</span>
              <span className="text-slate-800">Standoff locked at 1.0m via winch</span>
            </div>
            <div className="flex justify-center text-blue-600">
              <ArrowDown className="w-4 h-4" />
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono font-semibold">
              <span className="text-purple-800 font-bold">03. HIGH-CRI STROBE ILLUMINATION</span>
              <span className="text-slate-800">Dual 3000-lumen pulsed flash</span>
            </div>
            <div className="flex justify-center text-blue-600">
              <ArrowDown className="w-4 h-4" />
            </div>
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-300 flex items-center justify-between text-xs font-mono font-extrabold text-purple-900">
              <span>04. CONTEXTUAL VISUAL RECORD</span>
              <span>Nodule Pavement / Crust Morphology</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
            <div className="flex items-center gap-2 text-purple-900 font-bold mb-1">
              <AlertCircle className="w-4 h-4 text-purple-700" />
              <span>HONEST SCIENTIFIC SCOPE:</span>
            </div>
            <p className="text-slate-800 font-sans leading-relaxed font-medium">
              We do <strong className="text-slate-900 font-bold">NOT</strong> claim that computer vision chemically classifies minerals underwater.
              Optical imagery is strictly deployed for <strong className="text-purple-800 font-bold">contextual confirmation</strong>—verifying whether an electromagnetic target corresponds to a polymetallic nodule pavement, hydrothermal chimney rubble, or barren pelagic mud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
