import { useState } from "react";
import { motion } from "framer-motion";

export default function NeuralSlider() {
  const [value, setValue] = useState(50);
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-purple-500 dark:text-purple-300">Neural Slider</label>
      <motion.input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        whileFocus={{ boxShadow: "0 0 12px 2px #a78bfa" }}
        className="w-full h-2 bg-purple-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        style={{ accentColor: "#a78bfa" }}
      />
      <div className="text-purple-400 dark:text-purple-300 mt-2">Value: {value}</div>
    </div>
  );
}
