import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
      <h1>Please first login to access this resource</h1>
      <p className="back-to-login">
        Back to Login Page ? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Error;
