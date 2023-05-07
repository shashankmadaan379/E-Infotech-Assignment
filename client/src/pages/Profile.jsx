import React from "react";
import Avatar from "@mui/material/Avatar";
import profile_avatar from "../assets/profile_pic.jpg";
const Profile = () => {
  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   const getUser = async () => {
  //     const getUserUrl = "";
  //     const response = await axios.get(getUserUrl);
  //     setUser(response.data);
  //   };
  // });
  return (
    <div className="user-profile-card">
      <Avatar sx={{ width: 64, height: 64 }} alt="" src={profile_avatar} />
      <h2>Name</h2>
      <p>Email@gmail.com</p>
      <button className="update-button">Update Profile</button>
    </div>
  );
};

export default Profile;
