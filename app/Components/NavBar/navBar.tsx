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
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (name: string, link: string) => {
    setActive(name);
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  // Track scrolling for transparent/solid navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Auto-detect the active section based on scroll
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
      <nav className={`fixed top-0 left-0 right-0 z-50 mx-4 md:mx-8 mt-4 
        ${scrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" 
          : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"} 
        rounded-2xl py-2 px-4 md:px-8 transition-all duration-300`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  active === item.name
                    ? "bg-indigo-500 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => handleClick(item.name, item.link)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Theme Toggle (Desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Render Sidebar when open */}
      {sidebarOpen && <SideBar closeSidebar={() => setSidebarOpen(false)} />}
    </>
  );
}