import React, { useRef, useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const ClientProof: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Estimate active index based on item width
      const itemWidth = scrollRef.current.firstElementChild?.clientWidth || 360;
      const index = Math.round(scrollLeft / (itemWidth + 16));
      setActiveIndex(Math.min(index, TESTIMONIALS.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll, { passive: true });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 380;
      const scrollAmount = direction === 'left' ? -(cardWidth + 16) : cardWidth + 16;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 380;
      scrollRef.current.scrollTo({ left: index * (cardWidth + 16), behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 border-t border-[#27272a]/50 relative overflow-hidden">
      {/* Balanced container: perfectly aligned from left to right */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 sm:pb-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-[11px] sm:text-xs font-caption uppercase tracking-widest text-[#9169f6]">
              Client Endorsements · Quantitative Proof
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              The proof is in the posture.
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Direct feedback from founders and creative leaders whose brands were transformed by Wong’s Digital Arts.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous review"
              className="p-2 sm:p-2.5 rounded-full border border-[#2e2e38] bg-[#161619] hover:bg-[#202026] hover:border-[#9169f6]/40 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer text-white"
            >
              <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next review"
              className="p-2 sm:p-2.5 rounded-full border border-[#2e2e38] bg-[#161619] hover:bg-[#202026] hover:border-[#9169f6]/40 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer text-white"
            >
              <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
          </div>
        </div>

        {/* Carousel Container: Smooth horizontal scroll, swipeable left-to-right */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-3 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[360px] lg:w-[420px] shrink-0 snap-start p-4 sm:p-5 rounded-2xl bg-[#17171a] border border-[#27272d] hover:border-[#9169f6]/50 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-[0_8px_30px_rgba(76,47,135,0.2)]"
            >
              <div className="space-y-3">
                {/* Metric tag and index */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-caption text-[#9169f6]">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.impactMetric}</span>
                  </div>
                  <span className="text-neutral-500 font-mono-studio text-xs">0{idx + 1}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Photo / Avatar & Attribution */}
              <div className="pt-3 border-t border-[#232328] flex items-center gap-3 font-caption">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#9169f6]/40 shrink-0 shadow-[0_0_10px_rgba(145,105,246,0.3)]"
                  />
                )}
                <div className="space-y-0.5 min-w-0">
                  <div className="font-display text-xs sm:text-sm font-bold text-white truncate">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">
                    <span>{t.role}</span>
                    <span aria-hidden="true"> · </span>
                    <span className="text-[#9169f6]">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dot Indicators */}
        <div className="pt-3 flex items-center justify-center gap-1.5">
          {TESTIMONIALS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToIndex(dotIdx)}
              aria-label={`Go to review ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === dotIdx
                  ? 'w-6 bg-[#9169f6]'
                  : 'w-1.5 bg-[#2d2d35] hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
