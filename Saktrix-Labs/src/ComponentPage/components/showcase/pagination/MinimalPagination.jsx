export default function MinimalPagination() {
  return (
    <div className="flex space-x-4 p-4 justify-center">
      {[1,2,3,4,5].map(n => (
        <button key={n} className="px-2 border-b-2 border-transparent hover:border-blue-500">
          {n}
        </button>
      ))}
    </div>
  );
}
