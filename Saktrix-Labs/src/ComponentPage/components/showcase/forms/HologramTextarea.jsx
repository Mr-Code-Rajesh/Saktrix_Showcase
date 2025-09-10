import { useState } from "react";
import { motion } from "framer-motion";

export default function HologramTextarea() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-cyan-500 dark:text-cyan-300">Hologram Textarea</label>
      <motion.textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        whileFocus={{ boxShadow: "0 0 16px 2px #06b6d4" }}
        rows={4}
        className="w-full px-4 py-2 rounded-lg border-2 border-cyan-400 dark:border-cyan-500 bg-black/80 dark:bg-gray-900/80 text-cyan-400 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Type in hologram..."
      />
    </div>
  );
}
