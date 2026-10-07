import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FloatingStartButtonProps {
  onOpenInquiry: () => void;
}

export const FloatingStartButton: React.FC<FloatingStartButtonProps> = ({ onOpenInquiry }) => {
  const [visible, setVisible] = useState(false);

  // Show after initial mount with smooth transition
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={onOpenInquiry}
        type="button"
        aria-label="Start a Project with Wong's Digital Arts"
        className="group relative flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full bg-[#9169f6] hover:bg-[#7e52eb] active:scale-95 text-white font-caption text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-[0_8px_30px_rgba(145,105,246,0.45)] hover:shadow-[0_10px_35px_rgba(145,105,246,0.65)] border border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-md"
      >
        {/* Subtle glowing ring effect on hover */}
        <span
          className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#9169f6] to-[#b395ff] opacity-0 group-hover:opacity-40 blur transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />

        {/* Live availability pulse dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-sm" />
        </span>

        {/* Action Label */}
        <span className="relative z-10 whitespace-nowrap drop-shadow-sm font-bold">
          Start a Project
        </span>

        {/* Arrow with hover translate */}
        <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#4c2f87] transition-colors duration-200 shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </button>
    </div>
  );
};
