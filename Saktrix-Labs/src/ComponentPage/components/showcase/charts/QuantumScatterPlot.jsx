import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = Array.from({ length: 20 }, (_, i) => ({
  x: Math.floor(Math.random() * 100),
  y: Math.floor(Math.random() * 100),
}));

export default function QuantumScatterPlot() {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <XAxis type="number" dataKey="x" stroke="white" />
          <YAxis type="number" dataKey="y" stroke="white" />
          <Tooltip />
          <Scatter data={data} fill="#06b6d4">
            {data.map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x * 3}
                cy={300 - point.y * 3}
                r={6}
                fill="#9333ea"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.5, boxShadow: "0px 0px 10px #9333ea" }}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
