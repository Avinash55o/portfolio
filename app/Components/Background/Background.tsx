"use client";
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export default function Background() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check theme on mount and when it changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check on initial load
    checkTheme();

    // Create an observer to watch for class changes on the html element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={isDarkMode ? 0.3 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 0.5 : 0.8} />
        
        {/* Render stars only in dark mode */}
        {isDarkMode && (
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
        )}
        
        <mesh visible={!isDarkMode} scale={[150, 150, 1]} position={[0, 0, -30]}>
          <planeGeometry />
          <meshBasicMaterial color="#f0f9ff" opacity={0.5} transparent />
        </mesh>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
} 