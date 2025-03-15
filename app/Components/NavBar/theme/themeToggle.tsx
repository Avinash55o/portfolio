import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // Check if user has a preference stored
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme;

      // Otherwise, check system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark"; // Default to dark (for SSR safety)
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
<label className="relative cursor-pointer">
 
 {/* Hidden Checkbox (Peer Element) */}
 <input
    type="checkbox"
    className="sr-only peer"
    checked={theme === "dark"}
    onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
  />

  {/* Toggle Switch */}
  <div className="w-24 h-12 bg-rose-400 rounded-full shadow-md transition-all duration-300 peer-checked:bg-emerald-500 relative">
    {/* Toggle Ball */}
    <div className={`absolute top-1 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center transition-transform duration-300 ${
          theme === "dark" ? "translate-x-[3rem]" : "translate-x-1"
        }`}>
      {theme === "dark" ? "🌞" : "🌙"}
    </div>
  </div>
  
 
</label>
  );
}
