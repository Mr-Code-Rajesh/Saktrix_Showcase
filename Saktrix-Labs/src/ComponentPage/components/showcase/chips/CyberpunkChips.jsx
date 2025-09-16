import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CyberpunkChips() {
  const [chips, setChips] = useState(["Neon", "Matrix", "Hack"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-4 bg-black rounded-lg font-mono">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ textShadow: "0px 0px 6px #ec4899, 0px 0px 10px #3b82f6" }}
              className="flex items-center gap-2 px-4 py-1 rounded-full bg-black border border-pink-500 text-pink-400"
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
          className="bg-transparent border-b border-pink-500 outline-none text-pink-400 placeholder-pink-300"
        />
      </div>
    </div>
  );
}
