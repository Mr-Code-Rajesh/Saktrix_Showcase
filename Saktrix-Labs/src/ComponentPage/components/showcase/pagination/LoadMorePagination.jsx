import { useState } from "react";

export default function LoadMorePagination() {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => i + 1));

  const loadMore = () => {
    setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)]);
  };

  return (
    <div className="p-4 space-y-2 text-center">
      {items.map((item) => (
        <div key={item} className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
          Item {item}
        </div>
      ))}
      <button onClick={loadMore} className="mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
        Load More
      </button>
    </div>
  );
}
