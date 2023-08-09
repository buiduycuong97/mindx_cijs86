import { createContext, useContext, useState } from "react";

// 1 Khoi tao context
const LangContext = createContext();

// 2. Khoi tao Provider
const LangProvider = ({ children }) => {
  const valueOfThemesProvider = {};
  return (
    <LangContext.Provider value={valueOfThemesProvider}>
      {children}
    </LangContext.Provider>
  );
};

// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (typeof context === "undefined") {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };

export { LangProvider, LangContext };
