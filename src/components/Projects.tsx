'use client'
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Code, Database, Server, Smartphone, Globe, Mail, Phone, MapPin, Github, ExternalLink, Download } from 'lucide-react';


const ProjectsSection = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with React, Node.js, MongoDB, and Stripe integration.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveDemo: '#',
            github: '#'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates using Socket.io.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
            technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
            liveDemo: '#',
            github: '#'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media management with data visualization.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
            technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
            liveDemo: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="glass-card overflow-hidden h-full">
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.liveDemo}
                                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection