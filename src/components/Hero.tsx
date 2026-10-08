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
    <section className="relative min-h-[100svh] lg:h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-4 sm:pt-20 sm:pb-6">
      {/* Subtle background ambient purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-[#4c2f87]/20 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center relative z-10">
        {/* Top Studio Kicker & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-[#27272a]/60 text-xs font-caption text-neutral-400">
          <div className="flex items-center gap-2">
          
          <span className="hidden sm:inline">London & Worldwide</span>
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

        {/* Main Hero Split Grid - Vertically Centered */}
        <div className="pt-3 sm:pt-5 lg:pt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Column: Studio Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="space-y-2">
             
              <h1 className="font-display text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
                Better dressed brands. Clearer visual dialogue.
              </h1>
            </div>

            <p className="text-xs sm:text-sm lg:text-base text-neutral-300 font-normal leading-relaxed max-w-xl text-balance">
              Wong’s Digital Arts outfits ambitious companies in custom-tailored visual identities, sculptural 3D objects, and razor-sharp digital flagships. No bloated agency tiers. Just direct, uncompromising aesthetic craft.
            </p>

            {/* Studio Key Attributes */}
            <div className="pt-0.5 sm:pt-1 flex flex-wrap gap-y-1.5 gap-x-4 text-xs sm:text-sm font-caption text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9169f6] shrink-0" />
                <span>One Principal Designer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9169f6] shrink-0" />
                <span>Zero Account Managers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9169f6] shrink-0" />
                <span>Bespoke Typography & 3D</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase font-caption text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] active:scale-[0.98] transition-all rounded-full shadow-[0_0_20px_rgba(145,105,246,0.5)] hover:shadow-[0_0_30px_rgba(145,105,246,0.7)] cursor-pointer group"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreWorks}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium font-caption text-neutral-300 hover:text-white bg-[#1a1a1e] hover:bg-[#232328] border border-[#2e2e34] rounded-full transition-colors cursor-pointer"
              >
                <span>Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl p-2 bg-[#1a1a1e] border border-[#2a2a30] shadow-2xl transition-all duration-300 hover:border-[#9169f6]/40 max-w-md lg:max-w-none mx-auto w-full">
              <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] max-h-[220px] sm:max-h-[260px] lg:max-h-[300px] xl:max-h-[340px] rounded-xl overflow-hidden bg-[#151518]">
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
                    <Sparkles className="w-8 h-8 text-[#9169f6] mb-2" />
                    <p className="font-display font-semibold text-white text-sm">Wong's Digital Arts</p>
                    <p className="text-xs font-caption text-neutral-400 mt-1">Sculptural Identity & Tactile Direction</p>
                  </div>
                )}

                {/* Subtle scrim overlay with project caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-300 font-caption">
                    <div>
                      <p className="font-semibold text-white font-display text-xs sm:text-sm tracking-wide">
                        Bespoke Brand Architecture
                      </p>
                      <p className="text-[11px] sm:text-xs text-neutral-400">Tactile Chromatic Study · 2026</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#4c2f87]/80 border border-[#9169f6]/40 text-[10px] sm:text-[11px] font-mono-studio text-[#9169f6]">
                      STUDIO REEL
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom detail bar */}
              <div className="mt-1.5 px-3 py-1.5 flex items-center justify-between text-[11px] sm:text-xs text-neutral-400 font-caption">
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
