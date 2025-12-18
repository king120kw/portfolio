import React from 'react';
import { Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  // Social links updated to use Lucide icons inline below

  return (
    <div id="contact" className="relative z-10 py-24 px-[10%]">
      <h4 className="font-['Roboto_Condensed'] text-[28px] font-light text-white uppercase tracking-[0.15em] mb-2.5">
        Contact Me
      </h4>
      <div className="mb-16">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      <a
        href="mailto:ismailabdirahman1767@gmail.com"
        className="text-xl font-light tracking-[0.1em] text-white no-underline block my-5 transition-all duration-300 hover:text-[#d4a574]"
      >
        ismailabdirahman1767@gmail.com
      </a>
      <p className="text-xl font-light tracking-[0.1em] text-white my-5">
        +254 740 895374
      </p>
      <p className="text-xl font-light tracking-[0.1em] text-white my-5">
        Nairobi, Kenya
      </p>

      <div className="mt-10 flex justify-center items-center gap-8">
        <a href="#" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#1DA1F2]" aria-label="Twitter">
          <Twitter className="w-8 h-8" />
        </a>
        <a href="#" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#0077B5]" aria-label="LinkedIn">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="https://wa.me/254740895374" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#25D366]" aria-label="WhatsApp">
          <MessageCircle className="w-8 h-8" />
        </a>
        <a href="#" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#E4405F]" aria-label="Instagram">
          <Instagram className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};
