'use client'
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Code, Database, Server, Smartphone, Globe, Mail, Phone, MapPin, Github, ExternalLink, Download } from 'lucide-react';


const EducationSection = () => {
    const education = [
        {
            degree: 'Bachelor of Computer Science',
            institution: 'University of Technology',
            year: '2019-2023',
            description: 'Focused on software engineering, data structures, and web technologies.',
            grade: 'GPA: 3.8/4.0'
        },
        {
            degree: 'Full Stack Web Development',
            institution: 'Coding Bootcamp',
            year: '2023',
            description: 'Intensive program covering MERN stack, database design, and deployment.',
            grade: 'Certificate of Excellence'
        },
        {
            degree: 'AWS Cloud Practitioner',
            institution: 'Amazon Web Services',
            year: '2024',
            description: 'Cloud computing fundamentals and AWS services certification.',
            grade: 'Certified'
        }
    ];

    return (
        <section id="education" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Education
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="glass-card p-6 h-full">
                                <div className="text-cyan-400 font-bold text-sm mb-2">{edu.year}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                <h4 className="text-purple-400 font-medium mb-4">{edu.institution}</h4>
                                <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                                <div className="text-green-400 font-semibold text-sm">{edu.grade}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default EducationSection