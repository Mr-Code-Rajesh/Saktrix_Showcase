import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoftUIChips() {
  const [chips, setChips] = useState(["Smooth", "Glow", "Light"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-inner">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
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
