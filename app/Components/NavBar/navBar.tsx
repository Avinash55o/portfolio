"use client";
import { useState, useEffect } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (name: string, link: string) => {
    setActive(name);
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-detect the active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

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
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 mx-4 md:mx-8 mt-4 bg-yellow-50 backdrop-blur-md shadow-lg rounded-4xl py-2 px-4 md:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                active === item.name
                  ? "bg-yellow-500 text-white shadow-md"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => handleClick(item.name, item.link)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </button>
          ))}
          
        </div>
        <div className="hidden md:block">
        <ThemeToggle />
        </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-400 hover:text-gray-600 text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Render Sidebar when open */}
      {sidebarOpen && <SideBar closeSidebar={() => setSidebarOpen(false)} />}
    </>
  );
}