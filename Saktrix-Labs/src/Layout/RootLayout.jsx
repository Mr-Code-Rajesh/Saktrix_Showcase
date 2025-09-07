import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import { useUI } from "../Context/useUI"; // ✅ import hook
import CommandPalette from "../ComponentPage/components/showcase/ui/CommandPalette"; // ✅ import palette
import BackToTop from "../ComponentPage/components/showcase/ui/BackToTop"; // ✅ import BackToTop
import ScrollProgressBar from "../ComponentPage/components/showcase/ui/ScrollProgressBar"; // ✅ import ScrollProgressBar


export const RootLayout = () => {
  const { paletteOpen, setPaletteOpen, setActiveCategory } = useUI();

  return (
    <div>
      <Navbar />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />


      {/* ✅ Global Command Palette available on all pages */}
      <CommandPalette
        isOpen={paletteOpen}
        setIsOpen={setPaletteOpen}
        setActiveCategory={setActiveCategory}
      />

      {/* Back to Top Button */}
      <BackToTop />

       
      <main className="pt-18">
        <Outlet /> {/* Renders child routes */}
      </main>

      <Footer />
    </div>
  );
};
