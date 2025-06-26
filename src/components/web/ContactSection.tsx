'use client'
import React from 'react';
import { Mail, Code } from 'lucide-react';
import { contactData } from '../../../config/data';

interface ContactSectionProps {
    isVisible: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className={`text-4xl md:text-6xl font-bold mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                    LET'S <span className="text-purple-400">WORK</span><br />
                    <span className="text-purple-400">TOGETHER</span>
                </h2>

                <p className={`text-xl text-gray-300 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    Connect with me to bring your web development ideas to life.
                </p>

                <div className={`flex justify-center space-x-8 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <a
                        href="mailto:kriti.patel@email.com"
                        className="flex items-center space-x-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        <span>{contactData?.email}</span>
                    </a>
                </div>

                <div className={`w-full h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-8 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`} style={{ transitionDelay: '600ms' }}>
                    <div className="text-center">
                        <Code className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                        <p className="text-purple-400 font-bold text-xl">LET'S BUILD SOMETHING AMAZING</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

