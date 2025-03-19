"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import ResumeDownload from "../ResumeDownload/resumeDownload";
import Skills from "./skill/skill";

export default function About() {
  return (
    <motion.div initial={{opacity:0,y:50}}  whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }} className="w-full max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ scale:0.8,opacity:0 }}
          whileInView={{ scale: 1, opacity:1 }}
          transition={{ duration: 0.8,delay:0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image
            src="/myIMG.jpeg"
            alt="Profile Picture"
            width={400}
            height={400}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration:0.8, delay:0.4 }} viewport={{once:true, amount:0.3}} className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent">
              Leveling Up:
            </span>{" "}
            From Web2 to Web3 and Beyond!
          </h2>
          <div className="text-gray-600 dark:text-gray-300 text-xs md:text-lg leading-relaxed mb-8">
            Hey! I&apos;m{" "}
            <span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent  font-semibold">
              Avinash Boruah{" "}
            </span>
            -- part developer, part problem-solver, and full-time adventurer in
            the digital realm.
            <p>
              I’ve been building cool stuff on the web for a while now, and
              somewhere along the way, I stumbled into the world of Web3. It’s
              wild, exciting, and honestly? I’m loving every bit of it.
            </p>
            <div>
              <span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent">
                Still figuring things out
              </span>{" "}
              , but that’s where all the fun is, right?
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <ResumeDownload />
          </div>
        </motion.div>
      </div>
      <motion.div>
  <Skills/>
      </motion.div>
    </motion.div>
  );
}
