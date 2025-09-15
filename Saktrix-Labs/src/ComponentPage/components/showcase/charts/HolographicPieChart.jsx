import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "AI", value: 400 },
  { name: "VR", value: 300 },
  { name: "IoT", value: 200 },
  { name: "Robotics", value: 100 },
];

const COLORS = ["#06b6d4", "#9333ea", "#ec4899", "#3b82f6"];

export default function HolographicPieChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
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
