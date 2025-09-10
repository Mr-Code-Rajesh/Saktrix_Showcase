import { useState } from "react";
import { motion } from "framer-motion";

export default function DataStreamModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold shadow hover:bg-cyan-600 transition"
      >
        Open Data Stream Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-2xl p-6 bg-gradient-to-r from-cyan-200 to-blue-400 dark:from-cyan-800 dark:to-blue-900 shadow-xl border-2 border-cyan-400 dark:border-cyan-600 relative overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-cyan-400 dark:text-cyan-300 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="absolute inset-0 pointer-events-none animate-gradient-stream" />
            <div className="text-center text-cyan-600 dark:text-cyan-300 font-semibold text-lg mb-2">Data Stream Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
