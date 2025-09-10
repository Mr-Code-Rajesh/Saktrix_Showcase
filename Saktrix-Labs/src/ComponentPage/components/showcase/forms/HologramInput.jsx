import { useState } from "react";
import { motion } from "framer-motion";

export default function HologramInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-blue-500 dark:text-blue-300">Hologram Input</label>
      <motion.input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ background: "linear-gradient(90deg,#7f5fff,#0ff,#fff)" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-blue-400 dark:border-blue-500 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg text-blue-700 dark:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type here..."
      />
    </div>
  );
}
