import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';

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
        description: 'Looks like a generic theme or cookie-cutter SaaS template. Interchangeable with peers.',
        score: 15,
        tag: 'High Visual Debt',
      },
      {
        label: 'Patchwork & Fragmented',
        description: 'Different designers touched it over time; typography, colors, and assets don’t align.',
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
        description: 'Customers frequently ask what we actually do. Copy is dense and layouts fight for attention.',
        score: 15,
        tag: 'Critical Noise',
      },
      {
        label: 'Jargon-Heavy & Wordy',
        description: 'We over-explain with text because the visuals and diagrams fail to communicate the story.',
        score: 40,
        tag: 'Visual Inefficiency',
      },
      {
        label: 'Mostly Clear, Some Stutters',
        description: 'The core offer is understood, but secondary capabilities and ethos are lost in translation.',
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
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
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
          'Your brand is currently wearing off-the-rack garments that dilute your market authority. Potential high-value clients are judging your execution before they even read your copy.',
        prescription:
          'Comprehensive brand overhaul: Bespoke wordmark, proprietary typographic hierarchy, and elimination of stock assets.',
        recommendedServices: ['Brand Tailoring & Identity Systems', 'Visual Communication & Art Direction'],
      };
    } else if (score < 75) {
      return {
        verdict: 'Unfinished Silhouette: Capable But Indistinct',
        critique:
          'Your brand is functional, but lacks the tactile polish and commanding poise of a top-tier studio identity. You are leaving prestige and pricing power on the table.',
        prescription:
          'Refine the visual cut: Inject bespoke 3D kinetic assets, streamline editorial communication, and upgrade digital flagships.',
        recommendedServices: ['3D Craft & Motion Expression', 'Art-Directed Digital Flagships'],
      };
    } else {
      return {
        verdict: 'Haute Silhouette: High Visual Posture',
        critique:
          'Your brand is already remarkably well-dressed. To maintain your edge, focus on avant-garde physical/digital monographs and micro-motion refinement.',
        prescription:
          'Studio evolution: Monograph publication, museum-grade spatial assets, and limited-edition campaign direction.',
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
    setShowResult(false);
  };

  return (
    <section id="fit-check" className="py-20 md:py-32 border-t border-[#27272a]/70 relative bg-[#141417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <span className="text-xs font-caption uppercase tracking-widest text-[#9169f6]">
            Interactive Diagnostic · 60 Seconds
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            How well-dressed is your brand?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Take the studio diagnostic to uncover hidden communication friction, typographic flaws, and whether your visual silhouette commands the respect your product deserves.
          </p>
        </div>

        {/* Diagnostic Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            {QUESTIONS.map((q) => (
              <div
                key={q.id}
                className="p-6 rounded-2xl bg-[#18181c] border border-[#27272d] space-y-4"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{q.title}</h3>
                  <p className="text-xs font-caption text-neutral-400 mt-0.5">{q.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelect(q.id, optIdx)}
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#4c2f87]/30 border-[#9169f6] shadow-[0_0_18px_rgba(76,47,135,0.4)] text-white'
                            : 'bg-[#151518] border-[#25252b] text-neutral-300 hover:border-neutral-600 hover:bg-[#1a1a1f]'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-white font-caption">{opt.label}</span>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-[#9169f6] shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed font-caption">
                            {opt.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-caption text-neutral-400">
                          <span>{opt.tag}</span>
                          <span className={isSelected ? 'text-[#9169f6] font-semibold' : ''}>
                            {opt.score} pts
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Assessment Summary Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#19191e] border border-[#2d2d35] shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-caption uppercase tracking-wider text-[#9169f6]">
                  Tailoring Index
                </span>
                {isComplete && (
                  <button
                    onClick={handleReset}
                    className="p-1 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                    title="Reset diagnostic"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Score Display */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-extrabold text-white">
                  {isComplete ? totalScore : '--'}
                </span>
                <span className="text-neutral-500 text-sm font-caption">/ 100 PTS</span>
              </div>

              {/* Progress bar using #4c2f87 and #9169f6 */}
              <div className="w-full bg-[#121214] h-2 rounded-full overflow-hidden border border-[#27272a]">
                <div
                  className="h-full bg-gradient-to-r from-[#4c2f87] to-[#9169f6] transition-all duration-500 ease-out"
                  style={{ width: `${isComplete ? totalScore : 0}%` }}
                />
              </div>

              {isComplete ? (
                <div className="space-y-4 pt-2 border-t border-[#27272a] font-caption">
                  <div>
                    <span className="text-xs text-[#9169f6] block mb-1">
                      Studio Assessment
                    </span>
                    <h4 className="font-display text-base font-bold text-white">
                      {assessment.verdict}
                    </h4>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {assessment.critique}
                  </p>

                  <div className="p-3 rounded-lg bg-[#141417] border border-[#27272d] text-xs text-neutral-400 space-y-1">
                    <span className="font-semibold text-neutral-200">Prescription:</span>
                    <p className="text-[#9169f6]">{assessment.prescription}</p>
                  </div>

                  <button
                    onClick={handleApplyToInquiry}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#9169f6] hover:bg-[#7e52eb] rounded-lg transition-all cursor-pointer shadow-[0_0_20px_rgba(76,47,135,0.6)]"
                  >
                    <span>Tailor Your Brand With Wong</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-3 pt-2 text-xs font-caption text-neutral-400">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <AlertCircle className="w-4 h-4 text-[#9169f6] shrink-0" />
                    <span>Select an answer for each parameter</span>
                  </div>
                  <p>
                    Answer all 3 dimensions to generate your studio diagnostic and personalized tailoring prescription.
                  </p>
                </div>
              )}
            </div>

            {/* Quick studio fact */}
            <div className="p-4 rounded-xl bg-[#161619] border border-[#27272d] text-xs font-caption text-neutral-400 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#9169f6] shrink-0" />
              <span>
                Every project begins with a 1-on-1 audit with Wong to identify and eradicate visual debt.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
