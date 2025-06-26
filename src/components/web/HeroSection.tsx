'use client'
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { heroData } from '../../../config/data';

interface HeroSectionProps {
    isVisible: boolean;
    scrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, scrollToSection }) => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

            <div className="container mx-auto px-4 text-center z-10">
                <div
                    className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        <span
                            className={`block transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                }`}
                        >
                            {heroData.firstName}
                        </span>
                        <span
                            className={`block text-purple-400 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                }`}
                        >
                            {heroData.lastName}
                        </span>
                    </h1>

                    <p
                        className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        {heroData.location}
                    </p>
                </div>

                <div
                    className={`mb-12 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <div className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {heroData.about}
                        </div>
                        <div className="text-white mt-2">{heroData.role}</div>
                    </div>
                </div>

                <div
                    className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {heroData.socialIcons.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => scrollToSection("about")}
                    className="animate-bounce"
                >
                    <ChevronDown className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors" />
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
