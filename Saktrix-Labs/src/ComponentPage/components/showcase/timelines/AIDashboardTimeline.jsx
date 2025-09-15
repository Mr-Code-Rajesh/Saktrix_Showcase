import { motion } from "framer-motion";

const events = [
  { label: "User Signups", value: "5K" },
  { label: "Revenue", value: "$120K" },
  { label: "Errors", value: "15" },
];

export default function AIDashboardTimeline() {
  return (
    <div className="flex space-x-6 overflow-x-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 }}
          viewport={{ once: true }}
          className="min-w-[150px] p-4 bg-white dark:bg-gray-800 rounded-xl shadow"
        >
          <h3 className="font-bold">{e.label}</h3>
          <p className="text-xl">{e.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
