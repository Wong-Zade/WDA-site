import React from 'react';
import { ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import { SOLO_STUDIO_PILLARS, STUDIO_STATISTICS } from '../data/studioData';

interface SoloStudioEthosProps {
  onOpenInquiry: () => void;
}

export const SoloStudioEthos: React.FC<SoloStudioEthosProps> = ({ onOpenInquiry }) => {
  return (
    <section id="ethos" className="py-16 sm:py-20 lg:py-28 border-t border-[#27272a]/50 relative bg-[#131316] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="max-w-3xl space-y-1 pb-3 sm:pb-4">
          <span className="text-[11px] sm:text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Studio Model · The Solo Advantage
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            One brain. Zero bureaucratic dilution.
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Large agencies sell you on senior partners and quietly hand off your brand to junior interns. At Wong’s Digital Arts, you partner exclusively with the principal.
          </p>
        </div>

        {/* Studio Pillars 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5">
          {SOLO_STUDIO_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-3.5 sm:p-4 rounded-xl bg-[#17171b] border border-[#27272e] space-y-1.5 hover:border-[#9169f6]/40 transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] font-caption text-neutral-400">
                <span className="text-[#9169f6] font-semibold">0{idx + 1}.</span>
                <span>{pillar.subtitle}</span>
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white">{pillar.title}</h3>
              <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed font-caption">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Agency Comparison Matrix */}
        <div className="mt-3 sm:mt-4 rounded-xl bg-[#161619] border border-[#27272d] p-3.5 sm:p-4 overflow-hidden font-caption">
          <div className="text-[11px] font-caption uppercase tracking-wider text-[#9169f6] mb-2 sm:mb-2.5">
            Operational Contrast Matrix
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* The Agency Trap */}
            <div className="p-3 sm:p-3.5 rounded-lg bg-[#121214] border border-[#222227] space-y-2">
              <div className="flex items-center gap-1.5 text-red-400 text-[11px] font-caption uppercase tracking-wider">
                <span>The Traditional Agency Model</span>
              </div>
              <ul className="space-y-1.5 text-[11px] sm:text-xs text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600 font-bold shrink-0">✕</span>
                  <span>Senior pitch team disappears after contract signing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600 font-bold shrink-0">✕</span>
                  <span>Four-week feedback loops filtered through account managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600 font-bold shrink-0">✕</span>
                  <span>Over-reliance on trendy templates & derivative moodboards</span>
                </li>
              </ul>
            </div>

            {/* Wong's Digital Arts Model */}
            <div className="p-3 sm:p-3.5 rounded-lg bg-[#4c2f87]/20 border border-[#9169f6]/40 space-y-2">
              <div className="flex items-center gap-1.5 text-[#9169f6] text-[11px] font-caption uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9169f6]" />
                <span>Wong’s Digital Arts (Solo Studio)</span>
              </div>
              <ul className="space-y-1.5 text-[11px] sm:text-xs text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#9169f6] font-bold shrink-0">✓</span>
                  <span>Direct founder-to-principal dialogue on every decision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9169f6] font-bold shrink-0">✓</span>
                  <span>Agile iterations measured in days, not quarterly cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9169f6] font-bold shrink-0">✓</span>
                  <span>Proprietary typography, custom 3D models, zero stock art</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Studio Numbers Grid & CTA Row */}
        <div className="mt-3 sm:mt-3.5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 font-caption items-center">
          {STUDIO_STATISTICS.map((stat, i) => (
            <div
              key={i}
              className="p-2.5 sm:p-3 rounded-lg bg-[#17171a] border border-[#27272c] space-y-0.5"
            >
              <div className="font-display text-xl sm:text-2xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-[11px] font-medium text-neutral-200">{stat.label}</div>
              <div className="text-[10px] text-[#9169f6] font-medium">{stat.detail}</div>
            </div>
          ))}

          <button
            onClick={onOpenInquiry}
            className="col-span-2 sm:col-span-4 lg:col-span-1 h-full min-h-[48px] p-2.5 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider font-caption text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(76,47,135,0.5)]"
          >
            <span>Book Founder Dialogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
