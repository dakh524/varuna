import React, { useState } from 'react';
import { Play, Trophy, Menu, X, FileText, ShieldCheck, Award, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenMission: () => void;
  onOpenJudgeMode: () => void;
  onOpenReport: () => void;
  onOpenDisclaimer?: () => void;
  isHighContrast?: boolean;
  onHighContrastToggle?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMission,
  onOpenJudgeMode,
  onOpenReport,
  onOpenDisclaimer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Inside PPT', href: '#inside-ppt' },
    { label: 'The Problem', href: '#problem' },
    { label: 'Specifications', href: '#specifications' },
    { label: 'How It Works', href: '#mission-intelligence' },
    { label: 'Sensor Intelligence', href: '#sensor-fusion' },
    { label: '3D & PCB Platform', href: '#robot-3d' },
    { label: 'Industry Evolution', href: '#roadmap-feasibility' },
    { label: 'Team Lorenzini', href: '#team' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-md">
      {/* Main Top Header Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Left: Official Government Emblems & Seals */}
        <div className="flex items-center gap-3.5">
          {/* Gold Ashoka Lion Capital Seal */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-md shrink-0 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center border border-amber-300">
              <svg className="w-6 h-6 fill-amber-400" viewBox="0 0 24 24">
                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-5.45 8-12V6l-8-4zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14c-2.7 0-5.2-1.3-6.6-3.4.1-2.2 4.4-3.4 6.6-3.4s6.5 1.2 6.6 3.4c-1.4 2.1-3.9 3.4-6.6 3.4z"/>
              </svg>
            </div>
          </div>

          {/* Ministry & Project Titles */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 font-sans">
                VARUNA <span className="text-amber-600">06</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wide">
                PS 26064
              </span>
              <span className="hidden md:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wide">
                TEAM LORENZINI
              </span>
            </div>

            <div className="text-[11px] font-bold text-slate-800 tracking-wide">
              पृथ्वी विज्ञान मंत्रालय | <span className="text-amber-800">Ministry of Earth Sciences (MoES)</span>
            </div>
            <div className="text-[9px] text-slate-500 font-semibold tracking-wide uppercase">
              National Centre for Polar and Ocean Research (NCPOR) • Deep Ocean Mission
            </div>
          </div>
        </div>

        {/* Right: Portal CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* THIS IS OUR SOFTWARE DESIGN (VARUNA 06) Live Link Button */}
          <a
            href="https://dashboard-varuna-06.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-950 text-xs font-black flex items-center gap-1.5 transition-all shadow-xs"
            title="THIS IS OUR SOFTWARE DESIGN (VARUNA 06)"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Software Design</span>
          </a>

          {/* Inside PPT Deck Quick Link */}
          <a
            href="#inside-ppt"
            className="px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 text-xs font-black flex items-center gap-1.5 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-amber-700" />
            <span>INSIDE PPT</span>
          </a>

          {/* Official Gazette Report Button */}
          <button
            onClick={onOpenReport}
            className="px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            <span>Gazette Report</span>
          </button>

          {/* 60s Audit Mode CTA */}
          <button
            onClick={onOpenJudgeMode}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
          >
            <Trophy className="w-3.5 h-3.5 text-slate-950" />
            <span>Audit (60s)</span>
          </button>

          {/* Run Mission Primary CTA */}
          <button
            onClick={onOpenMission}
            className="px-4 py-1.5 rounded-xl bg-[#0b132b] hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Run Mission</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenJudgeMode}
            className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1"
          >
            <Trophy className="w-3 h-3" />
            <span>AUDIT</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>



      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2 font-sans">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs font-bold text-slate-800 hover:text-amber-600 border-b border-slate-100 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
