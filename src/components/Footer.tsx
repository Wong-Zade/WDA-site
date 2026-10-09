import React, { useState } from 'react';
import { ArrowUp, Copy, Check, Globe } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('wong@wongsdigitalarts.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="min-h-[100svh] lg:h-[100svh] flex flex-col justify-center border-t border-[#27272a] bg-[#101012] text-neutral-400 py-12 sm:py-16 lg:py-6 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-between space-y-5 sm:space-y-7 sm:pl-6 lg:pl-12">
        {/* Big Studio CTA Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#18181c] to-[#131316] border border-[#2c2c34] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 relative overflow-hidden">
          {/* Subtle purple radial glow */}
          <div
            className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#4c2f87]/20 blur-[120px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="space-y-2 relative z-10 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-caption uppercase tracking-widest text-[#9169f6]">
              Next Step · Direct Dialogue
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Ready to dress your brand with authority?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
              Accepting 1-2 select client commissions for the coming quarter. Book a 25-minute visual diagnostic directly with Wong.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto font-caption">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#9169f6] hover:bg-[#7e52eb] rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-[0_0_20px_rgba(76,47,135,0.6)] text-center"
            >
              Start Project Inquiry
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-4 py-3 text-xs font-medium text-neutral-300 hover:text-white bg-[#1f1f25] hover:bg-[#27272f] border border-[#2d2d37] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#9169f6]" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copied ? 'Copied Email' : 'Copy Direct Email'}</span>
            </button>
          </div>
        </div>

        {/* Studio Editorial Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 border-t border-[#222226] font-caption">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-2.5">
            <img 
              src="./logo.png" 
              alt="Brand Logo" 
              className="h-7 w-auto object-contain"
            />
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-body">
              An independent, one-man design and digital art studio. Specializing in bespoke brand identity systems, sculptural 3D objects, and frictionless visual communication.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-neutral-500 font-caption">
              <Globe className="w-3.5 h-3.5 text-[#9169f6]" />
              <span>London Studio · Global Client Commissions</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
              Studio Index
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#works" className="hover:text-[#9169f6] transition-colors">
                  View Work
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#9169f6] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#ethos" className="hover:text-[#9169f6] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#9169f6] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#fit-check" className="hover:text-[#9169f6] transition-colors">
                  Brand-Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
              Direct Contact
            </p>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <p>Direct inquiries to Wong:</p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-mono-studio text-[#9169f6] hover:text-purple-300 text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
              >
                <span>wong@wongsdigitalarts.com</span>
              </button>
              <p className="pt-0.5 text-[11px] text-neutral-500">
                Typical response window: &lt; 24 business hours. No spam, no sales representatives.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-[#1e1e22] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span>© {new Date().getFullYear()} Wong's Digital Arts</span>
            <span aria-hidden="true">·</span>
            <span>All Rights Reserved</span>
            <span aria-hidden="true">·</span>
            <span>Independent Studio</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
