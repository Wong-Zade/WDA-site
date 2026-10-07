import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Selected Works', href: '#works' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Studio Ethos', href: '#ethos' },
    { label: 'Fit Check', href: '#fit-check' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#121214]/90 backdrop-blur-md border-b border-[#27272a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:text-[#9169f6] transition-colors whitespace-nowrap group flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#9169f6] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(145,105,246,0.9)]" />
          <span>WONG'S DIGITAL ARTS</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-caption text-neutral-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-neutral-300 hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9169f6] hover:after:w-full after:transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase font-caption text-white bg-[#9169f6] hover:bg-[#7e52eb] active:scale-[0.98] transition-all rounded-lg shadow-[0_0_20px_rgba(76,47,135,0.6)] hover:shadow-[0_0_25px_rgba(145,105,246,0.7)] cursor-pointer whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-[#1f1f23] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#27272a] bg-[#161619] px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3 font-caption">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-base font-medium text-neutral-200 hover:text-[#9169f6] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#27272a]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider font-caption text-white bg-[#9169f6] hover:bg-[#7e52eb] rounded-lg transition-colors cursor-pointer shadow-[0_0_18px_rgba(145,105,246,0.5)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
