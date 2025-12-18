import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'My Work', href: '#portfolio' },
    { name: 'Get Started', href: '#getStarted' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="absolute top-5 left-8 z-50">
        <img
          className="w-[50px] h-[50px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_50/v1498391916/mf_hex_logo_dttgy6.png"
          alt="IA logo"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block absolute top-8 right-8 z-50">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="inline-block ml-6 text-light text-xs font-light uppercase tracking-widest relative group transition-colors hover:text-primary"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Nav Toggle (Hamburger) - Keeping as fallback/main menu */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#1a2332] p-3 bg-[#d4a574] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Quick Nav Bar (Horizontal Scroll) - Specific User Request */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-40 bg-dark/95 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex overflow-x-auto py-4 px-4 gap-4 no-scrollbar scroll-smooth">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-light border border-white/20 bg-white/5 active:bg-[#d4a574] active:text-[#1a2332] active:border-[#d4a574] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Nav Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-dark/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-light text-xl font-condensed uppercase tracking-widest hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
