import React, { useState } from "react";
import axios from "axios";

function AddVisitor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    host: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addVisitor = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.purpose || !form.host) {
      alert("Please fill required fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/visitor/add", form);
      alert("Visitor Added Successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        purpose: "",
        host: "",
      });
    } catch (error) {
      alert("Failed to Add Visitor");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
        }} >

        <h1 style={{ marginBottom: "20px" }}>Add Visitor</h1>

        <form onSubmit={addVisitor}>
          <input
            type="text"
            name="name"
            placeholder="Visitor Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Visitor Email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="purpose"
            placeholder="Purpose"
            value={form.purpose}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="host"
            placeholder="Host Name"
            value={form.host}
            onChange={handleChange}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Add Visitor
          </button>
        </form>
      </div>
    </div>
  );
 }

 const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

    export default AddVisitor;