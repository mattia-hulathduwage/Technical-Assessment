import React from "react";
import "../styles/Stock.css";
import SideBar from "../components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Stock() {
  const navigate = useNavigate();

  return (
    <div>
      <SideBar />
      <div className="Stock-Container" style={{ marginLeft: 180 }}>
        <div className="Stock-Header">
          <h1>Stock Management</h1>
          <hr />
          <p>Manage your restaurant's inventory here</p>
        </div>
        <h2 className="Stock-Choose-Heading">Choose product</h2>
        <div className="Stock-Cards">
          <div
            className="Stock-Card"
            onClick={() => navigate("/pepperoni")}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faPizzaSlice} size="3x" />
            <div className="Stock-Card-Name">Pepperoni Pizza</div>
          </div>
          <div
            className="Stock-Card"
            onClick={() => navigate("/cheezy")}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faPizzaSlice} size="3x" />
            <div className="Stock-Card-Name">Cheezy Pizza</div>
          </div>
          <div className="Stock-Card">
            <FontAwesomeIcon icon={faPizzaSlice} size="3x" />
            <div className="Stock-Card-Name">Onion Pizza</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stock;