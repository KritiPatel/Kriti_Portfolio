'use client'
import React from 'react';
import { footerData } from '../../../config/data';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400">
                    {footerData?.title}
                </p>
            </div>
        </footer>
    );
};

export default Footer;