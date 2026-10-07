import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { CAPABILITIES } from '../data/studioData';

interface CapabilitiesProps {
  onSelectService: (serviceName: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="capabilities" className="py-24 md:py-36 border-t border-[#27272a]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-14">
          <span className="text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Studio Capabilities · Core Disciplines
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            Crafting the entire wardrobe.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From the initial cut of your wordmark to kinetic 3D digital objects and editorial flagships, every touchpoint is tailored for absolute clarity and distinction.
          </p>
        </div>

        {/* Interactive Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={cap.index}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#1b1b22] border-[#9169f6]/70 shadow-[0_0_20px_rgba(76,47,135,0.4)] text-white'
                      : 'bg-[#161619] border-[#26262c] text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-studio text-xs text-[#9169f6] font-semibold">
                        {cap.index}.
                      </span>
                      <h3 className={`font-display text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-neutral-200 group-hover:text-white'}`}>
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-xs font-caption text-neutral-400 pl-7 line-clamp-1">
                      {cap.subtitle}
                    </p>
                  </div>

                  <div className={`p-1.5 rounded-md transition-all shrink-0 ${
                    isActive ? 'bg-[#9169f6] text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Capability Deep-Dive Viewport */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#18181c] border border-[#2c2c34] space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#27272a]">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#4c2f87]/80 border border-[#9169f6]/30 text-xs font-mono-studio text-[#9169f6] font-semibold">
                    DISCIPLINE {CAPABILITIES[activeTab].index}
                  </span>
                  <span className="text-xs font-caption text-neutral-400 hidden sm:inline">
                    {CAPABILITIES[activeTab].subtitle}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(CAPABILITIES[activeTab].title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase font-caption text-[#9169f6] hover:text-purple-300 transition-colors cursor-pointer"
                >
                  <span>Commission Discipline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                  {CAPABILITIES[activeTab].title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {CAPABILITIES[activeTab].description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-caption uppercase tracking-wider text-neutral-400 block">
                  Studio Deliverables & Architecture
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CAPABILITIES[activeTab].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#141417] border border-[#242429] text-xs font-caption text-neutral-300"
                    >
                      <Check className="w-3.5 h-3.5 text-[#9169f6] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Profile */}
              <div className="p-4 rounded-xl bg-[#141416] border border-[#26262c] text-xs font-caption text-neutral-400 space-y-1">
                <span className="text-neutral-200 font-semibold">Ideal For:</span>
                <p className="text-neutral-300">{CAPABILITIES[activeTab].idealFor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
