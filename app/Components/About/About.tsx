import Image from "next/image";
import ResumeDownload from "../ResumeDownload/resumeDownload";

export default function About() {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/hero.jpeg" 
              alt="Profile Picture"
              width={400}
              height={400}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
            />
          </div>
          
          {/* Right - Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Hey! I&apos;m <span className="text-pink-500 font-semibold">Avinash Boruah</span>, a passionate Web3 Developer specializing in <span className="text-pink-500 font-semibold">Next.js, Solidity, and smart contracts.</span>
              I love building decentralized applications, exploring blockchain technology, and creating innovative solutions for the Web3 space.
            </p>
            <div className="flex justify-center md:justify-start">
              <ResumeDownload/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  