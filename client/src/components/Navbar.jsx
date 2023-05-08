import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const navigate = useNavigate();
  async function handleClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    alert("Logout Successful !");
    navigate("/");
  }
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
            {!token ? (
              <>
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
              </>
            ) : (
              <>
                <li className="navbar-list-items">
                  <Link className="navbar-link" to="/" onClick={handleClick}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
