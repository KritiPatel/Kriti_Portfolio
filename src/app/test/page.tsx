// // 'use client'
// // import React, { useState, useEffect } from 'react';
// // import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X } from 'lucide-react';

// // interface Project {
// //     id: number;
// //     title: string;
// //     category: string;
// //     description: string;
// //     image: string;
// //     tech: string[];
// //     liveUrl?: string;
// //     githubUrl?: string;
// // }

// // interface Service {
// //     id: number;
// //     title: string;
// //     description: string;
// //     icon: React.ReactNode;
// // }

// // const Portfolio: React.FC = () => {
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// //     const [activeSection, setActiveSection] = useState('home');

// //     const projects: Project[] = [
// //         {
// //             id: 1,
// //             title: "E-Commerce Platform",
// //             category: "Full Stack Development",
// //             description: "Complete MERN stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
// //             image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
// //             tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
// //             liveUrl: "#",
// //             githubUrl: "#"
// //         },
// //         {
// //             id: 2,
// //             title: "Social Media Dashboard",
// //             category: "Frontend Development",
// //             description: "Modern React dashboard with TypeScript, real-time analytics, and responsive design for social media management.",
// //             image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
// //             tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
// //             liveUrl: "#",
// //             githubUrl: "#"
// //         },
// //         {
// //             id: 3,
// //             title: "Task Management API",
// //             category: "Backend Development",
// //             description: "RESTful API with JWT authentication, role-based access control, and comprehensive task management features.",
// //             image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
// //             tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
// //             githubUrl: "#"
// //         },
// //         {
// //             id: 4,
// //             title: "Real-time Chat App",
// //             category: "Full Stack Development",
// //             description: "WebSocket-powered chat application with file sharing, group chats, and message encryption.",
// //             image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
// //             tech: ["React", "Socket.io", "Node.js", "MongoDB"],
// //             liveUrl: "#",
// //             githubUrl: "#"
// //         }
// //     ];

// //     const services: Service[] = [
// //         {
// //             id: 1,
// //             title: "Frontend Development",
// //             description: "Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
// //             icon: <Globe className="w-8 h-8" />
// //         },
// //         {
// //             id: 2,
// //             title: "Backend Development",
// //             description: "Building scalable server-side applications with Node.js, Express, and robust API architectures.",
// //             icon: <Server className="w-8 h-8" />
// //         },
// //         {
// //             id: 3,
// //             title: "Database Design",
// //             description: "Designing and optimizing MongoDB schemas and implementing efficient data storage solutions.",
// //             icon: <Database className="w-8 h-8" />
// //         },
// //         {
// //             id: 4,
// //             title: "Full Stack Integration",
// //             description: "Seamlessly connecting frontend and backend systems for complete web application solutions.",
// //             icon: <Code className="w-8 h-8" />
// //         }
// //     ];

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             const sections = ['home', 'about', 'projects', 'services', 'contact'];
// //             const current = sections.find(section => {
// //                 const element = document.getElementById(section);
// //                 if (element) {
// //                     const rect = element.getBoundingClientRect();
// //                     return rect.top <= 100 && rect.bottom >= 100;
// //                 }
// //                 return false;
// //             });
// //             if (current) setActiveSection(current);
// //         };

// //         window.addEventListener('scroll', handleScroll);
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     const scrollToSection = (sectionId: string) => {
// //         const element = document.getElementById(sectionId);
// //         if (element) {
// //             element.scrollIntoView({ behavior: 'smooth' });
// //         }
// //         setIsMenuOpen(false);
// //     };

// //     return (
// //         <div className="min-h-screen bg-black text-white font-sans">
// //             {/* Navigation */}
// //             <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
// //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                     <div className="flex justify-between items-center h-16">
// //                         <div className="font-bold text-xl">
// //                             <span className="text-white">Kriti</span>
// //                             <span className="text-purple-400">Patel</span>
// //                         </div>

// //                         {/* Desktop Menu */}
// //                         <div className="hidden md:flex space-x-8">
// //                             {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
// //                                 <button
// //                                     key={item}
// //                                     onClick={() => scrollToSection(item)}
// //                                     className={`capitalize transition-colors ${activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
// //                                         }`}
// //                                 >
// //                                     {item}
// //                                 </button>
// //                             ))}
// //                         </div>

// //                         {/* Mobile Menu Button */}
// //                         <button
// //                             className="md:hidden"
// //                             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                         >
// //                             {isMenuOpen ? <X /> : <Menu />}
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* Mobile Menu */}
// //                 {isMenuOpen && (
// //                     <div className="md:hidden bg-black border-t border-gray-800">
// //                         <div className="px-2 pt-2 pb-3 space-y-1">
// //                             {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
// //                                 <button
// //                                     key={item}
// //                                     onClick={() => scrollToSection(item)}
// //                                     className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white capitalize w-full text-left"
// //                                 >
// //                                     {item}
// //                                 </button>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 )}
// //             </nav>

// //             {/* Hero Section */}
// //             <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
// //                 <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
// //                 <div className="container mx-auto px-4 text-center z-10">
// //                     <div className="mb-8">
// //                         <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider">
// //                             AVAILABLE FOR OPPORTUNITIES
// //                         </p>
// //                         <h1 className="text-6xl md:text-8xl font-bold mb-6">
// //                             <span className="block">KRITI</span>
// //                             <span className="block text-purple-400">PATEL</span>
// //                         </h1>
// //                         <p className="text-xl md:text-2xl text-gray-300 mb-8">BASED IN Gujarat, India</p>
// //                     </div>

// //                     <div className="mb-12">
// //                         <div className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
// //                             <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //                                 I AM A PASSIONATE
// //                             </div>
// //                             <div className="text-white mt-2">
// //                                 MERN STACK DEVELOPER.
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="flex justify-center space-x-6 mb-12">
// //                         <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
// //                             <Github className="w-6 h-6" />
// //                         </a>
// //                         <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
// //                             <Linkedin className="w-6 h-6" />
// //                         </a>
// //                         <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
// //                             <Mail className="w-6 h-6" />
// //                         </a>
// //                     </div>

// //                     <button
// //                         onClick={() => scrollToSection('about')}
// //                         className="animate-bounce"
// //                     >
// //                         <ChevronDown className="w-8 h-8 text-purple-400" />
// //                     </button>
// //                 </div>
// //             </section>

// //             {/* About Section */}
// //             <section id="about" className="py-20 bg-gray-900/50">
// //                 <div className="container mx-auto px-4">
// //                     <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
// //                         <span className="text-purple-400">ABOUT</span>
// //                     </h2>

// //                     <div className="grid md:grid-cols-2 gap-12 items-center">
// //                         <div>
// //                             <p className="text-lg text-gray-300 mb-6 leading-relaxed">
// //                                 I work at the intersection of creativity and technology — using the MERN stack
// //                                 and modern development practices to turn innovative ideas into seamless web experiences.
// //                                 My approach is methodical, my solutions scalable, and my commitment to clean code uncompromised.
// //                             </p>

// //                             <div className="mb-8">
// //                                 <h3 className="text-xl font-semibold mb-4 text-purple-400">CHALLENGES & APPROACH</h3>
// //                                 <p className="text-gray-300 leading-relaxed">
// //                                     I focus on user-centered development principles, ensuring each component serves a purpose
// //                                     while enhancing the overall user experience. I employ responsive design techniques,
// //                                     optimize performance, and write maintainable code that scales.
// //                                 </p>
// //                             </div>

// //                             <div className="grid grid-cols-2 gap-6">
// //                                 <div className="bg-purple-600/20 p-4 rounded-lg">
// //                                     <h4 className="font-semibold mb-2">Frontend</h4>
// //                                     <p className="text-sm text-gray-300">React, TypeScript, Tailwind CSS</p>
// //                                 </div>
// //                                 <div className="bg-blue-600/20 p-4 rounded-lg">
// //                                     <h4 className="font-semibold mb-2">Backend</h4>
// //                                     <p className="text-sm text-gray-300">Node.js, Express, MongoDB</p>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="relative">
// //                             <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center">
// //                                 <Code className="w-32 h-32 text-purple-400" />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Projects Section */}
// //             <section id="projects" className="py-20">
// //                 <div className="container mx-auto px-4">
// //                     <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
// //                         <span className="text-purple-400">FEATURED</span> PROJECTS
// //                     </h2>

// //                     <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
// //                         My development journey comes alive in the digital realm. With clean code and modern frameworks,
// //                         I craft seamless experiences from concept to deployment.
// //                     </p>

// //                     <div className="grid md:grid-cols-2 gap-8">
// //                         {projects.map((project) => (
// //                             <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-300">
// //                                 <div className="aspect-video overflow-hidden">
// //                                     <img
// //                                         src={project.image}
// //                                         alt={project.title}
// //                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //                                     />
// //                                 </div>
// //                                 <div className="p-6">
// //                                     <div className="flex justify-between items-start mb-3">
// //                                         <h3 className="text-xl font-bold">{project.title}</h3>
// //                                         <div className="flex space-x-2">
// //                                             {project.liveUrl && (
// //                                                 <a href={project.liveUrl} className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
// //                                                     <ExternalLink className="w-4 h-4" />
// //                                                 </a>
// //                                             )}
// //                                             {project.githubUrl && (
// //                                                 <a href={project.githubUrl} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
// //                                                     <Github className="w-4 h-4" />
// //                                                 </a>
// //                                             )}
// //                                         </div>
// //                                     </div>
// //                                     <p className="text-purple-400 text-sm mb-3">{project.category}</p>
// //                                     <p className="text-gray-300 text-sm mb-4">{project.description}</p>
// //                                     <div className="flex flex-wrap gap-2">
// //                                         {project.tech.map((tech) => (
// //                                             <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
// //                                                 {tech}
// //                                             </span>
// //                                         ))}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Services Section */}
// //             <section id="services" className="py-20 bg-gray-900/50">
// //                 <div className="container mx-auto px-4">
// //                     <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
// //                         MY <span className="text-purple-400">SERVICES</span>
// //                     </h2>

// //                     <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
// //                         Providing comprehensive MERN stack development services focused on creating
// //                         scalable web applications and enhancing user experiences.
// //                     </p>

// //                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //                         {services.map((service, index) => (
// //                             <div key={service.id} className="group text-center">
// //                                 <div className="mb-6">
// //                                     <div className="w-16 h-16 mx-auto bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/40 transition-colors">
// //                                         <div className="text-purple-400">
// //                                             {service.icon}
// //                                         </div>
// //                                     </div>
// //                                     <div className="text-purple-400 text-sm font-mono mt-2">
// //                     //{index + 1}
// //                                     </div>
// //                                 </div>
// //                                 <h3 className="text-xl font-bold mb-4">{service.title}</h3>
// //                                 <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Contact Section */}
// //             <section id="contact" className="py-20">
// //                 <div className="container mx-auto px-4 text-center">
// //                     <h2 className="text-4xl md:text-6xl font-bold mb-12">
// //                         LET'S <span className="text-purple-400">WORK</span><br />
// //                         <span className="text-purple-400">TOGETHER</span>
// //                     </h2>

// //                     <p className="text-xl text-gray-300 mb-12">
// //                         Connect with me to bring your web development ideas to life.
// //                     </p>

// //                     <div className="flex justify-center space-x-8 mb-12">
// //                         <a
// //                             href="mailto:kriti.patel@email.com"
// //                             className="flex items-center space-x-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
// //                         >
// //                             <Mail className="w-5 h-5" />
// //                             <span>kriti.patel@email.com</span>
// //                         </a>
// //                     </div>

// //                     <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-8">
// //                         <div className="text-center">
// //                             <Code className="w-16 h-16 text-purple-400 mx-auto mb-4" />
// //                             <p className="text-purple-400 font-bold text-xl">LET'S BUILD SOMETHING AMAZING</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Footer */}
// //             <footer className="py-8 border-t border-gray-800">
// //                 <div className="container mx-auto px-4 text-center">
// //                     <p className="text-gray-400">
// //                         © 2025 Kriti Patel. Crafted with React, TypeScript & Tailwind CSS.
// //                     </p>
// //                 </div>
// //             </footer>
// //         </div>
// //     );
// // };

// // export default Portfolio;

'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X } from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/web/ServicesSection';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const Portfolio: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState({
        home: false,
        about: false,
        projects: false,
        services: false,
        contact: false
    });

    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "Full Stack Development",
            description: "Complete MERN stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Social Media Dashboard",
            category: "Frontend Development",
            description: "Modern React dashboard with TypeScript, real-time analytics, and responsive design for social media management.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Task Management API",
            category: "Backend Development",
            description: "RESTful API with JWT authentication, role-based access control, and comprehensive task management features.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
            tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
            githubUrl: "#"
        },
        {
            id: 4,
            title: "Real-time Chat App",
            category: "Full Stack Development",
            description: "WebSocket-powered chat application with file sharing, group chats, and message encryption.",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
            tech: ["React", "Socket.io", "Node.js", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    const services: Service[] = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
            icon: <Globe className="w-8 h-8" />
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Building scalable server-side applications with Node.js, Express, and robust API architectures.",
            icon: <Server className="w-8 h-8" />
        },
        {
            id: 3,
            title: "Database Design",
            description: "Designing and optimizing MongoDB schemas and implementing efficient data storage solutions.",
            icon: <Database className="w-8 h-8" />
        },
        {
            id: 4,
            title: "Full Stack Integration",
            description: "Seamlessly connecting frontend and backend systems for complete web application solutions.",
            icon: <Code className="w-8 h-8" />
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'services', 'contact'];
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
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="font-bold text-xl">
                            <span className="text-white">Kriti</span>
                            <span className="text-purple-400">Patel</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-colors ${activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
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
                            {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
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

            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

                <div className="container mx-auto px-4 text-center z-10">
                    <div
                        className={`mb-8 transition-all duration-1000 ${isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold mb-6">
                            <span
                                className={`block transition-all duration-1000 delay-200 ${isVisible.home ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                    }`}
                            >
                                KRITI
                            </span>
                            <span
                                className={`block text-purple-400 transition-all duration-1000 delay-400 ${isVisible.home ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                    }`}
                            >
                                PATEL
                            </span>
                        </h1>

                        <p
                            className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-600 ${isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            BASED IN Gujarat, India
                        </p>
                    </div>

                    <div
                        className={`mb-12 transition-all duration-1000 delay-800 ${isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                I AM A PASSIONATE
                            </div>
                            <div className="text-white mt-2">MERN STACK DEVELOPER.</div>
                        </div>
                    </div>

                    <div
                        className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-1000 ${isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    <button
                        onClick={() => scrollToSection("about")}
                        className="animate-bounce"
                    >
                        <ChevronDown className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors" />
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible.about
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                        }`}>
                        <span className="text-purple-400">ABOUT</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={`transition-all duration-1000 delay-200 ${isVisible.about
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-12'
                            }`}>
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

                        <div className={`relative transition-all duration-1000 delay-400 ${isVisible.about
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-12'
                            }`}>
                            <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-500 group">
                                <Code className="w-32 h-32 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible.projects
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                        }`}>
                        <span className="text-purple-400">FEATURED</span> PROJECTS
                    </h2>

                    <p className={`text-center text-gray-300 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible.projects
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        My development journey comes alive in the digital realm. With clean code and modern frameworks,
                        I craft seamless experiences from concept to deployment.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 ${isVisible.projects
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                                style={{ transitionDelay: `${400 + index * 100}ms` }}>
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <div className="flex space-x-2">
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110">
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-purple-400 text-sm mb-3">{project.category}</p>
                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full hover:bg-purple-600/30 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}

            <ServicesSection services={services} isVisible={{ services: isVisible.services }} />
            {/* <section id="services" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible.services
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                        }`}>
                        MY <span className="text-purple-400">SERVICES</span>
                    </h2>

                    <p className={`text-center text-gray-300 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible.services
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        Providing comprehensive MERN stack development services focused on creating
                        scalable web applications and enhancing user experiences.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={service.id} className={`group text-center transition-all duration-1000 ${isVisible.services
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                                style={{ transitionDelay: `${400 + index * 100}ms` }}>
                                <div className="mb-6">
                                    <div className="w-16 h-16 mx-auto bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/40 transition-all duration-300 group-hover:scale-110">
                                        <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="text-purple-400 text-sm font-mono mt-2">
                                        //{index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className={`text-4xl md:text-6xl font-bold mb-12 transition-all duration-1000 ${isVisible.contact
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                        }`}>
                        LET'S <span className="text-purple-400">WORK</span><br />
                        <span className="text-purple-400">TOGETHER</span>
                    </h2>

                    <p className={`text-xl text-gray-300 mb-12 transition-all duration-1000 delay-200 ${isVisible.contact
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        Connect with me to bring your web development ideas to life.
                    </p>

                    <div className={`flex justify-center space-x-8 mb-12 transition-all duration-1000 delay-400 ${isVisible.contact
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        <a
                            href="mailto:kriti.patel@email.com"
                            className="flex items-center space-x-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            <span>kriti.patel@email.com</span>
                        </a>
                    </div>

                    <div className={`w-full h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-8 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-500 group ${isVisible.contact
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                        }`} style={{ transitionDelay: '600ms' }}>
                        <div className="text-center">
                            <Code className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                            <p className="text-purple-400 font-bold text-xl">LET'S BUILD SOMETHING AMAZING</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">
                        © 2025 Kriti Patel. Crafted with React, TypeScript & Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
// -----------------------------------------------3333333333333333333333--------------------------------------
// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X } from 'lucide-react';

// interface Project {
//     id: number;
//     title: string;
//     category: string;
//     description: string;
//     image: string;
//     tech: string[];
//     liveUrl?: string;
//     githubUrl?: string;
// }

// interface Service {
//     id: number;
//     title: string;
//     description: string;
//     icon: React.ReactNode;
// }

// const Portfolio: React.FC = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('home');
//     const [isVisible, setIsVisible] = useState({
//         about: false,
//         projects: false,
//         services: false,
//         contact: false
//     });

//     const projects: Project[] = [
//         {
//             id: 1,
//             title: "E-Commerce Platform",
//             category: "Full Stack Development",
//             description: "Complete MERN stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
//             image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
//             tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
//             liveUrl: "#",
//             githubUrl: "#"
//         },
//         {
//             id: 2,
//             title: "Social Media Dashboard",
//             category: "Frontend Development",
//             description: "Modern React dashboard with TypeScript, real-time analytics, and responsive design for social media management.",
//             image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//             tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
//             liveUrl: "#",
//             githubUrl: "#"
//         },
//         {
//             id: 3,
//             title: "Task Management API",
//             category: "Backend Development",
//             description: "RESTful API with JWT authentication, role-based access control, and comprehensive task management features.",
//             image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
//             tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
//             githubUrl: "#"
//         },
//         {
//             id: 4,
//             title: "Real-time Chat App",
//             category: "Full Stack Development",
//             description: "WebSocket-powered chat application with file sharing, group chats, and message encryption.",
//             image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
//             tech: ["React", "Socket.io", "Node.js", "MongoDB"],
//             liveUrl: "#",
//             githubUrl: "#"
//         }
//     ];

//     const services: Service[] = [
//         {
//             id: 1,
//             title: "Frontend Development",
//             description: "Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
//             icon: <Globe className="w-8 h-8" />
//         },
//         {
//             id: 2,
//             title: "Backend Development",
//             description: "Building scalable server-side applications with Node.js, Express, and robust API architectures.",
//             icon: <Server className="w-8 h-8" />
//         },
//         {
//             id: 3,
//             title: "Database Design",
//             description: "Designing and optimizing MongoDB schemas and implementing efficient data storage solutions.",
//             icon: <Database className="w-8 h-8" />
//         },
//         {
//             id: 4,
//             title: "Full Stack Integration",
//             description: "Seamlessly connecting frontend and backend systems for complete web application solutions.",
//             icon: <Code className="w-8 h-8" />
//         }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ['home', 'about', 'projects', 'services', 'contact'];
//             const current = sections.find(section => {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const rect = element.getBoundingClientRect();
//                     return rect.top <= 100 && rect.bottom >= 100;
//                 }
//                 return false;
//             });
//             if (current) setActiveSection(current);

//             // Check visibility for animations
//             const checkVisibility = (sectionId: string) => {
//                 const element = document.getElementById(sectionId);
//                 if (element) {
//                     const rect = element.getBoundingClientRect();
//                     return rect.top < window.innerHeight * 0.8;
//                 }
//                 return false;
//             };

//             setIsVisible(prev => ({
//                 about: prev.about || checkVisibility('about'),
//                 projects: prev.projects || checkVisibility('projects'),
//                 services: prev.services || checkVisibility('services'),
//                 contact: prev.contact || checkVisibility('contact')
//             }));
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // Check initial state
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToSection = (sectionId: string) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//         setIsMenuOpen(false);
//     };

//     return (
//         <div className="min-h-screen bg-black text-white font-sans">
//             {/* Navigation */}
//             <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-16">
//                         <div className="font-bold text-xl">
//                             <span className="text-white">Kriti</span>
//                             <span className="text-purple-400">Patel</span>
//                         </div>

//                         {/* Desktop Menu */}
//                         <div className="hidden md:flex space-x-8">
//                             {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
//                                 <button
//                                     key={item}
//                                     onClick={() => scrollToSection(item)}
//                                     className={`capitalize transition-colors ${activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
//                                         }`}
//                                 >
//                                     {item}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="md:hidden"
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         >
//                             {isMenuOpen ? <X /> : <Menu />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="md:hidden bg-black border-t border-gray-800 animate-in slide-in-from-top duration-200">
//                         <div className="px-2 pt-2 pb-3 space-y-1">
//                             {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
//                                 <button
//                                     key={item}
//                                     onClick={() => scrollToSection(item)}
//                                     className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white capitalize w-full text-left"
//                                 >
//                                     {item}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Hero Section */}
//             <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

//                 {/* Floating animated elements */}
//                 <div className="absolute inset-0 overflow-hidden">
//                     <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
//                     <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
//                     <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-300"></div>
//                 </div>

//                 <div className="container mx-auto px-4 text-center z-10">
//                     <div className="mb-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
//                         <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider overflow-hidden">
//                             <span className="inline-block animate-in slide-in-from-left-4 duration-1000 delay-200">AVAILABLE</span>
//                             <span className="inline-block animate-in slide-in-from-left-4 duration-1000 delay-300 ml-2">FOR</span>
//                             <span className="inline-block animate-in slide-in-from-left-4 duration-1000 delay-400 ml-2">OPPORTUNITIES</span>
//                         </p>
//                         <h1 className="text-6xl md:text-8xl font-bold mb-6 overflow-hidden">
//                             <span className="block animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-200">KRITI</span>
//                             <span className="block text-purple-400 animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-400">PATEL</span>
//                         </h1>
//                         <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
//                             BASED IN Gujarat, India
//                         </p>
//                     </div>

//                     {/* Profile Image */}
//                     <div className="mb-8 animate-in fade-in-0 scale-in-0 duration-1000 delay-700">
//                         <div className="w-32 h-32 mx-auto mb-6 relative">
//                             <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-1 animate-pulse">
//                                 <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
//                                     <img
//                                         src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
//                                         alt="Kriti Patel"
//                                         className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mb-12 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-800">
//                         <div className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
//                             <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent overflow-hidden">
//                                 <span className="inline-block animate-in slide-in-from-left-8 duration-1000 delay-900">I</span>
//                                 <span className="inline-block animate-in slide-in-from-left-8 duration-1000 delay-1000 ml-2">AM</span>
//                                 <span className="inline-block animate-in slide-in-from-left-8 duration-1000 delay-1100 ml-2">A</span>
//                                 <span className="inline-block animate-in slide-in-from-left-8 duration-1000 delay-1200 ml-2">PASSIONATE</span>
//                             </div>
//                             <div className="text-white mt-2 overflow-hidden">
//                                 <span className="inline-block animate-in slide-in-from-right-8 duration-1000 delay-1300">MERN</span>
//                                 <span className="inline-block animate-in slide-in-from-right-8 duration-1000 delay-1400 ml-2">STACK</span>
//                                 <span className="inline-block animate-in slide-in-from-right-8 duration-1000 delay-1500 ml-2">DEVELOPER.</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex justify-center space-x-6 mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1600">
//                         <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
//                             <Github className="w-6 h-6 group-hover:animate-pulse" />
//                         </a>
//                         <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
//                             <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
//                         </a>
//                         <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
//                             <Mail className="w-6 h-6 group-hover:animate-pulse" />
//                         </a>
//                     </div>

//                     <button
//                         onClick={() => scrollToSection('about')}
//                         className="animate-bounce hover:animate-pulse"
//                     >
//                         <ChevronDown className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors" />
//                     </button>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id="about" className="py-20 bg-gray-900/50 relative overflow-hidden">
//                 {/* Background animated elements */}
//                 <div className="absolute inset-0">
//                     <div className="absolute top-20 right-10 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
//                     <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-700"></div>
//                 </div>

//                 <div className="container mx-auto px-4 relative z-10">
//                     <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 overflow-hidden ${isVisible.about
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-12'
//                         }`}>
//                         <span className="text-purple-400 inline-block">ABOUT</span>
//                     </h2>

//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className={`transition-all duration-1000 delay-200 ${isVisible.about
//                             ? 'opacity-100 translate-x-0'
//                             : 'opacity-0 -translate-x-12'
//                             }`}>
//                             <div className="mb-6 overflow-hidden">
//                                 <p className="text-lg text-gray-300 leading-relaxed animate-in slide-in-from-left-4 duration-1000">
//                                     I work at the intersection of creativity and technology — using the MERN stack
//                                     and modern development practices to turn innovative ideas into seamless web experiences.
//                                 </p>
//                             </div>

//                             <div className="mb-6 overflow-hidden">
//                                 <p className="text-lg text-gray-300 leading-relaxed animate-in slide-in-from-left-4 duration-1000 delay-200">
//                                     My approach is methodical, my solutions scalable, and my commitment to clean code uncompromised.
//                                 </p>
//                             </div>

//                             <div className="mb-8">
//                                 <h3 className="text-xl font-semibold mb-4 text-purple-400 overflow-hidden">
//                                     <span className="inline-block animate-in slide-in-from-left-4 duration-1000 delay-400">CHALLENGES</span>
//                                     <span className="inline-block animate-in slide-in-from-left-4 duration-1000 delay-500 ml-2">&</span>
//                                     <span className="inline-block animate-in slide-in-from-left-4 duration-1000 delay-600 ml-2">APPROACH</span>
//                                 </h3>
//                                 <p className="text-gray-300 leading-relaxed">
//                                     I focus on user-centered development principles, ensuring each component serves a purpose
//                                     while enhancing the overall user experience. I employ responsive design techniques,
//                                     optimize performance, and write maintainable code that scales.
//                                 </p>
//                             </div>

//                             <div className="grid grid-cols-2 gap-6">
//                                 <div className="bg-purple-600/20 p-4 rounded-lg hover:bg-purple-600/30 transition-all duration-300 hover:scale-105 group">
//                                     <h4 className="font-semibold mb-2 group-hover:text-purple-300 transition-colors">Frontend</h4>
//                                     <p className="text-sm text-gray-300">React, TypeScript, Tailwind CSS</p>
//                                 </div>
//                                 <div className="bg-blue-600/20 p-4 rounded-lg hover:bg-blue-600/30 transition-all duration-300 hover:scale-105 group">
//                                     <h4 className="font-semibold mb-2 group-hover:text-blue-300 transition-colors">Backend</h4>
//                                     <p className="text-sm text-gray-300">Node.js, Express, MongoDB</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className={`relative transition-all duration-1000 delay-400 ${isVisible.about
//                             ? 'opacity-100 translate-x-0'
//                             : 'opacity-0 translate-x-12'
//                             }`}>
//                             <div className="relative w-full h-96 group">
//                                 {/* Main image container */}
//                                 <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-500 overflow-hidden">
//                                     <img
//                                         src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
//                                         alt="Kriti Patel - Developer"
//                                         className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-blue-900/50 group-hover:from-purple-900/30 group-hover:to-blue-900/30 transition-all duration-500"></div>
//                                 </div>

//                                 {/* Floating code icon */}
//                                 <div className="absolute top-4 right-4 p-3 bg-black/30 backdrop-blur-sm rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
//                                     <Code className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
//                                 </div>

//                                 {/* Animated border */}
//                                 <div className="absolute inset-0 rounded-lg border-2 border-purple-400/20 group-hover:border-purple-400/40 transition-all duration-500"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Projects Section */}
//             <section id="projects" className="py-20">
//                 <div className="container mx-auto px-4">
//                     <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible.projects
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-12'
//                         }`}>
//                         <span className="text-purple-400">FEATURED</span> PROJECTS
//                     </h2>

//                     <p className={`text-center text-gray-300 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible.projects
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-8'
//                         }`}>
//                         My development journey comes alive in the digital realm. With clean code and modern frameworks,
//                         I craft seamless experiences from concept to deployment.
//                     </p>

//                     <div className="grid md:grid-cols-2 gap-8">
//                         {projects.map((project, index) => (
//                             <div key={project.id} className={`group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 ${isVisible.projects
//                                 ? 'opacity-100 translate-y-0'
//                                 : 'opacity-0 translate-y-12'
//                                 }`}
//                                 style={{ transitionDelay: `${400 + index * 100}ms` }}>
//                                 <div className="aspect-video overflow-hidden">
//                                     <img
//                                         src={project.image}
//                                         alt={project.title}
//                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                                     />
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex justify-between items-start mb-3">
//                                         <h3 className="text-xl font-bold">{project.title}</h3>
//                                         <div className="flex space-x-2">
//                                             {project.liveUrl && (
//                                                 <a href={project.liveUrl} className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110">
//                                                     <ExternalLink className="w-4 h-4" />
//                                                 </a>
//                                             )}
//                                             {project.githubUrl && (
//                                                 <a href={project.githubUrl} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110">
//                                                     <Github className="w-4 h-4" />
//                                                 </a>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <p className="text-purple-400 text-sm mb-3">{project.category}</p>
//                                     <p className="text-gray-300 text-sm mb-4">{project.description}</p>
//                                     <div className="flex flex-wrap gap-2">
//                                         {project.tech.map((tech) => (
//                                             <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full hover:bg-purple-600/30 transition-colors">
//                                                 {tech}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section id="services" className="py-20 bg-gray-900/50">
//                 <div className="container mx-auto px-4">
//                     <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible.services
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-12'
//                         }`}>
//                         MY <span className="text-purple-400">SERVICES</span>
//                     </h2>

//                     <p className={`text-center text-gray-300 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible.services
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-8'
//                         }`}>
//                         Providing comprehensive MERN stack development services focused on creating
//                         scalable web applications and enhancing user experiences.
//                     </p>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {services.map((service, index) => (
//                             <div key={service.id} className={`group text-center transition-all duration-1000 ${isVisible.services
//                                 ? 'opacity-100 translate-y-0'
//                                 : 'opacity-0 translate-y-12'
//                                 }`}
//                                 style={{ transitionDelay: `${400 + index * 100}ms` }}>
//                                 <div className="mb-6">
//                                     <div className="w-16 h-16 mx-auto bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/40 transition-all duration-300 group-hover:scale-110">
//                                         <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
//                                             {service.icon}
//                                         </div>
//                                     </div>
//                                     <div className="text-purple-400 text-sm font-mono mt-2">
//                                         //{index + 1}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
//                                 <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="py-20">
//                 <div className="container mx-auto px-4 text-center">
//                     <h2 className={`text-4xl md:text-6xl font-bold mb-12 transition-all duration-1000 ${isVisible.contact
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-12'
//                         }`}>
//                         LET'S <span className="text-purple-400">WORK</span><br />
//                         <span className="text-purple-400">TOGETHER</span>
//                     </h2>

//                     <p className={`text-xl text-gray-300 mb-12 transition-all duration-1000 delay-200 ${isVisible.contact
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-8'
//                         }`}>
//                         Connect with me to bring your web development ideas to life.
//                     </p>

//                     <div className={`flex justify-center space-x-8 mb-12 transition-all duration-1000 delay-400 ${isVisible.contact
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-8'
//                         }`}>
//                         <a
//                             href="mailto:kriti.patel@email.com"
//                             className="flex items-center space-x-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:scale-105"
//                         >
//                             <Mail className="w-5 h-5" />
//                             <span>kriti.patel@email.com</span>
//                         </a>
//                     </div>

//                     <div className={`w-full h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-8 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-500 group ${isVisible.contact
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-0 translate-y-12'
//                         }`} style={{ transitionDelay: '600ms' }}>
//                         <div className="text-center">
//                             <Code className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
//                             <p className="text-purple-400 font-bold text-xl">LET'S BUILD SOMETHING AMAZING</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="py-8 border-t border-gray-800">
//                 <div className="container mx-auto px-4 text-center">
//                     <p className="text-gray-400">
//                         © 2025 Kriti Patel. Crafted with React, TypeScript & Tailwind CSS.
//                     </p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Portfolio;