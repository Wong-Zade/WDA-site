import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HERO_ASSET } from '../data/studioData';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWorks }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Subtle background ambient purple glow using #4c2f87 */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4c2f87]/25 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Studio Kicker & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#27272a]/60 text-xs font-caption text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-mono-studio text-[#9169f6] font-medium">EST. 2024</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-widest text-neutral-300">Independent Creative Direction</span>
            <span aria-hidden="true">·</span>
            <span>London & Worldwide</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9169f6] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9169f6]" />
            </span>
            <span className="font-medium text-neutral-200">
              Booking Q2–Q3 <span className="text-neutral-500">(1 Client Slot Open)</span>
            </span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="pt-12 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Studio Proposition */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-xs font-caption font-semibold uppercase tracking-wider text-[#9169f6]">
                A Solo Digital Art & Design Practice
              </span>
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Better dressed brands. Clearer visual dialogue.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance">
              Wong’s Digital Arts outfits ambitious companies in custom-tailored visual identities, sculptural 3D objects, and razor-sharp digital flagships. No bloated agency tiers. Just direct, uncompromising aesthetic craft.
            </p>

            {/* Studio Key Attributes */}
            <div className="pt-2 flex flex-wrap gap-y-3 gap-x-6 text-sm font-caption text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9169f6] shrink-0" />
                <span>One Principal Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9169f6] shrink-0" />
                <span>Zero Account Managers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9169f6] shrink-0" />
                <span>Bespoke Typography & 3D</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase font-caption text-white bg-[#9169f6] hover:bg-[#7e52eb] active:scale-[0.98] transition-all rounded-lg shadow-[0_0_25px_rgba(76,47,135,0.6)] hover:shadow-[0_0_35px_rgba(145,105,246,0.6)] cursor-pointer"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWorks}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium font-caption text-neutral-300 hover:text-white bg-[#1a1a1e] hover:bg-[#232328] border border-[#2e2e34] rounded-lg transition-colors cursor-pointer"
              >
                <span>Selected Works</span>
                <ArrowDown className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl p-2 bg-[#1a1a1e] border border-[#2a2a30] shadow-2xl transition-all duration-300 hover:border-[#9169f6]/40">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden bg-[#151518]">
                {!imageError ? (
                  <img
                    src={HERO_ASSET}
                    alt="Wong's Digital Arts — Studio Sculptural Identity Showcase"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a24] to-[#121214] p-6 text-center">
                    <Sparkles className="w-10 h-10 text-[#9169f6] mb-3" />
                    <p className="font-display font-semibold text-white">Wong's Digital Arts</p>
                    <p className="text-xs font-caption text-neutral-400 mt-1">Sculptural Identity & Tactile Direction</p>
                  </div>
                )}

                {/* Subtle scrim overlay with project caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-300 font-caption">
                    <div>
                      <p className="font-semibold text-white font-display text-sm tracking-wide">
                        Bespoke Brand Architecture
                      </p>
                      <p className="text-neutral-400">Tactile Chromatic Study · 2026</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#4c2f87]/80 border border-[#9169f6]/40 text-[11px] font-mono-studio text-[#9169f6]">
                      STUDIO REEL
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom detail bar */}
              <div className="mt-2 px-3 py-2 flex items-center justify-between text-xs text-neutral-400 font-caption">
                <span className="font-mono-studio">PROJECT FILE // WDA-2026-HERO</span>
                <span className="text-[#9169f6] font-medium">HIGH-CRAFT VISUAL IDENTITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
