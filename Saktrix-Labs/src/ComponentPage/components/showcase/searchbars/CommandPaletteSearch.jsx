import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function CommandPaletteSearch() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Open Command Palette
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaSearch className="text-gray-600 dark:text-gray-300" />
                <input
                  type="text"
                  placeholder="Type a command..."
                  className="ml-2 bg-transparent outline-none flex-1 text-gray-700 dark:text-gray-200"
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
