import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HolographicChips() {
  const [chips, setChips] = useState(["Future", "XR", "Holo"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              whileHover={{ background: "linear-gradient(90deg,#06b6d4,#9333ea)" }}
              className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white"
            >
              <span>{chip}</span>
              <button
                onClick={() => removeChip(chip)}
                className="text-sm hover:text-red-200"
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
          className="bg-transparent border-b border-white outline-none text-white placeholder-white/70"
        />
      </div>
    </div>
  );
}
