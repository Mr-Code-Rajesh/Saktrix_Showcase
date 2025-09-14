export default function BoxBreadcrumb() {
  return (
    <nav className="flex space-x-2 p-4">
      <a href="#" className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white">Home</a>
      <a href="#" className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white">Shop</a>
      <a href="#" className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white font-semibold">Checkout</a>
    </nav>
  );
}
