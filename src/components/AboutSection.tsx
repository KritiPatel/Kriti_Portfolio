// // 'use client'
// // import React, { useState, useEffect, useRef } from 'react';
// // import { Code } from 'lucide-react';

// // const AboutSection = () => {
// //     const [isInView, setIsInView] = useState(false);
// //     const sectionRef = useRef(null);

// //     useEffect(() => {
// //         const observer = new IntersectionObserver(
// //             ([entry]) => setIsInView(entry.isIntersecting),
// //             { threshold: 0.4 }
// //         );
// //         if (sectionRef.current) {
// //             observer.observe(sectionRef.current);
// //         }
// //         return () => {
// //             if (sectionRef.current) {
// //                 observer.unobserve(sectionRef.current);
// //             }
// //         };
// //     }, []);

// //     return (
// //         <section id="about" ref={sectionRef} className="relative min-h-screen bg-gray-900 overflow-hidden">
// //             {/* Developer Image (floating and shrinking on scroll) */}
// //             <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-20 
// //                 ${isInView ? 'w-24 h-24 mt-4 rounded-full shadow-xl' : 'w-64 h-64 mt-32 rounded-xl'} 
// //                 bg-cover bg-center`}
// //                 style={{
// //                     // backgroundImage: `url('https://images.unsplash.com/photo-1603415526960-f7e0328c63b0?auto=format&fit=crop&w=400&q=80')`
// //                     backgroundImage: 'https://picsum.photos/200'
// //                 }}

// //             />

// //             {/* Content Section */}
// //             <div className="pt-[300px] md:pt-[400px] px-4 container mx-auto">
// //                 <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isInView
// //                     ? 'opacity-100 translate-y-0'
// //                     : 'opacity-0 translate-y-12'
// //                     }`}>
// //                     <span className="text-purple-400">ABOUT</span>
// //                 </h2>

// //                 <div className="grid md:grid-cols-2 gap-12 items-center">
// //                     <div className={`transition-all duration-1000 delay-200 ${isInView
// //                         ? 'opacity-100 translate-x-0'
// //                         : 'opacity-0 -translate-x-12'
// //                         }`}>
// //                         <p className="text-lg text-gray-300 mb-6 leading-relaxed">
// //                             I work at the intersection of creativity and technology — using the MERN stack
// //                             and modern development practices to turn innovative ideas into seamless web experiences.
// //                             My approach is methodical, my solutions scalable, and my commitment to clean code uncompromised.
// //                         </p>

// //                         <div className="mb-8">
// //                             <h3 className="text-xl font-semibold mb-4 text-purple-400">CHALLENGES & APPROACH</h3>
// //                             <p className="text-gray-300 leading-relaxed">
// //                                 I focus on user-centered development principles, ensuring each component serves a purpose
// //                                 while enhancing the overall user experience. I employ responsive design techniques,
// //                                 optimize performance, and write maintainable code that scales.
// //                             </p>
// //                         </div>

// //                         <div className="grid grid-cols-2 gap-6">
// //                             <div className="bg-purple-600/20 p-4 rounded-lg hover:bg-purple-600/30 transition-all duration-300 hover:scale-105">
// //                                 <h4 className="font-semibold mb-2">Frontend</h4>
// //                                 <p className="text-sm text-gray-300">React, TypeScript, Tailwind CSS</p>
// //                             </div>
// //                             <div className="bg-blue-600/20 p-4 rounded-lg hover:bg-blue-600/30 transition-all duration-300 hover:scale-105">
// //                                 <h4 className="font-semibold mb-2">Backend</h4>
// //                                 <p className="text-sm text-gray-300">Node.js, Express, MongoDB</p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className={`relative transition-all duration-1000 delay-400 ${isInView
// //                         ? 'opacity-100 translate-x-0'
// //                         : 'opacity-0 translate-x-12'
// //                         }`}>
// //                         <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-500 group">
// //                             <Code className="w-32 h-32 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default AboutSection;
// 'use client'
// import React, { useEffect, useRef, useState } from 'react';
// import { Code } from 'lucide-react';

// const AboutSection = () => {
//     const [shrink, setShrink] = useState(false);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setShrink(entry.isIntersecting);
//             },
//             { threshold: 0.4 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) observer.unobserve(sectionRef.current);
//         };
//     }, []);

//     return (
//         <section>
//             {/* Hero with background image */}
//             <div
//                 className={`transition-all duration-1000 ease-in-out w-full bg-cover bg-center relative z-10
//                     ${shrink ? 'h-32' : 'h-[80vh]'}
//                 `}
//                 style={{
//                     backgroundImage: `url('https://images.unsplash.com/photo-1603415526960-f7e0328c63b0?auto=format&fit=crop&w=1600&q=80')`,
//                 }}
//             >
//                 <div className="w-full h-full bg-black/40 flex items-center justify-center">
//                     {!shrink && (
//                         <h1 className="text-white text-4xl md:text-6xl font-bold">Hi, I’m a Developer</h1>
//                     )}
//                 </div>
//             </div>

//             {/* About Section with overlap */}
//             <div ref={sectionRef} className="-mt-16 md:-mt-24 bg-gray-900/90 pt-24 pb-20 relative z-20">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-purple-400">
//                         ABOUT
//                     </h2>

//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="transition-opacity duration-1000 opacity-100">
//                             <p className="text-lg text-gray-300 mb-6 leading-relaxed">
//                                 I work at the intersection of creativity and technology — using the MERN stack
//                                 and modern development practices to turn innovative ideas into seamless web experiences.
//                                 My approach is methodical, my solutions scalable, and my commitment to clean code uncompromised.
//                             </p>

//                             <div className="mb-8">
//                                 <h3 className="text-xl font-semibold mb-4 text-purple-400">CHALLENGES & APPROACH</h3>
//                                 <p className="text-gray-300 leading-relaxed">
//                                     I focus on user-centered development principles, ensuring each component serves a purpose
//                                     while enhancing the overall user experience. I employ responsive design techniques,
//                                     optimize performance, and write maintainable code that scales.
//                                 </p>
//                             </div>

//                             <div className="grid grid-cols-2 gap-6">
//                                 <div className="bg-purple-600/20 p-4 rounded-lg hover:bg-purple-600/30 transition-all duration-300 hover:scale-105">
//                                     <h4 className="font-semibold mb-2">Frontend</h4>
//                                     <p className="text-sm text-gray-300">React, TypeScript, Tailwind CSS</p>
//                                 </div>
//                                 <div className="bg-blue-600/20 p-4 rounded-lg hover:bg-blue-600/30 transition-all duration-300 hover:scale-105">
//                                     <h4 className="font-semibold mb-2">Backend</h4>
//                                     <p className="text-sm text-gray-300">Node.js, Express, MongoDB</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="relative">
//                             <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-500 group">
//                                 <Code className="w-32 h-32 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutSection;
'use client'
import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

const AboutSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({ about: false });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            // Trigger animation for about section
            if (window.scrollY > 100) {
                setIsVisible((prev) => ({ ...prev, about: true }));
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const imageHeight = Math.max(100 - scrollY * 0.2, 50); // Shrink from 100vh to 50vh

    return (
        <div>
            {/* Hero Banner Section */}
            <section className="relative overflow-hidden">
                <img
                    src="https://picsum.photos/200" // Replace with your image URL
                    alt="Banner"
                    style={{ height: `${imageHeight}vh` }}
                    className="w-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-5xl md:text-7xl font-bold">Hi, I'm Kriti</h1>
                </div>
            </section>

            {/* About Section Overlapping */}
            <section
                id="about"
                className="relative z-20 -mt-32 py-20 bg-gray-900/80 backdrop-blur-md"
            >
                <div className="container mx-auto px-4">
                    <h2
                        className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <span className="text-purple-400">ABOUT</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div
                            className={`transition-all duration-1000 delay-200 ${isVisible.about
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-12'
                                }`}
                        >
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                I work at the intersection of creativity and technology — using the MERN stack
                                and modern development practices to turn innovative ideas into seamless web experiences.
                                My approach is methodical, my solutions scalable, and my commitment to clean code uncompromised.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4 text-purple-400">CHALLENGES & APPROACH</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    I focus on user-centered development principles, ensuring each component serves a purpose
                                    while enhancing the overall user experience. I employ responsive design techniques,
                                    optimize performance, and write maintainable code that scales.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-purple-600/20 p-4 rounded-lg hover:bg-purple-600/30 transition-all duration-300 hover:scale-105">
                                    <h4 className="font-semibold mb-2">Frontend</h4>
                                    <p className="text-sm text-gray-300">React, TypeScript, Tailwind CSS</p>
                                </div>
                                <div className="bg-blue-600/20 p-4 rounded-lg hover:bg-blue-600/30 transition-all duration-300 hover:scale-105">
                                    <h4 className="font-semibold mb-2">Backend</h4>
                                    <p className="text-sm text-gray-300">Node.js, Express, MongoDB</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div
                            className={`relative transition-all duration-1000 delay-400 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                                }`}
                        >
                            <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-500 group">
                                <Code className="w-32 h-32 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
