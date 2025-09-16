import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HackerTerminalChips() {
  const [chips, setChips] = useState(["Root", "Access", "Granted"]);
  const [input, setInput] = useState("");

  const addChip = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setChips([...chips, input.trim()]);
      setInput("");
    }
  };

  const removeChip = (chip) => setChips(chips.filter((c) => c !== chip));

  return (
    <div className="p-6 bg-black rounded-lg font-mono text-green-400">
      <div className="flex gap-2 flex-wrap">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.div
              key={chip}
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-1 rounded-full border border-green-400 bg-black"
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
          className="bg-transparent border-b border-green-400 outline-none text-green-400 placeholder-green-600"
        />
      </div>
    </div>
  );
}
