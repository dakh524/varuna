import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
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
import { WowFactorsSection } from './components/WowFactorsSection';
import { SeafloorMapSection } from './components/SeafloorMapSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

import { FullMissionDemoModal } from './components/modals/FullMissionDemoModal';
import { JudgeModeModal } from './components/modals/JudgeModeModal';

export const App: React.FC = () => {
  const [isMissionModalOpen, setIsMissionModalOpen] = useState<boolean>(false);
  const [isJudgeModalOpen, setIsJudgeModalOpen] = useState<boolean>(false);

  const handleOpenSimulation = () => {
    const simElement = document.getElementById('simulator');
    if (simElement) {
      simElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030814] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar
        onOpenMission={() => setIsMissionModalOpen(true)}
        onOpenJudgeMode={() => setIsJudgeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full space-y-8">
        {/* 03 Hero */}
        <HeroSection
          onOpenMission={() => setIsMissionModalOpen(true)}
          onOpenJudgeMode={() => setIsJudgeModalOpen(true)}
        />

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

        {/* 29 Team Lorenzini */}
        <TeamSection />
      </main>

      {/* 30 Final CTA & Footer */}
      <Footer
        onOpenMission={() => setIsMissionModalOpen(true)}
        onOpenJudgeMode={() => setIsJudgeModalOpen(true)}
      />

      {/* Interactive Modals */}
      <FullMissionDemoModal
        isOpen={isMissionModalOpen}
        onClose={() => setIsMissionModalOpen(false)}
      />

      <JudgeModeModal
        isOpen={isJudgeModalOpen}
        onClose={() => setIsJudgeModalOpen(false)}
        onOpenSimulation={handleOpenSimulation}
      />
    </div>
  );
};

export default App;
