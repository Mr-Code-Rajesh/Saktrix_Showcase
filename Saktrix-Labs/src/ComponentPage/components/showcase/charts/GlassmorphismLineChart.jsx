import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 50 },
  { day: "Thu", value: 40 },
  { day: "Fri", value: 80 },
];

export default function GlassmorphismLineChart() {
  return (
    <div className="p-4 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 shadow-xl">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="currentColor" />
          <YAxis stroke="currentColor" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#60a5fa"
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
                whileHover={{ scale: 1.5, boxShadow: "0px 0px 8px #9333ea" }}
              />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
