import { Code, Database, Globe, Server, Github, Linkedin, Mail } from "lucide-react";
import { AboutSectionPropsData, Hero, Project, Service } from "../types";

export const menuItems = ['home', 'about', 'projects', 'services', 'contact',]

export const projects: Project[] = [
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

export const services: Service[] = [
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

export const heroData: Hero = {
    firstName: 'KRITI',
    lastName: 'PATEL',
    location: 'Gujarat, India',
    about: 'I AM A PASSIONATE',
    role: 'MERN STACK DEVELOPER.',
    socialIcons: [
        { href: 'https://github.com/yourname', icon: <Github className="w-6 h-6" /> },
        { href: 'https://linkedin.com/in/yourname', icon: <Linkedin className="w-6 h-6" /> },
        { href: 'mailto:your@email.com', icon: <Mail className="w-6 h-6" /> },
    ],
};

export const aboutData: AboutSectionPropsData = {
    description:
        'I work at the intersection of creativity and technology — using the MERN stack and modern development practices to turn innovative ideas into seamless web experiences. My approach is methodical, my solutions scalable, and my commitment to clean code uncompromised.',
    challengesTitle: 'CHALLENGES & APPROACH',
    challengesDescription:
        'I focus on user-centered development principles, ensuring each component serves a purpose while enhancing the overall user experience. I employ responsive design techniques, optimize performance, and write maintainable code that scales.',
    skills: [
        {
            label: 'Frontend',
            tools: 'React, TypeScript, Tailwind CSS',
            bgColor: 'bg-purple-600/20',
        },
        {
            label: 'Backend',
            tools: 'Node.js, Express, MongoDB',
            bgColor: 'bg-blue-600/20',
        },
    ],
    icon: <Code className="w-32 h-32 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />,
};

export const contactData = {
    email: 'kriti@gmail.com'
}

export const footerData = {
    title: '© 2025 Kriti Patel. Crafted with React, TypeScript & Tailwind CSS'
}
