import { motion } from "framer-motion";

export default function NeonPagination() {
  return (
    <div className="flex space-x-3 p-4 justify-center">
      {[1,2,3,4,5].map(n => (
        <motion.button
          key={n}
          whileHover={{ scale: 1.2, boxShadow: "0px 0px 12px rgba(59,130,246,0.8)" }}
          className="px-3 py-2 rounded-lg bg-black text-blue-400 border border-blue-500 shadow-lg"
        >
          {n}
        </motion.button>
      ))}
    </div>
  );
}
