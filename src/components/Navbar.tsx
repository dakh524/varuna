import React, { useState } from 'react';
import { Compass, Play, Trophy, Menu, X, Shield, Activity, Radio, Waves } from 'lucide-react';

interface NavbarProps {
  onOpenMission: () => void;
  onOpenJudgeMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMission, onOpenJudgeMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '3D Explorer', href: '#robot-3d' },
    { label: 'Intelligence Loop', href: '#mission-intelligence' },
    { label: 'Live Simulator', href: '#simulator' },
    { label: 'Adaptive Rescan', href: '#adaptive-rescan' },
    { label: 'Scoring Engine', href: '#scoring-engine' },
    { label: 'Sensor Fusion', href: '#sensor-fusion' },
    { label: 'Seafloor Map', href: '#prospectivity-map' },
    { label: 'Geophysics Research', href: '#research' },
    { label: 'Team', href: '#team' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#030814]/90 border-b border-cyan-500/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        {/* Brand & SIH Identifier */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black font-mono shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              V6
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black font-mono tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  VARUNA06
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  SIH26064
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">
                Team Lorenzini • Ocean Robotics
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-5 text-xs font-mono text-slate-300">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-cyan-300 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons: Judge Mode & Run Mission */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenJudgeMode}
            className="px-3.5 py-2 rounded-xl bg-amber-500/15 border border-amber-400/50 hover:bg-amber-500/25 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-amber-500/10 active:scale-95"
            title="Fast-Track 60-Second Evaluation for Judges"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>JUDGE MODE (60s)</span>
          </button>

          <button
            onClick={onOpenMission}
            className="px-3.5 py-2 rounded-xl bg-cyan-500 text-black text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
            title="Execute Full Closed-Loop Automated Sequence"
          >
            <Play className="w-3.5 h-3.5" />
            <span>RUN MISSION</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenJudgeMode}
            className="px-2.5 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/50 text-amber-300 text-[11px] font-mono font-bold flex items-center gap-1"
          >
            <Trophy className="w-3 h-3" />
            <span>JUDGE</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#06142a] border-b border-cyan-500/20 px-4 py-4 space-y-2">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs font-mono text-slate-300 hover:text-cyan-300 border-b border-cyan-500/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMission();
              }}
              className="w-full py-2.5 rounded-xl bg-cyan-500 text-black text-xs font-mono font-bold flex items-center justify-center gap-1.5"
            >
              <Play className="w-4 h-4" />
              <span>RUN FULL MISSION SEQUENCE</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
