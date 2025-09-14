import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const data = [
  { id: 1, name: "Report A", owner: "Alice" },
  { id: 2, name: "Report B", owner: "Bob" },
];

export default function OrbitInteractiveTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left bg-gray-100 dark:bg-gray-900 rounded-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Owner</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr key={i} whileHover={{ x: 5 }} className="hover:bg-gray-200 dark:hover:bg-gray-800">
              <td className="p-3">{row.id}</td>
              <td className="p-3">{row.name}</td>
              <td className="p-3">{row.owner}</td>
              <td className="p-3 flex space-x-2">
                <motion.button whileHover={{ rotate: 360 }} className="text-blue-500"><FaEdit /></motion.button>
                <motion.button whileHover={{ rotate: 360 }} className="text-red-500"><FaTrash /></motion.button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
