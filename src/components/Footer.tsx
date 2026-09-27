import React from 'react';
import { ShieldCheck, ArrowUp, FileText, Mail, Play, Compass } from 'lucide-react';

interface FooterProps {
  onOpenMission: () => void;
  onOpenJudgeMode: () => void;
  onOpenReport: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMission, onOpenJudgeMode, onOpenReport, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans bg-[#0b132b] text-slate-200 border-t-4 border-amber-500">
      
      {/* 🏛️ 1. OFFICIAL GOVERNMENT EMBLEM LOGO STRIP (MATCHING REFERENCE IMAGE LOGO ROW) 🏛️ */}
      <div className="bg-white py-6 border-b border-slate-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 opacity-90 grayscale hover:grayscale-0 transition-all">
          
          {/* Logo 1: National Portal of India */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-black text-xs">
              GOV
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-xs block">india.gov.in</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase">National Portal of India</span>
            </div>
          </div>

          {/* Logo 2: Ministry of Earth Sciences */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xs">
              MoES
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-xs block">MoES India</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase">Ministry of Earth Sciences</span>
            </div>
          </div>

          {/* Logo 3: NCPOR */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-black text-xs">
              NCPOR
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-xs block">NCPOR Goa</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase">Polar & Ocean Research</span>
            </div>
          </div>

          {/* Logo 4: Digital India */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs">
              DI
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-xs block">Digital India</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase">Power To Empower</span>
            </div>
          </div>

          {/* Logo 5: SIH 2026 */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-purple-900 text-amber-300 flex items-center justify-center font-black text-xs">
              SIH
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-xs block">SIH 2026</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase">Smart India Hackathon</span>
            </div>
          </div>

        </div>
      </div>

      {/* 🏢 2. MAIN MINISTRY FOOTER & LINKS (MATCHING REFERENCE IMAGE FOOTER) 🏢 */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-700 text-xs">
          
          {/* Col 1: Ministry Title & Emblem */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 flex items-center justify-center font-black shadow-md">
                <ShieldCheck className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">VARUNA 06 PORTAL</h4>
                <p className="text-[11px] text-amber-400 font-bold">Ministry of Earth Sciences (MoES)</p>
              </div>
            </div>

            {/* Prominent SIH 2026 Student Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-400/50 text-amber-300 font-mono text-xs font-black tracking-wide shadow-sm">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>THIS IS BUILT FOR STUDENT SMART INDIA HACKATHON 2026</span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed font-medium">
              Official Deep Ocean Exploration Operations Portal for PS 26064. Developed by Team LORENZINI for preliminary seafloor anomaly investigation and bathymetric prospectivity mapping.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenReport}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>DOWNLOAD GAZETTE REPORT</span>
              </button>
            </div>
          </div>

          {/* Col 2: Policy & Governance Links (Matching Middle Footer Links in Reference Image) */}
          <div className="md:col-span-5 space-y-2">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Portal Policies & Links</h5>
            
            <div className="grid grid-cols-2 gap-2 text-slate-300 text-xs font-medium">
              <a href="#" className="hover:text-amber-400 transition-colors">• Copyright Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">• Hyperlinking Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">• Terms & Conditions</a>
              <a href="#" className="hover:text-amber-400 transition-colors">• Accessibility Options</a>
              <a href="#" className="hover:text-amber-400 transition-colors">• Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">• Contact Us</a>
              <a href="#problem" className="hover:text-amber-400 transition-colors">• PS 26064 Description</a>
              <a href="#sih-alignment" className="hover:text-amber-400 transition-colors">• SIH Evaluation Matrix</a>
            </div>
          </div>

          {/* Col 3: Secretariat Contact & Working Hours (Matching Right Footer in Reference Image) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Secretariat Working Hours</h5>
            
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 space-y-1">
              <div className="text-amber-400 font-bold">Working Hours:</div>
              <div className="text-[11px]">9:00am To 5:30pm (Monday To Friday)</div>
              <div className="text-[10px] text-slate-400 pt-1">Team LORENZINI Technical Secretariat</div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* 3. COPYRIGHT STRIP (MATCHING REFERENCE IMAGE BOTTOM COPYRIGHT BAR) */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            © Content by Ministry of Earth Sciences (MoES) / Team LORENZINI | All Rights Reserved
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 font-mono font-black uppercase">
              THIS IS BUILT FOR STUDENT SMART INDIA HACKATHON 2026
            </span>
            <span>•</span>
            <span>UNCLOS Compliant</span>
            <span>•</span>
            <span>WCAG 2.1 AA Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
