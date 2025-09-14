import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function MatrixDrop() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700
                   text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl
                   transition"
      >
        Trigger MatrixDrop
      </button>

      {show && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-80 p-4 rounded-xl shadow-lg bg-red-100 dark:bg-red-800 text-red-900 dark:text-red-100 border-red-500 border"
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 
                       dark:hover:text-white"
          >
            <AiOutlineClose />
          </button>

          <p className="font-medium">❌ Error: System matrix overload!</p>
        </motion.div>
      )}
    </div>
  );
}
