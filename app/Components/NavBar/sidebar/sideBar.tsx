"use client";

import { useState, useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: <FaHome />, link: "#home" },
  { name: "About", icon: <FaUser />, link: "#about" },
  { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
];

export default function SideBar({ closeSidebar }: { closeSidebar: () => void }) {
  const [active, setActive] = useState("Home");

  // Scroll to section smoothly
  const handleClick = (name: string, link: string) => {
    setActive(name);
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
    closeSidebar(); // Close sidebar after clicking
  };

  // Auto-detect the active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset to detect sections correctly

      menuItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-end z-50">
      <div className="w-64 bg-white h-full shadow-lg flex flex-col p-5">
        {/* Close Button */}
        <button
          className="self-end text-2xl text-gray-800"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>

        {/* Sidebar Menu */}
        <ul className="mt-8 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleClick(item.name, item.link)}
                className={`flex items-center text-lg transition ${
                  active === item.name ? "text-pink-500 font-bold" : "text-gray-800 hover:text-pink-500"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
