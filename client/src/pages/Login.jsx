import React, { useState } from "react";
import signupimage from "../assets/image1.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const loginUrl = "http://localhost:8000/api/v1/loginUser";
      const response = await axios.post(loginUrl, {
        email,
        password,
      });
      if (response) {
        alert("Login Successfull !");
      }
      navigate("/profile");
    } catch (error) {
      console.log(error);
      alert("Login failed, Please try again...");
    }
  }
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Login</h1>
            <form onSubmit={handleSubmit}>
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
                  Login
                </button>
              </div>
            </form>
            <p className="back-to-home">
              Back to Home Page ? <Link to="/">Home</Link>
            </p>
          </div>
          <div className="modal-right">
            <img src={signupimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
