import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle, Sparkles, CheckCircle2, X, Compass, FileText } from 'lucide-react';

interface ResearchDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchDisclaimerModal: React.FC<ResearchDisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 selection:bg-amber-400 selection:text-black font-sans">
      <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/60 animate-in fade-in zoom-in duration-300">
        
        {/* Top Header Bar with MoES Branding */}
        <div className="bg-[#0b132b] text-white px-6 py-4 flex items-center justify-between border-b-2 border-amber-500">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black shadow-md shrink-0">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                MINISTRY OF EARTH SCIENCES (MoES) • PS 26064
              </span>
              <h3 className="text-base font-extrabold text-white tracking-tight">
                Official Research & Data Validation Disclaimer
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Highlight Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold font-mono shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>HONEST RESEARCH TRANSPARENCY & DATA ACCURACY NOTE</span>
          </div>

          {/* User Requested Statement Block */}
          <div className="p-5 md:p-6 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Compass className="w-24 h-24 text-amber-400" />
            </div>

            <blockquote className="relative z-10 text-sm md:text-base leading-relaxed font-medium text-slate-200 font-sans italic border-l-4 border-amber-500 pl-4 py-1">
              “The data currently shown on our website is based on our research, available datasets, and validation results. We present the results with a confidence score rather than claiming absolute accuracy. Since real-world seafloor conditions can vary, there is always a small possibility of false positives or false negatives. Our multi-sensor verification and closed-loop re-scan mechanism is specifically designed to identify and reduce these uncertainties.”
            </blockquote>
          </div>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium space-y-1">
              <span className="font-bold text-slate-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>0–100% Scoring</span>
              </span>
              <p className="text-[11px] text-slate-600">Calculates statistical prospectivity confidence levels.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium space-y-1">
              <span className="font-bold text-slate-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Multi-Position Rescan</span>
              </span>
              <p className="text-[11px] text-slate-600">Closed-loop 4-point rescan eliminates isolated anomalies.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium space-y-1">
              <span className="font-bold text-slate-900 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Evidence-Driven</span>
              </span>
              <p className="text-[11px] text-slate-600">Combines EMI, magnetic, acoustic, and optical data.</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
            <span className="text-xs text-slate-500 font-medium">
              Team LORENZINI • National Centre for Polar and Ocean Research (NCPOR)
            </span>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all border border-amber-300"
            >
              <span>I UNDERSTAND & ACKNOWLEDGE → ENTER PORTAL</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
