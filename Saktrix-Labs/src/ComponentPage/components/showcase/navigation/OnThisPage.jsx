import { useState, useEffect } from "react";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function OnThisPage() {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h4 className="font-semibold mb-3">On this page</h4>
      <ul className="space-y-2 text-sm">
        {showcaseConfig.map((cat) => (
          <li key={cat.category}>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
              {cat.category}
            </p>
            <ul className="ml-3 space-y-1">
              {cat.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`transition-colors ${
                      activeId === item.id
                        ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
