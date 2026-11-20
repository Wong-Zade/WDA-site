import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import { CaseStudy } from '../types';

interface SelectedWorksProps {
  onSelectProject: (project: CaseStudy) => void;
  isPage?: boolean;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject, isPage = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Brand Identity',
    '2D & Graphics',
    'UI/UX Design',
    'Editorial & Digital',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === activeCategory);

  const firstPair = filteredProjects.slice(0, 2);
  const secondPair = filteredProjects.slice(2, 4);

  const renderProjectCard = (project: CaseStudy) => (
    <button
      type="button"
      key={project.id}
      onClick={() => onSelectProject(project)}
      aria-label={`View project: ${project.title}`}
      className="group w-full max-w-[26rem] min-w-0 cursor-pointer flex flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9169f6]"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      <div className="pt-4 font-caption">
        <div className="flex flex-wrap items-center gap-x-2 text-[11px] uppercase tracking-[0.08em] text-neutral-400">
          <span className="text-neutral-300">{project.client}</span>
          <span aria-hidden="true">/</span>
          <span>{project.year}</span>
          <span aria-hidden="true">/</span>
          <span className="text-[#b39aff]">{project.category}</span>
        </div>

        <div className="flex items-start justify-between gap-3 pt-1.5">
          <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#9169f6] transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 pt-0.5 text-neutral-400 transition-colors group-hover:text-white">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        <p className="pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 pt-2 text-[11px] text-neutral-400">
          {project.deliverables.slice(0, 3).map((deliverable) => (
            <span key={deliverable}>{deliverable}</span>
          ))}
        </div>
      </div>
    </button>
  );

  return (
    <>
      <section id="works" className={`${isPage ? 'pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pb-28' : 'py-16 sm:py-20 lg:py-28'} border-t border-[#27272a]/50 relative overflow-hidden`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-[#27272a]/40">
            <div className="space-y-1">
              {isPage ? (
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Projects
                </h1>
              ) : (
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Selected Work
                </h2>
              )}
              <p className="text-neutral-400 text-xs sm:text-sm font-normal">
                Some of the recent Projects we've worked on.
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

          {/* Project grid: all projects together */}
          <div className="pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-5 sm:gap-x-7 lg:gap-x-9 gap-y-9 sm:gap-y-10">
            {[...firstPair, ...secondPair].map((project) => renderProjectCard(project))}
          </div>

          {/* Studio Note on Curation */}
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl bg-[#17171a] border border-[#27272c] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs font-caption text-neutral-400">
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
    </>
  );
};
