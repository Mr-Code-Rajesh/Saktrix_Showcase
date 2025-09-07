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
    <aside className="sticky top-0 h-screen w-64 border-l bg-white dark:bg-gray-800 p-4 hidden lg:block">
      <h4 className="font-semibold mb-3">{category.category}</h4>
      <ul className="space-y-2 text-sm">
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
              className={`block w-full text-left px-2 py-1 rounded transition-colors ${
                activeId === item.id
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
