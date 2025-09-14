import { motion } from "framer-motion";

const data = [
  { id: 1, task: "Training Model", status: "Complete" },
  { id: 2, task: "Data Cleaning", status: "In Progress" },
  { id: 3, task: "Deployment", status: "Pending" },
];

export default function CyberGridTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left border-collapse border border-green-500">
        <thead>
          <tr className="bg-black text-green-400">
            <th className="p-3 border border-green-500">ID</th>
            <th className="p-3 border border-green-500">Task</th>
            <th className="p-3 border border-green-500">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={i}
              whileHover={{ scale: 1.01, boxShadow: "0px 0px 15px rgba(34,197,94,0.8)" }}
              className="text-green-200 border border-green-500"
            >
              <td className="p-3">{row.id}</td>
              <td className="p-3">{row.task}</td>
              <td className="p-3">{row.status}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
