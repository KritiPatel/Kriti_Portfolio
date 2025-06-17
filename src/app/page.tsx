'use client'
import AboutSection from "@/components/About";
import ParticleBackground from "@/components/Background";
import ContactSection from "@/components/Contact";
import EducationSection from "@/components/Education";
import HeroSection from "@/components/Hero";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/Projects";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(false);

  return (
    <>
      {/* <Hero /> */}
      <div className=" text-white min-h-screen relative">
        {/* <div className="bg-gray-900 text-white min-h-screen relative"> */}
        {/* <ParticleBackground /> */}
        {/* <Navigation activeSection={activeSection} setActiveSection={setActiveSection} /> */}

        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 MERN Stack Developer. Built with React & Three.js
            </p>
          </div>
        </footer>

        <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }
        
        .floating-avatar {
          animation: float 6s ease-in-out infinite;
        }
        
        .education-card {
          transition: transform 0.3s ease;
        }
        
        .education-card:hover {
          transform: translateY(-10px);
        }
        
        .project-card {
          transition: transform 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
      `}</style>
      </div>
    </>
  );
}
