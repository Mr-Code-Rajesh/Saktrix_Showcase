import Tabs from "../ui/Tabs";
import CodeBlock from "../ui/CodeBlock";
import TagBadge from "../ui/TagBadge";

export default function ShowcaseSection({ id, title, description, Component, tags = [], code }) {
  return (
    <section
      id={id}
      className="space-y-4 border rounded-2xl p-6 shadow-md bg-white dark:bg-gray-900"
    >
      {/* Title + Tags */}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-2 mt-1">
          {tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300">{description}</p>

      {/* Tabs: Preview / Code */}
      <Tabs
        preview={<Component />}
        code={<CodeBlock code={code || `<${Component.name} />`} />}
      />
    </section>
  );
}
