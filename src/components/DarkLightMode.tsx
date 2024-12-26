"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaRegSun } from "react-icons/fa6";

const DarkLightMode = () => {
  const { theme, setTheme } = useTheme();
  const handleClickTheme = (): void => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };
  return (
    <div className="fixed h-fit w-fit right-3 top-2 z-[99]">
      <div
        className="rounded-full h-fit w-fit bg-black dark:bg-white p-3"
        onClick={handleClickTheme}
        role="button"
      >
        {theme === "light" && (
          <FaMoon size={20} className="dark:text-dark text-white" />
        )}
        {theme === "dark" && (
          <FaRegSun size={20} className="dark:text-dark text-white" />
        )}
      </div>
    </div>
  );
};

export default DarkLightMode;
