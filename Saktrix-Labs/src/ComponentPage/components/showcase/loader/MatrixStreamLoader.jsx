import { motion } from "framer-motion";

export default function MatrixStreamLoader() {
  return (
    <div className="flex space-x-1 h-40 items-center justify-center bg-black p-4 rounded">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 bg-green-400"
          initial={{ height: "20%" }}
          animate={{ height: ["20%", "100%", "20%"] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
