import { FaSearch } from "react-icons/fa";

export default function GlassmorphismSearchBar() {
  return (
    <div className="flex items-center px-4 py-2 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-md shadow-md">
      <FaSearch className="text-gray-600 dark:text-gray-300" />
      <input
        type="text"
        placeholder="Glass search..."
        className="ml-2 bg-transparent outline-none flex-1 text-gray-700 dark:text-gray-200"
      />
    </div>
  );
}
