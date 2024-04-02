import { useEffect, useState } from "react";

const UseTheme = () => {
  const [mode, setMode] = useState("dark");

  function changeTheme() {
    const html = document.documentElement;

    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    if (currentMode) {
      setMode(currentMode);
      const html = document.documentElement;
      html.classList.add(currentMode);
    }
  }, []);

  return { mode, changeTheme };
};

export default UseTheme;
