import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { CAPABILITIES } from '../data/studioData';

interface CapabilitiesProps {
  onSelectService: (serviceName: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="capabilities" className="min-h-[100svh] lg:h-[100svh] flex flex-col justify-center py-16 sm:py-20 lg:py-6 border-t border-[#27272a]/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center sm:pl-6 lg:pl-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5 pb-4 sm:pb-6">
          <span className="text-[11px] sm:text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Studio Capabilities · Core Disciplines
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            Crafting the entire wardrobe.
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            From the initial cut of your wordmark to kinetic 3D digital objects and editorial flagships, every touchpoint is tailored for absolute clarity and distinction.
          </p>
        </div>

        {/* Interactive Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          {/* Left Column: Numbered Service Selection List */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={cap.index}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-3 sm:p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#1b1b22] border-[#9169f6]/70 shadow-[0_0_16px_rgba(76,47,135,0.4)] text-white'
                      : 'bg-[#161619] border-[#26262c] text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-studio text-[11px] sm:text-xs text-[#9169f6] font-semibold">
                        {cap.index}.
                      </span>
                      <h3 className={`font-display text-xs sm:text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-neutral-200 group-hover:text-white'}`}>
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-[11px] font-caption text-neutral-400 pl-5 line-clamp-1">
                      {cap.subtitle}
                    </p>
                  </div>

                  <div className={`p-1 rounded transition-all shrink-0 ${
                    isActive ? 'bg-[#9169f6] text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Capability Deep-Dive Viewport */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 rounded-2xl bg-[#18181c] border border-[#2c2c34] space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#27272a]">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded bg-[#4c2f87]/80 border border-[#9169f6]/30 text-[10px] sm:text-xs font-mono-studio text-[#9169f6] font-semibold">
                    DISCIPLINE {CAPABILITIES[activeTab].index}
                  </span>
                  <span className="text-[11px] sm:text-xs font-caption text-neutral-400 hidden sm:inline">
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
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">
                  {CAPABILITIES[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {CAPABILITIES[activeTab].description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-caption uppercase tracking-wider text-neutral-400 block">
                  Studio Deliverables & Architecture
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CAPABILITIES[activeTab].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2 rounded-lg bg-[#141417] border border-[#242429] text-[11px] sm:text-xs font-caption text-neutral-300"
                    >
                      <Check className="w-3 h-3 text-[#9169f6] mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Profile */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#141416] border border-[#26262c] text-[11px] sm:text-xs font-caption text-neutral-400 space-y-0.5">
                <span className="text-neutral-200 font-semibold">Ideal For: </span>
                <span className="text-neutral-300">{CAPABILITIES[activeTab].idealFor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
