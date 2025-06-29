'use client'
import React from 'react';
import { Service } from '../../../types';
import Container from '../ui/Container';

interface ServicesSectionProps {
    services: Service[];
    isVisible: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services, isVisible }) => {
    return (
        <>
            <style jsx>{`
                .card-wrapper {
                    perspective: 1200px;
                }

                .card-inner {
                    transition: transform 0.8s ease-in-out;
                    transform-style: preserve-3d;
                    position: relative;
                    height: 100%;
                    width: 100%;
                }

                .card-wrapper:hover .card-inner {
                    transform: rotateY(180deg) scale(1.02);
                }

                .card-front, .card-back {
                    backface-visibility: hidden;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    transform-style: preserve-3d;
                }

                .card-front {
                    background-color: #1f2937; /* Tailwind's bg-gray-800 */
                    z-index: 2;
                }

                .card-back {
                    background-color: #111827; /* Tailwind's bg-gray-900 */
                    transform: rotateY(180deg);
                    z-index: 1;
                }
            `}</style>

            <section id="services" className="py-20 bg-gray-900/50">
                <Container>
                    <div className="container mx-auto">
                        {/* Heading */}
                        <h2 className={`text-4xl md:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}>
                            MY <span className="text-purple-400">SERVICES</span>
                        </h2>

                        <p className={`text-center text-gray-300 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}>
                            Providing comprehensive MERN stack development services focused on creating
                            scalable web applications and enhancing user experiences.
                        </p>

                        {/* Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`relative h-64 card-wrapper transition-all duration-1000 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                                >
                                    <div className="card-inner rounded-xl">
                                        {/* Front */}
                                        <div className="card-front">
                                            <div className="w-14 h-14 mb-4 bg-purple-600/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-600/40">
                                                <div className="text-purple-400 text-2xl flex items-center justify-center">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <div className="text-purple-400 text-sm font-mono">//{index + 1}</div>
                                            <h3 className="text-xl font-bold mt-2 text-white">{service.title}</h3>
                                        </div>

                                        {/* Back */}
                                        <div className="card-back">
                                            <p className="text-gray-300 text-sm leading-relaxed px-2">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ServicesSection;