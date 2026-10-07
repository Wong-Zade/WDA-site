import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Copy, Check, Calendar, Mail, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNotes?: string;
  initialServices?: string[];
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialNotes = '',
  initialServices = [],
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [timeline, setTimeline] = useState('Q2 2026 (Recommended)');
  const [budget, setBudget] = useState('$10,000 – $25,000');
  const [brief, setBrief] = useState(initialNotes);
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(initialServices);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const availableDisciplines = [
    'Brand Identity & Logo',
    'Visual Communication & Art Direction',
    '3D Craft & Motion Expression',
    'Editorial & Lookbook Design',
    'Digital Flagship Website',
  ];

  useEffect(() => {
    if (initialNotes) {
      setBrief(initialNotes);
    }
    if (initialServices && initialServices.length > 0) {
      setSelectedDisciplines(initialServices);
    }
  }, [initialNotes, initialServices]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleDiscipline = (item: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('wong@wongsdigitalarts.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setBrief('');
    setSelectedDisciplines([]);
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#17171a] border border-[#2c2c34] rounded-2xl shadow-2xl overflow-hidden my-auto text-neutral-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272a] bg-[#1a1a1f] font-caption">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9169f6] shadow-[0_0_8px_rgba(145,105,246,0.9)]" />
            <h2 id="inquiry-title" className="font-display text-base font-bold text-white tracking-wide">
              {submitted ? 'Inquiry Confirmed' : 'Initiate Studio Dialogue'}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#25252b] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 font-caption">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#4c2f87]/40 border border-[#9169f6]/60 flex items-center justify-center mx-auto text-[#9169f6] shadow-[0_0_30px_rgba(76,47,135,0.5)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-display text-2xl font-bold text-white">
                  Dialogue Initiated
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name || 'there'}</span>. Your brief for <span className="text-[#9169f6] font-medium">{company || 'your brand'}</span> has been transmitted directly to Wong’s personal studio desk.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#141416] border border-[#27272d] text-left text-xs space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-between text-neutral-400 font-mono-studio">
                  <span>DISPATCH CODE: WDA-{Math.floor(1000 + Math.random() * 9000)}</span>
                  <span className="text-[#9169f6]">PENDING PRINCIPAL REVIEW</span>
                </div>
                <div className="space-y-1 text-neutral-300">
                  <p className="font-semibold text-white">What happens next:</p>
                  <p>1. Wong directly audits your brand touchpoints within 24 hours.</p>
                  <p>2. You will receive an invitation for a 25-minute visual diagnostic video consultation.</p>
                  <p>3. If aligned, tailor a project timeline commencing in {timeline}.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9169f6] hover:bg-[#7e52eb] rounded-lg transition-colors cursor-pointer shadow-[0_0_15px_rgba(76,47,135,0.6)]"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Studio Note */}
              <div className="p-4 rounded-xl bg-[#141417] border border-[#282830] flex items-start gap-3 text-xs text-neutral-300">
                <Sparkles className="w-4 h-4 text-[#9169f6] shrink-0 mt-0.5" />
                <p>
                  Direct founder access. Wong accepts only 2 to 3 clients per quarter to ensure hyper-tailored fidelity and personal execution.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-name" className="block text-xs font-medium text-neutral-300">
                    Your Name *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3.5 py-2.5 bg-[#141416] border border-[#282830] focus:border-[#9169f6] focus:outline-none rounded-lg text-sm text-white placeholder-neutral-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="inquiry-email" className="block text-xs font-medium text-neutral-300">
                    Work Email *
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. elena@atelier.com"
                    className="w-full px-3.5 py-2.5 bg-[#141416] border border-[#282830] focus:border-[#9169f6] focus:outline-none rounded-lg text-sm text-white placeholder-neutral-500 transition-colors"
                  />
                </div>
              </div>

              {/* Brand Name */}
              <div className="space-y-1.5">
                <label htmlFor="inquiry-company" className="block text-xs font-medium text-neutral-300">
                  Brand or Company Name *
                </label>
                <input
                  id="inquiry-company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Atelier Kvadrat or Nexus Spatial"
                  className="w-full px-3.5 py-2.5 bg-[#141416] border border-[#282830] focus:border-[#9169f6] focus:outline-none rounded-lg text-sm text-white placeholder-neutral-500 transition-colors"
                />
              </div>

              {/* Disciplines of Interest */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-neutral-300">
                  Required Disciplines (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableDisciplines.map((item) => {
                    const isSelected = selectedDisciplines.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleDiscipline(item)}
                        className={`px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#4c2f87]/50 border-[#9169f6] text-white shadow-[0_0_12px_rgba(76,47,135,0.4)]'
                            : 'bg-[#141417] border-[#282830] text-neutral-400 hover:text-white hover:border-neutral-600'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-budget" className="block text-xs font-medium text-neutral-300">
                    Estimated Budget Bracket
                  </label>
                  <select
                    id="inquiry-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#141416] border border-[#282830] focus:border-[#9169f6] focus:outline-none rounded-lg text-sm text-white transition-colors"
                  >
                    <option value="$5,000 – $10,000">$5,000 – $10,000 (Focus Sprint)</option>
                    <option value="$10,000 – $25,000">$10,000 – $25,000 (Full Wardrobe)</option>
                    <option value="$25,000+">$25,000+ (Comprehensive Brand Flagship)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="inquiry-timeline" className="block text-xs font-medium text-neutral-300">
                    Target Commencement
                  </label>
                  <select
                    id="inquiry-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#141416] border border-[#282830] focus:border-[#9169f6] focus:outline-none rounded-lg text-sm text-white transition-colors"
                  >
                    <option value="Q2 2026 (Recommended)">Q2 2026 (1 Slot Open)</option>
                    <option value="Q3 2026">Q3 2026 (Early Reserve)</option>
                    <option value="Within 2-3 Weeks (Urgent Priority)">Within 2-3 Weeks (Urgent)</option>
                  </select>
                </div>
              </div>

              {/* Brief & Diagnostic Notes */}
              <div className="space-y-1.5">
                <label htmlFor="inquiry-brief" className="block text-xs font-medium text-neutral-300">
                  Project Brief & Current Brand Pain Points
                </label>
                <textarea
                  id="inquiry-brief"
                  rows={3}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Tell Wong about your brand vision, who you are competing against, and what needs tailoring..."
                  className="w-full px-3.5 py-2.5 bg-[#141416] border border-[#282830] focus:border-[#9169f6] focus:outline-none rounded-lg text-sm text-white placeholder-neutral-500 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA & Direct Mail */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9169f6]" />
                  <span>Prefer email?</span>
                  <span className="text-[#9169f6] underline underline-offset-2">
                    {copiedEmail ? 'Copied to clipboard!' : 'wong@wongsdigitalarts.com'}
                  </span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#9169f6] hover:bg-[#7e52eb] active:scale-[0.98] rounded-lg transition-all cursor-pointer shadow-[0_0_20px_rgba(76,47,135,0.6)]"
                >
                  <span>Submit Studio Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
