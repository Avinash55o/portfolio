"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {  Environment, ContactShadows,OrbitControls } from "@react-three/drei";
import BitCoinModel from "../model/model";
import { useState, Suspense } from "react";

export default function Home() {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto  px-6 md:px-16 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-slate-50"
          >
             Crafting Digital Solutions, <span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent">One Line of Code at a Time</span> 
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-yellow-50"
          >
           From frontend interfaces to blockchain logic, I love solving problems with clean, efficient code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-start gap-4 mt-4"
          >
            <a href="#projects" className="px-6 py-3 bg-yellow-500 text- font-semibold rounded-full shadow-lg hover:bg-gradient-to-br from-red-500 to-yellow-400 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-yellow-50 text-amber-600 font-semibold rounded-full shadow-lg hover:bg-gradient-to-br from-red-500 to-yellow-400 hover:text-white transition ">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side: 3D Model */}
        <motion.div 
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-auto relative"
        >
          <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] relative ml-8 md:ml-0 overflow-hidden  ">
            <Canvas 
              shadows 
              camera={{ position: [0, 0, 5], fov: 40  }}
            >
             
              
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              
              <Suspense fallback={null}>
                <BitCoinModel 
                  position={[0, 0, 0]}
                  scale={0.03} 
                  rotation={[0, 0, 0]}
                  onLoad={() => setIsModelLoaded(true)}
                />
                <Environment preset="city" />
                <ContactShadows 
                  opacity={0.4} 
                  scale={5} 
                  blur={1} 
                  far={10} 
                  resolution={256} 
                  color="#000000" 
                />
                 <OrbitControls 
                  enablePan={false} 
                  enableZoom={false} 
                  autoRotate
                  autoRotateSpeed={2}
                  minPolarAngle={Math.PI / 2.5} 
                  maxPolarAngle={Math.PI / 2.5}
                />
              </Suspense>
              
            
            </Canvas>
            
            {!isModelLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                Loading 3D Model...
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}