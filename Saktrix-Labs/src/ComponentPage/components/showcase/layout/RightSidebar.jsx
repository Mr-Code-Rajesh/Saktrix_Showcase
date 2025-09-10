import { useEffect, useState } from "react";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function RightSidebar({ activeCategory, setActiveCategory }) {
  const category = showcaseConfig.find((cat) => cat.category === activeCategory);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!category) return;

    const handleScroll = () => {
      const sections = category.items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = null;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
          break;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [category]);

  if (!category) return null;

  return (
    <aside className="sticky top-0 h-screen w-64 border-l bg-gradient-to-br from-blue-200 via-cyan-100 to-white dark:from-indigo-800 dark:via-purple-800 dark:to-gray-900 p-4 hidden lg:block shadow-2xl backdrop-blur-lg/60">
      <h4 className="font-bold mb-4 text-lg text-blue-500 dark:text-indigo-300 drop-shadow-glow">{category.category}</h4>
      <ul className="space-y-2 text-sm overflow-y-auto max-h-[80vh] pr-2 custom-scrollbar">
        {category.items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => {
                setActiveCategory(category.category);
                setTimeout(() => {
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 150);
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border border-transparent bg-gradient-to-r from-blue-300/40 to-cyan-200/30 dark:from-indigo-600/40 dark:to-purple-600/30 hover:from-blue-400/60 hover:to-cyan-300/40 dark:hover:from-indigo-400/60 dark:hover:to-purple-400/40 shadow-md backdrop-blur-md ${
                activeId === item.id
                  ? "border-blue-400 text-blue-600 dark:text-indigo-200 font-bold shadow-lg dark:border-indigo-300"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300"
              }`}
              style={{ boxShadow: activeId === item.id ? "0 0 12px 2px #38bdf8, 0 0 24px 4px #0ea5e9" : "0 1px 4px 0 #cbd5e1" }}
            >
              <span className="inline-block align-middle">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
