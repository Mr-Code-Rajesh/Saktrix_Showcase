import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIDashboardTagInput() {
  const [chips, setChips] = useState(["Analytics", "Reports", "Monitoring"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600 text-white"
            >
              <span>{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                className="text-sm hover:text-red-300"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addChip}
          placeholder="Add tag..."
          className="bg-transparent border-b border-blue-400 outline-none text-blue-600 dark:text-blue-300 placeholder-blue-400"
        />
      </div>
    </div>
  );
}
