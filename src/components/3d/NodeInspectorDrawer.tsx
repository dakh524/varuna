import React from 'react';
import { SensorNodeInfo } from '../../types';
import { X, Activity, Cpu, ArrowDownRight, ArrowUpRight, ShieldCheck, Compass, Zap } from 'lucide-react';

interface NodeInspectorDrawerProps {
  node: SensorNodeInfo | null;
  onClose: () => void;
}

export const NodeInspectorDrawer: React.FC<NodeInspectorDrawerProps> = ({ node, onClose }) => {
  if (!node) return null;

  return (
    <div className="w-full bg-[#06142a]/95 border border-cyan-500/30 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-2xl relative animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="flex items-start justify-between pb-4 border-b border-cyan-500/20 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: node.color }}
            />
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              NODE SUBSYSTEM IDENTIFIER: {node.code}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            {node.name}
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hardware: {node.sensor}</span>
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          title="Close Inspector"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Grid of Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* Measured Inputs */}
        <div className="p-3.5 rounded-xl bg-[#091b36] border border-cyan-900/40">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold mb-2">
            <ArrowDownRight className="w-4 h-4 text-sky-400" />
            <span>MEASURED PHYSICAL INPUTS</span>
          </div>
          <ul className="space-y-1.5">
            {node.inputs.map((inp, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>{inp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Telemetry Outputs */}
        <div className="p-3.5 rounded-xl bg-[#091b36] border border-cyan-900/40">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-2">
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            <span>CALIBRATED SENSOR OUTPUTS</span>
          </div>
          <ul className="space-y-1.5">
            {node.outputs.map((out, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>{out}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/30 border border-cyan-500/20 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-semibold mb-1.5">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>WHY THIS NODE MATTERS IN VARUNA06</span>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-sans">{node.whyItMatters}</p>
      </div>

      {/* Metadata Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-cyan-500/10 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-amber-400" />
          <span>Sampling: <strong className="text-slate-200">{node.samplingRate}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-teal-400" />
          <span>Mounting: <strong className="text-slate-200">{node.mountingLocation}</strong></span>
        </div>
      </div>
    </div>
  );
};
