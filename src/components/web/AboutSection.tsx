'use client';
import React from 'react';
import { AboutSectionPropsData } from '../../../types';

interface AboutSectionProps extends AboutSectionPropsData {
    isVisible: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
    isVisible,
    description,
    challengesTitle,
    challengesDescription,
    skills,
    icon,
}) => {
    return (
        <section id="about" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
                <h2
                    className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    <span className="text-purple-400">ABOUT</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{description}</p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">{challengesTitle}</h3>
                            <p className="text-gray-300 leading-relaxed">{challengesDescription}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`${skill.bgColor} p-4 rounded-lg hover:bg-opacity-40 transition-all duration-300 hover:scale-105`}
                                >
                                    <h4 className="font-semibold mb-2">{skill.label}</h4>
                                    <p className="text-sm text-gray-300">{skill.tools}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}
                    >
                        <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-500 group">
                            {icon}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
