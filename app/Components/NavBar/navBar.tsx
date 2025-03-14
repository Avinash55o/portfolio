"use client";
import { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";
import SideBar from "./sidebar/sideBar";
import ThemeToggle from "./theme/themeToggle";

const menuItems = [
  { name: "Home", icon: <FaHome />, link: "#home" },
  { name: "About", icon: <FaUser />, link: "#about" },
  { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ Sidebar state
  const handleClick = (name: string, link: string) => {
    setActive(name);
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg rounded-4xl mt-4 flex justify-between items-center py-2 px-6 md:px-16 z-50">
        {/* Logo Section */}
        <div className="text-xl font-bold text-gray-800">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                active === item.name
                  ? "bg-pink-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => handleClick(item.name, item.link)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </button>
          ))}
          
        </div>
        <ThemeToggle />

        {/* Mobile Menu Icon - Opens Sidebar */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Render Sidebar when open */}
      {sidebarOpen && <SideBar closeSidebar={() => setSidebarOpen(false)} />}
    </>
  );
}
