import React, { useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Clear focus when clicking outside (on the main container)
  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFocused(true);
  };

  useEffect(() => {
    if (isFocused) {
      document.body.classList.add('contact-active');
    } else {
      document.body.classList.remove('contact-active');
    }
  }, [isFocused]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const contactSection = document.getElementById('contact-form-container');
      if (contactSection && !contactSection.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('contact-active');
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // 1. Submit to Netlify Forms
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'contact');
      netlifyFormData.append('name', formData.name);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('subject', formData.subject);
      netlifyFormData.append('message', formData.message);

      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      // 2. Submit to Supabase (Database Record)
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (dbError) throw dbError;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      onClick={handleContainerClick}
      className="relative z-10 pt-0 pb-12 px-6 md:px-[10%] min-h-[auto] flex flex-col justify-center cursor-default"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Contact Form (Centered Glassmorphism) */}
        <div
          id="contact-form-container"
          className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl autoShow transition-all duration-500 ${isFocused ? 'form-highlight' : ''}`}
        >
          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
            onFocus={() => setIsFocused(true)}
          >
            {/* Netlify Hidden Form Name */}
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full contact-underline-input px-0 py-3 text-white focus:outline-none transition-all placeholder:text-white/30"
                  placeholder="name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full contact-underline-input px-0 py-3 text-white focus:outline-none transition-all placeholder:text-white/30"
                  placeholder="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                required
                autoComplete="off"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full contact-underline-input px-0 py-3 text-white focus:outline-none transition-all placeholder:text-white/30"
                placeholder="subject"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full contact-underline-input px-0 py-3 text-white focus:outline-none transition-all resize-none placeholder:text-white/30"
                placeholder="message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d4a574] text-[#1a2332] font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-center animate-fade-in">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center animate-fade-in flex flex-col gap-1">
                <span className="font-bold">Failed to send message:</span>
                <span className="text-sm opacity-90">{errorMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
