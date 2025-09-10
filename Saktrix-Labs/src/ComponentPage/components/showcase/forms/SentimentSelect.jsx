import { useState } from "react";
import { motion } from "framer-motion";

export default function SentimentSelect() {
  const [selected, setSelected] = useState("Positive");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-orange-500 dark:text-orange-300">Sentiment Select</label>
      <motion.select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        whileFocus={{ boxShadow: "0 0 12px 2px #f59e42" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-orange-400 dark:border-orange-500 bg-black/80 dark:bg-gray-900/80 text-orange-400 font-mono focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option value="Positive">Positive</option>
        <option value="Neutral">Neutral</option>
        <option value="Negative">Negative</option>
      </motion.select>
    </div>
  );
}
