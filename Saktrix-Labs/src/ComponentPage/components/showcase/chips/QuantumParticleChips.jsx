import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuantumParticleChips() {
  const [chips, setChips] = useState(["Qubit", "Entangle", "Superpos"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative flex items-center gap-2 px-4 py-1 rounded-full bg-purple-600 text-white"
            >
              <span>{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                className="text-sm hover:text-red-200"
              >
                ✕
              </button>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-300"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addChip}
          placeholder="Add chip..."
          className="bg-transparent border-b border-purple-400 outline-none text-purple-300 placeholder-purple-400"
        />
      </div>
    </div>
  );
}
