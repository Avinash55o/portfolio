"use client";
import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Solidity",
  "Web3.js",
  "Ethers.js",
  "Hardhat",
  "Prisma",
  "Docker",
  "Figma",
  "Blender",
  "OpenVINO",
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My{" "}
        <span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-cyan-950 p-4 rounded-3xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <span className="text-xs md:text-lg font-medium text-gray-700 dark:text-gray-300">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
