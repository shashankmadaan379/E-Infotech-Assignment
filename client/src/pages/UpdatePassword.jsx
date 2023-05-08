import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const validationSchema = Yup.object({
  currentPassword: Yup.string().min(6).required("Please enter your password"),
  newPassword: Yup.string().min(6).required("Please enter your new password"),
});

const UpdatePassword = () => {
  //   const [currentPassword, setCurrentPassword] = useState("");
  //   const [newPassword, setNewPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleUpdatePassword = async (values) => {
    try {
      const userId = JSON.parse(localStorage.getItem("userId"))._id;
      const response = await axios.put(
        `http://localhost:8000/api/v1/updateUserPassword/${String(userId)}`,
        {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        }
      );

      if (response) {
        alert("Password Updated Successfully");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      alert("Password Not Updated, Please try again...");
    }
  };
  return (
    <div className="update-password-container">
      <div className="update-password">
        <h2>Update Password</h2>
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdatePassword}>
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="currentPassword">Current Password</label>
                <Field
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="form-control"
                  placeholder="Current Password"
                />
                <ErrorMessage
                  name="currentPassword"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="newPassword">New Password</label>
                <Field
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="form-control"
                  placeholder="New Password"
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="update-button"
                  onClick={formik.handleUpdatePassword}>
                  Update
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="back-to-profile">
          Back to Profile Page ? <Link to="/profile">Profile</Link>
        </p>
      </div>
    </div>
  );
};

export default UpdatePassword;
