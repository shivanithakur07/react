import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  const style = {
    padding: "6px 12px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  };

  return (
    <button style={style} onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
