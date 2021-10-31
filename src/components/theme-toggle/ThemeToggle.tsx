import { useEffect, useState } from "react";
import classes from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState("dark");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setTheme(e.matches ? "dark" : "light");
      });
  }, []);

  const setTheme = (theme: "dark" | "light") => {
    document.body.dataset.theme = theme;
    setActiveTheme(theme);
  };

  return (
    <button
      className={classes.toggle}
      onClick={() =>
        activeTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      <img
        src={
          activeTheme === "dark"
            ? "/icons/theme/light.svg"
            : "/icons/theme/dark.svg"
        }
        alt="Toggle theme"
        data-theme="invert"
      />
    </button>
  );
};
