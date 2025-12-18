import React, { useState, useEffect, useRef } from 'react';

interface CarouselItem {
    id: number;
    image: string;
    title: string;
    role: string;
    quote: string;
    alt: string;
}

const items: CarouselItem[] = [
    {
        id: 0,
        image: '/carousel-1.jpg',
        title: 'Strategic Leadership',
        role: 'Chairperson, Youth Hearts',
        quote: '"Transforming communities requires more than just vision; it demands the strategic alignment of people, resources, and purpose."',
        alt: 'Ismail in professional suit'
    },
    {
        id: 1,
        image: '/carousel-2.jpg',
        title: 'Youth Empowerment',
        role: 'Mentor & Mobilizer',
        quote: '"Empowering the next generation starts with showing up, listening, and bridging the gap between potential and opportunity."',
        alt: 'Ismail with sunglasses'
    },
    {
        id: 2,
        image: '/carousel-3.jpg',
        title: 'Community Connection',
        role: 'Grassroots Engagement',
        quote: '"Real impact happens on the ground. Every handshake and conversation builds the trust needed for sustainable change."',
        alt: 'Ismail on Vespa'
    },
    {
        id: 3,
        image: '/carousel-4.jpg',
        title: 'Environmental Stewardship',
        role: 'Conservation Advocate',
        quote: '"We are stewards of our environment. Preserving our natural heritage is as vital as building our social infrastructure."',
        alt: 'Ismail in nature'
    },
    {
        id: 4,
        image: '/carousel-5.jpg',
        title: 'Operational Excellence',
        role: 'Site Operations Manager',
        quote: '"Efficiency drives impact. Whether managing a construction site or a feeding program, precision ensures results."',
        alt: 'Ismail in waistcoat'
    }
];

export const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (trackRef.current) {
            const activeCard = trackRef.current.children[activeIndex] as HTMLElement;
            if (activeCard) {
                const track = trackRef.current;
                const container = track.parentElement;

                if (container) {
                    const cardSize = isMobile ? activeCard.offsetHeight : activeCard.offsetWidth;
                    const containerSize = isMobile ? container.offsetHeight : container.offsetWidth;

                    const scrollPos = isMobile
                        ? activeCard.offsetTop - (containerSize / 2 - cardSize / 2)
                        : activeCard.offsetLeft - (containerSize / 2 - cardSize / 2);

                    container.scrollTo({
                        [isMobile ? 'top' : 'left']: scrollPos,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [activeIndex, isMobile]);


    return (
        <div className="w-full overflow-hidden mt-12 group/carousel">
            {/* Track Container */}
            <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar px-5 pb-10">
                <div
                    ref={trackRef}
                    className="carousel-track flex flex-col md:flex-row gap-5 items-center md:items-start md:justify-center min-h-[400px] md:min-h-[500px]"
                >
                    {items.map((item, index) => (
                        <article
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`project-card relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${activeIndex === index ? 'active' : ''
                                }`}
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                            />

                            <div className="project-card__content absolute inset-0 flex flex-col justify-center items-center gap-3 p-0 z-10 bg-gradient-to-t from-[rgba(26,35,50,0.95)] via-[rgba(26,35,50,0.4)] to-transparent transition-all duration-500">

                                {/* Thumb/Preview Image (Visible only on active) */}
                                <img
                                    src={item.image}
                                    alt="thumbnail"
                                    className="project-card__thumb w-[133px] h-[200px] md:h-[269px] object-cover rounded-lg shadow-lg border-2 border-[#d4a574]/50"
                                />

                                <div className="transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left">
                                    <h3 className="project-card__title text-white font-['Roboto_Condensed'] font-bold text-xl md:text-2xl uppercase tracking-wider transition-all duration-500">
                                        {item.title}
                                    </h3>

                                    <div className="project-card__details transition-opacity duration-500 delay-100 p-4 md:p-0">
                                        <p className="text-[#d4a574] text-sm font-medium mb-3 uppercase tracking-widest">
                                            {item.role}
                                        </p>
                                        <p className="text-[#e8eef3] text-sm md:text-base leading-relaxed max-w-sm italic">
                                            {item.quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-5">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#d4a574] scale-125' : 'bg-[#1a2332]/20 hover:bg-[#1a2332]/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
