import SearchBar from "../ui/SearchBar";
import CategoryMenu from "../navigation/CategoryMenu";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-56 border-r bg-white dark:bg-gray-800 p-4 hidden md:block">
      <SearchBar />
      <CategoryMenu />
    </aside>
  );
}
