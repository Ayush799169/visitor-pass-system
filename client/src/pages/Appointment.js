 import React, { useState } from "react";
 import axios from "axios";

 function Appointment() {
  const [form, setForm] = useState({
    visitorName: "",
    hostEmail: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    if (!form.visitorName || !form.hostEmail || !form.date) {
      alert("Please fill all fields");
      return;
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/appointment/add`,
        form,
      );
      alert("Appointment Booked Successfully");
      setForm({ visitorName: "", hostEmail: "", date: "", time: "" });
    } catch (err) {
      alert("Error booking appointment");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Book Appointment</h1>
        <form onSubmit={bookAppointment}>
          <input
            type="text"
            name="visitorName"
            placeholder="Visitor Name"
            value={form.visitorName}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="hostEmail"
            placeholder="Host Email"
            value={form.hostEmail}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Book Appointment
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
  borderRadius: "5px",
  border: "1px solid #ddd",
 };
 const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
 };

   export default Appointment;
