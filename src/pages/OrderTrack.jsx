import React, { useEffect, useState } from "react";
import "../styles/OrderTrack.css";
import CustomerSidebar from "../components/CustomerSidebar";

function formatLKR(amount) {
  return amount.toLocaleString("en-LK", { style: "currency", currency: "LKR", minimumFractionDigits: 2 });
}

function OrderTrack() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("orderStorage");
    if (stored) {
      setOrders(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <CustomerSidebar />
      <div className="ordertrack-container">
        <h1>Track Your Orders</h1>
        {orders.length === 0 ? (
          <p className="ordertrack-empty">No orders found.</p>
        ) : (
          <table className="ordertrack-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date ? new Date(order.date).toLocaleString() : ""}</td>
                  <td>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.name} x {item.qty} ({formatLKR(item.price)})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{formatLKR(order.amount)}</td>
                  <td>
                    <span className={`ordertrack-status status-${(order.status || "Placed").toLowerCase()}`}>
                      {order.status || "Placed"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default OrderTrack;