import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 80 },
  { name: "Mar", value: 65 },
  { name: "Apr", value: 90 },
];

export default function NeonPulseBarChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="currentColor" />
          <YAxis stroke="currentColor" />
          <Tooltip />
          {data.map((entry, index) => (
            <motion.rect
              key={index}
              x={index * 70 + 30}
              y={300 - entry.value * 2}
              width={40}
              height={entry.value * 2}
              fill="url(#neonGradient)"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ type: "spring", stiffness: 80, delay: index * 0.2 }}
              style={{ transformOrigin: "bottom" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px cyan" }}
            />
          ))}
          <defs>
            <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#9333ea" stopOpacity={0.9} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
