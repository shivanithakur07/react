import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setData(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      alert("Unauthorized");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
  <div className="dashboard-bg d-flex justify-content-center align-items-center">
    <Card className="dashboard-card shadow-lg">
      <CardContent>
        <h2 className="text-center mb-4">📊 Dashboard</h2>

        <div className="d-flex justify-content-center mb-3">
          <Button
            variant="contained"
            color="success"
            className="me-2"
            onClick={getData}
          >
            Fetch Data
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={logout}
          >
            Logout
          </Button>
        </div>

        <p className="text-center">{data}</p>
      </CardContent>
    </Card>
  </div>
);
}

export default Dashboard;