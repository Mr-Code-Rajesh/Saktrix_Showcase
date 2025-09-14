import { motion } from "framer-motion";

const data = [
  { product: "AI Chip", price: "$299", stock: "Available" },
  { product: "VR Headset", price: "$499", stock: "Out of Stock" },
  { product: "HoloLens", price: "$999", stock: "Available" },
];

export default function GlassmorphismTable() {
  return (
    <div className="overflow-x-auto p-4">
      <motion.table
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="min-w-full rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 shadow-xl"
      >
        <thead>
          <tr className="text-left text-white dark:text-gray-200">
            <th className="p-3">Product</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={i}
              whileHover={{ scale: 1.02 }}
              className="border-t border-white/20 hover:bg-white/10"
            >
              <td className="p-3">{row.product}</td>
              <td className="p-3">{row.price}</td>
              <td className="p-3">{row.stock}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
