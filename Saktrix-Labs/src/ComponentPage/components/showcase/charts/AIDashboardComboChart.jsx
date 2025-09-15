import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", bar: 40, line: 24 },
  { name: "Feb", bar: 30, line: 13 },
  { name: "Mar", bar: 20, line: 98 },
  { name: "Apr", bar: 27, line: 39 },
];

export default function AIDashboardComboChart() {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Bar dataKey="bar" barSize={40} fill="#3b82f6" />
          <Line
            type="monotone"
            dataKey="line"
            stroke="#06b6d4"
            strokeWidth={3}
            dot={({ cx, cy, index }) => (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r={6}
                fill="#06b6d4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              />
            )}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
