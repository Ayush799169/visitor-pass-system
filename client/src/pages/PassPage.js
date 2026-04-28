 import React, { useState } from "react";
 import QRCode from "react-qr-code";

 function PassPage() {
  const [showQR, setShowQR] = useState(false);

  const generateQR = () => {
    setShowQR(true);
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
        <h1 style={{ marginBottom: "20px" }}>Visitor Pass</h1>

        <p>
          <strong>Name:</strong> Rahul Kumar
        </p>
        <p>
          <strong>Host:</strong> Manager
        </p>
        <p>
          <strong>Purpose:</strong> Meeting
        </p>
        <p>
          <strong>Pass ID:</strong> VP101
        </p>

        <button
          onClick={generateQR}
          style={{
            width: "100%",
            padding: "12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          Generate QR
        </button>

        {showQR && (
          <div style={{ marginTop: "25px" }}>
            <QRCode value="Rahul Kumar - VP101 - Meeting" size={180} />
          </div>
        )}
      </div>
    </div>
  );
 }

   export default PassPage;
