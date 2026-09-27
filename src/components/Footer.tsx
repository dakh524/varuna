import React from 'react';
import { Compass, Play, Layers, BookOpen, Users, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenMission: () => void;
  onOpenJudgeMode: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMission, onOpenJudgeMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-cyan-500/20 bg-[#020610] text-slate-400 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-blue-900/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Final CTA Banner (Section 30) */}
        <div className="text-center max-w-3xl mx-auto mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#061733] to-[#030d1e] border border-cyan-400/30 shadow-2xl backdrop-blur-xl">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block mb-2">
            SMART INDIA HACKATHON 2026 // HARDWARE CATEGORY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Next Step in Seafloor Exploration
          </h2>
          <p className="text-lg md:text-xl font-mono text-cyan-300 font-semibold mb-8">
            “From detecting an anomaly to understanding where it deserves investigation.”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#simulator"
              className="px-5 py-3 rounded-xl bg-cyan-500 text-black font-mono font-bold text-xs flex items-center gap-2 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Play className="w-3.5 h-3.5" />
              <span>RUN SIMULATION</span>
            </a>

            <a
              href="#architecture"
              className="px-5 py-3 rounded-xl bg-[#091e3e] border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs flex items-center gap-2 hover:bg-cyan-950 transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>EXPLORE ARCHITECTURE</span>
            </a>

            <a
              href="#research"
              className="px-5 py-3 rounded-xl bg-[#091e3e] border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs flex items-center gap-2 hover:bg-cyan-950 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>VIEW RESEARCH</span>
            </a>

            <a
              href="#team"
              className="px-5 py-3 rounded-xl bg-[#091e3e] border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs flex items-center gap-2 hover:bg-cyan-950 transition-all"
            >
              <Users className="w-3.5 h-3.5" />
              <span>VIEW TEAM</span>
            </a>
          </div>
        </div>

        {/* Footer Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-cyan-500/15 text-xs font-mono">
          {/* Col 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-7 h-7 rounded-lg bg-cyan-500 text-black flex items-center justify-center font-mono font-black text-xs">
                V6
              </span>
              <span>VARUNA06</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              Low-Cost Deployable Seafloor Metal Detection Sensor for Ocean Resource Exploration.
            </p>
            <div className="text-[11px] text-cyan-400">
              “Exploring the Unseen”
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <span className="text-white font-bold uppercase tracking-wider block">Hackathon Credentials</span>
            <div className="text-slate-400 space-y-1">
              <div>Competition: <strong>Smart India Hackathon 2026</strong></div>
              <div>Problem ID: <strong>SIH26064</strong></div>
              <div>Theme: <strong>Robotics and Drones</strong></div>
              <div>Category: <strong>Hardware Prototype</strong></div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <span className="text-white font-bold uppercase tracking-wider block">Team Lorenzini</span>
            <div className="text-slate-400 space-y-1">
              <div>Shakthi Akshata (M.Tech CDSE)</div>
              <div>Ashwin (ECE) • Yugenthar (ECE)</div>
              <div>Dhivakar (ECE) • Seetha Eswari (IT)</div>
              <div>Narmadha (IT)</div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <span className="text-white font-bold uppercase tracking-wider block">Scientific Rigor</span>
            <p className="text-slate-400 text-[11px] font-sans leading-relaxed">
              Target scores represent calibrated physical/geophysical similarity vectors and are not direct chemical stoichiometry.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © 2026 VARUNA06 • Team Lorenzini • Smart India Hackathon 2026 (SIH26064). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Proof-of-Concept TRL 4–5</span>
            <span>•</span>
            <span>Deep Ocean Mission Compatible</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
