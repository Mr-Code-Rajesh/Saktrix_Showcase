import GradientButtonShowcase from "../components/showcase/showcase-items/GradientButtonShowcase";
import AnimatedCardShowcase from "../components/showcase/showcase-items/AnimatedCardShowcase";
import ModalShowcase from "../components/showcase/showcase-items/ModalShowcase";
import InputFieldShowcase from "../components/showcase/showcase-items/InputFieldShowcase";
import ToggleSwitchShowcase from "../components/showcase/showcase-items/ToggleSwitchShowcase";

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
<motion.div whileHover={{ scale: 1.05 }} className="w-64 h-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold cursor-pointer">
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
// ... Modal JSX here ...
        `,
      },
    ],
  },
  {
    category: "Forms",
    items: [
      {
        id: "input-field",
        name: "Input Field",
        description: "Basic styled input with label.",
        component: InputFieldShowcase,
        tags: ["Form", "Input"],
        code: `
<label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
  Username
</label>
<input
  id="username"
  type="text"
  placeholder="Enter your username"
  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
/>
        `,
      },
      {
        id: "toggle-switch",
        name: "Toggle Switch",
        description: "Interactive on/off switch.",
        component: ToggleSwitchShowcase,
        tags: ["Form", "Toggle"],
        code: `
const [enabled, setEnabled] = useState(false);

<button
  onClick={() => setEnabled(!enabled)}
  className={\`w-12 h-6 flex items-center rounded-full p-1 transition \${enabled ? "bg-indigo-600" : "bg-gray-400"}\`}
>
  <div
    className={\`w-4 h-4 bg-white rounded-full shadow transform transition \${enabled ? "translate-x-6" : "translate-x-0"}\`}
  />
</button>
        `,
      },
    ],
  },
];
