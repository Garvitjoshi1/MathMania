// src/components/HeroCanvas.tsx (Updated)

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    // --- Setup Scene, Camera, Renderer ---
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    // Use a very dark grey background, not pure black (Apple detail)
    scene.background = new THREE.Color(0x0a0a0a); 

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    
    // Antialiasing and transparency are key to quality
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    // --- Object Setup (Use Muted/Glossy Look) ---
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    // Use a more elegant, slightly reflective material (MeshPhongMaterial for subtle shine)
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x4b6bfb, // Your accent color
        shininess: 50,  // Subtle gloss
        specular: 0xffffff,
        wireframe: false // Solid object looks more premium
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Lighting (Soft, key lighting is critical) ---
    const ambientLight = new THREE.AmbientLight(0x404040, 5); // Soft ambient light
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);
    
    camera.position.z = 5;

    // --- Animation Loop & Resize Handler ---
    let frameId: number;
    const animate = () => {
      mesh.rotation.x += 0.003; // Slow rotation for elegance
      mesh.rotation.y += 0.005; // Slow rotation for elegance
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
        const newWidth = currentMount.clientWidth;
        const newHeight = currentMount.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Increase height for a stronger 'Hero' presence (60vh is often too short)
  return <div ref={mountRef} className="w-full h-[80vh] bg-black" />;
}