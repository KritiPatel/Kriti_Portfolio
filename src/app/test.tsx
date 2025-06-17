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
            <div>
                <nav className="navbar">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold gradient-text">Kriti</h1>
                            <div className="hidden md:flex space-x-8">
                                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                                <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
                                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
                                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- Hero Section Component --> */}
                <section className="hero-section">
                    <canvas id="threeCanvas" className="three-canvas"></canvas>
                    <div className="text-center z-10 floating-animation">
                        <h1 className="text-6xl font-bold mb-4 gradient-text">Hi, I'm Kriti</h1>
                        <p className="text-2xl mb-8 text-gray-300">MERN Stack Developer</p>
                        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
                            Crafting dynamic web experiences with MongoDB, Express.js, React, and Node.js.
                            Passionate about creating scalable applications that make a difference.
                        </p>
                        <button className="contact-button px-8 py-3 rounded-full text-white font-semibold">
                            Let's Connect
                        </button>
                    </div>
                </section>
                {/* <!-- About Section Component --> */}
                <section id="about" className="section-spacing">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="card-hover rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
                                <p className="text-gray-300 mb-6">
                                    I'm a passionate MERN stack developer with expertise in building modern,
                                    responsive web applications. I love turning ideas into reality through clean,
                                    efficient code and intuitive user experiences.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="skill-tag">MongoDB</span>
                                    <span className="skill-tag">Express.js</span>
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">TypeScript</span>
                                    <span className="skill-tag">Next.js</span>
                                    <span className="skill-tag">Tailwind CSS</span>
                                </div>
                            </div>
                            <div className="card-hover rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4">My Approach</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center"><span className="text-purple-400 mr-3">▶</span>Clean, maintainable code</li>
                                    <li className="flex items-center"><span className="text-purple-400 mr-3">▶</span>User-centered design</li>
                                    <li className="flex items-center"><span className="text-purple-400 mr-3">▶</span>Performance optimization</li>
                                    <li className="flex items-center"><span className="text-purple-400 mr-3">▶</span>Continuous learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Education Section Component --> */}
                <section id="education" className="section-spacing bg-black bg-opacity-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="card-hover rounded-2xl p-8 mb-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Science</h3>
                                        <p className="text-purple-400 mb-2">University Name</p>
                                        <p className="text-gray-300">Specialized in Full Stack Development and Database Management</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <span className="bg-purple-600 px-4 py-2 rounded-full">2020 - 2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-hover rounded-2xl p-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">MERN Stack Certification</h3>
                                        <p className="text-purple-400 mb-2">Online Certification</p>
                                        <p className="text-gray-300">Comprehensive training in MongoDB, Express.js, React, and Node.js</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <span className="bg-purple-600 px-4 py-2 rounded-full">2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Projects Section Component --> */}
                <section id="projects" className="section-spacing">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* <!-- Project Card 1 --> */}
                            <div className="card-hover rounded-2xl p-6">
                                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                                    <span className="text-4xl">🛒</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">E-Commerce Platform</h3>
                                <p className="text-gray-300 mb-4">Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs bg-purple-600 px-2 py-1 rounded">React</span>
                                    <span className="text-xs bg-purple-600 px-2 py-1 rounded">Node.js</span>
                                    <span className="text-xs bg-purple-600 px-2 py-1 rounded">MongoDB</span>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="text-purple-400 hover:text-purple-300">Live Demo</button>
                                    <button className="text-purple-400 hover:text-purple-300">GitHub</button>
                                </div>
                            </div>

                            {/* <!-- Project Card 2 --> */}
                            <div className="card-hover rounded-2xl p-6">
                                <div className="h-48 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg mb-6 flex items-center justify-center">
                                    <span className="text-4xl">📱</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Social Media App</h3>
                                <p className="text-gray-300 mb-4">Real-time social media application with chat functionality, post sharing, and user profiles.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs bg-green-600 px-2 py-1 rounded">React</span>
                                    <span className="text-xs bg-green-600 px-2 py-1 rounded">Socket.io</span>
                                    <span className="text-xs bg-green-600 px-2 py-1 rounded">Express</span>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="text-green-400 hover:text-green-300">Live Demo</button>
                                    <button className="text-green-400 hover:text-green-300">GitHub</button>
                                </div>
                            </div>

                            {/* <!-- Project Card 3 --> */}
                            <div className="card-hover rounded-2xl p-6">
                                <div className="h-48 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg mb-6 flex items-center justify-center">
                                    <span className="text-4xl">📊</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Analytics Dashboard</h3>
                                <p className="text-gray-300 mb-4">Interactive dashboard for data visualization with real-time charts and reporting features.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs bg-orange-600 px-2 py-1 rounded">Next.js</span>
                                    <span className="text-xs bg-orange-600 px-2 py-1 rounded">TypeScript</span>
                                    <span className="text-xs bg-orange-600 px-2 py-1 rounded">Chart.js</span>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="text-orange-400 hover:text-orange-300">Live Demo</button>
                                    <button className="text-orange-400 hover:text-orange-300">GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Contact Section Component --> */}
                <section id="contact" className="section-spacing bg-black bg-opacity-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
                        <div className="max-w-2xl mx-auto text-center">
                            <p className="text-lg text-gray-300 mb-8">
                                I'm always interested in new opportunities and collaborations.
                                Let's connect and build something amazing together!
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <div className="card-hover rounded-2xl p-6">
                                    <div className="text-3xl mb-4">📧</div>
                                    <h3 className="font-bold mb-2">Email</h3>
                                    <p className="text-gray-300">kriti@example.com</p>
                                </div>
                                <div className="card-hover rounded-2xl p-6">
                                    <div className="text-3xl mb-4">💼</div>
                                    <h3 className="font-bold mb-2">LinkedIn</h3>
                                    <p className="text-gray-300">linkedin.com/in/kriti</p>
                                </div>
                                <div className="card-hover rounded-2xl p-6">
                                    <div className="text-3xl mb-4">🐙</div>
                                    <h3 className="font-bold mb-2">GitHub</h3>
                                    <p className="text-gray-300">github.com/kriti</p>
                                </div>
                            </div>
                            <button className="contact-button px-12 py-4 rounded-full text-white font-semibold text-lg">
                                Let's Work Together
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
