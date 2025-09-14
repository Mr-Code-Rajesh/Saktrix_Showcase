import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function EchoWave() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600
                   text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl
                   transition"
      >
        Trigger EchoWave
      </button>

      {show && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-80 p-4 rounded-xl shadow-lg bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 border-indigo-500 border"
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 
                       dark:hover:text-white"
          >
            <AiOutlineClose />
          </button>

          <p className="font-medium">📩 New Message Ping Received.</p>
        </motion.div>
      )}
    </div>
  );
}
