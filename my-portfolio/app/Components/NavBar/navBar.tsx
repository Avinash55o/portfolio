"use client"
import { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Importing React Icons
interface NavBarProps {
    name: string;
    link: string;
 
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navItems: NavBarProps[] = [
        {
            name:"Home",
            link:"/",
        },
        {
            name:"About",
            link:"/about",
        },
        {
            name:"Projects",
            link:"/projects",
        },
        {
            name:"Contact",
            link:"/contact",
        },
        
    ]

    return (
        <nav className="bg-gray-800 p-4 fixed w-full shadow-lg backdrop-blur-md">
           
            {isOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col space-y-2 mt-2">
                        <li className="text-white hover:text-gray-400 cursor-pointer flex items-center">
                            <FaHome className="mr-1" /> Home
                        </li>
                        <li className="text-white hover:text-gray-400 cursor-pointer flex items-center">
                            <FaUser className="mr-1" /> About
                        </li>
                        <li className="text-white hover:text-gray-400 cursor-pointer flex items-center">
                            <FaProjectDiagram className="mr-1" /> Projects
                        </li>
                        <li className="text-white hover:text-gray-400 cursor-pointer flex items-center">
                            <FaEnvelope className="mr-1" /> Contact
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}