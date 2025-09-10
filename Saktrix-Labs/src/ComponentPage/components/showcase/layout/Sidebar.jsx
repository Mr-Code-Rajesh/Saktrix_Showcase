import { useEffect, useState } from "react";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function Sidebar({ activeCategory, setActiveCategory }) {
  const [scrollCategory, setScrollCategory] = useState(activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      let currentCat = null;

      for (const cat of showcaseConfig) {
        // find first item of each category (top section)
        const firstItem = document.getElementById(cat.items[0]?.id);
        if (firstItem) {
          const rect = firstItem.getBoundingClientRect();
          if (rect.top <= 120) {
            currentCat = cat.category;
          }
        }
      }

      if (currentCat && currentCat !== scrollCategory) {
        setScrollCategory(currentCat);
        setActiveCategory(currentCat);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollCategory, setActiveCategory]);

  return (
    <aside className="sticky top-0 h-screen w-56 border-r bg-gradient-to-br from-blue-200 via-cyan-100 to-white dark:from-indigo-800 dark:via-purple-800 dark:to-gray-900 p-4 hidden md:flex flex-col shadow-2xl backdrop-blur-lg/60">
      <h4 className="font-bold mb-4 text-lg text-blue-500 dark:text-indigo-300 drop-shadow-glow">Components</h4>
      <ul className="space-y-2 overflow-y-auto max-h-[80vh] pr-2 custom-scrollbar">
        {showcaseConfig.map((cat) => (
          <li key={cat.category}>
            <button
              onClick={() => {
                setActiveCategory(cat.category);
                setTimeout(() => {
                  const el = document.getElementById(cat.items[0]?.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 150);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border border-transparent bg-gradient-to-r from-blue-300/40 to-cyan-200/30 dark:from-indigo-600/40 dark:to-purple-600/30 hover:from-blue-400/60 hover:to-cyan-300/40 dark:hover:from-indigo-400/60 dark:hover:to-purple-400/40 shadow-md backdrop-blur-md ${
                activeCategory === cat.category
                  ? "border-blue-400 text-blue-600 dark:text-indigo-200 font-bold shadow-lg dark:border-indigo-300"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300"
              }`}
              style={{ boxShadow: activeCategory === cat.category ? "0 0 12px 2px #38bdf8, 0 0 24px 4px #0ea5e9" : "0 1px 4px 0 #cbd5e1" }}
            >
              <span className="inline-block align-middle">{cat.category}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
