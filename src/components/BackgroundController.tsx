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

    useEffect(() => {
        const handleScroll = () => {
            const sections = backgrounds.map(bg => document.getElementById(bg.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of viewport

            // Find the current section
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

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 z-[-10] w-full h-full bg-darker overflow-hidden pointer-events-none">
            {/* Base dark layer */}
            <div className="absolute inset-0 bg-darker/50" />

            <AnimatePresence mode="wait">
                {currentBg && (
                    <motion.div
                        key={currentBg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }} // 40% opacity to blend with dark background for text contrast
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                        style={{ backgroundImage: `url(${currentBg})` }}
                    />
                )}
            </AnimatePresence>

            {/* Global gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-darker/90 via-darker/80 to-darker/95" />
        </div>
    );
}
