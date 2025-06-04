import React from "react";
import "../styles/Role.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Role() {
  const navigate = useNavigate();
  return (
    <div className="Role-Container">
      <div className="Button-Modal">
        <h1>Choose Role</h1>
        <div className="Button-Container">
          <button className="Role-Button" onClick={() => navigate("/admin")}>
            <FontAwesomeIcon icon={faUserTie} size="2x" />
            Admin
          </button>
          <button className="Role-Button" onClick={() => navigate("/customer")}>
            <FontAwesomeIcon icon={faUsers} size="2x" />
            Customer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Role;
