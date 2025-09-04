import GradientButtonShowcase from "../components/showcase/showcase-items/GradientButtonShowcase";
import AnimatedCardShowcase from "../components/showcase/showcase-items/AnimatedCardShowcase";
import ModalShowcase from "../components/showcase/showcase-items/ModalShowcase";

export const showcaseConfig = [
  {
    category: "Buttons",
    items: [
      {
        id: "gradient-button",
        name: "Gradient Button",
        description: "Flashy CTA with gradient styling.",
        component: GradientButtonShowcase,
        tags: ["Button", "Animation"],
        code: `
<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition">
  Gradient Button
</button>
        `,
      },
    ],
  },
  {
    category: "Cards",
    items: [
      {
        id: "animated-card",
        name: "Animated Card",
        description: "Card with hover animations.",
        component: AnimatedCardShowcase,
        tags: ["Card", "Animation"],
        code: `
<motion.div
  whileHover={{ scale: 1.05 }}
  className="w-64 h-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold cursor-pointer"
>
  ✨ Hover Me!
</motion.div>
        `,
      },
    ],
  },
  {
    category: "Modals",
    items: [
      {
        id: "modal",
        name: "Modal",
        description: "Popup modal with overlay.",
        component: ModalShowcase,
        tags: ["Modal", "Overlay"],
        code: `
const [open, setOpen] = useState(false);

return (
  <div>
    <button
      onClick={() => setOpen(true)}
      className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
    >
      Open Modal
    </button>

    {open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 shadow-xl">
          <h3 className="text-lg font-semibold mb-2">📦 Example Modal</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a modal example. You can add forms, alerts, or any content here.
          </p>
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
        `,
      },
    ],
  },
];
