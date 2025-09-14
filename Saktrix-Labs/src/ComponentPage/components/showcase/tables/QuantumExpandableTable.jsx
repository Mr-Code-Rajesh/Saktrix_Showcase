import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  { id: 1, name: "Dataset 1", details: "Rows: 10k, Size: 20MB" },
  { id: 2, name: "Dataset 2", details: "Rows: 50k, Size: 100MB" },
];

export default function QuantumExpandableTable() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left bg-gray-900 text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <>
              <motion.tr
                key={row.id}
                whileHover={{ scale: 1.01 }}
                className="cursor-pointer hover:bg-gray-700"
                onClick={() => setExpanded(expanded === row.id ? null : row.id)}
              >
                <td className="p-3">{row.id}</td>
                <td className="p-3">{row.name}</td>
              </motion.tr>
              {expanded === row.id && (
                <motion.tr
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gray-800"
                >
                  <td colSpan="2" className="p-3">
                    {row.details}
                  </td>
                </motion.tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
