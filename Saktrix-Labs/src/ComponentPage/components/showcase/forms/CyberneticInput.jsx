import { useState } from "react";
import { motion } from "framer-motion";

export default function CyberneticInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-300">Cybernetic Input</label>
      <motion.input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 16px 2px #a3a3a3" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 dark:border-gray-500 bg-black/80 dark:bg-gray-900/80 text-gray-400 font-mono focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Cybernetic data..."
      />
    </div>
  );
}
