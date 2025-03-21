"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark"); // Default for initial render

  // Initialize theme on client side
  useEffect(() => {
    // Check if user has a preference stored
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Otherwise, check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button 
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-indigo-700 text-lg" />
      )}
    </button>
  );
}
