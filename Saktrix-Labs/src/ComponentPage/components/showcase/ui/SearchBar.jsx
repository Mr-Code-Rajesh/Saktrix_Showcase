import { useState } from "react";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  // Flatten all items
  const allItems = showcaseConfig.flatMap((cat) => cat.items);

  const filtered = allItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 Search components..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-md px-3 py-2 text-sm border dark:bg-gray-700 dark:text-white"
      />
      {query && (
        <ul className="mt-2 space-y-1 max-h-40 overflow-y-auto">
          {filtered.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {item.name}
              </a>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="text-sm text-gray-500">No matches found</li>
          )}
        </ul>
      )}
    </div>
  );
}
