"use client";
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function FloatingParticles() {
  const particlesRef = useRef<Mesh>(null);
  
  return (
    <mesh ref={particlesRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#ff69b4"
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingParticles />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 