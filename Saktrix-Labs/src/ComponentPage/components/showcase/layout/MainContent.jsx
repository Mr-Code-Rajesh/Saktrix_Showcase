import ShowcaseSection from "../files/ShowcaseSection";
import { showcaseConfig } from "../../../data/showcaseConfig";

export default function MainContent() {
  return (
    <main className="flex-1 max-w-3xl mx-auto p-6 space-y-16">
      {showcaseConfig.map((cat) =>
        cat.items.map((item) => (
          <ShowcaseSection
            key={item.id}
            id={item.id}
            title={item.name}
            description={item.description}
            Component={item.component}
            tags={item.tags}
            code={item.code}   
          />
        ))
      )}
    </main>
  );
}
