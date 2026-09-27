import React, { useState } from 'react';
import { RobotCanvas } from './3d/RobotCanvas';
import { NodeInspectorDrawer } from './3d/NodeInspectorDrawer';
import { SENSOR_NODES } from '../data/mockData';
import { SensorNodeInfo } from '../types';
import { Cpu, Box, Sparkles, Navigation, Layers, ShieldCheck } from 'lucide-react';

export const RobotViewerSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<SensorNodeInfo | null>(SENSOR_NODES[0]);

  return (
    <section id="robot-3d" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-sans mb-4 font-bold shadow-sm tracking-wide">
          <Box className="w-3.5 h-3.5 text-blue-600" />
          <span>SECTION 06 // INTERACTIVE HARDWARE DIGITAL TWIN</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Interactive 3D VARUNA06 Platform
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Explore the modular, low-cost sensor nodes engineered for multi-modal marine geophysics.
          Rotate the platform in 3D, inspect sensor geometries, and examine the physical role of every node in anomaly scoring.
        </p>
      </div>

      {/* Main 3D Display + Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 3D WebGL Canvas */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <RobotCanvas
            selectedNodeId={selectedNode ? selectedNode.id : null}
            onSelectNode={(node) => setSelectedNode(node)}
          />

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-700 font-sans shadow-sm">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Left-click & drag to rotate • Scroll to zoom • Click node pin to inspect</span>
            </span>
            <span className="hidden sm:inline text-blue-700 font-bold">WebGL 2.0 Hardware Accelerated</span>
          </div>
        </div>

        {/* Node Selector & Detailed Inspector */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Quick Node List */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-sans text-slate-700 font-bold uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Sensor Subsystems</span>
              </span>
              <span className="text-blue-700">{SENSOR_NODES.length} Active Nodes</span>
            </div>

            <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
              {SENSOR_NODES.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-sans transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-blue-50 border-blue-400 text-blue-900 font-bold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-300 hover:text-blue-700 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: node.color }} />
                      <span className="font-bold font-sans">{node.id}</span>
                      <span className="text-slate-600 truncate max-w-[170px]">{node.name.split('—')[1]}</span>
                    </div>
                    <span className="text-[10px] text-blue-700 font-bold">{node.code}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Node Inspector Card */}
          <NodeInspectorDrawer
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
          />
        </div>
      </div>
    </section>
  );
};
