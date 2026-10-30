import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h2>Student Management System</h2>
      </div>

      <div className="navbar-actions">
        <span className="welcome-text">
          Welcome, Admin
        </span>

        <div className="admin-profile">
          <span className="admin-icon">👤</span>
          <span>Admin</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;