import { motion } from "framer-motion";

const data = [
  { name: "Alice", role: "Engineer", status: "Active" },
  { name: "Bob", role: "Designer", status: "Pending" },
  { name: "Charlie", role: "Manager", status: "Inactive" },
];

export default function NeonStripedTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-black text-cyan-400 border-b border-cyan-500">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={i}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className={`${i % 2 === 0
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-cyan-100"
                } hover:shadow-[0_0_15px_#06b6d4] transition`}
            >
              <td className="p-3">{row.name}</td>
              <td className="p-3">{row.role}</td>
              <td className="p-3">{row.status}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
