import { motion } from "framer-motion";

export default function AIPulseBreadcrumb() {
  return (
    <nav className="flex space-x-4 p-4">
      {["Home", "AI Tools", "Assistant"].map((item, i) => (
        <motion.a
          key={i}
          href="#"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          className="text-purple-500 dark:text-purple-300 font-semibold"
        >
          {item}
        </motion.a>
      ))}
    </nav>
  );
}
