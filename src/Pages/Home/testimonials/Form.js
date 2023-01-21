import React from "react";
import { FormStyle } from "./style";
import Button from "../../../Components/Button/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../Components/Form/FormikControl";

const Form = () => {
  const initialValues = { yourName: "", yourEmail: "", yourMessage: "" };

  const validationSchema = Yup.object({
    yourName: Yup.string().required("Fill in your name"),
    yourEmail: Yup.string().email("Input a valid email").required("Required"),
    yourMessage: Yup.string().required("Enter a message please"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };
  return (
    <FormStyle id="homeForm">
      <div className="formTitle">Talk to an Expert</div>
      <input type="text" name="name" id="name" placeholder="Your name" />

      <input type="email" name="email" id="email" placeholder="Email" />

      <textarea
        type="message"
        name="message"
        id="message"
        placeholder="Your message"
      />

      <Button type="submit">Submit</Button>
      <hr />
    </FormStyle>
  );
};

export default Form;
