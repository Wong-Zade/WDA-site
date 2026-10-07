import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const ClientProof: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 border-t border-[#27272a]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <span className="text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Client Endorsements · Quantitative Proof
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            The proof is in the posture.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Direct feedback from founders and creative leaders whose brands were transformed by Wong’s Digital Arts.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#17171a] border border-[#27272d] hover:border-[#9169f6]/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Metric pill/tag with purple accent */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-caption text-[#9169f6]">
                    <Award className="w-3.5 h-3.5" />
                    <span>{t.impactMetric}</span>
                  </div>
                  <span className="text-neutral-600 font-mono-studio text-xs">0{idx + 1}</span>
                </div>

                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution (Unboxed, clean) */}
              <div className="pt-4 border-t border-[#232328] space-y-1 font-caption">
                <div className="font-display text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs text-neutral-400">
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
