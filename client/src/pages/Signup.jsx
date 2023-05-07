import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import singupimage from "../assets/image1.jpg";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const registerUrl = "http://localhost:8000/api/v1/registerUser";
      const response = await axios.post(registerUrl, {
        name,
        email,
        password,
      });
      if (response) {
        alert("User Registration Successfull !");
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration failed, Please try again...");
    }
  }
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  type="name"
                  autoComplete="off"
                  name="name"
                  placeholder="Name"
                  id="name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </div>
              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  placeholder="Email"
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
              <div className="input-block">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="input-button">
                  Register
                </button>
              </div>
            </form>
            <p className="sign-up">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="modal-right">
            <img src={singupimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
