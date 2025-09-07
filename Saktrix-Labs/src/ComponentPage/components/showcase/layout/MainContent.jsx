import { useEffect } from "react";
import ShowcaseSection from "../files/ShowcaseSection";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function MainContent({ activeCategory }) {
  const category = showcaseConfig.find((cat) => cat.category === activeCategory);

  useEffect(() => {
    if (activeCategory) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  if (!category) {
    return (
      <main className="flex-1 px-6 py-8">
        <p className="text-gray-600 dark:text-gray-400">
          No category selected. Please use the sidebar or Command Palette (Ctrl + K).
        </p>
      </main>
    );
  }

  return (
    <main className="flex-1 px-6 py-8 space-y-12">
      {category.items.map((item) => (
        <section key={item.id} id={item.id} className="flex justify-center">
          <ShowcaseSection
            id={item.id}
            title={item.name}
            description={item.description}
            Component={item.component}
            tags={item.tags}
            code={item.code}
          />
        </section>
      ))}
    </main>
  );
}
