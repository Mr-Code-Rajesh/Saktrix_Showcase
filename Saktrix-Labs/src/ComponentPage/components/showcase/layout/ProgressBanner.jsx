import { motion } from "framer-motion";

export default function ProgressBanner() {
  const progress = 70; // Saktrix UI project completion %

  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-2 text-sm font-medium">
          🚀 <strong>Saktrix UI</strong> is <strong>{progress}%</strong> complete → Full release coming soon!
        </p>

        {/* Progress bar */}
        <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-2 bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
