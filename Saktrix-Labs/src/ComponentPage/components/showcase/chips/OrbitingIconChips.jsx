import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OrbitingIconChips() {
  const [chips, setChips] = useState(["Orbit", "Spin", "Star"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="flex gap-2 flex-wrap relative">
        <AnimatePresence>
          {chips.map((chip, idx) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center gap-2 px-4 py-1 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute -left-3"
              >
                ✨
              </motion.span>
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
          className="bg-transparent border-b border-gray-400 outline-none text-gray-800 dark:text-gray-200"
        />
      </div>
    </div>
  );
}
