import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function LightSweep() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-sky-600
                   text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl
                   transition"
      >
        Trigger LightSweep
      </button>

      {show && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-80 p-4 rounded-xl shadow-lg bg-sky-100 dark:bg-sky-800 text-sky-900 dark:text-sky-100 border-sky-500 border"
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 
                       dark:hover:text-white"
          >
            <AiOutlineClose />
          </button>

          <p className="font-medium">ℹ️ System Info Updated.</p>
        </motion.div>
      )}
    </div>
  );
}
