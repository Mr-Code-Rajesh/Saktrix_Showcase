import { useState } from "react";
import { motion } from "framer-motion";

export default function TeleportModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
      >
        Open Teleport Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.6, filter: "blur(12px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.6, filter: "blur(12px)" }}
            transition={{ duration: 0.5, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-white/30 dark:bg-gray-900/40 border-2 border-blue-300 dark:border-indigo-500 shadow-xl relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-blue-400 dark:text-indigo-400 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="text-center text-blue-600 dark:text-indigo-300 font-semibold text-lg mb-2">Teleport Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
