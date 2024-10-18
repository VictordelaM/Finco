import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext();

const initialState = {
  theme: "system",
  setTheme: () => null,
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
    if (theme === "system") {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (e) => {
        setTheme(e.matches ? "dark" : "light");
      };
      darkModeMediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => darkModeMediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
