import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";

export default function AIAvatarInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-yellow-500 dark:text-yellow-300">AI Avatar Input</label>
      <div className="relative">
        <motion.input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          whileFocus={{ boxShadow: "0 0 12px 2px #f59e42" }}
          className="w-full px-4 py-2 rounded-lg border-2 border-yellow-400 dark:border-yellow-500 bg-black/80 dark:bg-gray-900/80 text-yellow-400 font-mono focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="AI Avatar name..."
        />
        <FaUserAstronaut className="absolute right-3 top-3 text-yellow-400 dark:text-yellow-300" />
      </div>
    </div>
  );
}
