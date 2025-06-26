'use client'
import React from 'react';
import { Menu, X } from 'lucide-react';
import { menuItems } from '../../../config/data';

interface NavigationProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    activeSection: string;
    scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
    isMenuOpen,
    setIsMenuOpen,
    activeSection,
    scrollToSection
}) => {

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="font-bold text-xl">
                        <span className="text-white">Kriti</span>
                        <span className="text-purple-400">Patel</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize transition-colors ${activeSection === item
                                    ? 'text-purple-400'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black border-t border-gray-800 animate-in slide-in-from-top duration-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white capitalize w-full text-left"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
