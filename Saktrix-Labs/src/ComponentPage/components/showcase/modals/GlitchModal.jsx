import { useState } from "react";
import { motion } from "framer-motion";

export default function GlitchModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-purple-500 text-white font-semibold shadow hover:bg-purple-600 transition"
      >
        Open Glitch Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-gray-100 dark:bg-gray-800 border-2 border-purple-400 dark:border-purple-600 shadow-xl relative overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-purple-400 dark:text-purple-300 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="absolute inset-0 pointer-events-none animate-glitch" />
            <div className="text-center text-purple-600 dark:text-purple-300 font-semibold text-lg mb-2">Glitch Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
