import { Treemap, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "AI", size: 400 },
  { name: "VR", size: 300 },
  { name: "IoT", size: 200 },
  { name: "Robotics", size: 100 },
];

export default function CyberGlowTreemap() {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <Treemap
          data={data}
          dataKey="size"
          stroke="#fff"
          fill="#06b6d4"
        >
          {data.map((entry, index) => (
            <motion.g key={index} whileHover={{ scale: 1.05 }}>
              <rect width={entry.size / 5} height={entry.size / 5} fill="#06b6d4" />
            </motion.g>
          ))}
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}
