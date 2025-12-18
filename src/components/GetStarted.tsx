import React from 'react';

export const GetStarted: React.FC = () => {
  return (
    <div id="getStarted" className="relative z-10 py-24 px-[10%] text-[#e8eef3]">
      <h4 className="autoShow font-['Roboto_Condensed'] text-[40px] font-light uppercase tracking-[0.15em] mb-8 leading-tight">
        IMPACT GUARANTEE
      </h4>
      <div className="autoShow mb-12">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      <p className="autoShow text-sm font-light tracking-[0.1em] text-[#e8eef3] mb-6">
        Ready to create positive change? I'm committed to delivering impactful solutions.
      </p>

      <p className="autoShow text-sm font-light tracking-[0.1em] text-[#e8eef3] mb-8">
        Every project prioritizes community benefit and sustainable outcomes
      </p>
      <h2 className="autoShow text-lg font-light tracking-[0.1em] text-[#8b9db0] mb-8">
        Let's discuss how we can transform your community together
      </h2>

      <div className="autoShow mt-10">
        <a
          href="#contact"
          className="inline-block py-3 px-10 bg-[#d4a574] text-[#1a2332] rounded-md font-['Roboto_Condensed'] text-base font-normal uppercase tracking-wider transition-all duration-300 hover:bg-[#c49563] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(212,165,116,0.3)]"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};
