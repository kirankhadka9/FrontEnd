import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUpNav = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <NavLink
        to="/admin/sign-up/login"
        style={{
          marginRight: "30px", 
          borderRadius: "5px", 
          background: "#1d4ed8", 
          color: "#ffffff", 
          padding: "10px",
          textDecoration: "none", 
          textAlign: "center",
          boxSizing: "border-box", 
          display: "inline-block",
        }}
      >
        Login
      </NavLink>

      <NavLink
        to="/admin/sign-up/register"
        style={{
          marginRight: "30px", // Adjust as needed
          borderRadius: "5px", // Adjust as needed
          background: "#1d4ed8", 
          color: "#ffffff", // Text color
          padding: "10px",
          textDecoration: "none", 
          textAlign: "center",
          boxSizing: "border-box", 
          display: "inline-block",
        }}
      >
        Register
      </NavLink>
    </div>
  );
};

export default SignUpNav;
