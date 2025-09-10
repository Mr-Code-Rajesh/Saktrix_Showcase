import { motion } from "framer-motion";
import { useState } from "react";

// Neon Pulse Button
export function NeonPulseButton() {
  return (
    <motion.button
      whileHover={{ boxShadow: "0 0 20px 5px #00fff7" }}
      animate={{ boxShadow: ["0 0 10px #00fff7", "0 0 20px #00fff7", "0 0 10px #00fff7"] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
      className="relative px-6 py-2 rounded-lg bg-black text-cyan-300 border-2 border-cyan-400"
    >
      Neon Pulse
    </motion.button>
  );
}

// Hologram Button
export function HologramButton() {
  return (
    <motion.button
      whileHover={{ background: "rgba(255,255,255,0.2)", boxShadow: "0 0 30px #a5f3fc" }}
      className="px-6 py-2 rounded-lg bg-gradient-to-br from-cyan-200 via-white to-blue-300 text-blue-900 border border-white backdrop-blur-md"
    >
      Hologram
    </motion.button>
  );
}

// Orbiting Glow Button
export function OrbitingGlowButton() {
  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-6 py-2 rounded-lg bg-gray-900 text-white border border-blue-400"
      >
        Orbiting Glow
      </motion.button>
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute -top-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg"
        style={{ marginLeft: "-0.375rem" }}
      />
      <motion.span
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute -bottom-2 left-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-lg"
        style={{ marginLeft: "-0.375rem" }}
      />
    </div>
  );
}

// Liquid Morph Button
export function LiquidMorphButton() {
  return (
    <motion.button
      whileHover={{ borderRadius: "2rem", scale: 1.07 }}
      animate={{ borderRadius: ["1rem", "2rem", "1rem"] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="px-6 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-lg"
    >
      Liquid Morph
    </motion.button>
  );
}

// Cyber Ripple Button
export function CyberRippleButton() {
  const [ripple, setRipple] = useState(false);
  return (
    <motion.button
      onClick={() => { setRipple(true); setTimeout(() => setRipple(false), 600); }}
      className="px-6 py-2 rounded-lg bg-black text-green-400 border border-green-400 relative overflow-hidden"
    >
      Cyber Ripple
      {ripple && (
        <motion.span
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-1/2 w-8 h-8 bg-green-400 rounded-full"
          style={{ transform: "translate(-50%,-50%)" }}
        />
      )}
    </motion.button>
  );
}

// Prism Shift Button
export function PrismShiftButton() {
  return (
    <motion.button
      whileHover={{ background: "linear-gradient(90deg,#ff6a00,#ee0979,#00fff7)" }}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg"
    >
      Prism Shift
    </motion.button>
  );
}

// Matrix Code Button
export function MatrixCodeButton() {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="px-6 py-2 rounded-lg bg-black text-green-400 border border-green-400 relative overflow-hidden"
    >
      Matrix Code
      {hover && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none text-xs text-green-400 font-mono"
        >
          <div className="absolute left-2 top-2 animate-fadeInDown">1010101010101010</div>
          <div className="absolute right-2 bottom-2 animate-fadeInDown">0101010101010101</div>
        </motion.div>
      )}
    </motion.button>
  );
}

// Galactic Beam Button
export function GalacticBeamButton() {
  return (
    <motion.button
      whileHover={{ background: "linear-gradient(90deg,#fff,#00fff7,#fff)" }}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-black via-blue-900 to-black text-white shadow-lg relative"
    >
      <span className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{ transform: "translateY(-50%)" }} />
      Galactic Beam
    </motion.button>
  );
}

// Quantum Flip Button
export function QuantumFlipButton() {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-2 rounded-lg bg-purple-900 text-white shadow-lg"
      style={{ perspective: "600px" }}
    >
      {flipped ? "Quantum" : "Flip"}
    </motion.button>
  );
}

// Aurora Flow Button
export function AuroraFlowButton() {
  return (
    <motion.button
      whileHover={{ background: "linear-gradient(90deg,#a5f3fc,#f472b6,#fbbf24)" }}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 text-white shadow-lg"
    >
      Aurora Flow
    </motion.button>
  );
}

// Starlight Button
export function StarlightButton() {
  return (
    <motion.button
      whileHover={{ boxShadow: "0 0 20px 5px #fff" }}
      className="px-6 py-2 rounded-lg bg-black text-white border border-white relative"
    >
      Starlight
      <span className="absolute left-2 top-2 w-2 h-2 bg-white rounded-full animate-pulse" />
      <span className="absolute right-2 bottom-2 w-2 h-2 bg-white rounded-full animate-pulse" />
    </motion.button>
  );
}

// Magnet Hover Button
export function MagnetHoverButton() {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={{ x: hover ? 10 : 0 }}
      className="px-6 py-2 rounded-lg bg-blue-900 text-white shadow-lg"
    >
      Magnet Hover
    </motion.button>
  );
}

// DNA Helix Button
export function DNAHelixButton() {
  return (
    <motion.button
      whileHover={{ rotate: 360 }}
      className="px-6 py-2 rounded-lg bg-green-700 text-white shadow-lg"
    >
      DNA Helix
    </motion.button>
  );
}

// AI Scan Button
export function AIScanButton() {
  return (
    <motion.button
      whileHover={{ background: "linear-gradient(90deg,#fff,#00fff7,#fff)" }}
      className="px-6 py-2 rounded-lg bg-gray-900 text-cyan-300 border border-cyan-400 relative"
    >
      <span className="absolute left-0 top-1/2 w-full h-1 bg-cyan-400 animate-pulse" style={{ transform: "translateY(-50%)" }} />
      AI Scan
    </motion.button>
  );
}

// Solar Flare Button
export function SolarFlareButton() {
  return (
    <motion.button
      whileHover={{ boxShadow: "0 0 30px 10px #f59e42" }}
      className="px-6 py-2 rounded-lg bg-yellow-500 text-white shadow-lg"
    >
      Solar Flare
    </motion.button>
  );
}

// Plasma Burst Button
export function PlasmaBurstButton() {
  const [burst, setBurst] = useState(false);
  return (
    <motion.button
      onClick={() => { setBurst(true); setTimeout(() => setBurst(false), 400); }}
      className="px-6 py-2 rounded-lg bg-purple-700 text-white shadow-lg relative"
    >
      Plasma Burst
      {burst && (
        <motion.span
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute left-1/2 top-1/2 w-8 h-8 bg-pink-400 rounded-full"
          style={{ transform: "translate(-50%,-50%)" }}
        />
      )}
    </motion.button>
  );
}

// Neural Pulse Button
export function NeuralPulseButton() {
  return (
    <motion.button
      whileHover={{ boxShadow: "0 0 20px 5px #38bdf8" }}
      className="px-6 py-2 rounded-lg bg-blue-900 text-white shadow-lg"
    >
      Neural Pulse
    </motion.button>
  );
}

// Infinity Loop Button
export function InfinityLoopButton() {
  return (
    <motion.button
      whileHover={{ borderColor: "#f472b6" }}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 text-white border-2 border-pink-400"
    >
      Infinity Loop
    </motion.button>
  );
}

// Time Warp Button
export function TimeWarpButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, filter: "blur(2px)" }}
      className="px-6 py-2 rounded-lg bg-gray-900 text-white shadow-lg"
    >
      Time Warp
    </motion.button>
  );
}

// Crystal Shine Button
export function CrystalShineButton() {
  return (
    <motion.button
      whileHover={{ background: "linear-gradient(120deg,#fff,#a5f3fc,#f472b6)" }}
      className="px-6 py-2 rounded-lg bg-gradient-to-br from-blue-200 via-white to-pink-200 text-blue-900 shadow-lg"
    >
      Crystal Shine
    </motion.button>
  );
}

// Zero Gravity Button
export function ZeroGravityButton() {
  return (
    <motion.button
      whileHover={{ y: -10 }}
      className="px-6 py-2 rounded-lg bg-indigo-900 text-white shadow-lg"
    >
      Zero Gravity
    </motion.button>
  );
}

// Cyber Circuit Button
export function CyberCircuitButton() {
  return (
    <motion.button
      whileHover={{ boxShadow: "0 0 20px 5px #0ff" }}
      className="px-6 py-2 rounded-lg bg-black text-cyan-300 border-2 border-cyan-400"
    >
      Cyber Circuit
    </motion.button>
  );
}

// Energy Orb Button
export function EnergyOrbButton() {
  return (
    <motion.button
      whileHover={{ boxShadow: "0 0 20px 5px #fbbf24" }}
      className="px-6 py-2 rounded-lg bg-yellow-400 text-white shadow-lg relative"
    >
      <span className="absolute left-1/2 top-1/2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse" style={{ transform: "translate(-50%,-50%)" }} />
      Energy Orb
    </motion.button>
  );
}

// Pixel Glitch Button
export function PixelGlitchButton() {
  const [glitch, setGlitch] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
      className="px-6 py-2 rounded-lg bg-gray-900 text-pink-400 shadow-lg relative"
    >
      Pixel Glitch
      {glitch && (
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: [0, 5, -5, 0] }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 w-full h-full bg-pink-400 opacity-20"
        />
      )}
    </motion.button>
  );
}
