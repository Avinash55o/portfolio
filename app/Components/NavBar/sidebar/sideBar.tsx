"use client";
import ThemeToggle from "../theme/themeToggle";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: <FaHome />, link: "#home" },
  { name: "About", icon: <FaUser />, link: "#about" },
  { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
];

export default function SideBar({ closeSidebar }: { closeSidebar: () => void }) {
  const [active, setActive] = useState("");

  // Initialize active section on mount
  useEffect(() => {
    const path = window.location.hash;
    if (path) {
      const item = menuItems.find(item => item.link === path);
      if (item) setActive(item.name);
    }
  }, []);

  // Scroll to section smoothly
  const handleClick = (name: string, link: string) => {
    setActive(name);
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
    closeSidebar(); // Close sidebar after clicking
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50">
      <div className="w-72 bg-white dark:bg-gray-900 h-full shadow-xl flex flex-col p-6 animate-slide-in">
        {/* Header & Close Button */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          <button
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-gray-700 my-4"></div>

        {/* Sidebar Menu */}
        <ul className="mt-4 space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleClick(item.name, item.link)}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  active === item.name 
                    ? "bg-indigo-500 text-white" 
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-grow"></div>
        
        {/* Theme Toggle */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300">Toggle theme</p>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
