export default function GradientPagination() {
  return (
    <div className="flex space-x-2 p-4 justify-center">
      {[1,2,3,4,5].map(n => (
        <button key={n} className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-80 transition">
          {n}
        </button>
      ))}
    </div>
  );
}
