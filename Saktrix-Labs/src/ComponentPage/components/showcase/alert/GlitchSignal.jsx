import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function GlitchSignal() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-pink-700
                   text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl
                   transition"
      >
        Trigger GlitchSignal
      </button>

      {show && (
        <motion.div
          initial={{ x: -2 }}
          animate={{ x: [0, -2, 2, -2, 0] }}
          transition={{ duration: 0.6 }}
          className="relative w-80 p-4 rounded-xl shadow-lg bg-pink-100 dark:bg-pink-800 text-pink-900 dark:text-pink-100 border-pink-500 border"
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 
                       dark:hover:text-white"
          >
            <AiOutlineClose />
          </button>

          <p className="font-medium">🚨 Anomaly Detected in System.</p>
        </motion.div>
      )}
    </div>
  );
}
