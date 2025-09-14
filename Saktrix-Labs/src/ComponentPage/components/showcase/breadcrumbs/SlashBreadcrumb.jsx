export default function SlashBreadcrumb() {
  return (
    <nav className="flex space-x-2 text-gray-600 dark:text-gray-300 p-4">
      <a href="#" className="hover:text-green-500">Dashboard</a>
      <span>/</span>
      <a href="#" className="hover:text-green-500">Settings</a>
      <span>/</span>
      <a href="#" className="hover:text-green-500 font-semibold">Profile</a>
    </nav>
  );
}
