import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password
      });

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
  <div className="login-bg d-flex justify-content-center align-items-center">
    <Card className="login-card shadow-lg">
      <CardContent>
        <h2 className="text-center mb-4">🔐 Welcome Back</h2>

        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          className="mb-3"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          className="mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={login}
          style={{ marginTop: "10px" }}
        >
          Login
        </Button>
      </CardContent>
    </Card>
  </div>
);
}

export default Login;