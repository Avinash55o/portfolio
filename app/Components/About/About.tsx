import Image from "next/image";
import ResumeDownload from "../ResumeDownload/resumeDownload";

export default function About() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-20 bg-gray-900 text-white">
        {/* Left - Image */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Image
            src="/hero.jpeg" 
            alt="Profile Picture"
            width={400}
            height={400}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
          />
        </div>
        
        {/* Right - Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hey! I&apos;m <span className="text-blue-400 font-semibold">Avinash Boruah</span>, a passionate Web3 Developer specializing in <span className="text-blue-400 font-semibold">Next.js, Solidity, and smart contracts.</span>
            I love building decentralized applications, exploring blockchain technology, and creating innovative solutions for the Web3 space.
          </p>
          <ResumeDownload/>
        </div>
      </section>
    );
  }
  