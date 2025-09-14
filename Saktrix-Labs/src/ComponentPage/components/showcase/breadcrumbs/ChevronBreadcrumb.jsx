import { FaChevronRight } from "react-icons/fa";

export default function ChevronBreadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 p-4">
      <a href="#" className="hover:text-blue-500">Home</a>
      <FaChevronRight className="text-xs" />
      <a href="#" className="hover:text-blue-500">Library</a>
      <FaChevronRight className="text-xs" />
      <a href="#" className="hover:text-blue-500 font-semibold">Data</a>
    </nav>
  );
}
