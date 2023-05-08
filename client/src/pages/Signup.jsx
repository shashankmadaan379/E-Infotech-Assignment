import React from "react";
import { Link, useNavigate } from "react-router-dom";
import singupimage from "../assets/image1.jpg";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const registerUrl = "http://localhost:8000/api/v1/registerUser";
      const response = await axios.post(registerUrl, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      if (response) {
        alert("User Registration Successfull !");
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration failed, Please try again...");
    }
  };

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Register</h1>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirm_password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      autoComplete="off"
                      id="name"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Email"
                      id="email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Password"
                      id="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      id="confirm_password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="modal-buttons">
                    <button type="submit" className="input-button">
                      Register
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className="sign-up">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="modal-right">
            <img src={singupimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
