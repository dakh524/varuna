import React, { useState } from 'react';
import { RESEARCH_REFERENCES } from '../data/mockData';
import { BookOpen, ExternalLink, Sparkles, CheckCircle2, Bookmark, Layers } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [selectedPaperId, setSelectedPaperId] = useState<string>(RESEARCH_REFERENCES[0].id);

  return (
    <section id="research" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 16 // SCIENTIFIC GEOPHYSICS RIGOR</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Built on Established Marine Geophysics
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          VARUNA06 grounds its sensing principles directly in peer-reviewed marine geophysics, adapting shipboard CSEM methods and near-bottom electromagnetic techniques into an agile, low-cost platform.
        </p>
      </div>

      {/* Main Grid: Research Papers on Left, Research Gap on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        {/* Research Paper Cards */}
        <div className="lg:col-span-8 space-y-4">
          {RESEARCH_REFERENCES.map((paper) => {
            const isSelected = selectedPaperId === paper.id;
            return (
              <div
                key={paper.id}
                onClick={() => setSelectedPaperId(paper.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer backdrop-blur-md ${
                  isSelected
                    ? 'bg-[#081b38] border-cyan-400 shadow-xl shadow-cyan-500/10'
                    : 'bg-[#06142a]/80 border-cyan-500/20 hover:border-cyan-500/40'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                    {paper.citationKey}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {paper.journal} ({paper.year})
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-slate-400 font-mono mb-3">
                  Authors: {paper.authors}
                </p>

                <div className="space-y-2 pt-3 border-t border-cyan-500/15 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="font-mono font-bold text-sky-400 block mb-1">
                      KEY SCIENTIFIC CONTRIBUTION:
                    </span>
                    <p className="text-slate-300 font-sans leading-relaxed">
                      {paper.keyContribution}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                    <span className="font-mono font-bold text-teal-300 block mb-1">
                      VARUNA06 ENGINEERING ADAPTATION:
                    </span>
                    <p className="text-slate-200 font-sans leading-relaxed">
                      {paper.varunaAdaptation}
                    </p>
                  </div>
                </div>

                {paper.doi && (
                  <div className="mt-3 flex items-center justify-end">
                    <span className="text-[11px] font-mono text-cyan-400/80 hover:text-cyan-300 flex items-center gap-1">
                      DOI: {paper.doi} <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Research Gap Analysis Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#081c3c] to-[#040e1e] border-2 border-cyan-400/40 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cyan-500/20">
              <Bookmark className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                The Academic Research Gap
              </span>
            </div>

            {/* Gap comparison */}
            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30">
                <span className="text-rose-400 font-bold block mb-1">EXISTING STATE-OF-THE-ART:</span>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Highly specialized multi-million dollar platforms, ship-scale towed systems, and single linear survey profiles with no local verification or real-time closed-loop decision making.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-400/50 shadow-lg shadow-cyan-500/10">
                <span className="text-cyan-300 font-bold block mb-1">VARUNA06 BREAKTHROUGH:</span>
                <ul className="text-slate-200 font-sans space-y-1.5 mt-1">
                  <li>• <strong className="text-white">Low-Cost COTS Architecture:</strong> 1/10th the deployment barrier.</li>
                  <li>• <strong className="text-white">Modular Subsea Cartridges:</strong> Rapid sensor reconfiguration.</li>
                  <li>• <strong className="text-white">Targeted Adaptive Rescanning:</strong> Reduces false positives at seafloor.</li>
                  <li>• <strong className="text-white">Signature Similarity Scoring:</strong> 4 discrete target profiles.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
