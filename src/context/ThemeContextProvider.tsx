"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultValue: ThemeContextProps = {
  theme: "wireframe",
  setTheme: () => {},
  handleToggle: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultValue);

const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("wireframe");

  const handleToggle = () => {
    const newTheme = theme === "wireframe" ? "retro" : "wireframe";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "retro") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "wireframe";
    setTheme(savedTheme);
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const objectsPassed = { theme, setTheme, handleToggle };

  return (
    <ThemeContext.Provider value={objectsPassed}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
