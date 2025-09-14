import { motion } from "framer-motion";

const users = [
  { name: "Alice", role: "Admin", lastLogin: "2025-09-01" },
  { name: "Bob", role: "User", lastLogin: "2025-09-05" },
  { name: "Charlie", role: "Manager", lastLogin: "2025-09-10" },
];

export default function AIDashboardTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-800 dark:bg-gray-700 text-gray-300">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Last Login</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row, i) => (
            <motion.tr
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="hover:bg-gray-700 text-white"
            >
              <td className="p-3">{row.name}</td>
              <td className="p-3">{row.role}</td>
              <td className="p-3">{row.lastLogin}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
