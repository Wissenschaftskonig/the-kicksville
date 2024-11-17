"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Icon } from "@iconify/react/dist/iconify.js";

const ThemeController = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeSwitch must be used within a ThemeContextProvider");
  }

  const { theme, handleToggle } = themeContext;

  return (
    <>
      <label className="swap swap-flip">
        <input
          type="checkbox"
          className="theme-controller"
          onChange={handleToggle}
          checked={theme === "retro"}
        />

        <Icon
          className="swap-on w-7 h-7"
          icon="streamline-emojis:sun-with-face"
        />

        <Icon className="swap-off w-7 h-7" icon="streamline-emojis:new-moon" />
      </label>
    </>
  );
};

export default ThemeController;
