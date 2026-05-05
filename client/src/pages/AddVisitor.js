
 import React, { useState } from "react";
 import axios from "axios";

 function AddVisitor() {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [purpose, setPurpose] = useState("");
   const [photo, setPhoto] = useState(null);

    const token = localStorage.getItem("token");

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !purpose) {
      alert("Please fill required fields");
      return;
     }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("purpose", purpose);
    if (photo) formData.append("photo", photo);

     try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/visitor/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        },
      );
      alert("Visitor Added Successfully");
      setName("");
      setPhone("");
      setPurpose("");
      setPhoto(null);
     } catch (err) {
      alert("Error adding visitor");
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
        <h1 style={{ marginBottom: "20px" }}>Add Visitor</h1>
        <form onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Visitor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            style={inputStyle}
          />
          <label style={{ fontSize: "13px", color: "#555" }}>
            Upload Photo:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            style={{ ...inputStyle, padding: "5px" }}
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
 };

    export default AddVisitor;
