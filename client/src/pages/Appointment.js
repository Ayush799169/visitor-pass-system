import React, { useState } from "react";

 function Appointment() {
  const [form, setForm] = useState({
    visitor: "",
    host: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookAppointment = (e) => {
    e.preventDefault();

    if (!form.visitor || !form.host || !form.date || !form.time) {
      alert("Please fill all fields");
      return;
    }

    alert("Appointment Booked Successfully");

    setForm({
      visitor: "",
      host: "",
      date: "",
      time: "",
    });
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
            name="visitor"
            placeholder="Visitor Name"
            value={form.visitor}
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
