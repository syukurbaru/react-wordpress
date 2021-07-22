import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ isOpen }) {
  return (
    <div className={`navigation ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/detail/1`}>Detail Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
