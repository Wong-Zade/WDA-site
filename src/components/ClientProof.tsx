import React from 'react';
import { Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const ClientProof: React.FC = () => {
  return (
    <section id="testimonials" className="min-h-[100svh] lg:h-[100svh] flex flex-col justify-center py-16 sm:py-20 lg:py-6 border-t border-[#27272a]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5 pb-4 sm:pb-6">
          <span className="text-[11px] sm:text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Client Endorsements · Quantitative Proof
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            The proof is in the posture.
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Direct feedback from founders and creative leaders whose brands were transformed by Wong’s Digital Arts.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#17171a] border border-[#27272d] hover:border-[#9169f6]/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Metric pill/tag with purple accent */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-caption text-[#9169f6]">
                    <Award className="w-3.5 h-3.5" />
                    <span>{t.impactMetric}</span>
                  </div>
                  <span className="text-neutral-600 font-mono-studio text-xs">0{idx + 1}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-3 border-t border-[#232328] space-y-0.5 font-caption">
                <div className="font-display text-xs sm:text-sm font-bold text-white">{t.author}</div>
                <div className="text-[11px] text-neutral-400">
                  <span>{t.role}</span>
                  <span aria-hidden="true"> · </span>
                  <span className="text-[#9169f6]">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
