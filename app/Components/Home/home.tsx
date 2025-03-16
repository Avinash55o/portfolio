"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {  Environment, ContactShadows } from "@react-three/drei";
import BitCoinModel from "../model/model";
import { useState, Suspense } from "react";

export default function Home() {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-slate-50"
          >
             Hi I&apos;m <span className="text-indigo-500">Avinash</span> 👋
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-200"
          >
            A passionate <span className="text-indigo-400 font-medium">Full-Stack Developer</span> & Web3 enthusiast, creating beautiful and functional web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-start gap-4 mt-4"
          >
            <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-indigo-500 text-indigo-400 font-semibold rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition">
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
          <div className="w-[400px] h-[400px] relative ">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
             
              
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
                <Environment preset="sunset" />
                <ContactShadows 
                  opacity={0.4} 
                  scale={5} 
                  blur={1} 
                  far={10} 
                  resolution={256} 
                  color="#000000" 
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