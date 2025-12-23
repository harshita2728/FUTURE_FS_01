import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* BRAND INFO */}
        <div className="footer-section">
          <h3>StyleNest</h3>
          <p>
            StyleNest is your go-to destination for modern fashion,
            offering premium quality apparel and accessories designed
            to elevate your everyday style.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@stylenest.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 StyleNest | Designed & Developed by Harshita</p>
      </div>
    </footer>
  );
}

export default Footer;
