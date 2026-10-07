import React from 'react';
import { ShieldCheck, UserCheck, Zap, ArrowRight, Quote } from 'lucide-react';
import { SOLO_STUDIO_PILLARS, STUDIO_STATISTICS } from '../data/studioData';

interface SoloStudioEthosProps {
  onOpenInquiry: () => void;
}

export const SoloStudioEthos: React.FC<SoloStudioEthosProps> = ({ onOpenInquiry }) => {
  return (
    <section id="ethos" className="py-24 md:py-36 border-t border-[#27272a]/50 relative bg-[#131316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-14">
          <span className="text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Studio Model · The Solo Advantage
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            One brain. Zero bureaucratic dilution.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Large agencies sell you on senior partners and quietly hand off your brand to junior interns. At Wong’s Digital Arts, you partner exclusively with the principal.
          </p>
        </div>

        {/* Studio Pillars 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLO_STUDIO_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#17171b] border border-[#27272e] space-y-4 hover:border-[#9169f6]/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-caption text-neutral-400">
                <span className="text-[#9169f6] font-semibold">0{idx + 1}.</span>
                <span>{pillar.subtitle}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-caption">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Agency Comparison Matrix */}
        <div className="mt-12 rounded-2xl bg-[#161619] border border-[#27272d] p-6 sm:p-8 overflow-hidden font-caption">
          <div className="text-xs font-caption uppercase tracking-wider text-[#9169f6] mb-6">
            Operational Contrast Matrix
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Agency Trap */}
            <div className="p-6 rounded-xl bg-[#121214] border border-[#222227] space-y-4">
              <div className="flex items-center gap-2 text-red-400 text-xs font-caption uppercase tracking-wider">
                <span>The Traditional Agency Model</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-600 font-bold shrink-0">✕</span>
                  <span>Senior pitch team disappears after contract signing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-600 font-bold shrink-0">✕</span>
                  <span>Four-week feedback loops filtered through account managers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-600 font-bold shrink-0">✕</span>
                  <span>Over-reliance on trendy templates & derivative moodboards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-600 font-bold shrink-0">✕</span>
                  <span>Inflated agency retainers paying for glass office leases</span>
                </li>
              </ul>
            </div>

            {/* Wong's Digital Arts Model */}
            <div className="p-6 rounded-xl bg-[#4c2f87]/20 border border-[#9169f6]/40 space-y-4">
              <div className="flex items-center gap-2 text-[#9169f6] text-xs font-caption uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#9169f6]" />
                <span>Wong’s Digital Arts (Solo Studio)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#9169f6] font-bold shrink-0">✓</span>
                  <span>Direct founder-to-principal dialogue on every decision</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#9169f6] font-bold shrink-0">✓</span>
                  <span>Agile iterations measured in days, not quarterly cycles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#9169f6] font-bold shrink-0">✓</span>
                  <span>Proprietary typography, custom 3D models, zero stock art</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#9169f6] font-bold shrink-0">✓</span>
                  <span>100% of your investment goes directly into craft on the glass</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Studio Numbers Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 font-caption">
          {STUDIO_STATISTICS.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#17171a] border border-[#27272c] space-y-1.5"
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-neutral-200">{stat.label}</div>
              <div className="text-[11px] text-[#9169f6] font-medium">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Personal Founder Monograph Note */}
        <div className="mt-12 p-8 rounded-2xl bg-[#18181c] border border-[#282830] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl font-caption">
            <Quote className="w-6 h-6 text-[#9169f6]" />
            <p className="text-base sm:text-lg text-neutral-200 italic font-medium leading-relaxed font-body">
              "A brand is like a bespoke suit. If the seams are crooked and the cloth is cheap, no one hears what you say. I started this studio to ensure ambitious companies walk into the world dressed with undeniable authority."
            </p>
            <div className="text-xs text-neutral-400">
              <span className="font-bold text-white">Wong</span>
              <span aria-hidden="true"> · </span>
              <span>Founder & Principal Creative Director</span>
            </div>
          </div>

          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider font-caption text-white bg-[#9169f6] hover:bg-[#7e52eb] rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-[0_0_20px_rgba(76,47,135,0.6)]"
          >
            <span>Book Founder Dialogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
