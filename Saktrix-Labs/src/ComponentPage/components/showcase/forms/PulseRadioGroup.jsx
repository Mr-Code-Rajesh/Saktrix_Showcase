import { useState } from "react";
import { motion } from "framer-motion";

export default function PulseRadioGroup() {
  const [selected, setSelected] = useState("Alpha");
  return (
    <div className="flex flex-col gap-2">
      <span className="text-rose-400 dark:text-rose-300 font-semibold mb-1">Pulse Radio Group</span>
      {["Alpha", "Beta", "Gamma"].map(opt => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <motion.span
            animate={{ boxShadow: selected === opt ? "0 0 8px 2px #fb7185" : "none" }}
            className={`w-5 h-5 border-2 border-rose-400 dark:border-rose-500 rounded-full flex items-center justify-center bg-black/80 dark:bg-gray-900/80 transition-all duration-300 ${selected === opt ? "bg-rose-400 dark:bg-rose-500" : ""}`}
          >
            {selected === opt && <span className="block w-3 h-3 bg-rose-900 rounded-full animate-pulse" />}
          </motion.span>
          <input
            type="radio"
            name="pulse"
            checked={selected === opt}
            onChange={() => setSelected(opt)}
            className="hidden"
          />
          <span className="text-rose-400 dark:text-rose-300">{opt}</span>
        </label>
      ))}
    </div>
  );
}
