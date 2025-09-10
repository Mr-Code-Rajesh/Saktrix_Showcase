import { useState } from "react";
import { motion } from "framer-motion";

export default function PredictiveTextarea() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-purple-500 dark:text-purple-300">Predictive Textarea</label>
      <motion.textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 16px 2px #a78bfa" }}
        rows={4}
        className="w-full px-4 py-2 rounded-lg border-2 border-purple-400 dark:border-purple-500 bg-black/80 dark:bg-gray-900/80 text-purple-400 font-mono focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Predictive thoughts..."
      />
    </div>
  );
}
