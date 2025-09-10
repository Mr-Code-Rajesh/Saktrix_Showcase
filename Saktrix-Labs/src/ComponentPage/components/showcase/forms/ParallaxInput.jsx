import { useState } from "react";
import { motion } from "framer-motion";

export default function ParallaxInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-blue-500 dark:text-blue-300">Parallax Input</label>
      <motion.input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ x: [0, 10, -10, 0], boxShadow: "0 0 16px 2px #3b82f6" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-blue-400 dark:border-blue-500 bg-black/80 dark:bg-gray-900/80 text-blue-400 font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type with parallax..."
      />
    </div>
  );
}
