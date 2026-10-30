import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>StudentHub</h2>
        <p>Management Portal</p>
      </div>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" end>
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/students">
            👨‍🎓 Students
          </NavLink>
        </li>

        <li>
          <NavLink to="/students/add">
            ➕ Add Student
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            ℹ️ About
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        <span>🚪 Logout</span>
      </div>
    </aside>
  );
}

export default Sidebar;