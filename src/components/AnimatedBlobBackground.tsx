'use-client'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';


const AnimatedBlobBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(300, 300);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(1, 6);
        const material = new THREE.MeshStandardMaterial({
            color: 0x8844ff,
            roughness: 0.5,
            metalness: 0.3,
            transparent: true,
            opacity: 0.8,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        camera.position.z = 3;

        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.y += 0.005;
            mesh.rotation.x += 0.003;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="w-64 h-64 rounded-full overflow-hidden" />;
};


export default AnimatedBlobBackground