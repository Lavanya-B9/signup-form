import React from "react";
import "./SignupFormStyles.css";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <div className="container">
      <h3>Sign up form using Formik and yup library </h3>
      <div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirm_password:'',
          }}
          validationSchema={Yup.object({
            username: Yup.string().trim().required("Username is Required"),
            email: Yup.string()
              .email("Email is Invalid")
              .trim()
              .required(" Email is required"),
            password: Yup.string()
              .trim()
              .required("Pssword is Required")
              .min(8, " Password should be 8 characters")
              .max(9, "password should not exceed 8 characters"),
            confirm_password: Yup.string()
              .oneOf([Yup.ref("password"), null], "passwords must match")
              .trim()
              .required("confirm Password is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            alert("signed in successfully")
            resetForm();
          }}>
          
          <Form className="form-container">
            <label htmlFor="Username">Username</label>
            <Field name="username" type="text" className="form-control mb-3" />
            <p className="text-danger">
              <ErrorMessage name="username" />
            </p>
            <label htmlFor="email">Email</label>

            <Field name="email" type="text" className="form-control mb-3" />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className="form-control mb-3"
            />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
            <label htmlFor="confirm_password">Confirm Password</label>

            <Field
              name="confirm_password"
              type="password"
              className="form-control mb-3"
            />
            <p className="text-danger">
              <ErrorMessage name="confirm_password" />
            </p>
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
