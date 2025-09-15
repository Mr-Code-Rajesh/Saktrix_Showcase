import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", bar: 40, line: 24 },
  { name: "Feb", bar: 30, line: 13 },
  { name: "Mar", bar: 20, line: 98 },
  { name: "Apr", bar: 27, line: 39 },
];

export default function NeuralMixedChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" stroke="currentColor" />
          <YAxis stroke="currentColor" />
          <Tooltip />
          <Bar dataKey="bar" barSize={40} fill="#3b82f6" />
          <Line
            type="monotone"
            dataKey="line"
            stroke="#9333ea"
            strokeWidth={3}
            dot={({ cx, cy, index }) => (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r={6}
                fill="#9333ea"
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
