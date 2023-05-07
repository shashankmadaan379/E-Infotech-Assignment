import React from "react";
import { Link } from "react-router-dom";
import singupimage from "../assets/image1.jpg";
const Signup = () => {
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Welcome!</h1>
            <form>
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
