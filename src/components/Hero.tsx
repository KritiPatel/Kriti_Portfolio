// // components/Hero.tsx
// 'use client';

// import { useThreeJS } from '@/hooks/useThreeJS';

// export default function Hero() {
//     const canvasRef = useThreeJS();

//     return (
//         <section className="hero-section">
//             <canvas ref={canvasRef} className="three-canvas" />
//             <div className="text-center z-10 floating-animation">
//                 <h1 className="text-6xl font-bold mb-4 gradient-text">Hi, I'm Kriti</h1>
//                 <p className="text-2xl mb-8 text-gray-300">MERN Stack Developer</p>
//                 <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
//                     Crafting dynamic web experiences with MongoDB, Express.js, React, and Node.js.
//                     Passionate about creating scalable applications that make a difference.
//                 </p>
//                 <button className="contact-button px-8 py-3 rounded-full text-white font-semibold">
//                     Let's Connect
//                 </button>
//             </div>
//         </section>
//     );
// }

'use client'

import React from 'react'
import { Code, Database, Server, Smartphone, Globe, Mail, Phone, MapPin, Github, ExternalLink, Download } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        MERN Stack Developer
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                        Building modern web applications with MongoDB, Express.js, React, and Node.js
                    </p>
                </div>

                <div className="glass-card p-8 max-w-2xl mx-auto">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Passionate full-stack developer specializing in creating scalable, user-friendly web applications.
                        I love turning complex problems into simple, beautiful solutions.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                        View My Work
                    </button>
                    <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                        <Download size={20} />
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection