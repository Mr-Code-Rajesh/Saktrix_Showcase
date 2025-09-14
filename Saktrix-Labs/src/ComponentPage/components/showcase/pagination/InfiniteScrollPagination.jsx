import { useEffect, useState } from "react";

export default function InfiniteScrollPagination() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i + 1));

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-4 space-y-2">
      {items.map((item) => (
        <div key={item} className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
          Item {item}
        </div>
      ))}
      <p className="text-center text-gray-500 dark:text-gray-400">Scroll to load more...</p>
    </div>
  );
}
