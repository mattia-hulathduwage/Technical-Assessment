import React from "react";
import "../styles/Customer.css";

function Customer() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      setError("Username and password cannot be empty.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else if (username !== "admin" || password !== "admin123") {
      setError("Invalid username or password.");
    } else if (username === "admin" && password === "admin123") {
      setError("");
      // Redirect to the admin dashboard or perform any other action
      alert("Login successful!");
    }
  };

  return (
    <div className="Customer-Container">
      <div className="Customer-Form-Container">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleLogin}>
          <div className="error-message">{error}</div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button on>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Customer;
