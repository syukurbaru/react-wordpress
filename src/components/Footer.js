import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [show, setShow] = useState(false);

  const showFooter = () => {
    if (window.scrollY > 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showFooter);
  }, []);

  return (
    <div className={`${show ? "footer" : "footer-none"}`}>
      <p>&copy; 2021</p>
    </div>
  );
}

export default Footer;
