import { motion } from "framer-motion";
import { FaMicrochip } from "react-icons/fa";

const CyberGridHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-black dark:bg-gray-900 relative overflow-hidden">
    {/* Cyberpunk grid lines background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 320" className="w-full h-full">
        <g stroke="#06b6d4" strokeWidth="1" opacity="0.3">
          {[...Array(20)].map((_, i) => (
            <line key={i} x1={i * 72} y1="0" x2={i * 72} y2="320" />
          ))}
          {[...Array(10)].map((_, i) => (
            <line key={i} x1="0" y1={i * 32} x2="1440" y2={i * 32} />
          ))}
        </g>
      </svg>
    </motion.div>
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaMicrochip className="text-5xl text-cyan-400 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-cyan-400 dark:text-cyan-300 mb-4 drop-shadow-glow"
      >
        Cyber Grid Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-cyan-200 dark:text-cyan-100 mb-8"
      >
        Step into the cyberpunk future with animated grid lines and glowing accents.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#06b6d4,#a78bfa)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-cyan-400"
      >
        Explore Now
      </motion.button>
    </div>
  </section>
);

export default CyberGridHero;
