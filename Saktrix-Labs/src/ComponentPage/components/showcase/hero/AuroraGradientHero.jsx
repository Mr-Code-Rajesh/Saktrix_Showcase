import { motion } from "framer-motion";
import { FaCloudSun } from "react-icons/fa";

const AuroraGradientHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
    {/* Aurora animated gradient waves */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 320" className="w-full h-full">
        <defs>
          <linearGradient id="aurora" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <path d="M0,160 Q360,80 720,160 Q1080,240 1440,160 L1440,320 L0,320 Z" fill="url(#aurora)" opacity="0.7">
          <animate attributeName="d" dur="6s" repeatCount="indefinite"
            values="M0,160 Q360,80 720,160 Q1080,240 1440,160 L1440,320 L0,320 Z;
                    M0,180 Q360,120 720,180 Q1080,240 1440,180 L1440,320 L0,320 Z;
                    M0,160 Q360,80 720,160 Q1080,240 1440,160 L1440,320 L0,320 Z" />
        </path>
      </svg>
    </motion.div>
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaCloudSun className="text-5xl text-pink-200 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-pink-200 dark:text-blue-200 mb-4 drop-shadow-glow"
      >
        Aurora Gradient Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-pink-100 dark:text-blue-100 mb-8"
      >
        Immerse yourself in animated aurora gradients and glowing CTAs.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#a78bfa,#f472b6)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold shadow-lg transition-all duration-300 hover:from-pink-400 hover:to-purple-500"
      >
        Discover More
      </motion.button>
    </div>
  </section>
);

export default AuroraGradientHero;
