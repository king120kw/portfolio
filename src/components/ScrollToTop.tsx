import React, { useEffect, useState } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[9999] w-12 h-12 bg-[#d4a574] text-[#1a2332] rounded-full text-center leading-[50px] text-2xl cursor-pointer border-none transition-all duration-300 ${isVisible ? 'opacity-80' : 'opacity-0 pointer-events-none'
        } hover:opacity-100 hover:scale-110`}
      title="Back to top"
    >
      ↑
    </button>
  );
};
