'use client'
import React, { useState } from 'react'

const Navigation = ({ activeSection, setActiveSection }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-900/20 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Portfolio
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-cyan-500/20 text-cyan-400'
                                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="w-6 h-6">
                                <div className={`h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <div className={`h-0.5 w-6 bg-current mt-1 transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                                <div className={`h-0.5 w-6 bg-current mt-1 transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/30 backdrop-blur-lg">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${activeSection === item.id
                                    ? 'bg-cyan-500/20 text-cyan-400'
                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation