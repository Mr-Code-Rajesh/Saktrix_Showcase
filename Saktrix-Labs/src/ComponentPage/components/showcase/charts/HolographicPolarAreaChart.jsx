import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "A", value: 100 },
  { name: "B", value: 300 },
  { name: "C", value: 200 },
  { name: "D", value: 250 },
];

const COLORS = ["#06b6d4", "#9333ea", "#ec4899", "#3b82f6"];

export default function HolographicPolarAreaChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={20} outerRadius={120}>
            {data.map((entry, index) => (
              <motion.g key={index} whileHover={{ scale: 1.1 }}>
                <Cell fill={COLORS[index % COLORS.length]} />
              </motion.g>
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
