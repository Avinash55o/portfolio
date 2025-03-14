"use client";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: <FaHome />, link: "#home" },
  { name: "About", icon: <FaUser />, link: "#about" },
  { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
];

export default function SideBar({ closeSidebar }: { closeSidebar: () => void }) {
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
              <a
                href={item.link}
                className="flex items-center text-gray-800 text-lg hover:text-pink-500 transition"
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
