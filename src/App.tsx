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
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState<boolean>(true);
  const [isMissionModalOpen, setIsMissionModalOpen] = useState<boolean>(false);
  const [isJudgeModalOpen, setIsJudgeModalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);

  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  const handleOpenSimulation = () => {
    const simElement = document.getElementById('simulator');
    if (simElement) {
      simElement.scrollIntoView({ behavior: 'smooth' });
    }
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

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-amber-400 selection:text-black transition-colors ${
      isHighContrast
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
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full space-y-12">
        {/* 03 Hero */}
        <HeroSection
          onOpenMission={() => setIsMissionModalOpen(true)}
          onOpenJudgeMode={() => setIsJudgeModalOpen(true)}
          onOpenReport={() => setIsReportModalOpen(true)}
        />

        {/* Official SIH PPT Detailed Presentation Section */}
        <InsidePptSection />

        {/* 04 Problem */}
        <ProblemSection />

        {/* 05 Comparison & Transition */}
        <ComparisonSection />

        {/* 06 3D Robot Viewer */}
        <RobotViewerSection />

        {/* 07 System Architecture */}
        <ArchitectureSection />

        {/* 08 Mission Intelligence Loop */}
        <MissionPipeline />

        {/* 09 Digital Twin & Live Simulator */}
        <MissionSimulator />

        {/* 10 Adaptive Rescanning */}
        <AdaptiveRescanSection />

        {/* 11 Metal-Specific Anomaly Prospectivity Scoring */}
        <AnomalyScoringSection />

        {/* 12 & 13 Sensor Fusion & Environmental Correction */}
        <SensorFusionSection />

        {/* 14 & 15 Acoustic Standoff & Optical Ground-Truthing */}
        <AcousticOpticalSection />

        {/* 25 WOW Factors */}
        <WowFactorsSection />

        {/* 28 Seafloor Bathymetric Prospectivity Map */}
        <SeafloorMapSection />

        {/* 16 Research Foundation */}
        <ResearchSection />

        {/* 17 Important Honest Limitations */}
        <LimitationsSection />

        {/* 18 & 19 Development Roadmap & Feasibility */}
        <RoadmapFeasibilitySection />

        {/* 20 & 21 Engineering Challenges & Cost Impact */}
        <ChallengesCostSection />

        {/* 22, 23 & 24 Business Model, Sustainability & SWOT */}
        <BusinessSwotSection />

        {/* 24 SIH Evaluation Alignment & Differentiators Summary */}
        <SihAlignmentSection />

        {/* 29 Engineering & Research Secretariat */}
        <TeamSection />
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
