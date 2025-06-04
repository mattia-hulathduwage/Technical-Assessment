import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CustomerSidebar.css";

function CustomerSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally clear session or user data here
    navigate("/");
  };

  return (
    <div className="customer-sidebar">
      <div className="sidebar-title">Customer</div>
      <ul className="sidebar-list">
        <li onClick={() => navigate("/order")}>Order</li>
        <li onClick={() => navigate("/track-order")}>View Orders</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
}

export default CustomerSidebar;