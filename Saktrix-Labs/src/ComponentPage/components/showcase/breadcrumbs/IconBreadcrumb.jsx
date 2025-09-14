import { FaHome, FaBook, FaCode } from "react-icons/fa";

export default function IconBreadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 p-4">
      <a href="#" className="flex items-center space-x-1 hover:text-indigo-500"><FaHome /> <span>Home</span></a>
      <span>/</span>
      <a href="#" className="flex items-center space-x-1 hover:text-indigo-500"><FaBook /> <span>Docs</span></a>
      <span>/</span>
      <a href="#" className="flex items-center space-x-1 hover:text-indigo-500 font-semibold"><FaCode /> <span>API</span></a>
    </nav>
  );
}
