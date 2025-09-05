import { useEffect, useState } from "react";
import { showcaseConfig } from "../../../data/showcaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  // Flatten config into items
  const allItems = showcaseConfig.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const filtered =
    query.trim() === ""
      ? allItems
      : allItems.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

  // Reset activeIndex when list changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query, isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeys = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter") {
        if (filtered[activeIndex]) {
          window.location.hash = `#${filtered[activeIndex].id}`;
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [isOpen, filtered, activeIndex, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center p-8"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-lg p-4"
            onClick={(e) => e.stopPropagation()} // prevent overlay click
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Search Components
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Input */}
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a component name..."
              className="w-full px-3 py-2 border-b dark:bg-gray-700 dark:text-white"
            />

            {/* Results */}
            <ul className="mt-3 max-h-60 overflow-y-auto">
              {filtered.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded transition-colors ${
                      idx === activeIndex
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                      {item.category}
                    </span>
                  </a>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-2 text-gray-500 text-sm">No results</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
