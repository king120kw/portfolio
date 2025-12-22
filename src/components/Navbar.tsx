import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show menu only when in the Hero section (top of page)
      // Usually Hero is 100vh. We'll use a threshold of 300px for better UX or 
      // window.innerHeight if we want exactly the hero section.
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY < scrollThreshold);
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

      {/* Mobile Nav Toggle (Hamburger) */}
      <div
        className={`md:hidden fixed top-6 right-6 transition-all duration-500 z-[10000] ${isVisible || isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] active:scale-95 transition-all duration-300 border border-black/5 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-[#3b82f6]/30 group"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-[#3b82f6]" />
          ) : (
            <div className="flex flex-col gap-1 items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-6 h-[2px] bg-[#3b82f6] rounded-full transition-colors group-hover:bg-[#2563eb]"></div>
              <div className="w-6 h-[2px] bg-[#3b82f6] rounded-full transition-colors group-hover:bg-[#2563eb]"></div>
              <div className="w-6 h-[2px] bg-[#3b82f6] rounded-full transition-colors group-hover:bg-[#2563eb]"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Nav Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a2332]/98 z-[9999] flex flex-col items-center justify-center space-y-8 md:hidden backdrop-blur-md animate-fade-in">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#e8eef3] text-2xl font-['Roboto_Condensed'] uppercase tracking-[0.2em] hover:text-[#d4a574] transition-all duration-300 transform hover:scale-110"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.5s ease forwards'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
