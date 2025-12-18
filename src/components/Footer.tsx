import { Twitter, Linkedin, Instagram, MessageCircle, Mail, Phone, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a2332] pt-0 pb-10 px-[10%] text-[#e8eef3] flex flex-col items-center gap-8">
      <div className="w-full pt-4 border-t border-white/5 flex flex-col items-center gap-6">
        <h3 className="text-2xl font-light text-[#d4a574] uppercase tracking-widest">Let's Collaborate</h3>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Email */}
          <a
            href="mailto:ismailabdirahman1767@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#d4a574]"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* Social Icons */}
          <a href="https://twitter.com/lookatmenow264" target="_blank" rel="noopener noreferrer" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#1DA1F2]" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ismail-abdirahman" target="_blank" rel="noopener noreferrer" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#0077B5]" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://wa.me/254740895374" target="_blank" rel="noopener noreferrer" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#25D366]" aria-label="WhatsApp">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/I.s.mail__" target="_blank" rel="noopener noreferrer" className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#E4405F]" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>

          {/* Phone */}
          <a
            href="tel:+254740895374"
            className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#d4a574]"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nairobi,Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:-translate-y-1 transition-all duration-300 text-white hover:text-[#d4a574]"
            aria-label="Location"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-wrap gap-5 pt-8 border-t border-white/5">
        <div className="opacity-50 transition-opacity duration-300 hover:opacity-100">
          <img
            className="w-[50px] h-[50px]"
            src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_50/v1498391916/mf_hex_logo_dttgy6.png"
            alt="IA logo"
          />
        </div>

        <nav>
          {[
            { text: 'About Me', id: 'about' },
            { text: 'Services', id: 'services' },
            { text: 'My Work', id: 'portfolio' },
            { text: 'Get Started', id: 'getStarted' },
            { text: 'Contact', id: 'contact' },
          ].map((item, index) => (
            <a
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="text-[#e8eef3] no-underline mx-4 text-xs uppercase cursor-pointer transition-colors duration-300 hover:text-[#d4a574]"
            >
              {item.text}
            </a>
          ))}
        </nav>

        <p className="text-[11px] opacity-50">
          © 2024 Ismail Abdirahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
