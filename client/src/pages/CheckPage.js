 import React, { useState } from "react";
 import axios from "axios";

 function CheckPage() {
  const [name, setName] = useState("");
  const token = localStorage.getItem("token");

  const handleCheckIn = async () => {
    if (!name) {
      alert("Enter visitor name");
      return;
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/check/checkin`,
        { visitorName: name },
        { headers: { Authorization: token } },
      );
      alert(name + " Checked In Successfully");
      setName("");
    } catch (err) {
      alert("Error");
    }
  };
  const handleCheckOut = async () => {
    if (!name) {
      alert("Enter visitor name");
      return;
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/check/checkout`,
        { visitorName: name },
        { headers: { Authorization: token } },
      );
      alert(name + " Checked Out Successfully");
      setName("");
    } catch (err) {
      alert("Error");
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
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Check In / Out</h1>
        <input
          type="text"
          placeholder="Enter Visitor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />
        <button
          onClick={handleCheckIn}
          style={{
            width: "100%",
            padding: "12px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          ✅ Check In
        </button>

        <button
          onClick={handleCheckOut}
          style={{
            width: "100%",
            padding: "12px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          ❌ Check Out
        </button>
      </div>
    </div>
  );
 }

    export default CheckPage;
