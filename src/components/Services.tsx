import React from 'react';
import { Users, ClipboardCheck, Settings, HandCoins } from 'lucide-react';

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="active:scale-95 autoShow group p-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex flex-col items-center text-center">
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-[#d4a574]/10 rounded-full scale-0 transition-transform duration-500 group-hover:scale-150"></div>
        <Icon
          strokeWidth={1.5}
          className="w-16 h-16 text-[#1a2332] transition-all duration-500 group-hover:text-[#d4a574] group-hover:scale-110 group-hover:-rotate-6"
        />
      </div>
      <h4 className="font-['Roboto_Condensed'] text-xl mb-4 text-white group-hover:text-[#d4a574] transition-colors duration-300">{title}</h4>
      <p className="text-sm leading-relaxed text-gray-300">{description}</p>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      Icon: Users,
      title: "Community Development",
      description: "Strategic program design and implementation focusing on youth empowerment, education access, and sustainable community initiatives."
    },
    {
      Icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project coordination from planning to execution, ensuring ISO compliance and stakeholder satisfaction."
    },
    {
      Icon: Settings,
      title: "Operations Management",
      description: "Comprehensive site operations, safety protocols, quality control, and team leadership for optimal performance."
    },
    {
      Icon: HandCoins,
      title: "Fundraising & Partnerships",
      description: "Digital campaign creation and donor relations management, generating sustainable funding for social initiatives."
    }
  ];

  return (
    <div id="services" className="relative z-10 py-24 px-[10%]">
      <h4 className="autoShow font-['Roboto_Condensed'] text-[28px] font-light text-white uppercase tracking-[0.15em] mb-2.5 text-center">
        Services
      </h4>
      <div className="autoShow mb-16">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 max-w-[1200px] mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};
