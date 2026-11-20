import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { CAPABILITIES } from '../data/studioData';

interface CapabilitiesProps {
  onSelectService: (serviceName: string) => void;
  isPage?: boolean;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectService, isPage = false }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="capabilities" className={`${isPage ? 'pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pb-28' : 'py-16 sm:py-20 lg:py-28'} border-t border-[#27272a]/50 relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5 pb-4 sm:pb-6">
          {!isPage && (
            <span className="text-[11px] sm:text-xs font-caption uppercase tracking-widest text-[#9169f6]">
              Studio Capabilities · Core Disciplines
            </span>
          )}
          {isPage ? (
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
              Services
            </h1>
          ) : (
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
              Crafting the entire wardrobe.
            </h2>
          )}
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            From the initial cut of your wordmark to kinetic 3D digital objects and editorial flagships, every touchpoint is tailored for absolute clarity and distinction.
          </p>
        </div>

        {/* Interactive Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered Service Selection List */}
          <div className="lg:col-span-5">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={cap.index}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  aria-pressed={isActive}
                  className={`w-full py-3.5 sm:py-4 text-left border-b border-[#27272a] transition-colors cursor-pointer flex items-center justify-between group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9169f6] ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-display text-xs sm:text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-neutral-200 group-hover:text-white'}`}>
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-[11px] font-caption text-neutral-400 pl-5 line-clamp-1">
                      {cap.subtitle}
                    </p>
                  </div>

                  <div className={`p-1 rounded transition-all shrink-0 ${
                    isActive ? 'text-[#b39aff]' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active service detail */}
          <div className="lg:col-span-7">
            <div className="space-y-5 lg:pt-1">
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#27272a]">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] sm:text-xs font-caption uppercase tracking-[0.08em] text-[#b39aff]">
                    {CAPABILITIES[activeTab].subtitle}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(CAPABILITIES[activeTab].title)}
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold uppercase font-caption text-[#9169f6] hover:text-purple-300 transition-colors cursor-pointer"
                >
                  <span>Commission</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {CAPABILITIES[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {CAPABILITIES[activeTab].description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-caption uppercase tracking-wider text-neutral-400 block">
                  Studio Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  {CAPABILITIES[activeTab].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 py-2 border-b border-[#27272a] text-[11px] sm:text-xs font-caption text-neutral-300"
                    >
                      <Check className="w-3 h-3 text-[#9169f6] mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Profile */}
              <div className="text-[11px] sm:text-xs font-caption text-neutral-400 leading-relaxed">
                <span className="text-neutral-200 font-semibold">Ideal for — </span>
                <span>{CAPABILITIES[activeTab].idealFor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
