import { useState } from "react";
import { motion } from "framer-motion";

export default function CyberDrawerModal({ open, onClose, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold shadow hover:bg-cyan-600 transition"
      >
        Open Cyber Drawer Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, type: "spring" }}
            className="max-w-md w-full mx-4 rounded-t-2xl p-6 bg-black/60 dark:bg-gray-900/80 border-l-4 border-cyan-400 dark:border-indigo-400 shadow-2xl relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-cyan-400 dark:text-indigo-400 text-xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
            <div className="text-center text-cyan-400 dark:text-indigo-300 font-semibold text-lg mb-2">Cyber Drawer Modal</div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
