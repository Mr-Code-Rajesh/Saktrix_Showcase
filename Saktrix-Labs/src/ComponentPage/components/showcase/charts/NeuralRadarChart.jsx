import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { metric: "Accuracy", value: 90 },
  { metric: "Precision", value: 80 },
  { metric: "Recall", value: 85 },
  { metric: "F1 Score", value: 88 },
  { metric: "Speed", value: 75 },
];

export default function NeuralRadarChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="gray" />
          <PolarAngleAxis dataKey="metric" stroke="currentColor" />
          <Tooltip />
          <Radar
            name="AI Model"
            dataKey="value"
            stroke="#06b6d4"
            fill="#06b6d4"
            fillOpacity={0.6}
            activeDot={({ cx, cy }) => (
              <motion.circle
                cx={cx}
                cy={cy}
                r={5}
                fill="#9333ea"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            )}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
