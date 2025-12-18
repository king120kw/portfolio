import React from 'react';

export const GetStarted: React.FC = () => {
  return (
    <div id="getStarted" className="relative z-10 pt-24 pb-8 px-[10%] text-[#e8eef3]">
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


    </div>
  );
};
