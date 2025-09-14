export default function DotBreadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 p-4">
      <a href="#" className="hover:text-pink-500">Home</a>
      <span>•</span>
      <a href="#" className="hover:text-pink-500">Categories</a>
      <span>•</span>
      <a href="#" className="hover:text-pink-500 font-semibold">Shoes</a>
    </nav>
  );
}
