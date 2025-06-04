import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/Order.css";

function formatLKR(amount) {
  return amount.toLocaleString("en-LK", {
    style: "currency",
    currency: "LKR",
    minimumFractionDigits: 2,
  });
}

const STATUS_OPTIONS = ["Placed", "Preparing", "Dispatched", "Delivered"];

function OrderView() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("orderStorage");
    if (stored) {
      setOrders(JSON.parse(stored));
    }
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    sessionStorage.setItem("orderStorage", JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <SideBar />
      <div className="order-container">
        <h1>All Orders</h1>
        {orders.length === 0 ? (
          <p className="cart-empty">No orders found.</p>
        ) : (
          <table className="cart-table">
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
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    {order.date ? new Date(order.date).toLocaleString() : ""}
                  </td>
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
                    <select
                      value={order.status || "Placed"}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
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

export default OrderView;
