import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { Users, Award, Cpu, Code, ShieldCheck, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Users className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 29 // ENGINEERING MULTIDISCIPLINARY CORE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Team Lorenzini
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Smart India Hackathon 2026 // Problem Statement ID: SIH26064 (Hardware Category)
          <br />
          Bridging electronics, computational data science, subsea instrumentation, and marine telemetry.
        </p>

        {/* Collective Team Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-[11px] font-mono">
          <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
            SIH 2026 HARDWARE FINALIST
          </span>
          <span className="px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800">
            THEME: ROBOTICS & DRONES
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
            TEAM LORENZINI
          </span>
        </div>
      </div>

      {/* 6 Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#06142a]/90 border border-cyan-500/25 shadow-xl backdrop-blur-md flex flex-col justify-between hover:border-cyan-400 transition-all hover:-translate-y-1"
          >
            <div>
              {/* Member Avatar Fallback & Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-cyan-500/10">
                  {member.avatarFallback}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold uppercase">
                  {member.badge}
                </span>
              </div>

              {/* Name & Academic Discipline */}
              <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
              <p className="text-xs font-mono text-cyan-400 mb-3">{member.degree} • {member.department}</p>

              {/* Primary Role in VARUNA06 */}
              <div className="p-2.5 rounded-xl bg-[#081832] border border-cyan-900/40 text-xs font-mono font-bold text-slate-200 mb-4">
                <span className="text-[10px] text-slate-400 block uppercase mb-0.5 font-normal">Primary Project Role:</span>
                {member.primaryRole}
              </div>

              {/* Focus Areas */}
              <div className="space-y-1.5 mb-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Key Engineering Focus:</span>
                {member.focusAreas.map((area, aIdx) => (
                  <div key={aIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-cyan-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{member.institution}</span>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
