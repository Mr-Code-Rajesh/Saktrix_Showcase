import { useState } from "react";
import { motion } from "framer-motion";

export default function NeonGlowInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">Neon Glow Input</label>
      <motion.input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 12px 2px #0ff" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-cyan-400 dark:border-cyan-500 bg-white/10 dark:bg-gray-900/40 text-cyan-700 dark:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow"
        placeholder="Type here..."
      />
    </div>
  );
}
