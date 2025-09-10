import { useState } from "react";
import { motion } from "framer-motion";

export default function PrismCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center space-x-3 cursor-pointer select-none">
      <motion.span
        animate={{ boxShadow: checked ? "0 0 8px 2px #f472b6" : "none" }}
        className={`w-6 h-6 border-2 border-pink-400 dark:border-pink-500 rounded-md flex items-center justify-center bg-black/80 dark:bg-gray-900/80 transition-all duration-300 ${checked ? "bg-pink-400 dark:bg-pink-500" : ""}`}
      >
        {checked && <span className="block w-3 h-3 bg-pink-900 rounded" />}
      </motion.span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <span className="text-pink-400 dark:text-pink-300 font-semibold">Prism Checkbox</span>
    </label>
  );
}
