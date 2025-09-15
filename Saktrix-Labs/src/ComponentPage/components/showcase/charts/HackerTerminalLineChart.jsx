import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { time: "10:00", value: 10 },
  { time: "11:00", value: 20 },
  { time: "12:00", value: 30 },
  { time: "13:00", value: 50 },
  { time: "14:00", value: 40 },
];

export default function HackerTerminalLineChart() {
  return (
    <div className="p-4 bg-black rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#22c55e" />
          <YAxis stroke="#22c55e" />
          <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #22c55e" }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={2}
            dot={({ cx, cy, index }) => (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r={4}
                fill="#22c55e"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
              />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
