import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export const validationSchema = Yup.object({
  currentpassword: Yup.string().min(6).required("Please enter your password"),
  newpassword: Yup.string().min(6).required("Please enter your password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("newpassword"), null], "Password must match"),
});

const UpdatePassword = () => {
  //   const [currentPassword, setCurrentPassword] = useState("");
  //   const [newPassword, setNewPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const handleUpdatePassword = async (values) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="update-password-container">
      <div className="update-password">
        <h2>Update Password</h2>
        <Formik
          initialValues={{
            currentpassword: "",
            newpassword: "",
            confirmpassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdatePassword}>
          {(formik) => (
            <Form onSubmit={formik.handleUpdatePassword}>
              <div>
                <label htmlFor="currentpassword">Current Password</label>
                <Field
                  type="password"
                  id="currentpassword"
                  name="currentpassword"
                  className="form-control"
                />
                <ErrorMessage
                  name="currentpassword"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="newpassword">New Password</label>
                <Field
                  type="password"
                  id="newpassword"
                  name="newpassword"
                  className="form-control"
                />
                <ErrorMessage
                  name="newpassword"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  className="form-control"
                />
                <ErrorMessage
                  name="confirmpassword"
                  component="div"
                  className="error-message"
                />
              </div>
              <button className="update-button">Update</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdatePassword;
