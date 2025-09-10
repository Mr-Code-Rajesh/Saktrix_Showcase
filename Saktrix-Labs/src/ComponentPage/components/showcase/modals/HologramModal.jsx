import { useState } from "react";
import { motion } from "framer-motion";

export default function HologramModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold shadow hover:bg-cyan-600 transition"
      >
        Open Hologram Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-white/30 dark:bg-gray-900/40 border-2 border-cyan-400 dark:border-indigo-400 shadow-lg backdrop-blur-lg relative"
            style={{ boxShadow: "0 0 24px 4px #0ff, 0 0 48px 8px #7f5fff" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-cyan-400 dark:text-indigo-400 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="text-center text-cyan-600 dark:text-indigo-300 font-semibold text-lg mb-2">Hologram Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
