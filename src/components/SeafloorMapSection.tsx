import React, { useState } from 'react';
import { SEABED_GRID_CELLS } from '../data/mockData';
import { SeabedCell } from '../types';
import { Map, MapPin, Eye, CheckCircle2, AlertCircle, BarChart3, Waves, Compass } from 'lucide-react';

export const SeafloorMapSection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<SeabedCell>(
    SEABED_GRID_CELLS.find((c) => c.id === 'C3') || SEABED_GRID_CELLS[12]
  );

  return (
    <section id="prospectivity-map" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Map className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 28 // GEOREFERENCED PROSPECTIVITY REGISTRY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Interactive Seafloor Bathymetric Heatmap
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Click any surveyed grid zone to inspect its permanent bathymetric registry dossier:
          depth, standoff, multi-sensor agreement, rescan consistency, and 4-target prospectivity scores.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Bathymetric Grid */}
        <div className="lg:col-span-7 bg-[#06142a]/90 border border-cyan-500/25 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Georeferenced Seabed Transect Grid (5×5)
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">
              CLICK TO VIEW DOSSIER
            </span>
          </div>

          {/* 5x5 Map Grid with Bathymetric Color Shading */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {SEABED_GRID_CELLS.map((cell) => {
              const isSelected = selectedZone.id === cell.id;
              const isHigh = cell.anomalyScore > 60;
              const isMedium = cell.anomalyScore > 30 && cell.anomalyScore <= 60;

              return (
                <button
                  key={cell.id}
                  onClick={() => setSelectedZone(cell)}
                  className={`aspect-square rounded-2xl p-2.5 flex flex-col justify-between border transition-all text-left relative overflow-hidden group ${
                    isSelected
                      ? 'bg-cyan-500/30 border-cyan-400 ring-2 ring-cyan-400 shadow-xl shadow-cyan-500/30'
                      : isHigh
                      ? 'bg-amber-950/40 border-amber-500/40 hover:border-amber-400'
                      : isMedium
                      ? 'bg-sky-950/30 border-sky-900/50 hover:border-sky-500/40'
                      : 'bg-[#081832] border-slate-800 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[11px] font-mono font-bold text-white">{cell.id}</span>
                    {cell.status === 'TARGET_CONFIRMED' && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>

                  <div>
                    <span
                      className={`text-base font-black font-mono block ${
                        isHigh ? 'text-amber-400' : isMedium ? 'text-sky-300' : 'text-slate-400'
                      }`}
                    >
                      {cell.anomalyScore}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase truncate block">
                      {cell.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Legend */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-cyan-500/15 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span>0–30: Sediment Baseline</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span>31–60: Low Anomaly</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>61–100: High Prospectivity</span>
            </div>
          </div>
        </div>

        {/* Right: Selected Zone Detailed Dossier */}
        <div className="lg:col-span-5 bg-[#06142a]/90 border border-cyan-500/25 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-5">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                BATHYMETRIC DOSSIER
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-0.5">{selectedZone.label}</h3>
            </div>
            <span
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                selectedZone.status === 'TARGET_CONFIRMED'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : selectedZone.status === 'REJECTED_FALSE_POSITIVE'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-slate-800 text-slate-300'
              }`}
            >
              {selectedZone.status.replace(/_/g, ' ')}
            </span>
          </div>

          {/* Quantitative Metrics Row */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="p-3 rounded-xl bg-[#081832] border border-cyan-900/40">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Anomaly Confidence</span>
              <span className="text-xl font-bold font-mono text-cyan-300 mt-0.5 block">
                {selectedZone.anomalyScore}%
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#081832] border border-cyan-900/40">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Rescan Consistency</span>
              <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5 block">
                {selectedZone.rescanConsistency}%
              </span>
            </div>
          </div>

          {/* 4 Prospectivity Scores Breakdown */}
          <div className="mb-5 p-4 rounded-2xl bg-[#081832] border border-cyan-500/20">
            <span className="text-xs font-mono text-slate-300 font-bold uppercase block mb-3">
              Target Prospectivity Signature Similarity
            </span>

            <div className="space-y-2 text-xs font-mono">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-cyan-300">COPPER-LIKE:</span>
                  <span className="text-white font-bold">{selectedZone.prospectivity.copper}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${selectedZone.prospectivity.copper}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sky-300">NICKEL-LIKE:</span>
                  <span className="text-white font-bold">{selectedZone.prospectivity.nickel}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full" style={{ width: `${selectedZone.prospectivity.nickel}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-indigo-300">COBALT-LIKE:</span>
                  <span className="text-white font-bold">{selectedZone.prospectivity.cobalt}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${selectedZone.prospectivity.cobalt}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-teal-300">MANGANESE-LIKE:</span>
                  <span className="text-white font-bold">{selectedZone.prospectivity.manganese}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full" style={{ width: `${selectedZone.prospectivity.manganese}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Geological Description */}
          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            {selectedZone.description}
          </p>

          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
            {selectedZone.anomalyScore > 60
              ? 'STATUS: RECOMMENDED FOR DETAILED GEOTECHNICAL INVESTIGATION'
              : 'STATUS: SEDIMENT BACKGROUND / NO DETAILED WORK REQUIRED'}
          </div>
        </div>
      </div>
    </section>
  );
};
