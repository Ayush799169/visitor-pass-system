
 import React from "react";
 import { NavLink } from "react-router-dom";

 function Navbar() {
   return (
     <div
      style={{
        background: "#111",
        padding: "20px",
        color: "white",
      }}
     >
      <h1
        style={{
          textAlign: "center",
          margin: "0",
          marginBottom: "20px",
          fontSize: "34px",
        }}
      >
        Visitor Pass System{" "}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
       >
        <NavLink to="/" style={navStyle}> Login </NavLink>
        <NavLink to="/register" style={navStyle}> Register </NavLink>
        <NavLink to="/dashboard" style={navStyle}> Dashboard </NavLink>
        <NavLink to="/add-visitor" style={navStyle}> Add Visitor </NavLink>
        <NavLink to="/visitors" style={navStyle}> Visitors </NavLink>
        <NavLink to="/appointment" style={navStyle}> Appointment </NavLink>
        <NavLink to="/pass" style={navStyle}> Pass </NavLink>
        <NavLink to="/check" style={navStyle}> Check In/Out </NavLink>
        </div>
     </div>
   );
  }

 const navStyle = ({ isActive }) => ({
   color: "white",
   textDecoration: "none",
   background: isActive ? "#007bff" : "#222",
   padding: "10px 16px",
   borderRadius: "6px",
   fontSize: "15px",
 });

  export default Navbar;
