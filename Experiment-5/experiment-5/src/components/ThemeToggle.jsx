import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button
      className="theme-btn"
      style={{
        backgroundColor: "#ffffff",
        color: "#000000"
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;