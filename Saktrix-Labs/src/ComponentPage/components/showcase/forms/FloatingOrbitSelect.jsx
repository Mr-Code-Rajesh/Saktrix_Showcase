import { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingOrbitSelect() {
  const [selected, setSelected] = useState("Orbit");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-cyan-500 dark:text-cyan-300">Floating Orbit Select</label>
      <motion.select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        whileFocus={{ boxShadow: "0 0 12px 2px #06b6d4" }}
        className="w-full px-4 py-2 rounded-lg border-2 border-cyan-400 dark:border-cyan-500 bg-black/80 dark:bg-gray-900/80 text-cyan-400 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <option value="Orbit">Orbit</option>
        <option value="Float">Float</option>
        <option value="Spin">Spin</option>
      </motion.select>
    </div>
  );
}
