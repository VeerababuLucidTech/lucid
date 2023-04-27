import React from "react";
import Form from "react-bootstrap/Form";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import login from "../login.JPG";

// Creating schema
// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required("Email is a required field")
//     .email("Invalid email format"),
//   password: Yup.string()
//     .required("Password is a required field")
//     .min(5, "Password must be at least 5 characters"),
// });

function LoginForm(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}
export default LoginForm;
