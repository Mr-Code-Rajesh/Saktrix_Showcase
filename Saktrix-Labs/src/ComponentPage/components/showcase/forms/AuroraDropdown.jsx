import { useState } from "react";
import { motion } from "framer-motion";

export default function AuroraDropdown() {
  const [selected, setSelected] = useState("Aurora");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-teal-500 dark:text-teal-300">Aurora Dropdown</label>
      <motion.select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        whileFocus={{ boxShadow: "0 0 12px 2px #14b8a6" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-teal-400 dark:border-teal-500 bg-black/80 dark:bg-gray-900/80 text-teal-400 font-mono focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        <option value="Aurora">Aurora</option>
        <option value="Glow">Glow</option>
        <option value="Pulse">Pulse</option>
      </motion.select>
    </div>
  );
}
