// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { Code, Database, Server, Smartphone, Globe, Mail, Phone, MapPin, Github, ExternalLink, Download } from 'lucide-react';

// const AboutSection = () => {
//     const techStack = [
//         { name: 'MongoDB', icon: Database, color: 'text-green-400' },
//         { name: 'Express.js', icon: Server, color: 'text-yellow-400' },
//         { name: 'React', icon: Code, color: 'text-blue-400' },
//         { name: 'Node.js', icon: Globe, color: 'text-green-500' },
//         { name: 'React Native', icon: Smartphone, color: 'text-purple-400' },
//     ];

//     return (
//         <section id="about" className="min-h-screen py-20 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//                     About Me
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <div className="space-y-6">
//                         <div className="floating-avatar">
//                             <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-8xl font-bold text-white">
//                                 Dev
//                             </div>
//                         </div>
//                     </div>

//                     <div className="space-y-8">
//                         <div className="glass-card p-8">
//                             <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>
//                             <p className="text-gray-300 leading-relaxed">
//                                 With over 3 years of experience in web development, I specialize in creating
//                                 end-to-end solutions using the MERN stack. I'm passionate about clean code,
//                                 user experience, and staying up-to-date with the latest technologies.
//                             </p>
//                         </div>

//                         <div className="glass-card p-8">
//                             <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
//                             <div className="grid grid-cols-2 gap-4">
//                                 {techStack.map((tech, index) => (
//                                     <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
//                                         <tech.icon className={`w-6 h-6 ${tech.color}`} />
//                                         <span className="text-white font-medium">{tech.name}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutSection

import React from 'react'
import AnimatedBlobBackground from './AnimatedBlobBackground'
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 z-0">
                <AnimatedBlobBackground />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full h-full flex items-center justify-center text-5xl font-bold text-white"
            >
                Dev
            </motion.div>
        </div>

    )
}

export default AboutSection