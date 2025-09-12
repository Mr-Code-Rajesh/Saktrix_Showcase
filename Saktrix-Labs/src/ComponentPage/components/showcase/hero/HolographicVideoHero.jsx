import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

const HolographicVideoHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 dark:from-cyan-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
    {/* Holographic glow and video background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="w-full h-full opacity-30">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <svg width="100%" height="100%" viewBox="0 0 1440 320" className="w-full h-full absolute top-0 left-0">
        <defs>
          <radialGradient id="holoGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="720" cy="160" rx="600" ry="120" fill="url(#holoGlow)" />
      </svg>
    </motion.div>
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaPlayCircle className="text-5xl text-cyan-200 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-cyan-200 dark:text-pink-200 mb-4 drop-shadow-glow"
      >
        Holographic Video Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-cyan-100 dark:text-pink-100 mb-8"
      >
        Holographic glow and animated video background for immersive AI experiences.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#06b6d4,#f472b6)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-bold shadow-lg transition-all duration-300 hover:from-pink-400 hover:to-cyan-400"
      >
        Watch Demo
      </motion.button>
    </div>
  </section>
);

export default HolographicVideoHero;
