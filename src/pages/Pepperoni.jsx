import React, { useState, useEffect, useRef } from "react";
import "../styles/Pepperoni.css";
import SideBar from "../components/SideBar";

const INGREDIENTS = [
  "Flour",
  "Salt",
  "Pepperoni",
  "Tomato",
  "Basil",
  "Mozzarella"
];

function Pepperoni() {
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
      <div className="pepperoni-container" style={{ marginLeft: 180 }}>
        <h1>Pepperoni Pizza</h1>
        <hr />
        <div className="pepperoni-image"></div>
        <p className="pepperoni-description">
          Average ingredients used for one Pepperoni Pizza:
        </p>
        <ul className="pepperoni-ingredients">
          <li>Flour: 200g</li>
          <li>Salt: 2g</li>
          <li>Pepperoni: 30g</li>
          <li>Tomato: 50g</li>
          <li>Basil: 5g</li>
          <li>Mozzarella: 80g</li>
        </ul>
        <div className="pepperoni-input-row">
          <div className="pepperoni-input-group">
            <select
              className="pepperoni-input"
              value={ingredient}
              onChange={e => setIngredient(e.target.value)}
            >
              <option value="">Select Ingredient</option>
              {INGREDIENTS.map(ing => (
                <option key={ing} value={ing}>{ing}</option>
              ))}
            </select>
            <input
              className="pepperoni-input"
              type="text"
              placeholder="Volume"
              value={volume}
              onChange={e => setVolume(e.target.value)}
            />
            <input
              className="pepperoni-input"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div className="pepperoni-action-buttons">
            <button className="pepperoni-btn" onClick={handleAdd}>Add</button>
            <button className="pepperoni-btn" onClick={handleDeduct}>Deduct</button>
          </div>
        </div>
        <div className="pepperoni-table-container">
          <table className="pepperoni-table">
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

export default Pepperoni;
