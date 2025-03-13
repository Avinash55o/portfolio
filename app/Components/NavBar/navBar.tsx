"use client";
import { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";
import SideBar from "./sidebar/sideBar";

const menuItems = [
  { name: "Home", icon: <FaHome />, link: "#" },
  { name: "About", icon: <FaUser />, link: "#" },
  { name: "Projects", icon: <FaProjectDiagram />, link: "#" },
  { name: "Contact", icon: <FaEnvelope />, link: "#" },
];

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ Sidebar state

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between bg-white mt-4 mx-2 rounded-full shadow-lg items-center py-2 px-6 md:px-16">
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
              onClick={() => setActive(item.name)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

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
