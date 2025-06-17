// // hooks/useThreeJS.ts
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export const useThreeJS = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const sceneRef = useRef<THREE.Scene | null>(null);
//     const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//     const animationIdRef = useRef<number | null>(null);

//     useEffect(() => {
//         if (!canvasRef.current) return;

//         // Scene setup
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000
//         );
//         const renderer = new THREE.WebGLRenderer({
//             canvas: canvasRef.current,
//             alpha: true,
//             antialias: true,
//         });

//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//         // Create floating particles
//         const geometry = new THREE.BufferGeometry();
//         const particlesCount = 100;
//         const positions = new Float32Array(particlesCount * 3);

//         for (let i = 0; i < particlesCount * 3; i++) {
//             positions[i] = (Math.random() - 0.5) * 10;
//         }

//         geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

//         const material = new THREE.PointsMaterial({
//             color: 0x667eea,
//             size: 0.02,
//             transparent: true,
//             opacity: 0.8,
//         });

//         const particles = new THREE.Points(geometry, material);
//         scene.add(particles);

//         camera.position.z = 5;

//         // Store references
//         sceneRef.current = scene;
//         rendererRef.current = renderer;

//         // Animation loop
//         const animate = () => {
//             if (!sceneRef.current || !rendererRef.current) return;

//             particles.rotation.x += 0.001;
//             particles.rotation.y += 0.001;

//             rendererRef.current.render(sceneRef.current, camera);
//             animationIdRef.current = requestAnimationFrame(animate);
//         };

//         animate();

//         // Handle resize
//         const handleResize = () => {
//             if (!rendererRef.current) return;

//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         // Cleanup
//         return () => {
//             window.removeEventListener('resize', handleResize);

//             if (animationIdRef.current) {
//                 cancelAnimationFrame(animationIdRef.current);
//             }

//             if (rendererRef.current) {
//                 rendererRef.current.dispose();
//             }

//             if (sceneRef.current) {
//                 sceneRef.current.clear();
//             }
//         };
//     }, []);

//     return canvasRef;
// };

// hooks/useThreeJS.ts
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const useThreeJS = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationIdRef = useRef<number | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true, // Keep transparent for portfolio overlay
            antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Enhanced floating particles
        const geometry = new THREE.BufferGeometry();
        const particlesCount = 150;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount; i++) {
            // Spread particles in a larger area
            positions[i * 3] = (Math.random() - 0.5) * 15;     // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z

            // Portfolio-friendly color palette
            const colorChoice = Math.random();
            if (colorChoice < 0.4) {
                // Blue tones (matching your #667eea)
                colors[i * 3] = 0.4;     // r
                colors[i * 3 + 1] = 0.5; // g
                colors[i * 3 + 2] = 0.9; // b
            } else if (colorChoice < 0.7) {
                // Purple/Violet tones
                colors[i * 3] = 0.6;     // r
                colors[i * 3 + 1] = 0.3; // g
                colors[i * 3 + 2] = 0.9; // b
            } else {
                // White/Light blue for contrast
                colors[i * 3] = 0.8;     // r
                colors[i * 3 + 1] = 0.9; // g
                colors[i * 3 + 2] = 1.0; // b
            }

            // Variable sizes for depth
            sizes[i] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Enhanced material
        const material = new THREE.PointsMaterial({
            size: 0.08,
            transparent: true,
            opacity: 0.7,
            vertexColors: true,
            blending: THREE.AdditiveBlending, // Gives a nice glow effect
            sizeAttenuation: true,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.set(0, 0, 8);

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;
        particlesRef.current = particles;

        // Enhanced animation with subtle mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let time = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            if (!sceneRef.current || !rendererRef.current || !particlesRef.current) return;

            time += 0.008;

            // Rotate particles slowly
            particlesRef.current.rotation.x += 0.0015;
            particlesRef.current.rotation.y += 0.002;

            // Add subtle wave motion
            const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
            const originalPositions = particlesRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += Math.sin(time + positions[i] * 0.05) * 0.008;
            }
            particlesRef.current.geometry.attributes.position.needsUpdate = true;

            // Subtle camera movement following mouse (very gentle for portfolio)
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.01;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.01;
            camera.lookAt(scene.position);

            rendererRef.current.render(sceneRef.current, camera);
            animationIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!rendererRef.current) return;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);

            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }

            if (rendererRef.current) {
                rendererRef.current.dispose();
            }

            if (sceneRef.current) {
                sceneRef.current.clear();
            }
        };
    }, []);

    return canvasRef;
};