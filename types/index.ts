export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface VisibilityState {
    home: boolean;
    about: boolean;
    projects: boolean;
    services: boolean;
    contact: boolean;
}

export interface Hero {
    firstName: string;
    lastName: string;
    location: string;
    about: string;
    role: string;
    socialIcons: {
        href: string;
        icon: React.ReactNode;
    }[];
}

export interface AboutSectionPropsData {
    description: string;
    challengesTitle: string;
    challengesDescription: string;
    skills: {
        label: string;
        tools: string;
        bgColor: string;
    }[];
    icon: React.ReactNode;
}
