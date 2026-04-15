import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role");

  if (!role) navigate("/");

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/api/user/profile");
    alert(res.data.message);
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

 return (
  <div className="container mt-5">
    <div className="dashboard">
      <h2>User Dashboard</h2>

       <h4>Welcome, {sessionStorage.getItem("user")}</h4>

      <button className="btn btn-success mb-3" onClick={fetchData}>
        Get Profile
      </button>

      <button className="btn btn-secondary" onClick={logout}>
        Logout
      </button>
    </div>
  </div>
);
}

export default UserDashboard;