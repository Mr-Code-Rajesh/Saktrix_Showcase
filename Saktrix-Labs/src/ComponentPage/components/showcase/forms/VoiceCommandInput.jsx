import { useState } from "react";
import { motion } from "framer-motion";
import { FaMicrophone } from "react-icons/fa";

export default function VoiceCommandInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-indigo-500 dark:text-indigo-300">Voice Command Input</label>
      <div className="relative">
        <motion.input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          whileFocus={{ boxShadow: "0 0 12px 2px #6366f1" }}
          className="w-full px-4 py-2 rounded-lg border-2 border-indigo-400 dark:border-indigo-500 bg-white/10 dark:bg-gray-900/40 text-indigo-700 dark:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Speak or type..."
        />
        <FaMicrophone className="absolute right-3 top-3 text-indigo-400 dark:text-indigo-300 animate-waveform" />
      </div>
    </div>
  );
}
