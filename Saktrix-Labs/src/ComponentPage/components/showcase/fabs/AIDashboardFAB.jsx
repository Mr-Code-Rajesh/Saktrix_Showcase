import { motion } from "framer-motion";
import { RiDashboardFill } from "react-icons/ri";

export default function AIDashboardFAB() {
  return (
    // 👇 Parent container is relative so child can use absolute positioning
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
      >
        <RiDashboardFill size={22} />
      </motion.button>
    </div>
  );
}
