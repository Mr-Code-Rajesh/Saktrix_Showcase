import { useState } from "react";
import { motion } from "framer-motion";

export default function MatrixInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-green-500 dark:text-green-300">Matrix Input</label>
      <motion.input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 16px 2px #22c55e" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-green-400 dark:border-green-500 bg-black/80 dark:bg-gray-900/80 text-green-400 font-mono focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-matrix"
        placeholder="Falling code..."
      />
    </div>
  );
}
