import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function RoboStepper() {
  const [value, setValue] = useState(0);
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col items-center">
      <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Robo Stepper</label>
      <div className="flex items-center gap-2">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setValue(v => Math.max(0, v - 1))}
          className="px-2 py-1 rounded bg-gray-700 text-white dark:bg-gray-900 dark:text-gray-200"
        >
          -
        </motion.button>
        <span className="text-lg font-bold text-gray-700 dark:text-gray-200 flex items-center gap-1">
          <FaRobot /> {value}
        </span>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setValue(v => v + 1)}
          className="px-2 py-1 rounded bg-gray-700 text-white dark:bg-gray-900 dark:text-gray-200"
        >
          +
        </motion.button>
      </div>
    </div>
  );
}
