import { useState } from "react";
import { motion } from "framer-motion";

export default function MatrixRainModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
      >
        Open Matrix Rain Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-gray-900/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-black/80 dark:bg-gray-900/90 text-green-400 font-mono border-2 border-green-400 dark:border-green-600 shadow-2xl relative overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-green-400 dark:text-green-300 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="absolute inset-0 pointer-events-none animate-matrix-rain" />
            <div className="text-center text-green-400 dark:text-green-300 font-semibold text-lg mb-2">Matrix Rain Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
