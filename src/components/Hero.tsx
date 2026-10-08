import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWorks }) => {
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
            <span className="font-mono-studio text-[#9169f6] font-medium">EST. 2024</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-widest text-neutral-300">Independent Creative Direction</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
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

        {/* Main Hero Content */}
        <div className="pt-6 sm:pt-8 max-w-3xl space-y-5">
          <div className="space-y-2">
            <span className="inline-block text-[11px] sm:text-xs font-caption font-semibold uppercase tracking-wider text-[#9169f6]">
              A Solo Digital Art & Design Practice
            </span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Better dressed brands. Clearer visual dialogue.
            </h1>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed text-balance">
            Wong’s Digital Arts outfits ambitious companies in custom-tailored visual identities, sculptural 3D objects, and razor-sharp digital flagships. No bloated agency tiers. Just direct, uncompromising aesthetic craft.
          </p>

          {/* Studio Key Attributes */}
          <div className="pt-1 flex flex-wrap gap-y-1.5 gap-x-4 text-xs sm:text-sm font-caption text-neutral-400">
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
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase font-caption text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] active:scale-[0.98] transition-all rounded-full shadow-[0_0_20px_rgba(145,105,246,0.5)] hover:shadow-[0_0_30px_rgba(145,105,246,0.7)] cursor-pointer group"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onExploreWorks}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium font-caption text-neutral-300 hover:text-white bg-[#1a1a1e] hover:bg-[#232328] border border-[#2e2e34] rounded-full transition-colors cursor-pointer"
            >
              <span>Selected Works</span>
              <ArrowDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
