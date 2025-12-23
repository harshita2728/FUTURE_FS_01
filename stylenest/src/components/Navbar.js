import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header className="header">
      <h2>StyleNest</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
