import { useState } from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function SmartFileUpload() {
  const [file, setFile] = useState(null);
  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block mb-2 text-sm font-medium text-sky-500 dark:text-sky-300">Smart File Upload</label>
      <motion.label
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center justify-center px-4 py-6 border-2 border-sky-400 dark:border-sky-500 rounded-lg bg-black/80 dark:bg-gray-900/80 cursor-pointer"
      >
        <FaCloudUploadAlt className="text-sky-400 text-3xl mb-2" />
        <span className="text-sky-400 dark:text-sky-300">{file ? file.name : "Upload a file"}</span>
        <input
          type="file"
          className="hidden"
          onChange={e => setFile(e.target.files[0])}
        />
      </motion.label>
    </div>
  );
}
