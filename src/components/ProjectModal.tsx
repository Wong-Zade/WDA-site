import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, Check, Copy, Sparkles, Layers, Sliders, Award } from 'lucide-react';
import { CaseStudy } from '../types';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onInquireAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireAboutProject,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#161619] border border-[#2b2b32] rounded-2xl shadow-2xl overflow-hidden my-auto text-neutral-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272a] bg-[#1a1a1e] font-caption">
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="text-[#9169f6] uppercase font-medium">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-studio">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-neutral-400 hover:text-white hover:bg-[#25252b] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual */}
          <div className="rounded-xl overflow-hidden bg-[#111113] border border-[#27272a] relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[460px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-[#121214]/85 border border-[#27272a] text-xs font-caption text-neutral-300 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#9169f6]" />
              <span>{project.outcomeMetric}</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3">
            <h2 id="modal-title" className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#9169f6] font-medium font-caption">
              {project.tagline}
            </p>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Editorial Split: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-caption">
            <div className="p-5 rounded-xl bg-[#1a1a1f] border border-[#27272c] space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400">
                <Sliders className="w-3.5 h-3.5 text-[#9169f6]" />
                <span>The Diagnostic / Challenge</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed font-body">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1a1a1f] border border-[#27272c] space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-[#9169f6]" />
                <span>The Tailored Visual Solution</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed font-body">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3 font-caption">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400">
              <Layers className="w-3.5 h-3.5 text-[#9169f6]" />
              <span>Tailored Deliverables</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1a1a1e] border border-[#242429] text-xs sm:text-sm text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9169f6] mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design System Details: Palette & Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#27272a] font-caption">
            {/* Color Palette */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-neutral-400 block">
                Harmonic Palette Spec
              </span>
              <div className="grid grid-cols-2 gap-2">
                {project.palette.map((swatch) => (
                  <button
                    key={swatch.hex}
                    type="button"
                    onClick={() => handleCopyHex(swatch.hex)}
                    title={`Click to copy ${swatch.hex}`}
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-[#1a1a1e] border border-[#25252b] hover:border-[#9169f6]/50 transition-colors text-left cursor-pointer group"
                  >
                    <span
                      className="w-5 h-5 rounded border border-white/20 shrink-0"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-neutral-200 truncate">{swatch.name}</p>
                      <p className="text-[11px] font-mono-studio text-neutral-400 group-hover:text-[#9169f6]">
                        {copiedHex === swatch.hex ? 'COPIED!' : swatch.hex}
                      </p>
                    </div>
                    {copiedHex === swatch.hex ? (
                      <Check className="w-3.5 h-3.5 text-[#9169f6] shrink-0" />
                    ) : (
                      <Copy className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-neutral-400 block">
                Primary Type Pairing
              </span>
              <div className="p-4 rounded-xl bg-[#1a1a1e] border border-[#25252b] space-y-2">
                <p className="text-xs text-neutral-400">Display & Body Architecture</p>
                <p className="text-base font-display font-semibold text-white tracking-wide">
                  {project.typography}
                </p>
                <p className="text-xs text-[#9169f6] font-caption">
                  Custom kerning & editorial layout metrics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#27272a] bg-[#1a1a1e] flex flex-wrap items-center justify-between gap-4 font-caption">
          <div className="text-xs text-neutral-400">
            <span>Client Outcome: </span>
            <span className="font-medium text-[#9169f6]">{project.outcomeMetric}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-[#222227] hover:bg-[#2a2a30] rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquireAboutProject(project.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#9169f6] hover:bg-[#7e52eb] rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(76,47,135,0.6)]"
            >
              <span>Commission Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
