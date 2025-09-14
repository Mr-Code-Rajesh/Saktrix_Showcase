import { motion } from "framer-motion";

export default function AIPulsePagination() {
  return (
    <div className="flex space-x-3 p-4 justify-center">
      {[1,2,3,4,5].map(n => (
        <motion.button
          key={n}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: n * 0.2 }}
          className="px-3 py-2 rounded-lg border-2 border-purple-500 text-purple-500 dark:text-purple-300 shadow-md hover:bg-purple-500 hover:text-white transition"
        >
          {n}
        </motion.button>
      ))}
    </div>
  );
}
