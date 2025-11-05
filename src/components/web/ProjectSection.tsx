'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
}

interface ProjectsSectionProps {
    projects: Project[];
    isVisible: boolean;
}

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, isVisible }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, projects.length - itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index * itemsPerSlide, maxIndex));
    };

    const totalDots = Math.ceil(projects.length / itemsPerSlide);

    // Drag functionality
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(currentIndex);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(currentIndex);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = (startX - x) / 100;

        if (Math.abs(walk) > 0.5) {
            if (walk > 0 && currentIndex < maxIndex) {
                setCurrentIndex(scrollLeft + 1);
                setIsDragging(false);
            } else if (walk < 0 && currentIndex > 0) {
                setCurrentIndex(scrollLeft - 1);
                setIsDragging(false);
            }
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = (startX - x) / 100;

        if (Math.abs(walk) > 0.5) {
            if (walk > 0 && currentIndex < maxIndex) {
                setCurrentIndex(scrollLeft + 1);
                setIsDragging(false);
            } else if (walk < 0 && currentIndex > 0) {
                setCurrentIndex(scrollLeft - 1);
                setIsDragging(false);
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto">
                <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                    FEATURED <span className="text-purple-400">PROJECTS</span>
                </h2>

                <p className={`text-center text-gray-300 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    My development journey comes alive in the digital realm. With clean code and modern frameworks,
                    I craft seamless experiences from concept to deployment.
                </p>

                {/* Slider Container */}
                <div className={`relative mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div
                        ref={sliderRef}
                        className="overflow-hidden cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={`flex gap-8 ${isDragging ? 'transition-none' : 'transition-transform duration-500 ease-out'}`}
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerSlide + (itemsPerSlide > 1 ? 8 / itemsPerSlide : 0))}%)`
                            }}
                        >
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="flex-shrink-0"
                                    style={{
                                        width: itemsPerSlide === 1
                                            ? '100%'
                                            : itemsPerSlide === 2
                                                ? 'calc(50% - 1rem)'
                                                : 'calc(33.333% - 1.33rem)'
                                    }}
                                >
                                    <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 h-full">
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                draggable="false"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold">{project.title}</h3>
                                                <div className="flex space-x-2">
                                                    {project.liveUrl && (
                                                        <a
                                                            href={project.liveUrl}
                                                            className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                    {project.githubUrl && (
                                                        <a
                                                            href={project.githubUrl}
                                                            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Github className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-purple-400 text-sm mb-3">{project.category}</p>
                                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full hover:bg-purple-600/30 transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    {projects.length > itemsPerSlide && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg"
                                aria-label="Previous projects"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg"
                                aria-label="Next projects"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Dots Navigation */}
                    {projects.length > itemsPerSlide && (
                        <div className="flex justify-center gap-3 mt-8">
                            {Array.from({ length: totalDots }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerSlide) === index
                                        ? 'bg-purple-600 w-8'
                                        : 'bg-gray-600 hover:bg-gray-500 w-2'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
