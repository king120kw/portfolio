import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
    project: {
        title: string;
        description: string;
        image: string;
        videoUrl?: string; // Optional video
        details: string[]; // Bullet points for specific achievements
    } | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-darker/90 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-[#1a2332] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-[#d4a574] transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Media Section */}
                <div className="w-full h-[300px] md:h-[400px] bg-black relative shrink-0">
                    {project.videoUrl ? (
                        <video
                            src={project.videoUrl}
                            controls
                            className="w-full h-full object-cover"
                            poster={project.image}
                        />
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-90"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 md:left-10">
                        <h2 className="text-3xl md:text-4xl font-condensed text-white uppercase tracking-wider mb-2">
                            {project.title}
                        </h2>
                        <div className="h-1 w-20 bg-[#d4a574]" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="p-6 md:p-10 overflow-y-auto">
                    <h3 className="text-[#d4a574] text-sm font-bold uppercase tracking-widest mb-4">
                        Project Context
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        {project.description}
                    </p>

                    <h3 className="text-[#d4a574] text-sm font-bold uppercase tracking-widest mb-4">
                        Key Initiatives
                    </h3>
                    <ul className="space-y-4">
                        {project.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-4 text-gray-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d4a574] shrink-0" />
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ProjectModal;
