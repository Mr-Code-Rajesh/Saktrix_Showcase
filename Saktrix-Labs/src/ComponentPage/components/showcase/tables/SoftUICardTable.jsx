import { motion } from "framer-motion";

const data = [
  { id: 1, project: "Alpha", status: "Complete" },
  { id: 2, project: "Beta", status: "Ongoing" },
  { id: 3, project: "Gamma", status: "Pending" },
];

export default function SoftUICardTable() {
  return (
    <div className="overflow-x-auto p-4 space-y-3">
      {data.map((row, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-4 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-inner"
        >
          <div className="flex justify-between">
            <span>{row.project}</span>
            <span>{row.status}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
