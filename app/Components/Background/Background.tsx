"use client";
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';




export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />     
    
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 