import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
    { label: 'Brand-Audit', href: '#fit-check' },
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
          ? 'top-3 sm:top-5 px-3 sm:px-6'
          : 'top-0 px-0'
      }`}
    >
      {/* Header Container that shrinks horizontally to center & shifts downwards when scrolled */}
      <header
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between ${
          isScrolled
            ? 'w-full max-w-4xl lg:max-w-5xl h-14 sm:h-16 px-4 sm:px-6 bg-[#161619]/90 backdrop-blur-xl border border-[#2e2e38] rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_1px_rgba(255,255,255,0.15)]'
            : 'w-full max-w-7xl h-20 px-4 sm:px-6 lg:px-8 bg-[#121214]/90 backdrop-blur-md border-b border-[#27272a]/70 rounded-none shadow-none'
        }`}
      >
     {/* Zone 1: Wordmark / Logo */}
<a href="#" className="flex items-center gap-2 group">
  <img 
    src="./logo.png" 
    alt="Brand Logo" 
    className="h-8 sm:h-9 w-auto object-contain"
  />
</a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs sm:text-sm font-medium font-caption text-neutral-300">
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

        {/* Zone 3: Replaced Start Project Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Replaced Start Project Button with refined rounded-full gradient pill */}
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-wide uppercase font-caption text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] active:scale-[0.98] transition-all rounded-full shadow-[0_0_16px_rgba(145,105,246,0.45)] hover:shadow-[0_0_24px_rgba(145,105,246,0.7)] cursor-pointer whitespace-nowrap group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-neutral-300 hover:text-white hover:bg-[#1f1f23] rounded-full transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Floating modal card below shrinking header) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-[calc(100%-1.5rem)] max-w-md mx-auto border border-[#2b2b35] bg-[#161619]/98 backdrop-blur-2xl rounded-2xl px-6 py-6 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <nav className="flex flex-col gap-2.5 font-caption">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#9169f6] transition-colors border-b border-[#24242a] last:border-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#27272a]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider font-caption text-white bg-gradient-to-r from-[#9169f6] to-[#7042e0] hover:from-[#a07df8] hover:to-[#7f51ec] rounded-full transition-all cursor-pointer shadow-[0_0_20px_rgba(145,105,246,0.5)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
