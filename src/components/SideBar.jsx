import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here if needed
    navigate("/");
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stock">Stock</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link
            to="/"
            className="logout-btn"
            onClick={(e) => {
              e.preventDefault(); // Prevent default navigation
              handleLogout(); // Run your logout logic and navigation
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
