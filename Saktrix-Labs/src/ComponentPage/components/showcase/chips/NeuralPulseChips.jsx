import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NeuralPulseChips() {
  const [chips, setChips] = useState(["Neuron", "Signal", "Pulse"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="relative flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500 text-blue-400"
            >
              <span>{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                className="text-sm hover:text-red-400"
              >
                ✕
              </button>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                animate={{ opacity: [0.6, 0.2, 0.6] }}
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
          className="bg-transparent border-b border-blue-400 outline-none text-blue-400 placeholder-blue-300"
        />
      </div>
    </div>
  );
}
