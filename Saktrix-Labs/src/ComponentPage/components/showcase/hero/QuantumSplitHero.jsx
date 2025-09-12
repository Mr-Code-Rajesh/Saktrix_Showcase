import { motion } from "framer-motion";
import { FaAtom } from "react-icons/fa";

const QuantumSplitHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
    {/* Split layout with animated divider */}
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1 }}
      className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400 dark:from-pink-600 dark:via-purple-600 dark:to-indigo-600 z-0"
      style={{ transform: "translateX(-50%)" }}
    />
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaAtom className="text-5xl text-purple-300 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-purple-300 dark:text-pink-200 mb-4 drop-shadow-glow"
      >
        Quantum Split Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-purple-100 dark:text-pink-100 mb-8"
      >
        Quantum-inspired split layout with animated divider and glowing CTA.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#a78bfa,#f472b6)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold shadow-lg transition-all duration-300 hover:from-pink-400 hover:to-purple-500"
      >
        Try Quantum
      </motion.button>
    </div>
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaAtom className="text-5xl text-indigo-300 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-indigo-300 dark:text-purple-200 mb-4 drop-shadow-glow"
      >
        Quantum Split Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-indigo-100 dark:text-purple-100 mb-8"
      >
        Quantum-inspired split layout with animated divider and glowing CTA.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#a78bfa,#f472b6)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-bold shadow-lg transition-all duration-300 hover:from-purple-400 hover:to-indigo-500"
      >
        Try Quantum
      </motion.button>
    </div>
  </section>
);

export default QuantumSplitHero;
