import React from 'react';
import { TxtRotate } from './TxtRotate';

export const Hero: React.FC = () => {
  const rotateTexts = [
    "Ismail Abdirahman",
    "a Community Development Leader",
    "an Operations Manager",
    "passionate about social impact",
    "dedicated to sustainable change"
  ];



  return (
    <header className="relative h-screen bg-gradient-to-br from-[#1a2332] via-[#2d3e50] to-[#1a2332] bg-[length:400%_400%] animate-gradientShift flex flex-col justify-center items-center overflow-hidden">
      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full animate-float pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(74, 98, 120, 0.1) 0%, transparent 50%)`
        }}
      />

      {/* Navigation and Logo moved to Navbar component */}

      {/* Hero Content */}
      <div className="relative z-10 max-w-[900px] px-5">
        <h1 className="font-['Roboto_Condensed'] text-[clamp(2rem,5vw,3.5rem)] font-light uppercase tracking-[0.2em] text-[#e8eef3] mb-5">
          I'M <TxtRotate toRotate={rotateTexts} period={1000} />
        </h1>
        <p className="text-sm font-light tracking-[0.2em] text-[#d4a574] mb-2.5">
          Community Development // Project Management // Social Impact
        </p>
        <h2 className="text-2xl font-light tracking-[0.15em] text-[#8b9db0] mt-8">
          Transforming Communities Through Strategic Leadership
        </h2>
        <p className="text-sm font-light tracking-[0.1em] text-[#e8eef3] mt-2.5">
          5+ years empowering youth and managing operations across Kenya
        </p>
      </div>
    </header>
  );
};
