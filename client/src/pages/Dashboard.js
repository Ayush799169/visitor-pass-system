 import React, { useEffect, useState } from "react";
 import axios from "axios";

function Dashboard() {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/visitor/all`);
      setCount(res.data.length);
    } catch (error) {
      alert("Failed to Load Dashboard");
    }
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <div style={{ width: "90%", maxWidth: "900px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Dashboard</h1>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h2>Total Visitors</h2>
            <p style={numberStyle}>{count}</p>
          </div>

          <div style={cardStyle}>
            <h2>Today Check-ins</h2>
            <p style={numberStyle}>0</p>
          </div>

          <div style={cardStyle}>
            <h2>Pending Appointments</h2>
            <p style={numberStyle}>0</p>
          </div>
        </div>
      </div>
    </div>
  );
 }

 const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
 };

  const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 0 10px lightgray",
  textAlign: "center",
 };

 const numberStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#007bff",
  marginTop: "10px",
 };

  export default Dashboard;
