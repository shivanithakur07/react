import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import { AppProvider, AppContext } from "./context/AppContext";
import { useContext } from "react";

function Layout() {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme}>
      <Router>
        <Navbar />

        <div className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>

        <div className="footer">© 2025 My Portfolio</div>
      </Router>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}

export default App;