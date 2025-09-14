import { motion } from "framer-motion";

export default function CircuitFlowLoader() {
  const circleSize = 96; // 24 * 4 (w-24 → 96px)
  const radius = circleSize / 2; // 48px

  return (
    <div className="relative flex items-center justify-center h-40">
      {/* Main circle */}
      <motion.div
        className="w-24 h-24 rounded-full border-4 border-yellow-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting dots (stick to the border) */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-yellow-500 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`, // keep centered
            transformOrigin: `${radius - 6}px 0px`, // stay INSIDE circle border
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3 + i, // slightly different speeds
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
