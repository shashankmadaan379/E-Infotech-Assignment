import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import profile_avatar from "../assets/profile_pic.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [newName, setNewName] = useState("");
  const userId = JSON.parse(localStorage.getItem("userId"))._id;
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = await localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8000/api/v1/getUserDetails/${String(userId)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          setUserData(response.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [userId]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  async function handleUpdatePassword() {
    navigate("/update");
  }
  const handleUpdateProfile = async () => {
    try {
      const token = await localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:8000/api/v1/updateUserDetails/${String(userId)}`,
        {
          name: newName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setUserData((prevData) => ({ ...prevData, name: newName }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-profile-card">
      <Avatar sx={{ width: 64, height: 64 }} alt="" src={profile_avatar} />
      <h2>{userData && userData.name}</h2>
      <p>{userData && userData.email}</p>
      <div>
        <input type="text" value={newName} onChange={handleNameChange} />
        <button className="update-button" onClick={handleUpdateProfile}>
          Update Name
        </button>
        <button
          className="update-button-password"
          onClick={handleUpdatePassword}>
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
