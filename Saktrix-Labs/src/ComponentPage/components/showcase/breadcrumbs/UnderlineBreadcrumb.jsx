export default function UnderlineBreadcrumb() {
  return (
    <nav className="flex space-x-4 p-4 text-gray-600 dark:text-gray-300">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">Projects</a>
      <a href="#" className="hover:underline font-semibold">AI Tools</a>
    </nav>
  );
}
