import React, { useState } from 'react';
import { Twitter, Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
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
            message: formData.message
          }
        ]);

      if (dbError) throw dbError;

      // 2. Send Email Alert (Netlify Function -> Resend)
      try {
        await fetch('/.netlify/functions/send-contact-email', {
          method: 'POST',
          body: JSON.stringify(formData),
        });
      } catch (emailError) {
        console.warn('Email trigger failed:', emailError);
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative z-10 py-24 px-6 md:px-[10%] min-h-screen flex flex-col justify-center">
      <h4 className="autoShow font-['Roboto_Condensed'] text-[28px] font-light text-white uppercase tracking-[0.15em] mb-2.5 text-center">
        Contact Me
      </h4>
      <div className="autoShow mb-16">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto w-full">
        {/* Contact Info (Left) */}
        <div className="space-y-8 autoShow">
          <div className="text-left space-y-6">
            <h3 className="text-3xl font-light text-[#d4a574]">Let's Collaborate</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              I'm always open to discussing construction projects, community initiatives, or mentorship opportunities.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:ismailabdirahman1767@gmail.com" className="flex items-center gap-4 text-white hover:text-[#d4a574] transition-colors group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#d4a574]/20 transition-colors border border-white/10">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg font-light tracking-wide">ismailabdirahman1767@gmail.com</span>
            </a>

            <div className="flex items-center gap-4 text-white">
              <div className="p-3 rounded-full bg-white/5 border border-white/10">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg font-light tracking-wide">+254 740 895374</span>
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="p-3 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-lg font-light tracking-wide">Nairobi, Kenya</span>
            </div>
          </div>


        </div>

        {/* Contact Form (Right) */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl autoShow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Name</label>
                <input
                  type="text"
                  required
                  readOnly={false}
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1a2332]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Email</label>
                <input
                  type="email"
                  required
                  readOnly={false}
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1a2332]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Subject</label>
              <input
                type="text"
                required
                readOnly={false}
                autoComplete="off"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#1a2332]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
                placeholder="Project Collaboration"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#d4a574] font-semibold">Message</label>
              <textarea
                required
                readOnly={false}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#1a2332]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors resize-none"
                placeholder="Tell me about your project..."
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
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center animate-fade-in">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
