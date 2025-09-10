import { useState } from "react";
import { motion } from "framer-motion";

export default function BioPulseModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition"
      >
        Open Bio Pulse Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, boxShadow: "0 0 0 0 #f472b6" }}
            animate={{ scale: 1, boxShadow: "0 0 24px 8px #f472b6" }}
            exit={{ scale: 0.95, boxShadow: "0 0 0 0 #f472b6" }}
            transition={{ duration: 0.5, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-white/30 dark:bg-gray-900/40 border-2 border-pink-400 dark:border-pink-600 shadow-pink-200 dark:shadow-pink-900 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-pink-400 dark:text-pink-300 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="text-center text-pink-600 dark:text-pink-300 font-semibold text-lg mb-2">Bio Pulse Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
