import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { HERO_ASSET } from '../data/studioData';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreWorks: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWorks, onExploreServices }) => {
  const [imageError, setImageError] = useState(false);

  const handleServicesClick = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.querySelector('#capabilities');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-36 lg:pt-28 lg:pb-40 overflow-hidden">
      {/* Subtle ambient purple glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4c2f87]/20 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Studio Kicker & Status: 'EST. 2024' and 'independent direction' removed, location preserved */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#27272a]/40 text-xs font-caption text-neutral-400">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9169f6]" />
            <span className="tracking-wide text-neutral-300 font-medium">London & Worldwide</span>
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

        {/* Main Hero Split Grid with Generous White Space */}
        <div className="pt-16 md:pt-20 lg:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text layout and size strictly copied from Adobe XD mockup */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Headline: Clean, compact, highly legible scale matching XD screen */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                <span className="block">Brands, But</span>
                <span className="block text-[#9169f6]">Better Dressed</span>
              </h1>
            </div>

            {/* Subtitle: Precise copy and comfortable readable size from XD mockup */}
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-lg">
              WONGS builds Brands that wants to look good, move better and work online.
            </p>

            {/* CTAs: Clean rounded pill buttons matching XD design */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-caption">
              {/* Primary 'Services' pill button from XD screen */}
              <button
                onClick={handleServicesClick}
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full bg-[#9169f6] hover:bg-[#7e52eb] active:scale-[0.98] text-white transition-all shadow-[0_0_20px_rgba(145,105,246,0.35)] hover:shadow-[0_0_30px_rgba(145,105,246,0.55)] cursor-pointer"
              >
                <span>Services</span>
              </button>

              {/* Secondary 'Work' button */}
              <button
                onClick={onExploreWorks}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-neutral-300 hover:text-white bg-[#1a1a1e] hover:bg-[#232328] border border-[#2e2e34] transition-all cursor-pointer"
              >
                <span>Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Container preserved with ample breathing room */}
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
