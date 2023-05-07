import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">Eternalight Infotech</div>
        <div className="menu">
          <ul className="navbar-items">
            <li className="navbar-list-items">
              <Link className="navbar-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="navbar-list-items">
              <Link className="navbar-link" to="/login">
                Login
              </Link>
            </li>
            <li className="navbar-list-items">
              <Link className="navbar-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
