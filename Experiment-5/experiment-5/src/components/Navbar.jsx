import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/reports">Reports</Link>
      </div>

      <ThemeToggle />
    </div>
  );
};

export default Navbar;