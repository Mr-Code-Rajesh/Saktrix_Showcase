import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function IconPagination() {
  return (
    <div className="flex space-x-4 p-4 justify-center items-center">
      <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white">
        <FaArrowLeft />
      </button>
      <span className="px-3">Page 2 of 5</span>
      <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white">
        <FaArrowRight />
      </button>
    </div>
  );
}
