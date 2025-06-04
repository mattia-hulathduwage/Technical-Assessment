import React, { useState } from "react";
import "../styles/Order.css";
import SideBar from "../components/CustomerSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const PIZZAS = [
  {
    name: "Pepperoni Pizza",
    description: "Pizza topped with pepperoni, mozzarella, sauce.",
    price: 3900, // LKR
  },
  {
    name: "Cheezy Pizza",
    description: "A cheese lover's dream with mozzarella, cheeze, and basil.",
    price: 3200, // LKR
  },
  {
    name: "Veggie Pizza",
    description: "Loaded with fresh tomato, basil, and mozzarella.",
    price: 3500, // LKR
  }
];

function Order() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const found = prev.find(item => item.name === pizza.name);
      if (found) {
        return prev.map(item =>
          item.name === pizza.name
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...pizza, qty: 1 }];
    });
  };

  const removeFromCart = (pizza) => {
    setCart((prev) =>
      prev
        .map(item =>
          item.name === pizza.name
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const formatLKR = (amount) =>
    amount.toLocaleString("en-LK", { style: "currency", currency: "LKR", minimumFractionDigits: 2 });

  // Generate next order ID as a string with leading zeros (e.g., "0001")
  const getNextOrderId = () => {
    const orders = JSON.parse(sessionStorage.getItem("orderStorage") || "[]");
    if (orders.length === 0) return "0001";
    const lastId = orders[orders.length - 1].id;
    const nextId = (parseInt(lastId, 10) + 1).toString().padStart(4, "0");
    return nextId;
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const orders = JSON.parse(sessionStorage.getItem("orderStorage") || "[]");
    const newOrder = {
      id: getNextOrderId(),
      amount: total,
      items: cart.map(item => ({
        name: item.name,
        qty: item.qty,
        price: item.price
      })),
      date: new Date().toISOString()
    };
    orders.push(newOrder);
    sessionStorage.setItem("orderStorage", JSON.stringify(orders));
    alert(`Thank you for your order!\nOrder ID: ${newOrder.id}`);
    setCart([]);
  };

  return (
    <div>
      <SideBar />
      <div className="order-container">
        <h1>Order Pizza</h1>
        <div className="pizza-list">
          {PIZZAS.map((pizza) => (
            <div className="pizza-card" key={pizza.name}>
              <div className="pizza-icon" style={{ fontSize: "64px", marginBottom: "12px", color: "#d2691e" }}>
                <FontAwesomeIcon icon={faPizzaSlice} size="2x" />
              </div>
              <h2>{pizza.name}</h2>
              <p>{pizza.description}</p>
              <div className="pizza-footer">
                <span className="pizza-price">{formatLKR(pizza.price)}</span>
                <button className="order-btn" onClick={() => addToCart(pizza)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-section">
          <h2>Order Cart</h2>
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Pizza</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>{formatLKR(item.price)}</td>
                      <td>{formatLKR(item.price * item.qty)}</td>
                      <td>
                        <button className="remove-btn" onClick={() => removeFromCart(item)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3} style={{ textAlign: "right", fontWeight: "bold" }}>Total:</td>
                    <td style={{ fontWeight: "bold" }}>{formatLKR(total)}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div style={{ marginTop: "20px", textAlign: "right" }}>
                <button
                  className="order-btn"
                  style={{ fontSize: "18px", padding: "10px 32px" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;