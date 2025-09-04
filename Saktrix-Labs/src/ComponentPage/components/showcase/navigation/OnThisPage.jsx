import { showcaseConfig } from "../../../data/showcaseConfig";

export default function OnThisPage() {
  return (
    <div>
      <h4 className="font-semibold mb-3">On this page</h4>
      <ul className="space-y-2 text-sm">
        {showcaseConfig.map((cat) => (
          <li key={cat.category}>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
              {cat.category}
            </p>
            <ul className="ml-3 space-y-1">
              {cat.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
