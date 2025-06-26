'use client'
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../../types';
import Container from '../ui/Container';

interface ProjectsSectionProps {
    projects: Project[];
    isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, isVisible }) => {
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

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <div className="flex space-x-2">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110">
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
