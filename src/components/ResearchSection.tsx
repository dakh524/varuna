import React from 'react';
import { BookOpen, FileText, Download, ExternalLink, ShieldCheck, Sparkles, Award } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const ieeePapers = [
    {
      id: 'IEEE-1',
      title: 'Theories, Applications, and Expectations for Magnetic Anomaly Detection Technology: A Review',
      category: 'MAGNETOMETER SENSING',
      pdf: '/assets/IEEE%20PAPER-1%20Theories_Applications_and_Expectations_for_Magnetic_Anomaly_Detection_Technology_A_Review%20(1).pdf',
      summary: 'Comprehensive review of vector magnetometry, dipole inversion, and ambient oceanic magnetic noise filtering.'
    },
    {
      id: 'IEEE-2',
      title: 'Underwater Controlled-Source Electromagnetic Sensing: Locating and Characterizing Compact Seabed Targets',
      category: 'PULSED EMI SENSING',
      pdf: '/assets/IEEE%20PAPER-2%20Underwater_controlled_source_electromagnetic_sensing_Locating_and_characterizing_compact_seabed_targets%20(1).pdf',
      summary: 'Electromagnetic induction physics, skin depth calculations across conductive seawater, and secondary field attenuation.'
    },
    {
      id: 'IEEE-3',
      title: 'Mixed Seabed Sediment Classification Based on Transferred Convolutional Neural Network',
      category: 'AI & CLASSIFICATION',
      pdf: '/assets/IEEE%20PAPER-3%20Mixed_Seabed_Sediment_Classification_Based_on_Transferred_Convolutional_Neural_Network_A_Case_Study_in_the_Ancient_River_Valley.pdf',
      summary: 'Machine learning for seabed sediment categorization, feature extraction, and transfer learning models.'
    },
    {
      id: 'IEEE-4',
      title: 'Seafloor Classification by Fusing AUV Acoustic and Magnetic Data Toward Complex Deep-Sea Environments',
      category: 'MULTI-SENSOR FUSION',
      pdf: '/assets/IEEE%20PAPER-4%20Seafloor_Classification_by_Fusing_AUV_Acoustic_and_Magnetic_Data_Toward_Complex_Deep-Sea_Environments%20(1).pdf',
      summary: 'Multi-modal data fusion algorithms combining acoustic backscatter and magnetic field vectors for high-confidence seabed classification.'
    },
    {
      id: 'IEEE-5',
      title: 'Advances In Fusion Of High Resolution Underwater Optical & Acoustic Data',
      category: 'ACOUSTIC & OPTICAL FUSION',
      image: '/assets/IEEE%20PAPER-5%20Advances_In_Fusion_Of_High_Resolution_Underwater_Optical_Acoustic_Data.png',
      summary: 'Fusing 500 kHz acoustic altimetry standoff profiles with 4K optical camera ground-truth evidence.'
    }
  ];

  return (
    <section id="research" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold mb-4">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>IEEE RESEARCH FOUNDATION // PEER-REVIEWED VALIDATION</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          IEEE Research Foundation & Publications
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          VARUNA 06 grounds its multi-physics sensing, electromagnetic induction, and sensor fusion algorithms directly in peer-reviewed IEEE marine geophysics research.
        </p>

        {/* Master PDF Download Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-500 text-slate-950 flex flex-wrap items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-left">
            <FileText className="w-6 h-6 text-slate-950 shrink-0" />
            <div>
              <span className="font-extrabold text-sm block">ENTIRE RESEARCH VALIDATION SUMMARY</span>
              <span className="text-xs text-slate-900 font-medium">Complete document with verified IEEE source links & mathematical derivations</span>
            </div>
          </div>
          <a
            href="/assets/ENTIRE%20RESEARCH%20VALIDATION%20SUMMARY%20WITH%20SOURCE%20LINKS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-slate-800 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Download Summary PDF</span>
          </a>
        </div>
      </div>

      {/* 5 IEEE Research Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {ieeePapers.map((paper, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between hover:border-blue-500 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-bold uppercase">
                  {paper.id} • {paper.category}
                </span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>

              <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                {paper.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                {paper.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              {paper.pdf ? (
                <a
                  href={paper.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Read / Download PDF</span>
                </a>
              ) : (
                <a
                  href={paper.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Research Document</span>
                </a>
              )}
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
