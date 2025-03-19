import Image from "next/image";
import ResumeDownload from "../ResumeDownload/resumeDownload";

export default function About() {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/myIMG.jpeg" 
              alt="Profile Picture"
              width={400}
              height={400}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
            />
          </div>
          
          {/* Right - Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6"><span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent">Leveling Up:</span> From Web2 to Web3 and Beyond!</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Hey! I&apos;m <span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent  font-semibold">Avinash Boruah </span>
              -- part developer, part problem-solver, and full-time adventurer in the digital realm.
              <div>I’ve been building cool stuff on the web for a while now, and somewhere along the way, I stumbled into the world of Web3. It’s wild, exciting, and honestly? I’m loving every bit of it.</div>
              <div ><span className="bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent">Still figuring things out</span> , but that’s where all the fun is, right?</div>
            </p>
            <div className="flex justify-center md:justify-start">
              <ResumeDownload/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  