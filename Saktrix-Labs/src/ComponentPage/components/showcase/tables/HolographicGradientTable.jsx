import { motion } from "framer-motion";

const data = [
  { id: "A1", metric: "Accuracy", value: "95%" },
  { id: "A2", metric: "Precision", value: "92%" },
  { id: "A3", metric: "Recall", value: "89%" },
];

export default function HolographicGradientTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left">
        <thead className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Metric</th>
            <th className="p-3">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={i}
              whileHover={{ x: 5 }}
              className="hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 text-gray-900 dark:text-gray-200"
            >
              <td className="p-3">{row.id}</td>
              <td className="p-3">{row.metric}</td>
              <td className="p-3">{row.value}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
