 import React, { useEffect, useState } from "react";
 import axios from "axios";

 function VisitorList() {
  const [visitors, setVisitors] = useState([]);

  const getVisitors = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/visitor/all`,
      );
      setVisitors(res.data);
    } catch (error) {
      alert("Failed to Load Visitors");
    }
   };

  useEffect(() => {
    getVisitors();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
     >
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}> Visitor List </h1>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#007bff", color: "white" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Purpose</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((item) => (
              <tr key={item._id}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.phone}</td>
                <td style={tdStyle}>{item.purpose}</td>
                <td style={tdStyle}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
 }

 const thStyle = { padding: "12px", border: "1px solid #ddd" };
 const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
 };

      export default VisitorList;
