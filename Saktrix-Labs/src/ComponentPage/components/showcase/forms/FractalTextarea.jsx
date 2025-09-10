import { useState } from "react";
import { motion } from "framer-motion";

export default function FractalTextarea() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-indigo-500 dark:text-indigo-300">Fractal Textarea</label>
      <motion.textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 16px 2px #6366f1" }}
        rows={4}
        className="w-full px-4 py-2 rounded-lg border-2 border-indigo-400 dark:border-indigo-500 bg-black/80 dark:bg-gray-900/80 text-indigo-400 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Type fractal thoughts..."
      />
    </div>
  );
}
