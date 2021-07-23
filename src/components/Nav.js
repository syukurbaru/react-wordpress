import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ isOpen, setHumbergerOpen }) {
  return (
    <div className={`navigation ${isOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => setHumbergerOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setHumbergerOpen(false)}>
          <Link to={`/detail/1`}>Detail Blog</Link>
        </li>
        <li onClick={() => setHumbergerOpen(false)}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
