import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <React.Fragment>
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} Placeholder={name} {...rest} />
        <ErrorMessage name={name}  component={TextError} />
      </div>
    </React.Fragment>
  );
}

export default Input;
