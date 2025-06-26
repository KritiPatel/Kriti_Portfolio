'use client'
import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

// Import components
import AboutSection from '@/components/web/AboutSection';
import ProjectsSection from '@/components/web/ProjectSection';
import ServicesSection from '@/components/web/ServicesSection';
import ContactSection from '@/components/web/ContactSection';
import HeroSection from '@/components/web/HeroSection';
import FooterSection from '@/components/web/FooterSection';
import Navigation from '@/components/web/Navigation';

// Import types
import { Project, Service, VisibilityState } from '../../../types';
import { aboutData, menuItems, projects, services } from '../../../config/data';

const Portfolio: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState<VisibilityState>({
        home: false,
        about: false,
        projects: false,
        services: false,
        contact: false
    });

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems;
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);

            // Check visibility for animations
            const checkVisibility = (sectionId: string) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top < window.innerHeight * 0.8;
                }
                return false;
            };

            setIsVisible(prev => ({
                home: prev.home || checkVisibility('home'),
                about: prev.about || checkVisibility('about'),
                projects: prev.projects || checkVisibility('projects'),
                services: prev.services || checkVisibility('services'),
                contact: prev.contact || checkVisibility('contact')
            }));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Navigation
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />

            <HeroSection
                isVisible={isVisible.home}
                scrollToSection={scrollToSection}
            />

            <AboutSection {...aboutData} isVisible={isVisible.about} />

            <ProjectsSection
                projects={projects}
                isVisible={isVisible.projects}
            />

            <ServicesSection
                services={services}
                isVisible={isVisible.services}
            />

            <ContactSection
                isVisible={isVisible.contact}
            />

            <FooterSection />
        </div>
    );
};

export default Portfolio;