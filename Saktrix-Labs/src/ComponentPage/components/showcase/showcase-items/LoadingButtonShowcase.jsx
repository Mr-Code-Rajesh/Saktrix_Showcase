import { useState } from "react";

export default function LoadingButtonShowcase() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // fake loading
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-4 py-2 rounded-lg bg-indigo-600 text-white flex items-center justify-center gap-2 disabled:opacity-50"
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        "Click Me"
      )}
    </button>
  );
}
