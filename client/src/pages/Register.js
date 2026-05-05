
 import React, { useState } from "react";
 import axios from "axios";
 import { Link, useNavigate } from "react-router-dom";

 function Register() {
   const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
   });

   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
   };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("clicked");

    if (!form.name || !form.email || !form.password || !form.role) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        form,
      );
      alert("Registration Successful");
      navigate("/");
    } catch (error) {
      alert("Registration Failed");
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
        <h1 style={{ marginBottom: "20px" }}>Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Security">Security</option>
          <option value="Employee">Employee</option>
          <option value="Visitor">Visitor</option>
        </select>

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "12px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Register
        </button>

        <p style={{ marginTop: "15px" }}>
          Already User? <Link to="/">Login Here</Link>
        </p>
      </div>
    </div>
  );
 }

     export default Register;
