import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ import router
import { showcaseConfig } from "../../../data/showcaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function CommandPalette({ isOpen, setIsOpen, setActiveCategory }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();   // ✅ router navigation
  const location = useLocation();   // ✅ current route

  const normalizedQuery = query.toLowerCase();

  // Group results by category (match name, tags, description)
  const grouped = useMemo(
    () =>
      showcaseConfig.map((cat) => ({
        category: cat.category,
        items: cat.items.filter((item) => {
          const inName = item.name.toLowerCase().includes(normalizedQuery);
          const inDesc = item.description?.toLowerCase().includes(normalizedQuery);
          const inTags = item.tags?.some((tag) =>
            tag.toLowerCase().includes(normalizedQuery)
          );
          return normalizedQuery === "" || inName || inDesc || inTags;
        }),
      })),
    [normalizedQuery]
  );

  // Category matches
  const categoryMatches = useMemo(
    () =>
      showcaseConfig
        .filter((cat) =>
          cat.category.toLowerCase().includes(normalizedQuery)
        )
        .map((cat) => ({
          id: `cat-${cat.category}`,
          name: cat.category,
          category: "Category",
        })),
    [normalizedQuery]
  );

  // Flatten results for keyboard nav
  const flatResults = useMemo(
    () => [
      ...categoryMatches,
      ...grouped.flatMap((g) =>
        g.items.map((item) => ({ ...item, parent: g.category }))
      ),
    ],
    [categoryMatches, grouped]
  );

  // Reset index when query or isOpen changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query, isOpen]);






 const handleSelect = useCallback(
  (item) => {
    if (location.pathname !== "/components") {
      navigate("/components");
    }

    if (item.category === "Category") {
      setActiveCategory(item.name);
    } else {
      setActiveCategory(item.parent);

      // ✅ always delay scroll, even when already on /components
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }

    setIsOpen(false);
  },
  [location.pathname, navigate, setActiveCategory, setIsOpen]
);







  // Keyboard shortcuts
  useEffect(() => {
    const handleKeys = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (!isOpen) return;

      if (e.key === "Escape") setIsOpen(false);
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % flatResults.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + flatResults.length) % flatResults.length);
      } else if (e.key === "Enter") {
        const choice = flatResults[activeIndex];
        if (choice) handleSelect(choice);
      }
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [isOpen, flatResults, activeIndex, handleSelect, setIsOpen]);

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
            onClick={(e) => e.stopPropagation()}
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
              placeholder="Type category, component, tag, or description..."
              className="w-full px-3 py-2 border-b dark:bg-gray-700 dark:text-white"
            />

            {/* Results */}
            <ul className="mt-3 max-h-60 overflow-y-auto">
              {categoryMatches.length > 0 && (
                <>
                  <p className="px-3 py-1 text-xs uppercase text-gray-500">
                    Categories
                  </p>
                  {categoryMatches.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleSelect(cat)}
                        className={`block w-full text-left px-3 py-2 rounded ${
                          flatResults[activeIndex]?.id === cat.id
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </>
              )}
              {grouped.map(
                (group) =>
                  group.items.length > 0 && (
                    <div key={group.category}>
                      <p className="px-3 py-1 text-xs uppercase text-gray-500">
                        {group.category}
                      </p>
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() =>
                              handleSelect({ ...item, parent: group.category })
                            }
                            className={`block w-full text-left px-3 py-2 rounded ${
                              flatResults[activeIndex]?.id === item.id
                                ? "bg-indigo-600 text-white"
                                : "hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                          >
                            {item.name}
                            <span className="ml-2 text-xs text-gray-500">
                              {item.tags?.join(", ")}
                            </span>
                          </button>
                        </li>
                      ))}
                    </div>
                  )
              )}
              {flatResults.length === 0 && (
                <li className="px-3 py-2 text-gray-500 text-sm">No results</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
