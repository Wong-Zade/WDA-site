import React from 'react';
import { ArrowDown } from 'lucide-react';

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
            <span>Lilongwe & Worldwide</span>
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
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Brands, But Better Dressed
            </h1>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed text-balance">
            WONGS Builds Brands that look good, Move better and work everywhere
          </p>

          {/* CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
        

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
