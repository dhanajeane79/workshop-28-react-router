/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/home">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/orange">Orange</Link>
        <Link to="/yellow">Yellow</Link>
        <Link to="/green">Green</Link>
        <Link to="/blue">Blue</Link>
      </div>
    </footer>
  );
}

export default Footer;
