 import React, { useState } from "react"; 
 import axios from "axios";
 import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/login", form);
      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert("Login Failed");
    }
  };

   return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
       >
      <div
        style={{
          width: "420px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
        }}
        >
        <h1 style={{ marginBottom: "20px" }}>Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          New User? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
 } 

   export default Login;
