import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { x: 10, y: 30, size: 100 },
  { x: 30, y: 200, size: 200 },
  { x: 45, y: 100, size: 150 },
  { x: 80, y: 250, size: 180 },
];

export default function OrbitBubbleChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <XAxis type="number" dataKey="x" stroke="currentColor" />
          <YAxis type="number" dataKey="y" stroke="currentColor" />
          <Tooltip />
          <Scatter data={data} fill="#9333ea">
            {data.map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x * 3}
                cy={300 - point.y}
                r={Math.sqrt(point.size) / 2}
                fill="#9333ea"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
