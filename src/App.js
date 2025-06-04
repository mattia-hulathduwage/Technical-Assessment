import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./pages/Role";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer";
import Stock from "./pages/Stock";
import Pepperoni from "./pages/Pepperoni";
import Cheezy from "./pages/Cheezy";
import Order from "./pages/Order";
import OrderView from "./pages/OrderView";
import TrackOrder from "./pages/OrderTrack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/pepperoni" element={<Pepperoni />} />
        <Route path="/cheezy" element={<Cheezy />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-view" element={<OrderView />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </Router>
  );
}

export default App;