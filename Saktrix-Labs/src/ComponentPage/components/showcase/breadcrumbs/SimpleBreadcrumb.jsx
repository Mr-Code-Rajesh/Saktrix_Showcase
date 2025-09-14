export default function SimpleBreadcrumb() {
  return (
    <nav className="flex space-x-2 text-gray-600 dark:text-gray-300 p-4">
      <a href="#" className="hover:text-blue-500">Home</a>
      <span>/</span>
      <a href="#" className="hover:text-blue-500">Products</a>
      <span>/</span>
      <a href="#" className="hover:text-blue-500 font-semibold">Shoes</a>
    </nav>
  );
}
