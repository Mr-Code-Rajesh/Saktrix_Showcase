import { useState } from "react";
import { motion } from "framer-motion";

export default function QuantumRadio() {
  const [selected, setSelected] = useState("A");
  return (
    <div className="flex flex-col gap-2">
      <span className="text-purple-400 dark:text-purple-300 font-semibold mb-1">Quantum Radio</span>
      {["A", "B", "C"].map(opt => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <motion.span
            animate={{ boxShadow: selected === opt ? "0 0 8px 2px #a78bfa" : "none" }}
            className={`w-5 h-5 border-2 border-purple-400 dark:border-purple-500 rounded-full flex items-center justify-center bg-black/80 dark:bg-gray-900/80 transition-all duration-300 ${selected === opt ? "bg-purple-400 dark:bg-purple-500" : ""}`}
          >
            {selected === opt && <span className="block w-3 h-3 bg-purple-900 rounded-full" />}
          </motion.span>
          <input
            type="radio"
            name="quantum"
            checked={selected === opt}
            onChange={() => setSelected(opt)}
            className="hidden"
          />
          <span className="text-purple-400 dark:text-purple-300">{opt}</span>
        </label>
      ))}
    </div>
  );
}
