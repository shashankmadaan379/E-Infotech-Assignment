import React from "react";
import singupimage from "../assets/image1.jpg";
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Welcome!</h1>
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
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="modal-right">
            <img src={singupimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
