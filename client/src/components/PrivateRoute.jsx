import React from "react";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Profile /> : <Error />;
};

export default PrivateRoute;
