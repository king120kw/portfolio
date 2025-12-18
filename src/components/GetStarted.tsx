import React, { useState } from 'react';

export const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Formspree
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="getStarted" className="relative z-10 py-24 px-[10%] text-[#e8eef3]">
      <h4 className="font-['Roboto_Condensed'] text-[28px] font-light uppercase tracking-[0.15em] mb-2.5">
        Let's Work Together
      </h4>
      <div className="mb-16">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      <p className="text-sm font-light tracking-[0.1em] text-[#e8eef3] mb-8">
        Ready to create positive change? I'm committed to delivering impactful solutions.
      </p>
      <h1 className="font-['Roboto_Condensed'] text-[clamp(1.8rem,4vw,2.5rem)] font-light uppercase tracking-[0.15em] text-[#d4a574] my-8 leading-snug">
        Impact Guarantee
      </h1>
      <p className="text-sm font-light tracking-[0.1em] text-[#e8eef3] mb-10">
        Every project prioritizes community benefit and sustainable outcomes
      </p>
      <h2 className="text-lg font-light tracking-[0.1em] text-[#8b9db0] my-10">
        Let's discuss how we can transform your community together
      </h2>

      <form
        action="https://formspree.io/ismailabdirahman1767@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="max-w-[600px] mx-auto mt-10"
      >
        <div className="my-2.5">
          <label htmlFor="name" className="block text-left mb-1 text-sm text-[#8b9db0]">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-none rounded-md bg-[rgba(255,255,255,0.1)] text-white text-sm transition-all duration-300 focus:bg-[rgba(255,255,255,0.2)] focus:outline-none"
          />
        </div>
        <div className="my-2.5">
          <label htmlFor="email" className="block text-left mb-1 text-sm text-[#8b9db0]">
            Email
          </label>
          <input
            type="email"
            name="_replyto"
            id="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-none rounded-md bg-[rgba(255,255,255,0.1)] text-white text-sm transition-all duration-300 focus:bg-[rgba(255,255,255,0.2)] focus:outline-none"
          />
        </div>
        <div className="my-2.5">
          <label htmlFor="subject" className="block text-left mb-1 text-sm text-[#8b9db0]">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Project Type"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border-none rounded-md bg-[rgba(255,255,255,0.1)] text-white text-sm transition-all duration-300 focus:bg-[rgba(255,255,255,0.2)] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="py-3 px-10 bg-[#d4a574] text-[#1a2332] border-none rounded-md font-['Roboto_Condensed'] text-base font-normal uppercase tracking-wider cursor-pointer transition-all duration-300 mt-5 hover:bg-[#c49563] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(212,165,116,0.3)]"
        >
          Start Collaboration
        </button>
      </form>
    </div>
  );
};
