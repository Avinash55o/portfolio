"use client"
import { FaMailchimp, FaTwitter, FaLinkedin, FaGithub, FaCopy } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const walletAddress = "0xYourWalletAddressHere"; // Replace with your actual wallet

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-[#0d0d0d] text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-center">Let&apos;s Connect</h2>
      <p className="text-gray-400 text-lg mb-8 text-center">
        Have a project in mind? Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg w-full">
        {/* Email */}
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition"
        >
          <FaMailchimp size={24} className="text-blue-400" />
          <span>your.email@example.com</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition"
        >
          <FaGithub size={24} className="text-gray-400" />
          <span>github.com/yourgithub</span>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition"
        >
          <FaTwitter size={24} className="text-blue-500" />
          <span>@yourtwitter</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition"
        >
          <FaLinkedin size={24} className="text-blue-600" />
          <span>linkedin.com/in/yourlinkedin</span>
        </a>

        {/* Wallet Address */}
        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition cursor-pointer" onClick={handleCopy}>
          <FaCopy size={24} className="text-green-400" />
          <span className="truncate max-w-[200px]">{walletAddress}</span>
          {copied && <span className="text-green-400 text-sm">Copied!</span>}
        </div>
      </div>
    </section>
  );
}
