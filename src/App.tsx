import React, { useState } from 'react';
import { GovernmentTopBar } from './components/GovernmentTopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InsidePptSection } from './components/InsidePptSection';
import { ProblemSection } from './components/ProblemSection';
import { ComparisonSection } from './components/ComparisonSection';
import { RobotViewerSection } from './components/RobotViewerSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { MissionPipeline } from './components/MissionPipeline';
import { MissionSimulator } from './components/MissionSimulator';
import { AdaptiveRescanSection } from './components/AdaptiveRescanSection';
import { AnomalyScoringSection } from './components/AnomalyScoringSection';
import { SensorFusionSection } from './components/SensorFusionSection';
import { AcousticOpticalSection } from './components/AcousticOpticalSection';
import { ResearchSection } from './components/ResearchSection';
import { LimitationsSection } from './components/LimitationsSection';
import { RoadmapFeasibilitySection } from './components/RoadmapFeasibilitySection';
import { ChallengesCostSection } from './components/ChallengesCostSection';
import { BusinessSwotSection } from './components/BusinessSwotSection';
import { SihAlignmentSection } from './components/SihAlignmentSection';
import { WowFactorsSection } from './components/WowFactorsSection';
import { SeafloorMapSection } from './components/SeafloorMapSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

import { FullMissionDemoModal } from './components/modals/FullMissionDemoModal';
import { JudgeModeModal } from './components/modals/JudgeModeModal';
import { PublicReportModal } from './components/modals/PublicReportModal';
import { PublicInquiryModal } from './components/modals/PublicInquiryModal';
import { ResearchDisclaimerModal } from './components/modals/ResearchDisclaimerModal';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<number>(1); // 1 to 5 (or 0 for All Pages)
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState<boolean>(true);
  const [isMissionModalOpen, setIsMissionModalOpen] = useState<boolean>(false);
  const [isJudgeModalOpen, setIsJudgeModalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);

  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  const pagesInfo = [
    { num: 1, title: '1. Problem Statement', tag: 'Problem & Baseline', hash: 'page-1' },
    { num: 2, title: '2. Solution', tag: 'VARUNA06 Payload & Architecture', hash: 'page-2' },
    { num: 3, title: '3. Our Test & Research', tag: 'Digital Twin, IEEE & GIS Map', hash: 'page-3' },
    { num: 4, title: '4. Business Model', tag: 'RaaS Model, Feasibility & Costs', hash: 'page-4' },
    { num: 5, title: '5. Our Team & Mentors', tag: 'Team Secretariat & NIOT Mentors', hash: 'page-5' },
  ];

  // Sync state with URL hash on initial load & hash change
  React.useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('page-1') || hash.includes('problem')) setActivePage(1);
      else if (hash.includes('page-2') || hash.includes('solution') || hash.includes('architecture')) setActivePage(2);
      else if (hash.includes('page-3') || hash.includes('research') || hash.includes('test') || hash.includes('simulator')) setActivePage(3);
      else if (hash.includes('page-4') || hash.includes('business') || hash.includes('swot') || hash.includes('cost')) setActivePage(4);
      else if (hash.includes('page-5') || hash.includes('team') || hash.includes('mentors')) setActivePage(5);
      else if (hash.includes('full') || hash.includes('all')) setActivePage(0);
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleOpenSimulation = () => {
    setActivePage(3); // Jump to Test & Research page where simulator is located
    window.location.hash = 'page-3';
    setTimeout(() => {
      const simElement = document.getElementById('simulator');
      if (simElement) {
        simElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getTextScaleClass = () => {
    switch (textSize) {
      case 'sm':
        return 'text-xs';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  const handlePageChange = (page: number) => {
    setActivePage(page);
    if (page === 0) {
      window.location.hash = 'full-view';
    } else {
      window.location.hash = `page-${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-amber-400 selection:text-black transition-colors ${isHighContrast
        ? 'bg-white text-black high-contrast-mode'
        : 'bg-[#f8fafc] text-slate-900'
      } ${getTextScaleClass()}`}>

      {/* Official Agency Navigation Header */}
      <Navbar
        onOpenMission={() => setIsMissionModalOpen(true)}
        onOpenJudgeMode={() => setIsJudgeModalOpen(true)}
        onOpenReport={() => setIsReportModalOpen(true)}
        onOpenDisclaimer={() => setIsDisclaimerModalOpen(true)}
        isHighContrast={isHighContrast}
        onHighContrastToggle={() => setIsHighContrast(!isHighContrast)}
        activePage={activePage}
        onPageChange={handlePageChange}
      />

      {/* Prominent 5-Page Multi-Page Navigation Bar */}
      <div className="sticky top-[61px] z-40 bg-[#0b132b] text-white border-b-2 border-amber-500 shadow-xl px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full justify-between sm:justify-start">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest hidden sm:inline">
              PORTAL PAGES:
            </span>
            <div className="flex items-center gap-1 overflow-x-auto max-w-full scrollbar-none py-0.5">
              {pagesInfo.map((p) => (
                <a
                  key={p.num}
                  href={`#page-${p.num}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(p.num);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${activePage === p.num
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md font-black scale-105'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${activePage === p.num ? 'bg-slate-950 text-amber-400 font-black' : 'bg-slate-800 text-slate-300'
                    }`}>
                    {p.num}
                  </span>
                  <span>{p.title}</span>
                </a>
              ))}

              <a
                href="#full-view"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${activePage === 0
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800'
                  }`}
              >
                <span>FULL VIEW (ALL)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections (5-Page Layout) */}
      <main className="flex-1 w-full space-y-12">

        {/* PAGE 1: PROBLEM STATEMENT */}
        {(activePage === 1 || activePage === 0) && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <HeroSection
              onOpenMission={() => setIsMissionModalOpen(true)}
              onOpenJudgeMode={() => setIsJudgeModalOpen(true)}
              onOpenReport={() => setIsReportModalOpen(true)}
            />
            <ProblemSection />
            <ComparisonSection />

            {activePage === 1 && (
              <div className="max-w-7xl mx-auto px-4 py-6 bg-slate-100 rounded-2xl border border-slate-300 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-600">END OF PAGE 1: PROBLEM STATEMENT</span>
                <button
                  onClick={() => handlePageChange(2)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center gap-2 transition-all shadow-md"
                >
                  <span>PROCEED TO PAGE 2: SOLUTION →</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* PAGE 2: SOLUTION */}
        {(activePage === 2 || activePage === 0) && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <ArchitectureSection />
            <InsidePptSection />
            <RobotViewerSection />
            <MissionPipeline />
            <AdaptiveRescanSection />
            <SensorFusionSection />
            <AcousticOpticalSection />
            <WowFactorsSection />

            {activePage === 2 && (
              <div className="max-w-7xl mx-auto px-4 py-6 bg-slate-100 rounded-2xl border border-slate-300 flex items-center justify-between">
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  ← PAGE 1: PROBLEM
                </button>
                <button
                  onClick={() => handlePageChange(3)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center gap-2 transition-all shadow-md"
                >
                  <span>PROCEED TO PAGE 3: TEST & RESEARCH →</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* PAGE 3: OUR TEST & RESEARCH */}
        {(activePage === 3 || activePage === 0) && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <MissionSimulator />
            <AnomalyScoringSection />
            <SeafloorMapSection />
            <ResearchSection />

            {activePage === 3 && (
              <div className="max-w-7xl mx-auto px-4 py-6 bg-slate-100 rounded-2xl border border-slate-300 flex items-center justify-between">
                <button
                  onClick={() => handlePageChange(2)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  ← PAGE 2: SOLUTION
                </button>
                <button
                  onClick={() => handlePageChange(4)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center gap-2 transition-all shadow-md"
                >
                  <span>PROCEED TO PAGE 4: BUSINESS MODEL →</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* PAGE 4: BUSINESS MODEL */}
        {(activePage === 4 || activePage === 0) && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <LimitationsSection />
            <RoadmapFeasibilitySection />
            <ChallengesCostSection />
            <BusinessSwotSection />

            {activePage === 4 && (
              <div className="max-w-7xl mx-auto px-4 py-6 bg-slate-100 rounded-2xl border border-slate-300 flex items-center justify-between">
                <button
                  onClick={() => handlePageChange(3)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  ← PAGE 3: TEST & RESEARCH
                </button>
                <button
                  onClick={() => handlePageChange(5)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center gap-2 transition-all shadow-md"
                >
                  <span>PROCEED TO PAGE 5: TEAM & MENTORS →</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* PAGE 5: OUR TEAM & MENTORS */}
        {(activePage === 5 || activePage === 0) && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <SihAlignmentSection />
            <TeamSection />

            {activePage === 5 && (
              <div className="max-w-7xl mx-auto px-4 py-6 bg-slate-100 rounded-2xl border border-slate-300 flex items-center justify-between">
                <button
                  onClick={() => handlePageChange(4)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  ← PAGE 4: BUSINESS MODEL
                </button>
                <span className="text-xs font-mono font-bold text-emerald-700">COMPLETED ALL 5 PORTAL PAGES</span>
              </div>
            )}
          </div>
        )}

      </main>

      {/* 30 Final CTA & Official Government Footer */}
      <Footer
        onOpenMission={() => setIsMissionModalOpen(true)}
        onOpenJudgeMode={() => setIsJudgeModalOpen(true)}
        onOpenReport={() => setIsReportModalOpen(true)}
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
      />

      {/* Interactive Government Portal Modals */}
      <FullMissionDemoModal
        isOpen={isMissionModalOpen}
        onClose={() => setIsMissionModalOpen(false)}
      />

      <JudgeModeModal
        isOpen={isJudgeModalOpen}
        onClose={() => setIsJudgeModalOpen(false)}
        onOpenSimulation={handleOpenSimulation}
      />

      <PublicReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      <PublicInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />

      <ResearchDisclaimerModal
        isOpen={isDisclaimerModalOpen}
        onClose={() => setIsDisclaimerModalOpen(false)}
      />
    </div>
  );
};

export default App;
