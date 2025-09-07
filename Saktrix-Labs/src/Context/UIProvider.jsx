import { useState } from "react";
import { UIContext } from "./UIContext";

export function UIProvider({ children }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <UIContext.Provider
      value={{
        paletteOpen,
        setPaletteOpen,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
