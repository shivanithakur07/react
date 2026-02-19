import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const { theme } = useContext(AppContext);

  const styles = {
    nav: {
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: theme === "light" ? "#333" : "#000",
      color: "white"
    },
    links: {
      display: "flex",
      gap: "15px"
    },
    link: {
      color: "white",
      textDecoration: "none"
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/analytics" style={styles.link}>Analytics</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
