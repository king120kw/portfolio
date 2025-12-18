import React from 'react';

interface PortfolioItemProps {
  image: string;
  title: string;
  link?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, link = '#' }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-[250px] bg-cover bg-center rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] group"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[rgba(26,35,50,0.9)] to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 group-hover:opacity-100">
        <div className="text-[#d4a574] font-['Roboto_Condensed'] text-xl font-light uppercase mb-2.5">
          {title}
        </div>
        <div className="zoom-icon">
          <img
            src="https://res.cloudinary.com/atelier22/image/upload/v1499789852/zoom_dark_lljcfz.png"
            alt="zoom"
            className="w-8 h-8 brightness-0 invert"
          />
        </div>
      </div>
    </a>
  );
};

export const Portfolio: React.FC = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
      title: "Youth Empowerment Program",
      link: "https://www.sourceofhope.org"
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      title: "Sustainable Feeding Initiative",
      link: "https://www.youthhearts.org"
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
      title: "Construction Site Management"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      title: "Multi-faith Collaboration"
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      title: "Educational Mentorship"
    },
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef1883e055?w=600&h=400&fit=crop",
      title: "Emergency Response"
    }
  ];

  return (
    <section id="portfolio" className="relative z-10 py-24 px-[10%]">
      <h4 className="font-['Roboto_Condensed'] text-[28px] font-light text-white uppercase tracking-[0.15em] mb-2.5">
        Featured Projects
      </h4>
      <div className="mb-16">
        <img
          src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
          alt="divider"
          className="w-20 opacity-30 mx-auto"
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <PortfolioItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
