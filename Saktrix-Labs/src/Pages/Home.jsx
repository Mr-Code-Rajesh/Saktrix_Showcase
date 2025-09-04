import { motion } from "framer-motion";
import { FaReact, FaMagic, FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import WhySaktrix from "./WhySaktrix";
import ScrollDemo from "../Components/ScrollDemo";
import CommunitySection from "./Community";
import ProgressSection from "./SaktrixPrograss";

export default function Home() {
  return (
    <>
     <section>
       <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white dark:bg-black">
      {/* Floating Orbs Background */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-20 blur-3xl"
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 70, -70, 0],
          scale: [1.2, 1, 1.3, 1.2],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r 
                   from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
      >
        Saktrix Showcase
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300"
      >
        Explore futuristic UI components powered by React, Tailwind, and Framer Motion.  
        Built for developers, inspired by AI design aesthetics.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-10 flex space-x-6"
      >
        <NavLink
          to="/components"
          className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r 
                     from-purple-500 to-pink-500 shadow-lg hover:scale-105 transition"
        >
          🚀 Explore Components
        </NavLink>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl font-semibold border border-gray-300 dark:border-gray-700 
                     bg-white/40 dark:bg-black/40 backdrop-blur-lg shadow-lg 
                     hover:scale-105 transition text-gray-800 dark:text-gray-200"
        >
          ⭐ Star on GitHub
        </a>
      </motion.div>

      {/* Feature Row */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl"
      >
        <FeatureCard icon={<FaReact />} title="React Powered" desc="Built with React & JSX simplicity." />
        <FeatureCard icon={<FaMagic />} title="AI Inspired" desc="Neon glow + futuristic animations." />
        <FeatureCard icon={<FaCode />} title="Developer Friendly" desc="Clean, scalable, easy to use." />
      </motion.div>
    </div>
     </section>

     <section>

      <WhySaktrix/>
      <ScrollDemo/>
      <CommunitySection/>
      <ProgressSection/>

     </section>
    </>
  );
}



/* Reusable Feature Card function */
function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800
                 bg-white/30 dark:bg-black/30 backdrop-blur-lg
                 text-gray-800 dark:text-gray-200 flex flex-col items-center space-y-3"
    >
      <div className="text-4xl text-purple-500">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </motion.div>
  );
}
