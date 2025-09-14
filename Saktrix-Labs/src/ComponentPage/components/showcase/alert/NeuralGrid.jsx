import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function NeuralGrid() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600
                   text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl
                   transition"
      >
        Trigger NeuralGrid
      </button>

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 0.6 }}
          className="relative w-80 p-4 rounded-xl shadow-lg bg-cyan-100 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-100 border-cyan-500 border"
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 
                       dark:hover:text-white"
          >
            <AiOutlineClose />
          </button>

          <p className="font-medium">📊 AI Training Completed Successfully.</p>
        </motion.div>
      )}
    </div>
  );
}
