import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

const CircuitWaveHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 dark:from-cyan-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
    {/* Circuit pattern with animated waves */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 320" className="w-full h-full">
        <g stroke="#06b6d4" strokeWidth="2" opacity="0.5">
          <motion.path
            d="M0 160 Q360 80 720 160 Q1080 240 1440 160"
            fill="none"
            animate={{
              pathLength: [0.7, 1, 0.7],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          {[64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024, 1088, 1152, 1216, 1280, 1344, 1408].map((x, i) => (
            <circle key={i} cx={x} cy={160 + Math.sin(i) * 40} r="4" fill="#06b6d4" opacity="0.7" />
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
        <FaBolt className="text-5xl text-cyan-400 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-cyan-400 dark:text-purple-200 mb-4 drop-shadow-glow"
      >
        Circuit Wave Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-cyan-100 dark:text-purple-100 mb-8"
      >
        Animated circuit waves and glowing CTAs for futuristic AI.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#06b6d4,#a78bfa)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-cyan-400"
      >
        Power Up
      </motion.button>
    </div>
  </section>
);

export default CircuitWaveHero;
