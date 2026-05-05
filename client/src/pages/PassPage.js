 
 import React, { useState, useEffect } from "react";
 import axios from "axios";
 import QRCode from "react-qr-code";

 function PassPage() {
  const [passes, setPasses] = useState([]);
  const [showQR, setShowQR] = useState(false);
  const [form, setForm] = useState({
    visitorName: "",
    visitorEmail: "",
    visitorPhone: "",
    purpose: "",
    host: "",
   });

  useEffect(() => {
    fetchPasses();
  }, []);

  const fetchPasses = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/pass/all`,
      );
      setPasses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePass = async () => {
    if (!form.visitorName || !form.host) {
      alert("Please fill required fields");
      return;
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/pass/generate`,
        form,
      );
      alert("Pass Generated Successfully!");
      setShowQR(true);
      fetchPasses();
      setForm({
        visitorName: "",
        visitorEmail: "",
        visitorPhone: "",
        purpose: "",
        host: "",
      });
    } catch (err) {
      alert("Error generating pass");
    }
   };

   return (
     <div
       style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
     >
      <div
        style={{
          width: "500px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
          textAlign: "center",
        }}
       >
        <h1 style={{ marginBottom: "20px" }}>Visitor Pass</h1>

        <input
          type="text"
          name="visitorName"
          placeholder="Visitor Name *"
          value={form.visitorName}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="visitorEmail"
          placeholder="Visitor Email"
          value={form.visitorEmail}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="visitorPhone"
          placeholder="Phone Number"
          value={form.visitorPhone}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="host"
          placeholder="Host Name *"
          value={form.host}
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

        <button onClick={generatePass} style={buttonStyle}>
          Generate Pass & QR
        </button>

        {showQR && (
          <div style={{ marginTop: "25px" }}>
            <QRCode value={`${form.visitorName}-${Date.now()}`} size={180} />
          </div>
        )}

        {/* PASS LIST */}
        {passes.length > 0 && (
          <div style={{ marginTop: "30px", textAlign: "left" }}>
            <h3 style={{ marginBottom: "15px" }}>
              Generated Passes ({passes.length})
            </h3>
            {passes.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#f8f9fa",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  border: "1px solid #ddd",
                }}
              >
                <p>
                  <strong>Name:</strong> {p.visitorName}
                </p>
                <p>
                  <strong>Host:</strong> {p.host}
                </p>
                <p>
                  <strong>Purpose:</strong> {p.purpose}
                </p>
                <p>
                  <strong>Status:</strong> {p.status}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
 }

 const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "5px",
  border: "1px solid #ddd",
 };

 const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
 };

     export default PassPage;
