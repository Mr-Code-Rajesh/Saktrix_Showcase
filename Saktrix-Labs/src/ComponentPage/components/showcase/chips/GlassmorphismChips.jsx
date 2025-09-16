import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassmorphismChips() {
  const [chips, setChips] = useState(["Data", "Vision", "Cloud"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-lg">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/30 dark:bg-gray-700/40 text-gray-800 dark:text-gray-200 shadow-md"
            >
              <span>{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                className="text-sm hover:text-red-500"
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
          placeholder="Add chip..."
          className="bg-transparent border-b border-gray-400 outline-none text-gray-700 dark:text-gray-200"
        />
      </div>
    </div>
  );
}
