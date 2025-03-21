"use client";
import React, { useState, useRef } from "react";
import { FaReact, FaEthereum, FaPalette } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: "WEB3" | "WEB2" | "UI/UX";
}

// Updated service items with more detailed descriptions and proper icons
const serviceItems: ServiceItem[] = [
  {
    id: 1,
    category: "WEB3",
    title: "Blockchain Development",
    description: "Development of smart contracts, dApps, and blockchain integration for your business.",
    icon: <FaEthereum className="text-3xl" />,
  },
  {
    id: 2,
    category: "WEB2",
    title: "Full-Stack Web Apps",
    description: "Creation of modern, responsive web applications with the latest technologies.",
    icon: <FaReact className="text-3xl" />,
  },
  {
    id: 3,
    category: "UI/UX",
    title: "UI/UX Design",
    description: "Design of intuitive and beautiful interfaces that provide great user experience.",
    icon: <FaPalette className="text-3xl" />,
  }
];

export default function Service() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState(0);

  // Scroll handler for mobile view
  const scrollToCard = (index: number) => {
    if (sliderRef.current) {
      setCurrentCard(index);
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }
  };

  // Next and previous button handlers
  const handlePrev = () => {
    const newIndex = Math.max(currentCard - 1, 0);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(currentCard + 1, serviceItems.length - 1);
    scrollToCard(newIndex);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16">
      <div className="flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Services</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl">
          Specialized solutions for Web3, Web2, and UI/UX design needs
        </p>

        {/* Mobile Navigation Indicators */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-6">
          <button 
            onClick={handlePrev} 
            className="p-2 rounded-full bg-indigo-500 text-white disabled:opacity-50"
            disabled={currentCard === 0}
          >
            <MdNavigateBefore size={24} />
          </button>
          
          <div className="flex gap-2">
            {serviceItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentCard === index 
                    ? "bg-indigo-500 w-8" 
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext} 
            className="p-2 rounded-full bg-indigo-500 text-white disabled:opacity-50"
            disabled={currentCard === serviceItems.length - 1}
          >
            <MdNavigateNext size={24} />
          </button>
        </div>

        {/* Service Cards */}
        <div className="relative w-full">
          {/* Mobile Scrollable Container */}
          <div 
            ref={sliderRef}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {serviceItems.map((service) => (
              <div
                key={service.id}
                className="snap-center min-w-full px-4"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {serviceItems.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate ServiceCard component for reusability
function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="relative group w-full h-[300px] bg-black flex flex-col justify-end p-6 gap-4 rounded-xl cursor-pointer transition-transform duration-500 hover:-translate-y-2">
      {/* Gradient Border */}
      <div className="absolute inset-0 -left-1 -top-1 m-auto w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 -z-10 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-[1.03]"></div>

      {/* Blurred Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 transform scale-95 blur-xl -z-10 transition-all duration-500 group-hover:blur-2xl"></div>

      {/* Service Icon */}
      <div className="mb-4 text-indigo-400 group-hover:text-white transition-all duration-300">
        {service.icon}
      </div>
      
      {/* Card Content */}
      <div className="transition-all duration-500">
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <div className="w-16 h-1 bg-indigo-500 mb-3 rounded-full"></div>
        <p className="text-gray-300">{service.description}</p>
        
        {/* Category Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
          ${service.category === "WEB3" 
            ? "bg-indigo-900/70 text-indigo-200" 
            : service.category === "WEB2" 
              ? "bg-blue-900/70 text-blue-200" 
              : "bg-purple-900/70 text-purple-200"
          }`}
        >
          {service.category}
        </div>
      </div>
    </div>
  );
}
