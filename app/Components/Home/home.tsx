"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
             Hi I&apos;m <span className="text-pink-500">Avinash</span> 👋
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            A passionate <span className="text-pink-500 font-medium">Full-Stack Developer</span> & Web3 enthusiast, creating beautiful and functional web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-start gap-4 mt-4"
          >
            <a href="#projects" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-pink-500 text-pink-500 font-semibold rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-auto"
        >
          <Image 
            src="/hero.jpeg"
            width={400}
            height={400}
            alt="Hero Image"
            className="rounded-full shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}