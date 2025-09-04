import { useState } from "react";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function CategoryMenu() {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <nav className="mt-4 space-y-2">
      {showcaseConfig.map((cat, idx) => (
        <div key={cat.category}>
          {/* Category Header */}
          <button
            onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
            className="w-full text-left font-semibold hover:text-indigo-500"
          >
            {cat.category}
          </button>

          {/* Items */}
          {openCategory === idx && (
            <ul className="ml-4 mt-1 space-y-1">
              {cat.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}
