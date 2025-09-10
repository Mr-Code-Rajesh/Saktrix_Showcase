import { useState } from "react";
import { motion } from "framer-motion";

export default function PrismShiftModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
      >
        Open Prism Shift Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 dark:from-pink-900 dark:via-blue-900 dark:to-purple-900 border-2 border-blue-400 dark:border-indigo-400 shadow-xl relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-blue-400 dark:text-indigo-400 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="text-center text-blue-600 dark:text-indigo-300 font-semibold text-lg mb-2">Prism Shift Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
