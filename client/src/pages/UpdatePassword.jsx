import React, { useState } from "react";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function handleUpdatePassword() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="update-password-container">
      <div className="update-password">
        <h2>Update Password</h2>
        <div>
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            onChange={(event) => setCurrentPassword(event.target.value)}
            value={currentPassword}
          />
        </div>
        <div>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            onChange={(event) => setNewPassword(event.target.value)}
            value={newPassword}
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          />
        </div>
        <button
          className="update-button"
          onClick={handleUpdatePassword}
          disabled={
            !currentPassword || !newPassword || newPassword !== confirmPassword
          }>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;
