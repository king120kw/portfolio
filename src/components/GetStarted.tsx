import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Loader2, Send } from 'lucide-react';

export const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // 1. Save to Database (Supabase)
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: `Project Type: ${formData.subject}` // Using subject as message since form has no message field
          }
        ]);

      if (dbError) throw dbError;

      // 2. Send Email Alert (Netlify Function -> Resend)
      try {
        await fetch('/.netlify/functions/send-contact-email', {
          method: 'POST',
          body: JSON.stringify({
            ...formData,
            message: `Project Type: ${formData.subject}`
          }),
        });
      } catch (emailError) {
        console.warn('Email trigger failed:', emailError);
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="getStarted" className="relative z-10 py-24 px-[10%] text-[#e8eef3]">
      <h4 className="autoShow font-['Roboto_Condensed'] text-[28px] font-light uppercase tracking-[0.15em] mb-2.5">
        Let's Work Together
      </h4>
      <div className="autoShow mb-16">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      <p className="autoShow text-sm font-light tracking-[0.1em] text-[#e8eef3] mb-8">
        Ready to create positive change? I'm committed to delivering impactful solutions.
      </p>
      <h1 className="autoBLur font-['Roboto_Condensed'] text-[clamp(1.8rem,4vw,2.5rem)] font-light uppercase tracking-[0.15em] text-[#d4a574] my-8 leading-snug">
        Impact Guarantee
      </h1>
      <p className="autoShow text-sm font-light tracking-[0.1em] text-[#e8eef3] mb-10">
        Every project prioritizes community benefit and sustainable outcomes
      </p>
      <h2 className="autoShow text-lg font-light tracking-[0.1em] text-[#8b9db0] my-10">
        Let's discuss how we can transform your community together
      </h2>

      <form
        onSubmit={handleSubmit}
        className="autoShow max-w-[600px] mx-auto mt-10"
      >
        {/* ... form content ... */}
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
            autoComplete="name"
            className="w-full p-3 border-none rounded-md bg-[rgba(255,255,255,0.1)] text-white text-sm transition-all duration-300 focus:bg-[rgba(255,255,255,0.2)] focus:outline-none"
          />
        </div>
        <div className="my-2.5">
          <label htmlFor="email" className="block text-left mb-1 text-sm text-[#8b9db0]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
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
            autoComplete="off"
            className="w-full p-3 border-none rounded-md bg-[rgba(255,255,255,0.1)] text-white text-sm transition-all duration-300 focus:bg-[rgba(255,255,255,0.2)] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-10 bg-[#d4a574] text-[#1a2332] border-none rounded-md font-['Roboto_Condensed'] text-base font-normal uppercase tracking-wider cursor-pointer transition-all duration-300 mt-5 hover:bg-[#c49563] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(212,165,116,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Start Collaboration
            </>
          )}
        </button>

        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-center animate-fade-in">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center animate-fade-in">
            Failed to send message. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
};
