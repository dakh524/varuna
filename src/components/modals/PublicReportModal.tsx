import React from 'react';
import { X, Download, ShieldCheck, Printer, CheckCircle, FileCheck, Anchor, Award, Sparkles } from 'lucide-react';

interface PublicReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublicReportModal: React.FC<PublicReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-white border border-slate-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-y-auto flex flex-col text-slate-900">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 mb-4 sm:mb-6 shrink-0 gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-400 flex items-center justify-center text-black shadow-md shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-black" viewBox="0 0 24 24">
                <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-5.45 8-12V5l-8-3zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14c-2.7 0-5.2-1.3-6.6-3.4.1-2.2 4.4-3.4 6.6-3.4s6.5 1.2 6.6 3.4c-1.4 2.1-3.9 3.4-6.6 3.4z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-[9px] sm:text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider sm:tracking-widest">
                  OFFICIAL GAZETTE DOCUMENT // OPEN ACCESS
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                  PUBLIC RELEASE APPROVED
                </span>
              </div>
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 font-serif truncate">
                VARUNA06 Hydrographic & Prospectivity Executive Summary
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-100 border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 transition-all shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Executive Official Paper Document Container */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-sans space-y-4 sm:space-y-6 relative overflow-hidden shadow-inner">
          {/* Watermark Crest Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <svg className="w-80 h-80 sm:w-96 sm:h-96 fill-current text-slate-900" viewBox="0 0 24 24">
              <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-5.45 8-12V5l-8-3zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14c-2.7 0-5.2-1.3-6.6-3.4.1-2.2 4.4-3.4 6.6-3.4s6.5 1.2 6.6 3.4c-1.4 2.1-3.9 3.4-6.6 3.4z"/>
            </svg>
          </div>

          {/* Official Letterhead */}
          <div className="text-center border-b border-slate-300 pb-4 sm:pb-6">
            <h3 className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-amber-800">
              NATIONAL SUBSEA EXPLORATION & OCEANIC RESOURCES AUTHORITY
            </h3>
            <p className="text-[11px] sm:text-xs font-mono text-slate-600 mt-1 font-bold">
              Directorate of Autonomous Marine Technology & Hydrographic Geophysics
            </p>
            <p className="text-[10px] sm:text-[11px] font-mono text-blue-700 font-bold mt-1">
              Official Registry Record ID: <strong className="text-slate-900">SE-2026-V6-EXEC-RPT</strong>
            </p>
          </div>

          {/* Metadata Block */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white border border-slate-200 text-[11px] sm:text-xs font-mono shadow-sm">
            <div>
              <span className="text-slate-500 block">SYSTEM PLATFORM</span>
              <strong className="text-blue-800">VARUNA06 Payload</strong>
            </div>
            <div>
              <span className="text-slate-500 block">SURVEY MODE</span>
              <strong className="text-blue-800">Closed-Loop Tethered</strong>
            </div>
            <div>
              <span className="text-slate-500 block">ACOUSTIC STANDOFF</span>
              <strong className="text-blue-800">1.25 m Altitude</strong>
            </div>
            <div>
              <span className="text-slate-500 block">CLASSIFICATION</span>
              <strong className="text-emerald-700">UNCLASSIFIED / OPEN</strong>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h4 className="text-xs sm:text-sm font-mono font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-blue-700 shrink-0" />
              <span>1. Executive Summary & Technological Scope</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
              The VARUNA06 payload provides a low-cost, multi-physics subsea screening architecture designed to identify polymetallic nodule fields and massive sulfide ocean deposits. Operating at a continuous 1.25m acoustic standoff, VARUNA06 combines 3-axis fluxgate magnetometry, multi-frequency electromagnetic induction (200 Hz – 10 kHz), and galvanic self-potential measurement with autonomous 4-point rescan capability.
            </p>
          </div>

          {/* Prospectivity Scoring Table */}
          <div>
            <h4 className="text-xs sm:text-sm font-mono font-bold text-blue-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
              <span>2. Mineral Prospectivity Vector Calibration (0–100 Index)</span>
            </h4>
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <table className="w-full text-[11px] sm:text-xs font-mono border-collapse bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden min-w-[500px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
                    <th className="p-2.5 text-left">TARGET SPECIES</th>
                    <th className="p-2.5 text-left">PRIMARY GEOPHYSICAL INDICATOR</th>
                    <th className="p-2.5 text-center">AVERAGE SCORE</th>
                    <th className="p-2.5 text-center">CONFIDENCE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Copper-Like (Chalcopyrite)</td>
                    <td className="p-2.5">High Phase Lag (+42°) & Negative SP (-68 mV)</td>
                    <td className="p-2.5 text-center text-blue-800 font-bold">82 / 100</td>
                    <td className="p-2.5 text-center text-emerald-700 font-bold">HIGH (Verified)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Manganese-Like (Nodule Pavement)</td>
                    <td className="p-2.5">Broad Dipolar Magnetic Anomaly (+480 nT)</td>
                    <td className="p-2.5 text-center text-blue-800 font-bold">76 / 100</td>
                    <td className="p-2.5 text-center text-emerald-700 font-bold">HIGH (Verified)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Nickel-Like (Pentlandite)</td>
                    <td className="p-2.5 font-mono">EM Conductive Amplitude Spike (+24 mV)</td>
                    <td className="p-2.5 text-center text-blue-800 font-bold">64 / 100</td>
                    <td className="p-2.5 text-center text-amber-700 font-bold">MODERATE</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">Cobalt-Rich Crusts</td>
                    <td className="p-2.5">High Acoustic Backscatter (-13 dB)</td>
                    <td className="p-2.5 text-center text-blue-800 font-bold">47 / 100</td>
                    <td className="p-2.5 text-center text-amber-700 font-bold">MODERATE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Verification & Stamp */}
          <div className="pt-4 border-t border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center text-amber-800 font-black text-[9px] sm:text-[10px] text-center uppercase tracking-tighter p-1 shadow-sm shrink-0">
                OFFICIAL SEAL
              </div>
              <div>
                <div className="text-slate-900 font-bold">APPROVED BY THE DIRECTORATE</div>
                <div className="text-slate-600 text-[10px] sm:text-[11px]">Digital Verification Stamp: #SE-2026-AUTH-9921</div>
                <div className="text-blue-700 font-bold text-[9px] sm:text-[10px]">Date of Publication: September 2026</div>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-slate-600 text-[10px] sm:text-[11px]">UNCLOS Maritime Standards Compliant</div>
              <div className="text-emerald-700 font-bold text-[10px] sm:text-[11px]">STATUS: COMPLIANT & AUDITED</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 sm:pt-6 shrink-0">
          <div className="text-[11px] sm:text-xs font-mono text-slate-600 font-medium text-center sm:text-left">
            Open Data Rights: Free for academic, governmental, and industrial evaluation.
          </div>

          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={handleDownloadPDF}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-100 border border-slate-300 hover:border-blue-500 text-slate-800 text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-sm flex-1 sm:flex-none justify-center"
            >
              <Printer className="w-4 h-4 text-blue-700" />
              <span>PRINT / SAVE REPORT</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs hover:bg-amber-400 transition-all shadow-md flex-1 sm:flex-none justify-center"
            >
              CLOSE DOCUMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
