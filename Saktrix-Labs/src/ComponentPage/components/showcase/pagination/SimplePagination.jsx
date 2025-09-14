export default function SimplePagination() {
  return (
    <div className="flex space-x-2 p-4 justify-center">
      <button className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">Prev</button>
      {[1,2,3,4,5].map(n => (
        <button key={n} className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {n}
        </button>
      ))}
      <button className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">Next</button>
    </div>
  );
}
