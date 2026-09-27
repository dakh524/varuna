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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Map className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 28 // GEOREFERENCED PROSPECTIVITY REGISTRY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Interactive Seafloor Bathymetric Heatmap
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Click any surveyed grid zone to inspect its permanent bathymetric registry dossier:
          depth, standoff, multi-sensor agreement, rescan consistency, and 4-target prospectivity scores.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Bathymetric Grid */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                Georeferenced Seabed Transect Grid (5×5)
              </span>
            </div>
            <span className="text-[11px] font-mono text-blue-800 font-bold">
              CLICK TO VIEW DOSSIER
            </span>
          </div>

          <div className="grid grid-cols-5 gap-3 mb-6">
            {SEABED_GRID_CELLS.map((cell) => {
              const isSelected = selectedZone.id === cell.id;
              const isHigh = cell.anomalyScore > 60;
              const isMedium = cell.anomalyScore > 30 && cell.anomalyScore <= 60;

              return (
                <button
                  key={cell.id}
                  onClick={() => setSelectedZone(cell)}
                  className={`aspect-square rounded-2xl p-2.5 flex flex-col justify-between border transition-all text-left relative overflow-hidden ${
                    isSelected
                      ? 'bg-blue-600 border-blue-700 text-white ring-2 ring-blue-500 shadow-md font-bold'
                      : isHigh
                      ? 'bg-amber-50 border-amber-300 hover:border-amber-500 text-slate-900'
                      : isMedium
                      ? 'bg-blue-50 border-blue-200 hover:border-blue-400 text-slate-900'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-white' : 'text-slate-800'}`}>{cell.id}</span>
                    {cell.status === 'TARGET_CONFIRMED' && (
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    )}
                  </div>

                  <div>
                    <span
                      className={`text-base font-black font-mono block ${
                        isSelected ? 'text-white' : isHigh ? 'text-amber-800' : isMedium ? 'text-blue-900' : 'text-slate-700'
                      }`}
                    >
                      {cell.anomalyScore}
                    </span>
                    <span className={`text-[9px] font-mono uppercase truncate block ${isSelected ? 'text-blue-100' : 'text-slate-500 font-bold'}`}>
                      {cell.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-700 font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span>0–30: Sediment Baseline</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>31–60: Low Anomaly</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>61–100: High Prospectivity</span>
            </div>
          </div>
        </div>

        {/* Right: Selected Zone Detailed Dossier */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
            <div>
              <span className="text-xs font-mono text-blue-800 font-bold uppercase tracking-wider">
                BATHYMETRIC DOSSIER
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">{selectedZone.label}</h3>
            </div>
            <span
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                selectedZone.status === 'TARGET_CONFIRMED'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : selectedZone.status === 'REJECTED_FALSE_POSITIVE'
                  ? 'bg-rose-100 text-rose-900 border border-rose-300'
                  : 'bg-slate-100 text-slate-800 border border-slate-300'
              }`}
            >
              {selectedZone.status.replace(/_/g, ' ')}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 font-bold block uppercase">Anomaly Confidence</span>
              <span className="text-xl font-bold font-mono text-blue-900 mt-0.5 block">
                {selectedZone.anomalyScore}%
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 font-bold block uppercase">Rescan Consistency</span>
              <span className="text-xl font-bold font-mono text-emerald-700 mt-0.5 block">
                {selectedZone.rescanConsistency}%
              </span>
            </div>
          </div>

          <div className="mb-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-mono text-slate-900 font-bold uppercase block mb-3">
              Target Prospectivity Signature Similarity
            </span>

            <div className="space-y-2 text-xs font-mono font-semibold">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-900">COPPER-LIKE:</span>
                  <span className="text-slate-900 font-bold">{selectedZone.prospectivity.copper}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${selectedZone.prospectivity.copper}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-900">NICKEL-LIKE:</span>
                  <span className="text-slate-900 font-bold">{selectedZone.prospectivity.nickel}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${selectedZone.prospectivity.nickel}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-purple-900">COBALT-LIKE:</span>
                  <span className="text-slate-900 font-bold">{selectedZone.prospectivity.cobalt}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: `${selectedZone.prospectivity.cobalt}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-amber-900">MANGANESE-LIKE:</span>
                  <span className="text-slate-900 font-bold">{selectedZone.prospectivity.manganese}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-600 rounded-full" style={{ width: `${selectedZone.prospectivity.manganese}%` }} />
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-700 font-sans leading-relaxed mb-4 font-medium">
            {selectedZone.description}
          </p>

          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-[11px] font-mono text-blue-900 font-bold">
            {selectedZone.anomalyScore > 60
              ? 'STATUS: RECOMMENDED FOR DETAILED GEOTECHNICAL INVESTIGATION'
              : 'STATUS: SEDIMENT BACKGROUND / NO DETAILED WORK REQUIRED'}
          </div>
        </div>
      </div>
    </section>
  );
};
