// 21. AI Chat Card
export function AIChatCard() {
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 p-6 w-80 h-48 flex flex-col justify-end relative shadow-lg">
      <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-2 w-2/3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-3 py-2 shadow">
        Hello, how can I help you?
      </motion.div>
      <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="w-1/2 bg-blue-500 text-white rounded-lg px-3 py-2 self-end shadow">
        What's the weather?
      </motion.div>
      <motion.div initial={{ width: 0 }} animate={{ width: "40px" }} transition={{ repeat: Infinity, duration: 1 }} className="absolute left-6 bottom-6 h-2 bg-gray-300 dark:bg-gray-700 rounded-full" />
    </motion.div>
  );
}

// 22. Robo Assistant Card
export function RoboAssistantCard() {
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 p-6 w-80 h-48 flex flex-col items-center justify-center shadow-lg">
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} className="text-5xl mb-2">🤖</motion.div>
      <div className="text-lg font-bold">Robo Assistant</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">Ready to help!</div>
    </motion.div>
  );
}

// 23. Sentiment Analysis Card
export function SentimentAnalysisCard() {
  const [sentiment, setSentiment] = useState("neutral");
  return (
    <motion.div className={`rounded-xl p-6 w-80 h-48 flex flex-col items-center justify-center shadow-lg ${sentiment === "positive" ? "bg-green-200 dark:bg-green-800" : sentiment === "negative" ? "bg-red-200 dark:bg-red-800" : "bg-gray-200 dark:bg-gray-800"}`}>
      <div className="text-2xl mb-2">{sentiment === "positive" ? "😊" : sentiment === "negative" ? "😞" : "😐"}</div>
      <div className="font-bold">Sentiment: {sentiment}</div>
      <div className="flex gap-2 mt-2">
        <button className="px-2 py-1 rounded bg-green-400 text-white" onClick={() => setSentiment("positive")}>Positive</button>
        <button className="px-2 py-1 rounded bg-red-400 text-white" onClick={() => setSentiment("negative")}>Negative</button>
        <button className="px-2 py-1 rounded bg-gray-400 text-white" onClick={() => setSentiment("neutral")}>Neutral</button>
      </div>
    </motion.div>
  );
}

// 24. AI Timeline Card
export function AITimelineCard() {
  return (
    <motion.div className="rounded-xl bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-900 dark:to-blue-900 p-6 w-80 h-48 flex flex-col justify-center shadow-lg">
      <div className="font-bold mb-2">AI Timeline</div>
      <div className="flex items-center gap-2">
        {[1,2,3,4,5].map((step, i) => (
          <motion.div key={i} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: i * 0.2 }} className="w-6 h-6 bg-blue-500 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-xs">{step}</motion.div>
        ))}
      </div>
      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2 }} className="h-1 bg-blue-400 dark:bg-blue-600 rounded-full mt-2" />
    </motion.div>
  );
}

// 25. Voice Recognition Card
export function VoiceRecognitionCard() {
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-cyan-900 dark:to-blue-900 p-6 w-80 h-48 flex flex-col items-center justify-center shadow-lg">
      <div className="font-bold mb-2">Voice Recognition</div>
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-32 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-700 dark:to-cyan-700 rounded-full" />
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Listening...</div>
    </motion.div>
  );
}

// 26. AI Prediction Card
export function AIPredictionCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-green-100 to-blue-200 dark:from-green-900 dark:to-blue-900 p-6 w-80 h-48 flex items-center justify-center shadow-lg cursor-pointer" style={{ perspective: "800px" }} onClick={() => setFlipped(!flipped)} animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.7 }}>
      {flipped ? <div className="text-xl font-bold">Prediction: 98% Success</div> : <div className="text-xl font-bold">Click to Reveal Prediction</div>}
    </motion.div>
  );
}

// 27. Data Encryption Card
export function DataEncryptionCard() {
  const [locked, setLocked] = useState(true);
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900 p-6 w-80 h-48 flex flex-col items-center justify-center shadow-lg">
      <motion.div animate={{ rotate: locked ? 0 : 90 }} transition={{ duration: 0.5 }} className="text-4xl mb-2">{locked ? "🔒" : "🔓"}</motion.div>
      <div className="font-bold">{locked ? "Data Locked" : "Data Unlocked"}</div>
      <button className="mt-2 px-3 py-1 rounded bg-blue-500 text-white" onClick={() => setLocked(!locked)}>{locked ? "Unlock" : "Lock"}</button>
    </motion.div>
  );
}

// 28. AI Collaboration Card
export function AICollaborationCard() {
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-pink-100 to-purple-200 dark:from-pink-900 dark:to-purple-900 p-6 w-80 h-48 flex flex-col items-center justify-center shadow-lg">
      <div className="font-bold mb-2">AI Collaboration</div>
      <div className="flex -space-x-4">
        {["🧑‍💻","🤖","👩‍💻"].map((avatar, i) => (
          <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1 + i * 0.2 }} className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-2xl border-2 border-purple-400 shadow">{avatar}</motion.div>
        ))}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Collaborating in real-time...</div>
    </motion.div>
  );
}

// 29. AI Art Card
export function AIArtCard() {
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-yellow-100 to-pink-200 dark:from-yellow-900 dark:to-pink-900 p-6 w-80 h-48 flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="absolute left-1/2 top-1/2 w-32 h-32 bg-gradient-to-r from-pink-400 to-yellow-400 dark:from-pink-700 dark:to-yellow-700 rounded-full opacity-30" style={{ transform: "translate(-50%,-50%)" }} />
      <div className="font-bold mb-2">AI Art</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">Generative background</div>
    </motion.div>
  );
}

// 30. AI Loader Card
export function AILoaderCard() {
  return (
    <motion.div className="rounded-xl bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-blue-900 p-6 w-80 h-48 flex flex-col items-center justify-center shadow-lg">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-12 h-12 border-4 border-blue-400 dark:border-blue-700 border-t-transparent rounded-full mb-2" />
      <div className="font-bold">AI Loader</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">Loading AI features...</div>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../../../Context/useTheme";

// 1. Neural Glow Card
export function NeuralGlowCard() {
  return (
    <motion.div
      animate={{ boxShadow: ["0 0 10px #00fff7", "0 0 30px #00fff7", "0 0 10px #00fff7"] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
  className="rounded-xl bg-gray-900 text-white p-6 border-2 border-cyan-400 w-80 h-48 flex items-center justify-center"
    >
      Neural Glow Card
    </motion.div>
  );
}

// 2. Quantum Flip Card
export function QuantumFlipCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.7 }}
  className="rounded-xl bg-gradient-to-br from-purple-900 to-blue-900 text-white p-6 shadow-xl w-80 h-48 flex items-center justify-center"
      style={{ perspective: "800px" }}
    >
      {flipped ? "Quantum Side" : "Flip Side"}
    </motion.div>
  );
}

// 3. Data Stream Card
export function DataStreamCard() {
  return (
    <motion.div
  className="rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white p-6 relative overflow-hidden w-80 h-48 flex items-center justify-center"
    >
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-blue-400 opacity-60"
      />
      Data Stream Card
    </motion.div>
  );
}

// 4. Hologram Card
export function HologramCard() {
  return (
    <motion.div
      whileHover={{ background: "rgba(255,255,255,0.2)", boxShadow: "0 0 30px #a5f3fc" }}
  className="rounded-xl bg-gradient-to-br from-cyan-200 via-white to-blue-300 text-blue-900 p-6 border border-white backdrop-blur-md w-80 h-48 flex items-center justify-center"
    >
      Hologram Card
    </motion.div>
  );
}

// 5. Synapse Pulse Card
export function SynapsePulseCard() {
  return (
    <motion.div
      animate={{ boxShadow: ["0 0 10px #38bdf8", "0 0 30px #38bdf8", "0 0 10px #38bdf8"] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
  className="rounded-xl bg-gray-900 text-white p-6 border-2 border-blue-400 w-80 h-48 flex items-center justify-center"
    >
      Synapse Pulse Card
    </motion.div>
  );
}

// 6. Cyber Prism Card
export function CyberPrismCard() {
  return (
    <motion.div
      whileHover={{ background: "linear-gradient(90deg,#ff6a00,#ee0979,#00fff7)" }}
  className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-6 shadow-lg w-80 h-48 flex items-center justify-center"
    >
      Cyber Prism Card
    </motion.div>
  );
}

// 7. Matrix Rain Card
export function MatrixRainCard() {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
  className="rounded-xl bg-black text-green-400 p-6 relative overflow-hidden border border-green-400 w-80 h-48 flex items-center justify-center"
    >
      Matrix Rain Card
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
    </motion.div>
  );
}

// 8. AI Avatar Card
export function AIAvatarCard() {
  return (
    <motion.div
      whileHover={{ rotate: 6, scale: 1.05 }}
  className="rounded-xl bg-gray-800 text-white p-6 shadow-lg flex flex-col items-center w-80 h-48 justify-center"
    >
      <motion.img
        src="https://robohash.org/ai-avatar?set=set2"
        alt="AI Avatar"
        whileHover={{ y: -10, rotate: 12 }}
        className="w-16 h-16 rounded-full mb-2 shadow-lg"
      />
      AI Avatar Card
    </motion.div>
  );
}

// 9. Predictive Insight Card
export function PredictiveInsightCard() {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      onClick={() => setExpanded(!expanded)}
      animate={{ height: expanded ? 180 : 100 }}
      transition={{ duration: 0.5 }}
  className="rounded-xl bg-blue-900 text-white p-6 shadow-lg cursor-pointer overflow-hidden w-80 h-48 flex items-center justify-center"
      style={{ height: expanded ? "180px" : "100px" }}
    >
      Predictive Insight Card
      {expanded && <div className="mt-2">Revealed AI Insights!</div>}
    </motion.div>
  );
}

// 10. Neon Grid Card
export function NeonGridCard() {
  return (
    <motion.div
      whileHover={{ rotate: 3, scale: 1.04 }}
  className="rounded-xl bg-black text-cyan-300 p-6 border-2 border-cyan-400 relative w-80 h-48 flex items-center justify-center"
    >
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 grid-rows-4 gap-2 opacity-30">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="border border-cyan-400" />
        ))}
      </div>
      Neon Grid Card
    </motion.div>
  );
}

// 11. Adaptive Shadow Card
export function AdaptiveShadowCard() {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={{ boxShadow: hover ? "0 10px 40px #38bdf8" : "0 2px 8px #38bdf8" }}
  className="rounded-xl bg-gray-900 text-white p-6 w-80 h-48 flex items-center justify-center"
    >
      Adaptive Shadow Card
    </motion.div>
  );
}

// 12. Floating Orbit Card
export function FloatingOrbitCard() {
  return (
    <motion.div
  className="rounded-xl bg-gray-900 text-white p-6 relative flex items-center justify-center w-80 h-48"
    >
      Floating Orbit Card
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
    </motion.div>
  );
}

// 13. Fractal Glow Card
export function FractalGlowCard() {
  return (
    <motion.div
      animate={{ background: ["linear-gradient(135deg,#00fff7,#ee0979)", "linear-gradient(135deg,#ee0979,#00fff7)"] }}
      transition={{ repeat: Infinity, duration: 2 }}
  className="rounded-xl bg-gradient-to-br from-cyan-400 to-pink-400 text-white p-6 shadow-lg w-80 h-48 flex items-center justify-center"
    >
      Fractal Glow Card
    </motion.div>
  );
}

// 14. Future Vision Card
export function FutureVisionCard() {
  return (
    <motion.div
  className="rounded-xl bg-white bg-opacity-20 backdrop-blur-lg text-blue-900 p-6 border border-blue-300 relative overflow-hidden w-80 h-48 flex items-center justify-center"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute left-1/2 top-1/2 w-24 h-24 bg-blue-300 rounded-full opacity-20"
        style={{ transform: "translate(-50%,-50%)" }}
      />
      Future Vision Card
    </motion.div>
  );
}

// 15. Smart Expand Card
export function SmartExpandCard() {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      onClick={() => setExpanded(!expanded)}
      animate={{ scale: expanded ? 1.2 : 1 }}
      transition={{ duration: 0.5 }}
  className="rounded-xl bg-indigo-900 text-white p-6 shadow-lg cursor-pointer w-80 h-48 flex items-center justify-center"
      style={{ zIndex: expanded ? 50 : 1 }}
    >
      Smart Expand Card
      {expanded && <div className="mt-2">Full Screen Content!</div>}
    </motion.div>
  );
}

// 16. Bio Pulse Card
export function BioPulseCard() {
  return (
    <motion.div
      animate={{ background: ["linear-gradient(90deg,#38bdf8,#f472b6)", "linear-gradient(90deg,#f472b6,#38bdf8)"] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
  className="rounded-xl bg-gradient-to-r from-blue-400 to-pink-400 text-white p-6 shadow-lg w-80 h-48 flex items-center justify-center"
    >
      Bio Pulse Card
    </motion.div>
  );
}

// 17. Cybernetic Frame Card
export function CyberneticFrameCard() {
  const [glitch, setGlitch] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
  className="rounded-xl bg-gray-900 text-white p-6 border-2 border-pink-400 relative w-80 h-48 flex items-center justify-center"
    >
      Cybernetic Frame Card
      {glitch && (
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: [0, 5, -5, 0] }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 w-full h-full border-2 border-pink-400 opacity-40"
        />
      )}
    </motion.div>
  );
}

// 18. Parallax Depth Card
export function ParallaxDepthCard() {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
  className="rounded-xl bg-gradient-to-br from-blue-900 to-purple-900 text-white p-6 shadow-lg relative overflow-hidden w-80 h-48 flex items-center justify-center"
    >
      <motion.div
        animate={{ x: hover ? 20 : 0 }}
        className="absolute top-0 left-0 w-16 h-16 bg-blue-400 opacity-30 rounded-full"
      />
      Parallax Depth Card
    </motion.div>
  );
}

// 19. Aurora Flow Card
export function AuroraFlowCard() {
  const { theme } = useTheme();
  return (
    <motion.div
      animate={{ background: [theme === "dark" ? "linear-gradient(90deg,#a5f3fc,#f472b6,#fbbf24)" : "linear-gradient(90deg,#fbbf24,#f472b6,#a5f3fc)", theme === "dark" ? "linear-gradient(90deg,#fbbf24,#f472b6,#a5f3fc)" : "linear-gradient(90deg,#a5f3fc,#fbbf24,#f472b6)"] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className={`rounded-xl p-6 shadow-lg w-80 h-48 flex items-center justify-center ${theme === "dark" ? "bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 text-white" : "bg-gradient-to-r from-yellow-100 via-pink-100 to-cyan-100 text-gray-900"}`}
    >
      Aurora Flow Card
    </motion.div>
  );
}

// 20. Glitch Effect Card
export function GlitchEffectCard() {
  const { theme } = useTheme();
  const [glitch, setGlitch] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
      className={`rounded-xl shadow-lg relative w-80 h-48 flex items-center justify-center p-6 ${theme === "dark" ? "bg-black text-pink-400" : "bg-white text-pink-700"}`}
    >
      Glitch Effect Card
      {glitch && (
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: [0, 5, -5, 0] }}
          transition={{ duration: 0.3 }}
          className={theme === "dark" ? "absolute left-0 top-0 w-full h-full bg-pink-400 opacity-20" : "absolute left-0 top-0 w-full h-full bg-pink-200 opacity-20"}
        />
      )}
    </motion.div>
  );
}
       