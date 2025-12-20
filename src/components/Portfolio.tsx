// ... imports
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

interface PortfolioItemProps {
  image: string;
  title: string;
  onClick: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="portfolio-item autoShow relative h-[250px] bg-cover bg-center rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[rgba(26,35,50,0.9)] via-transparent to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 hover:opacity-100 backdrop-blur-[2px]">
        <div className="text-[#d4a574] font-['Roboto_Condensed'] text-xl font-bold uppercase mb-2.5 drop-shadow-md">
          {title}
        </div>
        <div className="text-white text-xs uppercase tracking-widest font-light opacity-80">
          Click to View Details
        </div>
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      title: "Construction Site Management",
      description: "Led complex on-site operations for major infrastructure developments, ensuring strict adherence to safety protocols (OSHA) and engineering standards. Orchestrated timeline management, resource allocation, and cross-functional team coordination to deliver projects under budget and ahead of schedule.",
      videoUrl: "/video_2025-12-18_22-28-20.mp4",
      details: [
        "Managed daily site operations and safety compliance for 50+ personnel.",
        "Optimized resource allocation reducing material waste by 15%.",
        "Coordinated between architects, engineers, and ground teams for seamless execution."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
      title: "Multi-faith Collaboration",
      description: "Spearheaded community initiatives designed to bridge cultural and religious divides. Facilitated high-impact dialogue sessions and collaborative workshops that fostered mutual understanding and unity among diverse community groups, establishing a localized conflict resolution framework.",
      videoUrl: "/Multi-faith Collaboration.mp4",
      details: [
        "Organized 12+ interfaith dialogue forums with 200+ active participants.",
        "Developed a 'Unity in Diversity' workshop curriculum adopted by local community centers.",
        "Created sustainable partnerships between religious leaders for ongoing cooperation."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      title: "Educational Mentorship",
      description: "Designed and implemented comprehensive mentorship programs focused on empowering marginalized youth. Provided career guidance, academic tutoring, and soft-skills development to equip the next generation with the tools needed for professional success and civic engagement.",
      details: [
        "Mentored 500+ students across 3 years, achieving a 90% college transition rate.",
        "Partnered with local businesses to create internship pathways for high-school graduates.",
        "Conducted weekly leadership seminars focusing on civic responsibility and personal growth."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
      title: "Youth Empowerment",
      description: "Launched grassroots campaigns to active youth voices in local governance and community development. Focused on creating platforms for civil participation, skill-building in digital literacy, and fostering a sense of ownership in community outcomes.",
      details: [
        "Mobilized 1000+ youth volunteers for community clean-up and rehabilitation projects.",
        "Secured grant funding for 5 youth-led startups focused on social impact.",
        "Established a 'Youth Council' to advise local leaders on policy decisions."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop",
      title: "Sustainable Feeding Initiative",
      description: "Managed logistics and operations for large-scale community feeding programs aimed at food-insecure populations. ensuring dignity, efficiency, and nutritional value in delivery systems while building long-term food security partnerships.",
      videoUrl: "/sustainable-feeding-initiative.mp4",
      details: [
        "Delivered over 10,000 meals to vulnerable families during crisis periods.",
        "Implemented a transparent tracking system for donor funds and resource distribution.",
        "Partnered with local farmers to source fresh produce, supporting the local economy."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=600&h=400&fit=crop",
      title: "Emergency Response",
      description: "Coordinated rapid response teams for local emergencies, managing volunteer deployment and resource distribution. Focused on immediate relief efforts and long-term recovery planning for affected communities.",
      details: [
        "Led a volunteer response team of 40 members during regional flood incidents.",
        "Set up temporary shelter and aid distribution centers within 24 hours of crises.",
        "Developed disaster preparedness training modules for community leaders."
      ]
    }
  ];

  return (
    <>
      <section id="portfolio" className="relative z-10 py-24 px-[10%]">
        <h4 className="autoShow font-['Roboto_Condensed'] text-[28px] font-light text-white uppercase tracking-[0.15em] mb-2.5">
          Featured Projects
        </h4>
        <div className="autoShow mb-16">
          <img
            src="https://res.cloudinary.com/atelier22/image/upload/c_scale,w_10/v1499770011/divider_p5wiwx.svg"
            alt="divider"
            className="w-20 opacity-30 mx-auto"
          />
        </div>

        <div className="portfolio-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 max-w-[1200px] mx-auto">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              image={project.image}
              title={project.title}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
