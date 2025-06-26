// components/ui/Container.tsx
'use client';

import React from 'react';

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = '', children }) => {
    return (
        <div className={`mx-auto px-4 sm:px-6 lg:px-20 max-w-8xl ${className}`}>
            {children}
        </div>
    );
};

export default Container;
