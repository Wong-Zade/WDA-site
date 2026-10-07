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
    <section id="works" className="py-24 md:py-36 border-t border-[#27272a]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Aligned with XD artboard 'Selected Work / Some of recent Projects weve worked on.' */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#27272a]/40">
          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-normal">
              Some of recent Projects weve worked on.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#18181c] border border-[#27272c] rounded-full overflow-x-auto max-w-full font-caption">
            <span className="text-neutral-500 pl-3 pr-1 hidden sm:inline-block">
              <Filter className="w-3.5 h-3.5" />
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#9169f6] text-white shadow-[0_0_14px_rgba(76,47,135,0.6)]'
                    : 'text-neutral-400 hover:text-white hover:bg-[#232328]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout logic for dynamic Bento rhythm
            const isWide = idx === 0 || idx === 3;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between rounded-2xl p-4 sm:p-5 bg-[#17171a] border border-[#27272d] hover:border-[#9169f6]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(76,47,135,0.25)]`}
              >
                {/* Media Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#111113] border border-[#232328]">
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
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#121214]/85 backdrop-blur-sm border border-[#292930] rounded-md text-[11px] font-caption text-neutral-300">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#4c2f87]/80 backdrop-blur-sm border border-[#9169f6]/40 rounded-md text-[11px] font-caption text-[#9169f6] flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-3 h-3 text-[#9169f6]" />
                    <span>{project.outcomeMetric}</span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="pt-5 space-y-3 font-caption">
                  {/* Unboxed Metadata (Zero Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="text-neutral-300">{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-studio">{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#9169f6]">{project.category}</span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#9169f6] transition-colors">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-lg bg-[#202025] text-neutral-400 group-hover:text-white group-hover:bg-[#9169f6] transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="pt-2 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-neutral-400">
                    {project.deliverables.slice(0, 3).map((d, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="text-[#9169f6]">/</span>
                        <span>{d}</span>
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="text-[#9169f6] font-mono-studio">
                        +{project.deliverables.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Note on Curation */}
        <div className="mt-12 p-6 rounded-xl bg-[#17171a] border border-[#27272c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-caption text-neutral-400">
          <p>
            Looking for non-disclosed private commissions or enterprise white-label cases?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#9169f6] hover:text-purple-300 font-medium underline underline-offset-4 cursor-pointer whitespace-nowrap"
          >
            Request Private Monograph Deck →
          </button>
        </div>
      </div>
    </section>
  );
};
