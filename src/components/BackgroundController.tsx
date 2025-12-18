import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = [
    { id: 'hero', image: null }, // Hero has its own background
    { id: 'about', image: '/bg-about.jpg' },
    { id: 'services', image: '/bg-services.jpg' },
    { id: 'portfolio', image: '/bg-portfolio.jpg' },
    { id: 'getStarted', image: '/bg-contact.png' },
    { id: 'contact', image: '/bg-contact.png' },
];

export default function BackgroundController() {
    const [currentBg, setCurrentBg] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const sections = backgrounds.map(bg => document.getElementById(bg.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let activeId = 'hero';
            for (const section of sections) {
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        activeId = section.id;
                    }
                }
            }

            const activeBg = backgrounds.find(b => b.id === activeId);
            setCurrentBg(activeBg?.image || null);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-10] w-full h-full bg-darker overflow-hidden pointer-events-none">
            {/* Base dark layer */}
            <div className="absolute inset-0 bg-darker/80" />

            <AnimatePresence mode="wait">
                {currentBg && (
                    <>
                        {/* Ambient Layer - Low Visibility (Standard) */}
                        <motion.div
                            key={`${currentBg}-ambient`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                            style={{ backgroundImage: `url(${currentBg})` }}
                        />

                        {/* Spotlight Layer - High Visibility (Revealed by Cursor) */}
                        <motion.div
                            key={`${currentBg}-spotlight`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                            style={{
                                backgroundImage: `url(${currentBg})`,
                                maskImage: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                                WebkitMaskImage: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                            }}
                        />
                    </>
                )}
            </AnimatePresence>

            {/* Global gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-darker/90 via-transparent to-darker/95" />
        </div>
    );
}
