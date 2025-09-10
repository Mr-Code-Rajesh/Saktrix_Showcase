import { useState } from "react";
import { motion } from "framer-motion";

export default function NeuralSyncModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-purple-500 text-white font-semibold shadow hover:bg-purple-600 transition"
      >
        Open Neural Sync Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, boxShadow: "0 0 0 0 #a855f7" }}
            animate={{ scale: 1, boxShadow: "0 0 24px 8px #a855f7" }}
            exit={{ scale: 0.8, boxShadow: "0 0 0 0 #a855f7" }}
            transition={{ duration: 0.5, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 shadow-2xl border-2 border-purple-400 dark:border-purple-600 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-purple-400 dark:text-purple-300 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="text-center text-purple-600 dark:text-purple-300 font-semibold text-lg mb-2">Neural Sync Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
