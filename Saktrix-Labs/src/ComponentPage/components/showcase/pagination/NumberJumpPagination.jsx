import { useState } from "react";

export default function NumberJumpPagination() {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  const jump = () => {
    const num = parseInt(input);
    if (!isNaN(num)) setPage(num);
  };

  return (
    <div className="flex flex-col items-center space-y-3 p-4">
      <p>Current Page: {page}</p>
      <div className="flex space-x-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="px-2 py-1 border rounded" placeholder="Enter page" />
        <button onClick={jump} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Go</button>
      </div>
    </div>
  );
}
