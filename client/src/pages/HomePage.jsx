import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage-items">
      <div className="homepage-welcome-text">
        <h1 className="welcome-text">Welcome to Eternalight Infotech</h1>
      </div>
      <div className="homepage-items-list">
        <h1>Please Login or Register to access the Profile</h1>
        <Link to="/register">
          <AiOutlineArrowRight className="right-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
