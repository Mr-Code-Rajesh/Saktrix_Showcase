import OnThisPage from "../navigation/OnThisPage";

export default function RightSidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 border-l bg-white dark:bg-gray-800 p-4 hidden lg:block">
      <OnThisPage />
    </aside>
  );
}
  