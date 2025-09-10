import { useState } from "react";
import { motion } from "framer-motion";

export default function CyberCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center space-x-3 cursor-pointer select-none">
      <motion.span
        animate={{ boxShadow: checked ? "0 0 8px 2px #0ff" : "none" }}
        className={`w-6 h-6 border-2 border-cyan-400 dark:border-cyan-500 rounded-md flex items-center justify-center bg-black/80 dark:bg-gray-900/80 transition-all duration-300 ${checked ? "bg-cyan-400 dark:bg-cyan-500" : ""}`}
      >
        {checked && <span className="block w-3 h-3 bg-cyan-900 rounded" />}
      </motion.span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <span className="text-cyan-400 dark:text-cyan-300 font-semibold">Cyber Checkbox</span>
    </label>
  );
}
