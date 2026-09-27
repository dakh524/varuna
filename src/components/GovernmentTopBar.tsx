import React, { useState } from 'react';
import { Shield, Eye, FileText, Globe, ChevronDown, Check, Bell, Search } from 'lucide-react';

interface GovernmentTopBarProps {
  textSize: 'sm' | 'md' | 'lg';
  onTextSizeChange: (size: 'sm' | 'md' | 'lg') => void;
  isHighContrast: boolean;
  onHighContrastToggle: () => void;
  onOpenReport: () => void;
  onOpenInquiry: () => void;
}

export const GovernmentTopBar: React.FC<GovernmentTopBarProps> = ({
  textSize,
  onTextSizeChange,
  isHighContrast,
  onHighContrastToggle,
  onOpenReport,
  onOpenInquiry,
}) => {
  const [selectedLang, setSelectedLang] = useState('English (English)');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = ['English (Official)', 'हिन्दी (Hindi)', 'Français', 'Español'];

  return (
    <div className={`w-full text-xs transition-colors border-b ${
      isHighContrast
        ? 'bg-black text-white border-amber-400 font-bold'
        : 'bg-[#1b263b] text-slate-100 border-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: National Authority Header */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {/* Indian National Emblem Seal (Lion Capital Representation) */}
            <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24">
              <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-5.45 8-12V6l-8-4zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14c-2.7 0-5.2-1.3-6.6-3.4.1-2.2 4.4-3.4 6.6-3.4s6.5 1.2 6.6 3.4c-1.4 2.1-3.9 3.4-6.6 3.4z"/>
            </svg>
            <span className="font-bold text-amber-300 tracking-wide text-[11px]">
              भारत सरकार | GOVERNMENT OF INDIA
            </span>
          </div>

          <span className="hidden md:inline text-slate-500">|</span>

          <span className="hidden sm:inline text-slate-200 font-semibold text-[11px]">
            पृथ्वी विज्ञान मंत्रालय | Ministry of Earth Sciences (MoES)
          </span>

          <span className="hidden lg:inline text-slate-400 text-[11px]">
            • <strong className="text-amber-400">NCPOR</strong> • Team LORENZINI
          </span>
        </div>

        {/* Right: Accessibility & Language Options */}
        <div className="flex items-center gap-2.5">
          {/* Skip to Main Content */}
          <a href="#main-content" className="hidden lg:inline text-[10px] text-slate-300 hover:text-white underline">
            Skip to main content
          </a>

          {/* Text Size Scale */}
          <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-700 text-[10px]">
            <span className="text-slate-400 mr-0.5 hidden sm:inline">Text Size:</span>
            <button
              onClick={() => onTextSizeChange('sm')}
              className={`px-1.5 py-0.5 rounded font-bold ${textSize === 'sm' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            >
              A-
            </button>
            <button
              onClick={() => onTextSizeChange('md')}
              className={`px-1.5 py-0.5 rounded font-bold ${textSize === 'md' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            >
              A
            </button>
            <button
              onClick={() => onTextSizeChange('lg')}
              className={`px-1.5 py-0.5 rounded font-bold ${textSize === 'lg' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            >
              A+
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={onHighContrastToggle}
            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-bold text-amber-300 hover:border-amber-400 flex items-center gap-1"
          >
            <Eye className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">High Contrast</span>
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-bold text-slate-200 flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-blue-400" />
              <span>{selectedLang.split(' ')[0]}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-1 z-50 w-36 bg-[#0e1726] border border-slate-700 rounded shadow-xl py-1">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left px-3 py-1 text-xs text-slate-200 hover:bg-slate-800 flex items-center justify-between font-medium"
                  >
                    <span>{lang}</span>
                    {selectedLang === lang && <Check className="w-3 h-3 text-amber-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
