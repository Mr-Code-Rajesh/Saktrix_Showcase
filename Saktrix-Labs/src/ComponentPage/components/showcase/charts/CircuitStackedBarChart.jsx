import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Q1", ai: 400, ml: 240, dl: 100 },
  { name: "Q2", ai: 300, ml: 139, dl: 221 },
  { name: "Q3", ai: 200, ml: 980, dl: 229 },
  { name: "Q4", ai: 278, ml: 390, dl: 200 },
];

export default function CircuitStackedBarChart() {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Bar dataKey="ai" stackId="a" fill="#06b6d4" />
          <Bar dataKey="ml" stackId="a" fill="#9333ea" />
          <Bar dataKey="dl" stackId="a" fill="#ec4899" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
