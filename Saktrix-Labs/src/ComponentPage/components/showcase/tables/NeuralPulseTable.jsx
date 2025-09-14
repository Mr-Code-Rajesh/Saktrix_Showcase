import { motion } from "framer-motion";

const data = [
  { id: 1, metric: "Speed", value: "120ms" },
  { id: 2, metric: "Latency", value: "30ms" },
  { id: 3, metric: "Throughput", value: "500req/s" },
];

export default function NeuralPulseTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left">
        <thead className="bg-purple-700 text-white">
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
              whileHover={{ scale: 1.02 }}
              className="hover:shadow-[0_0_10px_#a855f7]"
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
