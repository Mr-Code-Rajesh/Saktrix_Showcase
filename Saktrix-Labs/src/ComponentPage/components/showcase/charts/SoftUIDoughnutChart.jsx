import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Used", value: 70 },
  { name: "Free", value: 30 },
];

const COLORS = ["#3b82f6", "#d1d5db"];

export default function SoftUIDoughnutChart() {
  return (
    <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-800 shadow-inner flex flex-col items-center">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <motion.g key={index} whileHover={{ scale: 1.1 }}>
                <Cell fill={COLORS[index % COLORS.length]} />
              </motion.g>
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl font-bold mt-2 text-gray-700 dark:text-gray-200"
      >
        70% Used
      </motion.div>
    </div>
  );
}
