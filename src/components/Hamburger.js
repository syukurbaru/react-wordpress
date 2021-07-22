import React from "react";
import "./Hamburger.css";

function Hamburger({ isOpen }) {
  return (
    <div className="hamburger">
      <div className={`burger ${isOpen ? "burger1" : ""}`} />
      <div className={`burger ${isOpen ? "burger2" : ""}`} />
      <div className={`burger ${isOpen ? "burger3" : ""}`} />
    </div>
  );
}

export default Hamburger;
