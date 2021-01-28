import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header role="navigation">
      <div className="head_area">
        <Link to="/" className="head_link">Home</Link>
        <Link to="/about" className="head_link">About</Link>
      </div>
    </header>
  );
}

export default Navigation;
