import { FiArrowRight } from "react-icons/fi";

export default function IconButtonShowcase() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
      Next <FiArrowRight />
    </button>
  );
}
