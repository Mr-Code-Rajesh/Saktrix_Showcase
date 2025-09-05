import { useState } from "react";

export default function ToggleSwitchShowcase() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          enabled ? "bg-indigo-600" : "bg-gray-400"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <span className="text-sm">{enabled ? "Enabled" : "Disabled"}</span>
    </div>
  );
}






