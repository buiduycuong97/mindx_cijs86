import { createContext, useContext, useState } from "react";

// 1 Khoi tao context
const ThemeContext = createContext();

// 2. Khoi tao Provider
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [language, setLanguage] = useState("vi");
  const [valueOfSelect, setValueOfSelect] = useState("vi");

  const dataLang = {
    vi: {
      title: "Dang Nhap",
      button: "Dang Nhap",
      profile: "Trang Ca Nhan",
    },
    en: {
      title: "Login",
      button: "Login",
      profile: "Profile",
    },
    franch: {
      title: "Dang Nhap",
      button: "Dang Nhap",
      profile: "Trang Ca Nhan",
    },
    china: {
      title: "Dang Nhap",
      button: "Dang Nhap",
      profile: "Trang Ca Nhan",
    },
  };

  const valueOfThemesProvider = {
    mode,
    setMode,
    language,
    setLanguage,
    dataLang,
  };
  return (
    <ThemeContext.Provider value={valueOfThemesProvider}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (typeof context === "undefined") {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, ThemeContext,useTheme };
