import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function SynapseSpark() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600
                   text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl
                   transition"
      >
        Trigger SynapseSpark
      </button>

      {show && (
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-80 p-4 rounded-xl shadow-lg bg-emerald-100 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 border-emerald-500 border"
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 
                       dark:hover:text-white"
          >
            <AiOutlineClose />
          </button>

          <p className="font-medium">🔌 Connection Established Successfully.</p>
        </motion.div>
      )}
    </div>
  );
}
