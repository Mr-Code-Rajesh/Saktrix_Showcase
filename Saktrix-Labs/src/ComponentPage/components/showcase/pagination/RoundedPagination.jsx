export default function RoundedPagination() {
  return (
    <div className="flex space-x-2 p-4 justify-center">
      {[1,2,3,4,5].map(n => (
        <button key={n} className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white">
          {n}
        </button>
      ))}
    </div>
  );
}
