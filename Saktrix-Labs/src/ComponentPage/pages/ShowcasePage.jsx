import { useState, useEffect } from "react";
import Sidebar from "../components/showcase/layout/Sidebar";
import MainContent from "../components/showcase/layout/MainContent";
import RightSidebar from "../components/showcase/layout/RightSidebar";
import ProgressBanner from "../components/showcase/layout/ProgressBanner";
import CommandPalette from "../components/showcase/ui/CommandPalette";
import CommandHintBanner from "../components/showcase/ui/CommandHintBanner";


export default function ShowcasePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Ctrl+K / Cmd+K opens command palette
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
     

      {/* Command Palette */}
      <CommandPalette isOpen={paletteOpen} setIsOpen={setPaletteOpen} />

      {/* Left Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
         {/* Top Hint Banner */}
      <CommandHintBanner />
        {/* <ProgressBanner /> */}
        <MainContent />
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
