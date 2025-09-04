import Sidebar from "../components/showcase/layout/Sidebar";
import MainContent from "../components/showcase/layout/MainContent";
import RightSidebar from "../components/showcase/layout/RightSidebar";
import ProgressBanner from "../components/showcase/layout/ProgressBanner";

export default function ShowcasePage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <ProgressBanner />
        <MainContent />
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
