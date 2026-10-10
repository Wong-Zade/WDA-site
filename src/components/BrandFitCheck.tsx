import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface BrandFitCheckProps {
  onPrepopulateInquiry: (notes: string, suggestedServices: string[]) => void;
}

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    score: number;
    tag: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'visual-fit',
    title: '01. Visual Tailoring & Silhouette',
    subtitle: 'How does your brand currently appear compared to direct competitors?',
    options: [
      {
        label: 'Off-the-Rack Standard',
        description: 'Looks like a generic theme or cookie-cutter template. Interchangeable with peers.',
        score: 15,
        tag: 'High Visual Debt',
      },
      {
        label: 'Patchwork & Fragmented',
        description: 'Different designers touched it over time; typography and colors don’t align.',
        score: 35,
        tag: 'Inconsistent System',
      },
      {
        label: 'Clean But Forgettable',
        description: 'Professionally styled, but lacks emotional gravitas, bespoke typography, or prestige.',
        score: 60,
        tag: 'Lacks Identity Poise',
      },
      {
        label: 'Bespoke Haute Craft',
        description: 'Custom-tailored typography, distinctive visual codes, unmistakable brand posture.',
        score: 95,
        tag: 'Tailored Posture',
      },
    ],
  },
  {
    id: 'communication-clarity',
    title: '02. Communication Friction',
    subtitle: 'When someone lands on your brand, how quickly do they understand your value?',
    options: [
      {
        label: 'High Friction & Confusion',
        description: 'Customers frequently ask what we actually do. Copy is dense and layouts fight.',
        score: 15,
        tag: 'Critical Noise',
      },
      {
        label: 'Jargon-Heavy & Wordy',
        description: 'We over-explain with text because visuals and diagrams fail to tell the story.',
        score: 40,
        tag: 'Visual Inefficiency',
      },
      {
        label: 'Mostly Clear, Some Stutters',
        description: 'The core offer is understood, but secondary capabilities and ethos get lost.',
        score: 70,
        tag: 'Moderate Clarity',
      },
      {
        label: 'Effortless & Immediate',
        description: 'Hierarchy guides the eye in seconds; value is absorbed with zero cognitive strain.',
        score: 95,
        tag: 'Harmonic Signal',
      },
    ],
  },
  {
    id: 'materiality-depth',
    title: '03. Depth, 3D & Digital Finish',
    subtitle: 'What sensory impression do your digital assets and touchpoints leave?',
    options: [
      {
        label: 'Flat Static Graphics Only',
        description: 'Standard flat vectors and generic stock icons with no tactile presence.',
        score: 20,
        tag: 'Low Tactility',
      },
      {
        label: 'Uncurated Stock Photography',
        description: 'Stock photos that feel disconnected from our actual product craftsmanship.',
        score: 40,
        tag: 'Generic Imagery',
      },
      {
        label: 'Polished 2D Identity',
        description: 'Good 2D brand identity, but lacks 3D objects, spatial motion, or kinetic pacing.',
        score: 65,
        tag: 'Room for Kinetic Depth',
      },
      {
        label: 'Sculptural & Multi-Dimensional',
        description: 'Rich 3D digital objects, kinetic typography, and editorial material textures.',
        score: 95,
        tag: 'High-Craft Dimension',
      },
    ],
  },
];

export const BrandFitCheck: React.FC<BrandFitCheckProps> = ({ onPrepopulateInquiry }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

  const handleSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
    // Auto advance if not on the last question
    if (activeQuestionIdx < QUESTIONS.length - 1) {
      setTimeout(() => setActiveQuestionIdx((curr) => curr + 1), 250);
    }
  };

  const isComplete = QUESTIONS.every((q) => selectedAnswers[q.id] !== undefined);

  // Compute tailoring score
  const totalScore = Math.round(
    QUESTIONS.reduce((acc, q) => {
      const idx = selectedAnswers[q.id];
      return acc + (idx !== undefined ? q.options[idx].score : 0);
    }, 0) / QUESTIONS.length
  );

  const getAssessment = (score: number) => {
    if (score < 40) {
      return {
        verdict: 'Under-Dressed: Severe Aesthetic Friction',
        critique:
          'Your brand is currently wearing off-the-rack garments that dilute your market authority. Potential high-value clients are judging your execution before they read your copy.',
        prescription:
          'Comprehensive brand overhaul: Bespoke wordmark, proprietary typography, and zero stock assets.',
        recommendedServices: ['Brand Tailoring & Identity Systems', 'Visual Communication & Art Direction'],
      };
    } else if (score < 75) {
      return {
        verdict: 'Unfinished Silhouette: Capable But Indistinct',
        critique:
          'Your brand is functional, but lacks the tactile polish and commanding poise of a top-tier studio identity.',
        prescription:
          'Refine the visual cut: Inject bespoke 3D kinetic assets and upgrade digital flagships.',
        recommendedServices: ['3D Craft & Motion Expression', 'Art-Directed Digital Flagships'],
      };
    } else {
      return {
        verdict: 'Haute Silhouette: High Visual Posture',
        critique:
          'Your brand is already remarkably well-dressed. Focus on avant-garde monographs and micro-motion refinement.',
        prescription:
          'Studio evolution: Monograph publication and limited-edition campaign direction.',
        recommendedServices: ['Visual Communication & Art Direction', '3D Craft & Motion Expression'],
      };
    }
  };

  const assessment = getAssessment(totalScore);

  const handleApplyToInquiry = () => {
    const summary = `Brand Fit Diagnostic Score: ${totalScore}/100 (${assessment.verdict}). Notes: ${assessment.critique}`;
    onPrepopulateInquiry(summary, assessment.recommendedServices);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setActiveQuestionIdx(0);
  };

  const currentQ = QUESTIONS[activeQuestionIdx];

  return (
    <section id="fit-check" className="py-16 sm:py-20 lg:py-28 border-t border-[#27272a]/50 relative bg-[#141417] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Header */}
        <div className="max-w-3xl space-y-1 pb-3 sm:pb-4">
          <span className="text-[11px] sm:text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Interactive Diagnostic · 60 Seconds
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            How well-dressed is your brand?
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Take the studio diagnostic to uncover hidden communication friction, typographic flaws, and whether your visual silhouette commands the respect your product deserves.
          </p>
        </div>

        {/* Diagnostic Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          {/* Left Column: Interactive Question Card */}
          <div className="lg:col-span-8 space-y-3">
            {/* Question Step Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#18181c] border border-[#27272d] rounded-xl overflow-x-auto font-caption">
              {QUESTIONS.map((q, idx) => {
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const isCurrent = activeQuestionIdx === idx;
                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestionIdx(idx)}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      isCurrent
                        ? 'bg-[#9169f6] text-white shadow-[0_0_12px_rgba(76,47,135,0.6)]'
                        : isAnswered
                        ? 'bg-[#1e1e24] text-neutral-300 hover:text-white'
                        : 'text-neutral-400 hover:text-white hover:bg-[#202026]'
                    }`}
                  >
                    <span>Step 0{idx + 1}</span>
                    {isAnswered && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  </button>
                );
              })}
            </div>

            {/* Active Question Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#18181c] border border-[#27272d] space-y-3">
              <div>
                <h3 className="font-display text-sm sm:text-base font-bold text-white">{currentQ.title}</h3>
                <p className="text-[11px] sm:text-xs font-caption text-neutral-400 mt-0.5">{currentQ.subtitle}</p>
              </div>

              {/* 2x2 Option Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[currentQ.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelect(currentQ.id, optIdx)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#4c2f87]/30 border-[#9169f6] shadow-[0_0_16px_rgba(76,47,135,0.4)] text-white'
                          : 'bg-[#151518] border-[#25252b] text-neutral-300 hover:border-neutral-600 hover:bg-[#1a1a1f]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-xs text-white font-caption">{opt.label}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#9169f6] shrink-0" />}
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-relaxed font-caption line-clamp-2">
                          {opt.description}
                        </p>
                      </div>
                      <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] font-caption text-neutral-400">
                        <span>{opt.tag}</span>
                        <span className={isSelected ? 'text-[#9169f6] font-semibold' : ''}>
                          {opt.score} pts
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Pagination controls */}
              <div className="pt-1 flex items-center justify-between text-xs font-caption text-neutral-400">
                <button
                  type="button"
                  disabled={activeQuestionIdx === 0}
                  onClick={() => setActiveQuestionIdx((prev) => Math.max(0, prev - 1))}
                  className="flex items-center gap-1 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <span className="font-mono-studio text-[11px]">
                  {Object.keys(selectedAnswers).length} of {QUESTIONS.length} Answered
                </span>

                <button
                  type="button"
                  disabled={activeQuestionIdx === QUESTIONS.length - 1}
                  onClick={() => setActiveQuestionIdx((prev) => Math.min(QUESTIONS.length - 1, prev + 1))}
                  className="flex items-center gap-1 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Assessment Summary Card */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#19191e] border border-[#2d2d35] shadow-xl space-y-3.5 font-caption">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#282830]">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Diagnostic Score
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-neutral-500 hover:text-neutral-300 flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Score Display */}
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  {Object.keys(selectedAnswers).length > 0 ? totalScore : '--'}
                </span>
                <span className="text-xs text-neutral-400">/ 100</span>
                <span className={`ml-auto text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                  totalScore > 75 ? 'bg-emerald-500/20 text-emerald-300' : totalScore > 40 ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-300'
                }`}>
                  {isComplete ? 'Complete' : `${Object.keys(selectedAnswers).length}/3 steps`}
                </span>
              </div>

              {/* Verdict */}
              <div className="space-y-1">
                <span className="text-[10px] text-[#9169f6] uppercase tracking-wider font-semibold block">
                  Studio Verdict
                </span>
                <p className="text-xs text-white font-medium leading-snug">
                  {assessment.verdict}
                </p>
                <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
                  {assessment.critique}
                </p>
              </div>

              {/* Recommended Services */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold block">
                  Prescription
                </span>
                <div className="flex flex-wrap gap-1">
                  {assessment.recommendedServices.map((srv) => (
                    <span
                      key={srv}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#4c2f87]/40 border border-[#9169f6]/30 text-purple-200"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyToInquiry}
                className="w-full py-2.5 px-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(76,47,135,0.5)] cursor-pointer"
              >
                <span>Apply To Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
