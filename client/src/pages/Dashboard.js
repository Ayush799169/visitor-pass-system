 
 import React, { useEffect, useState } from "react";
 import axios from "axios";

 function Dashboard() {
   const [stats, setStats] = useState({
    totalVisitors: 0,
    totalAppointments: 0,
    totalPasses: 0,
  });
   const [visitors, setVisitors] = useState([]);
   const [search, setSearch] = useState("");
   const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    fetchStats();
    fetchVisitors();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/dashboard`,
      );
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchVisitors = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/visitor/all`,
      );
      setVisitors(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filtered = visitors.filter((v) => {
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus ? v.status === filterStatus : true;
    return matchSearch && matchStatus;
  });

  const exportCSV = () => {
    try {
      const headers = ["Name", "Phone", "Purpose", "Status"];
      const rows = filtered.map((v) => [v.name, v.phone, v.purpose, v.status]);
      const csvContent = [headers, ...rows].map((r) => r.join(",")).join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "visitors.csv";
      a.click();
    } catch (err) {
      alert("Export failed");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <div style={{ width: "90%", maxWidth: "900px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div style={cardStyle}>
            <h3>Total Visitors</h3>
            <p style={numStyle}>{stats.totalVisitors}</p>
          </div>

          <div style={cardStyle}>
            <h3>Total Appointments</h3>
            <p style={numStyle}>{stats.totalAppointments}</p>
          </div>

          <div style={cardStyle}>
            <h3>Total Passes</h3>
            <p style={numStyle}>{stats.totalPasses}</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            placeholder="Search visitor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
            }}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
            }}
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
          </select>

          <button
            onClick={exportCSV}
            style={{
              padding: "10px 20px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Export CSV
          </button>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px lightgray",
          }}
        >
          <thead>
            <tr style={{ background: "#007bff", color: "white" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Purpose</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No visitors found
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item._id}>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.phone}</td>
                  <td style={tdStyle}>{item.purpose}</td>
                  <td style={tdStyle}>{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
 }

 const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 0 10px lightgray",
  textAlign: "center",
 };
 const numStyle = { fontSize: "32px", fontWeight: "bold", color: "#007bff" };
 const thStyle = { padding: "12px", border: "1px solid #ddd" };
 const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
 };

    export default Dashboard;
