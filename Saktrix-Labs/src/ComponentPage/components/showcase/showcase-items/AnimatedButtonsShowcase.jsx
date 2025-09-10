import { motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiPlus, FiHeart, FiStar, FiSend, FiSearch, FiDownload, FiUpload, FiTrash2, FiEdit, FiShare, FiBell, FiUser, FiSettings, FiLock, FiCamera, FiGift, FiCloud, FiGlobe } from "react-icons/fi";

// 1. Animated Gradient Button
export function AnimatedGradientButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05, background: "linear-gradient(90deg,#ff6a00,#ee0979)" }}
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transition"
    >
      Animated Gradient
    </motion.button>
  );
}

// 2. Bouncy Icon Button
export function BouncyIconButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      className="px-4 py-2 rounded-full bg-blue-600 text-white flex items-center gap-2 shadow hover:bg-blue-700"
    >
      <FiArrowRight /> Bouncy
    </motion.button>
  );
}

// 3. Success Check Button
export function SuccessCheckButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#22c55e" }}
      className="px-4 py-2 rounded-lg bg-green-500 text-white flex items-center gap-2"
    >
      <FiCheck /> Success
    </motion.button>
  );
}

// 4. Pulse Add Button
export function PulseAddButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      animate={{ boxShadow: ["0 0 0px #22d3ee", "0 0 10px #22d3ee"] }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="px-4 py-2 rounded-lg bg-cyan-500 text-white flex items-center gap-2"
    >
      <FiPlus /> Add
    </motion.button>
  );
}

// 5. Heartbeat Button
export function HeartbeatButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="px-4 py-2 rounded-lg bg-pink-500 text-white flex items-center gap-2"
    >
      <FiHeart /> Love
    </motion.button>
  );
}

// 6. Star Button
export function StarButton() {
  return (
    <motion.button
      whileHover={{ rotate: 12 }}
      className="px-4 py-2 rounded-lg bg-yellow-400 text-white flex items-center gap-2"
    >
      <FiStar /> Star
    </motion.button>
  );
}

// 7. Send Button
export function SendButton() {
  return (
    <motion.button
      whileHover={{ x: 5 }}
      className="px-4 py-2 rounded-lg bg-indigo-500 text-white flex items-center gap-2"
    >
      <FiSend /> Send
    </motion.button>
  );
}

// 8. Search Button
export function SearchButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white flex items-center gap-2"
    >
      <FiSearch /> Search
    </motion.button>
  );
}

// 9. Download Button
export function DownloadButton() {
  return (
    <motion.button
      whileHover={{ y: 2 }}
      className="px-4 py-2 rounded-lg bg-green-600 text-white flex items-center gap-2"
    >
      <FiDownload /> Download
    </motion.button>
  );
}

// 10. Upload Button
export function UploadButton() {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-2"
    >
      <FiUpload /> Upload
    </motion.button>
  );
}

// 11. Danger Delete Button
export function DangerDeleteButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
      className="px-4 py-2 rounded-lg bg-red-500 text-white flex items-center gap-2"
    >
      <FiTrash2 /> Delete
    </motion.button>
  );
}

// 12. Edit Button
export function EditButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-lg bg-purple-500 text-white flex items-center gap-2"
    >
      <FiEdit /> Edit
    </motion.button>
  );
}

// 13. Share Button
export function ShareButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-lg bg-teal-500 text-white flex items-center gap-2"
    >
      <FiShare /> Share
    </motion.button>
  );
}

// 14. Bell Notification Button
export function BellNotificationButton() {
  return (
    <motion.button
      whileHover={{ rotate: 10 }}
      className="px-4 py-2 rounded-lg bg-yellow-500 text-white flex items-center gap-2"
    >
      <FiBell /> Notify
    </motion.button>
  );
}

// 15. User Profile Button
export function UserProfileButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 rounded-lg bg-gray-700 text-white flex items-center gap-2"
    >
      <FiUser /> Profile
    </motion.button>
  );
}

// 16. Settings Button
export function SettingsButton() {
  return (
    <motion.button
      whileHover={{ rotate: 45 }}
      className="px-4 py-2 rounded-lg bg-blue-900 text-white flex items-center gap-2"
    >
      <FiSettings /> Settings
    </motion.button>
  );
}

// 17. Lock Button
export function LockButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-lg bg-gray-900 text-white flex items-center gap-2"
    >
      <FiLock /> Lock
    </motion.button>
  );
}

// 18. Camera Button
export function CameraButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 rounded-lg bg-pink-700 text-white flex items-center gap-2"
    >
      <FiCamera /> Camera
    </motion.button>
  );
}

// 19. Gift Button
export function GiftButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 rounded-lg bg-purple-700 text-white flex items-center gap-2"
    >
      <FiGift /> Gift
    </motion.button>
  );
}

// 20. Cloud Button
export function CloudButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-lg bg-blue-300 text-white flex items-center gap-2"
    >
      <FiCloud /> Cloud
    </motion.button>
  );
}

// 21. Globe Button
export function GlobeButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-lg bg-green-700 text-white flex items-center gap-2"
    >
      <FiGlobe /> Globe
    </motion.button>
  );
}
