import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#works' },
    { label: 'Services', href: '#capabilities' },
    { label: 'Packages', href: '#fit-check' },
    { label: 'About', href: '#ethos' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#121214]/95 backdrop-blur-md border-b border-[#27272a]/80 py-2 shadow-lg shadow-black/20'
          : 'bg-[#121214]/80 backdrop-blur-sm border-b border-[#27272a]/40 py-5'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-11 sm:h-12' : 'h-14 sm:h-16'
        }`}
      >
        {/* Logo: WONGS DIGITAL ARTS with faceted monogram icon as shown in XD */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-300"
          aria-label="Wong's Digital Arts Home"
        >
          {/* Stylized faceted geometric monogram emblem */}
          <div
            className={`flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#9169f6]/60 transition-all duration-300 ${
              scrolled ? 'w-8 h-8 p-1.5' : 'w-9 h-9 sm:w-10 sm:h-10 p-2'
            }`}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white group-hover:text-[#9169f6] transition-colors"
            >
              <path
                d="M3 6L9 26L16 14L23 26L29 6H24L19 18.5L16 11L13 18.5L8 6H3Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="flex flex-col leading-none">
            <span
              className={`font-display font-extrabold tracking-wider text-white transition-all duration-300 ${
                scrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
              }`}
            >
              WONGS
            </span>
            <span className="text-[8px] sm:text-[9px] font-caption tracking-[0.25em] text-neutral-400 uppercase mt-0.5 group-hover:text-neutral-300 transition-colors">
              DIGITAL ARTS
            </span>
          </div>
        </a>

        {/* Navigation Links — clean, airy, no cluttered button in header */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium font-caption">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-neutral-300 hover:text-white transition-colors cursor-pointer py-1 relative tracking-wide after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9169f6] hover:after:w-full after:transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white hover:bg-[#1f1f23] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
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
                className="text-left py-2.5 text-base font-medium text-neutral-200 hover:text-[#9169f6] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

