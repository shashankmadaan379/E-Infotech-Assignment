import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import profile_avatar from "../assets/profile_pic.jpg";
import axios from "axios";
const Profile = () => {
  const [userData, setUserData] = useState({});
  const userId = JSON.parse(localStorage.getItem("userId"))._id;
  console.log(userId);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = await localStorage.getItem("token");
        console.log(typeof token);

        const response = await axios.get(
          `http://localhost:8000/api/v1/getUserDetails/${String(userId)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.data.success) {
          setUserData(response.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [userId]);
  return (
    <div className="user-profile-card">
      <Avatar sx={{ width: 64, height: 64 }} alt="" src={profile_avatar} />
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
      <button className="update-button">Update Profile</button>
    </div>
  );
};

export default Profile;
