import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    username: "",
    password: "",
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validateOnMount={validationSchema}
        onSubmit={onSubmit}
      >
        {(Formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              lable="Email"
              name="email"
              placeholder = "Enter Email"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default FormikContainer;
