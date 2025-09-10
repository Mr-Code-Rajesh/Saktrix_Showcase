import { useState } from "react";
import { motion } from "framer-motion";

export default function AdaptiveRange() {
  const [value, setValue] = useState(25);
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-lime-500 dark:text-lime-300">Adaptive Range</label>
      <motion.input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        whileFocus={{ boxShadow: "0 0 12px 2px #84cc16" }}
        className="w-full h-2 bg-lime-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400"
        style={{ accentColor: "#84cc16" }}
      />
      <div className="text-lime-400 dark:text-lime-300 mt-2">Value: {value}</div>
    </div>
  );
}
