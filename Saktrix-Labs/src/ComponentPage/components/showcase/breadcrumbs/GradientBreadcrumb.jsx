export default function GradientBreadcrumb() {
  return (
    <nav className="flex space-x-3 text-lg font-semibold p-4">
      <a href="#" className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Home</a>
      <span>/</span>
      <a href="#" className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Docs</a>
      <span>/</span>
      <a href="#" className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">API</a>
    </nav>
  );
}
