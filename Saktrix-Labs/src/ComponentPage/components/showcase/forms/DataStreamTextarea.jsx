import { useState } from "react";
import { motion } from "framer-motion";

export default function DataStreamTextarea() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-emerald-500 dark:text-emerald-300">Data Stream Textarea</label>
      <motion.textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 16px 2px #10b981" }}
        rows={4}
        className="w-full px-4 py-2 rounded-lg border-2 border-emerald-400 dark:border-emerald-500 bg-black/80 dark:bg-gray-900/80 text-emerald-400 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-400"
        placeholder="Streaming data..."
      />
    </div>
  );
}
