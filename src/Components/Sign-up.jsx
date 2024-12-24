import React, { useEffect, useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const user = { username, name, email };
    try {
      const response = await axios.post("", user); // Send POST request
      alert("User registered successfully!"); // Success message
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error while registering user");
    }
  };

  return (
    <div>
      <div className="card bg-info d-flex p-5 w-70% position-absolute top-50 start-50 translate-middle">
        <center>
          <h1>Sign Up</h1>
        </center>
        <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Bind username input
              autoComplete="off"
            />
            <label htmlFor="username" className="form-label">
              Username:
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Bind name input
              autoComplete="off"
            />
            <label htmlFor="name" className="form-label">
              Name:
            </label>
          </div>
          
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind email input
              autoComplete="off"
            />
            <label htmlFor="email" className="form-label">
              Email:
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
