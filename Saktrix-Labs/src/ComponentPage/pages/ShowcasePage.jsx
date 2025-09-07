import { useState, useEffect } from "react";
import Sidebar from "../components/showcase/layout/Sidebar";
import MainContent from "../components/showcase/layout/MainContent";
import RightSidebar from "../components/showcase/layout/RightSidebar";
import CommandHintBanner from "../components/showcase/ui/CommandHintBanner";
import { showcaseConfig } from "../data/showcaseConfig";
import { useUI } from "../../Context/useUI"; // ✅ connect with global CommandPalette

export default function ShowcasePage() {
  // ✅ First category fallback
  const firstCategory = showcaseConfig?.[0]?.category || null;

  // ✅ Get activeCategory from global UIContext (so CommandPalette works)
  const { activeCategory, setActiveCategory } = useUI();

  // If context is empty, fallback to firstCategory
  useEffect(() => {
    if (!activeCategory && firstCategory) {
      setActiveCategory(firstCategory);
    }
  }, [activeCategory, firstCategory, setActiveCategory]);

  // 🔥 Auto-scroll to top when activeCategory changes
  useEffect(() => {
    if (activeCategory) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Left Sidebar */}
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <CommandHintBanner />
        <MainContent activeCategory={activeCategory} />
      </div>

      {/* Right Sidebar */}
      <RightSidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      
    </div>
  );
}
