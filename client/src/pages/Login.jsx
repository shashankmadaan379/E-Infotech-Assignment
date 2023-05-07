import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <h1 className="modal-title">Welcome!</h1>
          <form>
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
              />
            </div>
            <div className="modal-buttons">
              <button type="submit" className="input-button">
                <Link to="/profile">Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
