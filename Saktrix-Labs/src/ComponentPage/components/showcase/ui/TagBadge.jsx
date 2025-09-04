export default function TagBadge({ label }) {
  return (
    <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100">
      {label}
    </span>
  );
}
