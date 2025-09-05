import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function CommandHintBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full h-[50px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white px-4 flex justify-between items-center text-sm shadow">
      <p className="items-center">
        💡 Tip: Press <strong>Ctrl+K</strong> (or ⌘+K) to quickly search components.
      </p>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 hover:bg-white/20 p-1 rounded"
      >
        <FiX size={18} />
      </button>
    </div>
  );
}
