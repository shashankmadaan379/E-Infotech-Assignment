import React from "react";
import signupimage from "../assets/image1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
export const validationSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const loginUrl = "http://localhost:8000/api/v1/loginUser";
      const response = await axios.post(loginUrl, {
        email: values.email,
        password: values.password,
      });
      if (response) {
        localStorage.setItem("userId", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        alert("Login Successfull !");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed, Please try again...");
    }
  };
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Login</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      autoComplete="off"
                      name="email"
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
                      autoComplete="off"
                      name="password"
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
                  <div className="modal-buttons">
                    <button type="submit" className="input-button">
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className="back-to-home">
              Back to Home Page ? <Link to="/">Home</Link>
            </p>
          </div>
          <div className="modal-right">
            <img src={signupimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
