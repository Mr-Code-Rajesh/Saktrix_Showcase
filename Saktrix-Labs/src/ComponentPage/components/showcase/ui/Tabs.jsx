import { useState } from "react";

export default function Tabs({ preview, code }) {
  const [active, setActive] = useState("preview");

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-4 border-b pb-2">
        <button
          onClick={() => setActive("preview")}
          className={`pb-1 ${active === "preview" ? "font-bold border-b-2 border-indigo-500" : ""}`}
        >
          🔍 Preview
        </button>
        <button
          onClick={() => setActive("code")}
          className={`pb-1 ${active === "code" ? "font-bold border-b-2 border-indigo-500" : ""}`}
        >
          💻 Code
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {active === "preview" ? preview : code}
      </div>
    </div>
  );
}
