import { motion } from "framer-motion";

export default function NeonBreadcrumb() {
  return (
    <nav className="flex space-x-3 p-4">
      {["Home", "Dashboard", "Analytics"].map((item, i) => (
        <motion.a
          key={i}
          href="#"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(59,130,246,1)" }}
          className="text-blue-400 font-medium"
        >
          {item}
        </motion.a>
      ))}
    </nav>
  );
}
