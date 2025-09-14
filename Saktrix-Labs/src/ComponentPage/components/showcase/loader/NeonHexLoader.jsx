import { motion } from "framer-motion";

export default function NeonHexLoader() {
  return (
    <motion.div
      className="h-40 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <div className="w-20 h-20 border-4 border-purple-500"
           style={{ clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)" }}>
      </div>
    </motion.div>
  );
}
