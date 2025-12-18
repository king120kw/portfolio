import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a2332] py-10 px-[10%] text-[#e8eef3] flex justify-between items-center flex-wrap gap-5">
      <div className="opacity-50 transition-opacity duration-300 hover:opacity-100">
        <img
          className="w-[50px] h-[50px]"
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_50/v1498391916/mf_hex_logo_dttgy6.png"
          alt="IA logo"
        />
      </div>

      <div className="flex-1 text-center">
        <nav className="mb-2.5">
          {[
            { text: 'About Me', id: 'about' },
            { text: 'Services', id: 'services' },
            { text: 'My Work', id: 'portfolio' },
            { text: 'Get Started', id: 'getStarted' },
            { text: 'Contact', id: 'contact' }
          ].map((item, index) => (
            <a
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="text-[#e8eef3] no-underline mx-4 text-xs uppercase cursor-pointer transition-colors duration-300 hover:text-[#d4a574]"
            >
              {item.text}
            </a>
          ))}
        </nav>
        <p className="text-[11px] opacity-50 mt-2.5">
          © 2024 Ismail Abdirahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
