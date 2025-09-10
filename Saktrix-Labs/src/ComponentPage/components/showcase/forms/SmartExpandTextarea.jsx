import { useState } from "react";
import { motion } from "framer-motion";

export default function SmartExpandTextarea() {
  const [value, setValue] = useState("");
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Smart Expand Textarea</label>
      <motion.textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        rows={expanded ? 8 : 4}
        whileFocus={{ boxShadow: "0 0 16px 2px #6b7280" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 dark:border-gray-500 bg-black/80 dark:bg-gray-900/80 text-gray-400 font-mono focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
        placeholder="Expand for more..."
      />
      <button
        onClick={() => setExpanded(e => !e)}
        className="mt-2 px-3 py-1 rounded bg-gray-700 text-white dark:bg-gray-900 dark:text-gray-200"
      >
        {expanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
