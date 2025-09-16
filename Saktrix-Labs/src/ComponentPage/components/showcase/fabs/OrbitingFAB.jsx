import { motion } from "framer-motion";
import { IoPlanet } from "react-icons/io5";
import { FaStar, FaRocket } from "react-icons/fa";

export default function OrbitingFAB() {
  return (
      <div className="relative w-full h-48 flex items-center justify-center bg-gray-900 rounded-lg">

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className=" absolute w-14 h-14 flex items-center justify-center rounded-full bg-purple-600 text-white"
      >
        <IoPlanet size={22} />
      </motion.button>
      <motion.div
        className="absolute w-32 h-32 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <div className="absolute -top-5 left-2 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-400 text-black">
          <FaStar size={14} />
        </div>
        <div className="absolute -left-5 top-2 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white">
          <FaRocket size={14} />
        </div>
      </motion.div>
    </div>
  );
}
