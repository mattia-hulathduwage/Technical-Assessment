import React, { useState, useEffect, useRef } from "react";
import "../styles/Cheezy.css";
import SideBar from "../components/SideBar";

const INGREDIENTS = [
  "Flour",
  "Salt",
  "Cheeze",
  "Basil",
  "Mozzarella"
];

function Cheezy() {
  const [ingredient, setIngredient] = useState("");
  const [volume, setVolume] = useState("");
  const [date, setDate] = useState("");
  const [rows, setRows] = useState({});
  const isFirstLoad = useRef(true);

  // Load data from sessionStorage on component mount
  useEffect(() => {
    const saved = sessionStorage.getItem("Stock");
    if (saved) {
      setRows(JSON.parse(saved));
    }
  }, []);

  // Save data to sessionStorage when rows change (but skip on first load)
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    sessionStorage.setItem("Stock", JSON.stringify(rows));
  }, [rows]);

  const handleAdd = () => {
    if (!ingredient || !volume || !date) return;
    setRows(prev => {
      const prevVolume = Number(prev[ingredient]?.volume || 0);
      return {
        ...prev,
        [ingredient]: {
          volume: prevVolume + Number(volume),
          date,
        }
      };
    });
    setIngredient("");
    setVolume("");
    setDate("");
  };

  const handleDeduct = () => {
    if (!ingredient || !volume || !date) return;
    setRows(prev => {
      const prevVolume = Number(prev[ingredient]?.volume || 0);
      return {
        ...prev,
        [ingredient]: {
          volume: Math.max(0, prevVolume - Number(volume)),
          date,
        }
      };
    });
    setIngredient("");
    setVolume("");
    setDate("");
  };

  return (
    <div>
      <SideBar />
      <div className="cheezy-container">
        <h1>Cheezy Pizza</h1>
        <hr />
        <div className="cheezy-image"></div>
        <p className="cheezy-description">
          Average ingredients used for one Cheezy Pizza:
        </p>
        <ul className="cheezy-ingredients">
          <li>Flour: 200g</li>
          <li>Salt: 2g</li>
          <li>Cheeze: 100g</li>
          <li>Basil: 5g</li>
          <li>Mozzarella: 120g</li>
        </ul>
        <div className="cheezy-input-row">
          <div className="cheezy-input-group">
            <select
              className="cheezy-input"
              value={ingredient}
              onChange={e => setIngredient(e.target.value)}
            >
              <option value="">Select Ingredient</option>
              {INGREDIENTS.map(ing => (
                <option key={ing} value={ing}>{ing}</option>
              ))}
            </select>
            <input
              className="cheezy-input"
              type="text"
              placeholder="Volume"
              value={volume}
              onChange={e => setVolume(e.target.value)}
            />
            <input
              className="cheezy-input"
              type="date"
              placeholder="Date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div className="cheezy-action-buttons">
            <button className="cheezy-btn" onClick={handleAdd}>Add</button>
            <button className="cheezy-btn" onClick={handleDeduct}>Deduct</button>
          </div>
        </div>
        <div className="cheezy-table-container">
          <table className="cheezy-table">
            <thead>
              <tr>
                <th>Ingredient Type</th>
                <th>Volume</th>
                <th>Last Updated Date</th>
              </tr>
            </thead>
            <tbody>
              {INGREDIENTS.map((ing) => (
                <tr key={ing}>
                  <td>{ing}</td>
                  <td>{rows[ing]?.volume ?? ""}</td>
                  <td>{rows[ing]?.date ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cheezy;