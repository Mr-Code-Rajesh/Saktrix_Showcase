import { useState } from "react";
import { motion } from "framer-motion";

export default function GlitchPasswordInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-red-500 dark:text-red-300">Glitch Password Input</label>
      <motion.input
        type="password"
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 16px 2px #ef4444" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-red-400 dark:border-red-500 bg-black/80 dark:bg-gray-900/80 text-red-400 font-mono focus:outline-none focus:ring-2 focus:ring-red-400 glitch"
        placeholder="Enter password..."
      />
    </div>
  );
}
