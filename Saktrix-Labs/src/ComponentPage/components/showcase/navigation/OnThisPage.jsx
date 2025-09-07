import { useState, useEffect } from "react";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function OnThisPage({ activeCategory }) {
  const [activeId, setActiveId] = useState(null);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  const activeCat = showcaseConfig.find((cat) => cat.category === activeCategory);
  if (!activeCat) return null;

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <h4 className="font-semibold mb-3">{activeCategory}</h4>
      <ul className="space-y-2 text-sm">
        {activeCat.items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleScrollTo(item.id)}
              className={`block text-left w-full transition-colors ${
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
    </div>
  );
}
