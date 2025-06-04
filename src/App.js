import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Role from "./pages/Role";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer";
import Stock from "./pages/Stock";
import Pepperoni from "./pages/Pepperoni";
import Cheezy from "./pages/Cheezy";

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
      </Routes>
    </Router>
  );
}

export default App;