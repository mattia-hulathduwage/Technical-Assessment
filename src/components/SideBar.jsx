import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here if needed
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">Admin</div>
      <ul className="sidebar-list">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/stock")}>Stock</li>
        <li onClick={() => navigate("/order-view")}>Order</li>
        <li onClick={handleLogout} className="logout-btn">Logout</li>
      </ul>
    </div>
  );
}

export default SideBar;