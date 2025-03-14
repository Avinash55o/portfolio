import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light";
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
  <div className="w-24 h-12 bg-rose-400 rounded-full shadow-md ring-0 outline-none duration-300 transition-all peer-checked:bg-emerald-500 relative">
    {/* Toggle Ball */}
    <div className="absolute top-1 left-1 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 transform peer-checked:translate-x-12 peer-hover:scale-95">
      {theme === "dark" ? "🌞" : "🌙"}
    </div>
  </div>
</label>
  );
}
