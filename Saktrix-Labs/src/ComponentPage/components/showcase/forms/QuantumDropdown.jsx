import { useState } from "react";
import { motion } from "framer-motion";

export default function QuantumDropdown() {
  const [selected, setSelected] = useState("Quantum");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-violet-500 dark:text-violet-300">Quantum Dropdown</label>
      <motion.select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        whileFocus={{ boxShadow: "0 0 12px 2px #8b5cf6" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-violet-400 dark:border-violet-500 bg-black/80 dark:bg-gray-900/80 text-violet-400 font-mono focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        <option value="Quantum">Quantum</option>
        <option value="Entangle">Entangle</option>
        <option value="Superpose">Superpose</option>
      </motion.select>
    </div>
  );
}
