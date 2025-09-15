import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 60 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 75 },
  { day: "Fri", value: 50 },
];

export default function CyberpunkAreaChart() {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="day" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ec4899"
            fill="url(#gradient)"
            strokeWidth={3}
            activeDot={({ cx, cy }) => (
              <motion.circle
                cx={cx}
                cy={cy}
                r={6}
                fill="#ec4899"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            )}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ec4899" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
