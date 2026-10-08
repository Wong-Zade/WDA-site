import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import { CaseStudy } from '../types';

interface SelectedWorksProps {
  onSelectProject: (project: CaseStudy) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Brand Identity',
    'Visual Systems',
    '3D & Motion',
    'Editorial & Digital',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="min-h-[100svh] lg:h-[100svh] flex flex-col justify-center py-16 sm:py-20 lg:py-6 border-t border-[#27272a]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-[#27272a]/40">
          <div className="space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-normal">
              Some of recent Projects weve worked on.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#18181c] border border-[#27272c] rounded-full overflow-x-auto max-w-full font-caption">
            <span className="text-neutral-500 pl-2.5 pr-1 hidden sm:inline-block">
              <Filter className="w-3 h-3" />
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#9169f6] text-white shadow-[0_0_12px_rgba(76,47,135,0.6)]'
                    : 'text-neutral-400 hover:text-white hover:bg-[#232328]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scaled-down Bento Grid to fit in one page screen */}
        <div className="pt-3 sm:pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col justify-between rounded-xl p-3 sm:p-3.5 bg-[#17171a] border border-[#27272d] hover:border-[#9169f6]/50 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(76,47,135,0.25)]"
              >
                {/* Media Container */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-h-[140px] sm:max-h-[155px] rounded-lg overflow-hidden bg-[#111113] border border-[#232328]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Fallback & overlay info */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#121214]/85 backdrop-blur-sm border border-[#292930] rounded text-[10px] font-caption text-neutral-300">
                    {project.category}
                  </div>

                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#4c2f87]/80 backdrop-blur-sm border border-[#9169f6]/40 rounded text-[10px] font-mono-studio text-[#9169f6] flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-2.5 h-2.5 text-[#9169f6]" />
                    <span>{project.outcomeMetric}</span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="pt-2.5 space-y-1.5 font-caption">
                  {/* Metadata */}
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <span className="text-neutral-300 truncate max-w-[90px]">{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-studio">{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#9169f6] truncate">{project.category}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-[#9169f6] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="p-1 rounded bg-[#202025] text-neutral-400 group-hover:text-white group-hover:bg-[#9169f6] transition-all shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="pt-1 flex flex-wrap gap-x-1.5 gap-y-0.5 text-[10px] text-neutral-400">
                    {project.deliverables.slice(0, 2).map((d, i) => (
                      <span key={i} className="flex items-center gap-0.5 truncate max-w-[130px]">
                        <span className="text-[#9169f6]">/</span>
                        <span>{d}</span>
                      </span>
                    ))}
                    {project.deliverables.length > 2 && (
                      <span className="text-[#9169f6] font-mono-studio">
                        +{project.deliverables.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Note on Curation */}
        <div className="mt-3 sm:mt-5 p-3 sm:p-4 rounded-xl bg-[#17171a] border border-[#27272c] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs font-caption text-neutral-400">
          <p className="text-[11px] sm:text-xs">
            Looking for non-disclosed private commissions or enterprise white-label cases?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#9169f6] hover:text-purple-300 font-medium underline underline-offset-4 cursor-pointer whitespace-nowrap text-[11px] sm:text-xs"
          >
            Request Private Monograph Deck →
          </button>
        </div>
      </div>
    </section>
  );
};
