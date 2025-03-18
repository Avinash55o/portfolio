"use client";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:text-pink-500 transition">Home</a>
          </li>
          <li>
            <a href="#agit bout" className="hover:text-pink-500 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-xl hover:text-pink-500 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-pink-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-pink-500 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl hover:text-pink-500 transition">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} LOGO. All rights reserved.
      </div>
    </footer>
  );
}
