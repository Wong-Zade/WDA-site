import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'View Work', href: '#works' },
    { label: 'Services', href: '#capabilities' },
    { label: 'About', href: '#ethos' },
    { label: 'Reviews', href: '#testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out flex flex-col items-center pointer-events-none ${
        isScrolled
          ? 'top-2.5 sm:top-3 px-3 sm:px-6'
          : 'top-0 px-0'
      }`}
    >
      {/* Header Container - 95% scale, balanced compact pill when scrolled */}
      <header
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between ${
          isScrolled
            ? 'w-full max-w-2xl lg:max-w-3xl h-11 sm:h-12 px-3.5 sm:px-5 bg-[#161619]/90 backdrop-blur-xl border border-[#2e2e38]/80 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_1px_rgba(255,255,255,0.12)]'
            : 'w-full max-w-5xl h-15 sm:h-16 px-4 sm:px-6 lg:px-8 bg-[#121214]/90 backdrop-blur-md border-b border-[#27272a]/70 rounded-none shadow-none'
        }`}
      >
        {/* Zone 1: Wordmark / Logo */}
        <a href="#" className="flex items-center gap-1.5 group shrink-0">
          <img 
            src={logoImg} 
            alt="WONG'S Digital Arts" 
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-5 sm:h-6' : 'h-6 sm:h-7'
            }`}
            onError={(e) => {
              if (e.currentTarget.src !== '/logo.png') {
                e.currentTarget.src = '/logo.png';
              }
            }}
          />
        </a>

        {/* Zone 2: Navigation Links (text-[11px] sm:text-xs) */}
        <nav className="hidden md:flex items-center gap-4 sm:gap-5 lg:gap-6 text-[11px] sm:text-xs font-medium font-jakarta text-neutral-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-neutral-300 hover:text-white transition-colors cursor-pointer py-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9169f6] hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Replaced Start Project Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Start Project Button restored on header */}
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase font-jakarta text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] active:scale-[0.98] transition-all rounded-full shadow-[0_0_14px_rgba(145,105,246,0.4)] hover:shadow-[0_0_22px_rgba(145,105,246,0.65)] cursor-pointer whitespace-nowrap group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 sm:p-1.5 text-neutral-300 hover:text-white hover:bg-[#1f1f23] rounded-full transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-[calc(100%-1.5rem)] max-w-sm mx-auto border border-[#2b2b35] bg-[#161619]/98 backdrop-blur-2xl rounded-2xl px-5 py-4 space-y-3 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <nav className="flex flex-col gap-1.5 font-jakarta text-xs">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-1.5 text-xs font-medium text-neutral-200 hover:text-[#9169f6] transition-colors border-b border-[#24242a] last:border-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#27272a]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-[11px] font-semibold uppercase tracking-wider font-jakarta text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] rounded-full transition-all cursor-pointer shadow-[0_0_16px_rgba(145,105,246,0.5)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
