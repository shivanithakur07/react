import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: {
          username: username,
          password: password
        }
      });

      if (res.status === 200) {
        const role = username === "admin" ? "ADMIN" : "USER";

        sessionStorage.setItem("user", username);
        sessionStorage.setItem("role", role);

        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <h2>Login</h2>

        <input 
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input 
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;