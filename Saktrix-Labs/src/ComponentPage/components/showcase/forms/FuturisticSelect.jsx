import { useState } from "react";
import { motion } from "framer-motion";

export default function FuturisticSelect() {
  const [selected, setSelected] = useState("AI");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-pink-500 dark:text-pink-300">Futuristic Select</label>
      <motion.select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        whileFocus={{ boxShadow: "0 0 12px 2px #ec4899" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-pink-400 dark:border-pink-500 bg-black/80 dark:bg-gray-900/80 text-pink-400 font-mono focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <option value="AI">AI</option>
        <option value="ML">ML</option>
        <option value="DL">DL</option>
      </motion.select>
    </div>
  );
}
