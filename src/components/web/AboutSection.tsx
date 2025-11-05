'use client';
import React from 'react';
import { AboutSectionPropsData } from '../../../types';
import Container from '../ui/Container';

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
            <Container>
                <div className="container mx-auto">
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
                            className={`relative flex justify-center items-center transition-all duration-1000 delay-400 ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-12'
                                }`}
                        >
                            <div className="relative w-full max-w-sm md:max-w-md flex items-center justify-center group">
                                {/* Animated background glow */}
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div> */}

                                {/* Image container with frame */}
                                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500">

                                    {/* <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500"> */}
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <img
                                            src="/p2.png"
                                            alt="Developer"
                                            className="w-full h-auto max-h-[500px] object-contain transform group-hover:scale-105 transition-transform duration-700 brightness-110 drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                                        />

                                        {/* Decorative corner glows */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                                    Full Stack
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                                    MERN Stack
                                </div>
                            </div>
                        </div>
                        {/* <div
                            className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                                }`}
                        >
                            <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-500 group">
                                <img
                                    src="/dev.webp"
                                    alt="Developer"
                                    className="h-4/5 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div> */}

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
