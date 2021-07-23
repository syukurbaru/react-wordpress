import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import "./Header.css";
import Nav from "./Nav";

function Header() {
  const [humbergerOpen, setHumbergerOpen] = useState(false);
  const [sharp, setSharp] = useState(false);

  const controlNav = () => {
    if (window.scrollY > 80) {
      setSharp(true);
    } else {
      setSharp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  const toggleHumberger = () => {
    setHumbergerOpen(!humbergerOpen);
  };
  return (
    <div className={`header ${sharp && "opacity-header"}`}>
      <div className="logo-nav">
        <div className="logo">
          <h2>Api Wp</h2>
        </div>
        <Nav isOpen={humbergerOpen} setHumbergerOpen={setHumbergerOpen} />
      </div>
      {/* Hamberger Menu */}
      <div className="hamburger" onClick={toggleHumberger}>
        <Hamburger isOpen={humbergerOpen} />
      </div>
    </div>
  );
}

export default Header;
