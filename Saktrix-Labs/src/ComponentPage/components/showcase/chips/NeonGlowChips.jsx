import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NeonGlowChips() {
  const [chips, setChips] = useState(["AI", "NeuralNet", "Quantum"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-4 bg-black rounded-lg">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 12px #06b6d4" }}
              className="flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400 text-cyan-400 dark:text-purple-400"
            >
              <span>{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                className="text-sm hover:text-red-400"
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
          className="bg-transparent border-b border-cyan-400 outline-none text-cyan-400 placeholder-gray-500"
        />
      </div>
    </div>
  );
}
