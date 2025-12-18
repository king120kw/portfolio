import React from 'react';

export const Contact: React.FC = () => {
  const socialLinks = [
    { icon: "https://res.cloudinary.com/atelier22/image/upload/v1499817073/twitter_o8du6p.svg", alt: "Twitter", url: "#" },
    { icon: "https://res.cloudinary.com/atelier22/image/upload/v1499817069/linkedin_cxmdha.svg", alt: "LinkedIn", url: "#" },
    { icon: "https://res.cloudinary.com/atelier22/image/upload/v1499817073/pinterest_vy6lou.svg", alt: "Pinterest", url: "#" },
    { icon: "https://res.cloudinary.com/atelier22/image/upload/v1499817070/dribbble_dlajdw.svg", alt: "Dribbble", url: "#" },
    { icon: "https://res.cloudinary.com/atelier22/image/upload/v1499817068/behance_xnix4r.svg", alt: "Behance", url: "#" }
  ];

  return (
    <div id="contact" className="bg-[#d4a574] py-24 px-[10%]">
      <h4 className="font-['Roboto_Condensed'] text-[28px] font-light text-[#1a2332] uppercase tracking-[0.15em] mb-2.5">
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
        className="text-xl font-light tracking-[0.1em] text-[#1a2332] no-underline block my-5 transition-all duration-300 hover:text-white"
      >
        ismailabdirahman1767@gmail.com
      </a>
      <p className="text-xl font-light tracking-[0.1em] text-[#1a2332] my-5">
        +254 740 895374
      </p>
      <p className="text-xl font-light tracking-[0.1em] text-[#1a2332] my-5">
        Nairobi, Kenya
      </p>

      <div className="mt-10 flex justify-center items-center gap-8">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            <img
              src={social.icon}
              alt={social.alt}
              className="w-10 h-10 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:brightness-0 hover:invert"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
