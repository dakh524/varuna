import React, { useState } from 'react';
import { SENSOR_NODES } from '../../data/mockData';
import { SensorNodeInfo } from '../../types';
import { RotateCw, ExternalLink, Maximize2, ShieldCheck, Sparkles, RefreshCw, Cpu, Box } from 'lucide-react';

interface RobotCanvasProps {
  selectedNodeId: string | null;
  onSelectNode: (node: SensorNodeInfo) => void;
}

export const RobotCanvas: React.FC<RobotCanvasProps> = ({ selectedNodeId, onSelectNode }) => {
  const [activeTab, setActiveTab] = useState<'3d' | 'dashboard' | 'pcb'>('3d');
  const [iframeKey, setIframeKey] = useState<number>(0);

  const model3dUrl = 'https://sih26varuna06model.vercel.app/';
  const dashboardUrl = 'https://dashboard-varuna-06.vercel.app/';
  const pcbUrl = 'https://pcbdesign-varuna-06.vercel.app/';

  const currentUrl =
    activeTab === '3d'
      ? model3dUrl
      : activeTab === 'dashboard'
      ? dashboardUrl
      : pcbUrl;

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  const handleOpenExternal = () => {
    window.open(currentUrl, '_blank');
  };

  return (
    <div className="relative w-full h-[560px] md:h-[650px] rounded-3xl overflow-hidden border-2 border-amber-400/60 bg-[#07132b] shadow-2xl flex flex-col justify-between font-sans">
      
      {/* 3D / Dashboard / PCB HUD Top Bar with Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 px-4 py-3 bg-[#0b132b] border-b border-amber-400/30 text-white z-10">
        
        {/* Interactive Platform Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('3d')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
              activeTab === '3d'
                ? 'bg-amber-500 text-slate-950 shadow-md scale-105 border border-amber-300'
                : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>ROV 3D Model</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
              activeTab === 'dashboard'
                ? 'bg-emerald-500 text-slate-950 shadow-md scale-105 border border-emerald-300'
                : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>THIS IS OUR SOFTWARE DESIGN (VARUNA 06)</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-400/40 text-[9px] font-mono font-bold uppercase tracking-wide">
              LIVE DASHBOARD
            </span>
          </button>

          <button
            onClick={() => setActiveTab('pcb')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
              activeTab === 'pcb'
                ? 'bg-amber-500 text-slate-950 shadow-md scale-105 border border-amber-300'
                : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>PCB Design CAD</span>
          </button>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReload}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600 transition-colors text-xs font-bold flex items-center gap-1"
            title="Reload Interface"
          >
            <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Reload</span>
          </button>

          <button
            onClick={handleOpenExternal}
            className="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all text-xs flex items-center gap-1 shadow-sm"
            title="Open Fullscreen in New Tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-sans">Open Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Embedded Live Iframe (ROV 3D Model or PCB Design CAD Tool) */}
      <div className="relative flex-1 w-full h-full bg-slate-950 overflow-hidden">
        <iframe
          key={`${activeTab}-${iframeKey}`}
          src={currentUrl}
          title={activeTab === '3d' ? "VARUNA 06 Interactive 3D Model" : "VARUNA 06 PCB Design CAD Interface"}
          className="w-full h-full border-0 rounded-none shadow-inner"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      </div>

      {/* Bottom Subsystem Node Quick Selector Bar */}
      <div className="bg-[#0b132b] px-4 py-2.5 border-t border-amber-400/30 flex items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[10px] font-bold text-slate-400 uppercase mr-1 shrink-0">Nodes:</span>
          {SENSOR_NODES.map((node) => {
            const isSelected = selectedNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => onSelectNode(node)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:border-amber-400/50 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />
                <span>{node.id}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 shrink-0">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{activeTab === '3d' ? 'Interactive 3D Controls Enabled' : 'PCB CAD Interface (Learning & Developing)'}</span>
        </div>
      </div>

    </div>
  );
};

