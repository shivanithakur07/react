import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role");

  if (role !== "ADMIN") {
    alert("Access Denied");
    navigate("/");
  }

  const fetchAdmin = async () => {
    const res = await axios.get("http://localhost:8080/api/admin/dashboard");
    alert(res.data.message);
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

 return (
  <div className="container mt-5">
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <h4>Welcome, {sessionStorage.getItem("user")}</h4>

      <button className="btn btn-danger mb-3" onClick={fetchAdmin}>
        Admin Data
      </button>

      <button className="btn btn-secondary" onClick={logout}>
        Logout
      </button>
    </div>
  </div>
);
}

export default AdminDashboard;