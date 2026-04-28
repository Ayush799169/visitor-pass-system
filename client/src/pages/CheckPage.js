import React, { useState } from "react";

function CheckPage() {
  const [name, setName] = useState("");

  const handleCheckIn = () => {
    if (!name.trim()) {
      alert("Enter Visitor Name");
      return;
    }

    alert(name + " Checked In Successfully");
  };

  const handleCheckOut = () => {
    if (!name.trim()) {
      alert("Enter Visitor Name");
      return;
    }

    alert(name + " Checked Out Successfully");
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
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Check In / Out
        </h1>

        <input
          type="text"
          placeholder="Enter Visitor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <button
          type="button"
          onClick={handleCheckIn}
          style={{
            ...buttonStyle,
            background: "#28a745",
            marginBottom: "12px",
          }}
        >
          Check In
        </button>

        <button
          type="button"
          onClick={handleCheckOut}
          style={{
            ...buttonStyle,
            background: "#dc3545",
          }}
        >
          Check Out
        </button>
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
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

 export default CheckPage;
