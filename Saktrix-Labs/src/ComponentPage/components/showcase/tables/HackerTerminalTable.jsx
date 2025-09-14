import { motion } from "framer-motion";

const logs = [
  { time: "12:01", action: "User Login", status: "Success" },
  { time: "12:05", action: "File Upload", status: "Failed" },
  { time: "12:10", action: "System Scan", status: "Running" },
];

export default function HackerTerminalTable() {
  return (
    <div className="overflow-x-auto p-4 bg-black rounded">
      <table className="min-w-full text-green-400 font-mono text-sm">
        <thead>
          <tr className="border-b border-green-700">
            <th className="p-2">Time</th>
            <th className="p-2">Action</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((row, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.3 }}
              className="hover:bg-green-900/30 border-b border-green-700"
            >
              <td className="p-2">{row.time}</td>
              <td className="p-2">{row.action}</td>
              <td className="p-2">{row.status}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
