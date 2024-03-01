// Homecomponent.jsx
import React from "react";
import backgroundImage from "../../../images/bg.jpeg";
//import '../../../index.css';

const Homecomponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "blur(10px)",
        opacity: "0.8",
        flexDirection: "column",
      }}
    ></div>
  );
};

export default Homecomponent;
