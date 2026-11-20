import React, { useRef, useState, useEffect } from 'react';
import { Award, Pause, Play } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const ClientProof: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setMotionReduced(preference.matches);
    updateMotionPreference();
    preference.addEventListener('change', updateMotionPreference);
    return () => preference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    track.dataset.motionReduced = String(motionReduced);
    track.classList.toggle('is-moving', !motionReduced && !isPaused && !isHovered && !isFocused && isVisible);
    const gap = parseFloat(window.getComputedStyle(track).columnGap) || 20;
    const cardWidth = cards[0]?.getBoundingClientRect().width ?? 0;
    let slotWidth = cardWidth + gap;
    let cycleWidth = slotWidth * cards.length;

    if (motionReduced) {
      cards.forEach((card) => { card.style.transform = ''; });
      positionsRef.current = [];
      return;
    }

    if (positionsRef.current.length !== cards.length) {
      positionsRef.current = cards.map((_, index) => index * slotWidth);
    }

    if (isPaused || isHovered || isFocused || !isVisible) return;

    let previousTime = 0;
    let frameId = 0;

    const animate = (time: number) => {
      const elapsed = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
      previousTime = time;
      const positions = positionsRef.current;

      slotWidth = (cards[0]?.getBoundingClientRect().width ?? 0) + gap;
      cycleWidth = slotWidth * cards.length;
      if (!document.hidden) {
        cards.forEach((card, index) => {
          let position = positions[index] + elapsed * 22;
          if (position >= track.clientWidth + cardWidth) position -= cycleWidth;
          positions[index] = position;
          card.style.transform = `translate3d(${position - index * slotWidth}px, 0, 0)`;
        });
      }

      frameId = window.requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frameId);
      } else {
        previousTime = 0;
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isFocused, isHovered, isPaused, isVisible, motionReduced]);

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-16 sm:py-20 lg:py-28 border-t border-[#27272a]/50 relative overflow-hidden">
      {/* Balanced container: perfectly aligned from left to right */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 sm:pb-6">
          <div className="max-w-2xl space-y-1">
            <h2 id="testimonials-title" className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Client reviews
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Direct feedback from founders and creative leaders whose brands were transformed by Wong’s Digital Arts.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 pt-1 sm:pt-0">
            {motionReduced ? (
              <span className="text-xs text-neutral-500">Motion reduced</span>
            ) : (
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={isPaused ? 'Play client reviews' : 'Pause client reviews'}
                className="inline-flex items-center gap-2 rounded-full border border-[#2e2e38] bg-[#161619] px-3 py-2 text-xs text-neutral-200 transition-colors hover:border-[#9169f6]/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9169f6]"
              >
                {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                {isPaused ? 'Play' : 'Pause'}
              </button>
            )}
          </div>
        </div>

        <div className="client-reviews-viewport">
          <div
            ref={scrollRef}
            data-motion-reduced="false"
            role="group"
            aria-label="Client reviews"
            tabIndex={0}
            className="client-reviews-track flex gap-4 sm:gap-5 pt-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#9169f6]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsFocused(false);
              }
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <article
                key={idx}
                className="client-review-card p-4 sm:p-5 rounded-2xl bg-[#17171a] border border-[#27272d] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-caption text-[#9169f6]">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.impactMetric}</span>
                    </div>
                    <span className="text-neutral-500 font-mono-studio text-xs">0{idx + 1}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
