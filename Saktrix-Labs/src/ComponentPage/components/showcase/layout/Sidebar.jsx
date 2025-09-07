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
    <aside className="sticky top-0 h-screen w-56 border-r bg-white dark:bg-gray-800 p-4 hidden md:flex flex-col">
      <h4 className="font-semibold mb-3">Components</h4>
      <ul className="space-y-2">
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
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                activeCategory === cat.category
                  ? "bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white font-semibold"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {cat.category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
