import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

// Using the specific images from your portfolio context
const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop",
    alt: "Youth Empowerment Program"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop",
    alt: "Sustainable Feeding Initiative"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
    alt: "Construction Site Management"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    alt: "Multi-faith Collaboration"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1577896851231-70ef1883e055?w=1200&h=800&fit=crop",
    alt: "Emergency Response"
  }
];

export const ImmersiveScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll events from the invisible "ghost" layer
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, clientHeight } = scrollContainerRef.current;
      // Calculate which slide should be active based on scroll position
      // We switch when the scroll passes the midpoint of a section
      const newIndex = Math.round(scrollTop / clientHeight);
      
      // Clamp index to bounds
      const clampedIndex = Math.min(Math.max(newIndex, 0), SLIDES.length - 1);
      
      if (clampedIndex !== activeIndex) {
        setActiveIndex(clampedIndex);
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-dark font-sans">
      
      {/* LAYER 1: Background Images (Absolute) */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-0 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* LAYER 2: Overlay (Consistent Semi-transparent) */}
      {/* A consistent dark overlay ensures text is always legible regardless of the background image brightness */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* LAYER 3: Foreground UI (Fixed, Non-scrolling) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white pointer-events-none p-6">
        <div className="max-w-4xl text-center space-y-8">
          <h2 className="text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
            Ismail Abdirahman
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-condensed font-bold uppercase tracking-tight leading-none">
            Impact<br />
            <span className="text-primary">In Action</span>
          </h1>
          
          <div className="w-20 h-1 bg-primary mx-auto my-8"></div>

          <p className="text-lg md:text-xl font-light text-gray-200 max-w-xl mx-auto leading-relaxed">
            Exploring community development, sustainable initiatives, and operational excellence through a visual journey.
          </p>

          {/* Dynamic Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {SLIDES.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex ? 'w-12 bg-primary' : 'w-3 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 animate-bounce opacity-70 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-primary">Scroll to Explore</span>
          <ChevronDown size={24} className="text-white" />
        </div>
      </div>

      {/* LAYER 4: Scroll Control (Ghost Div) */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="absolute inset-0 z-30 overflow-y-auto scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* 
          The height is proportional to the number of slides. 
          Each "slide" takes up 100vh of scroll space.
        */}
        <div style={{ height: `${SLIDES.length * 100}vh` }} />
      </div>

    </div>
  );
};
