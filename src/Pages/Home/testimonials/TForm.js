import React from "react";
import { FormStyle } from "./style";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../../Components/Form/FormikControl";
import { FormCont } from "../../../Components/Form/FormStyle";
import Button from "../../../Components/Button/Button";

const TForm = () => {
  const initialValues = {
    yourName: "",
    yourEmail: "",
    yourMessage: "",
  };

  const validationSchema = Yup.object({
    yourName: Yup.string().required("Please put in your name"),
    yourEmail: Yup.string().email("Enter valid email").required("Required"),
    yourMessage: Yup.string().required("Enter a message"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("values from Testimonial Form", values);
    resetForm({ values: "" });
  };

  return (
    <FormStyle>
      <div className="formTitle">Talk to an Expert</div>
      <FormCont>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="formikForm">
                <FormikControl
                  control="input"
                  label=""
                  name="yourName"
                  placeholder="Your name"
                />

                <FormikControl
                  control="input"
                  label=""
                  name="yourEmail"
                  placeholder="Your Email"
                />

                <FormikControl
                  control="textarea"
                  label=""
                  name="yourMessage"
                  placeholder="Your Message"
                />

                <Button type="submit">Submit</Button>
              </Form>
            );
          }}
        </Formik>
      </FormCont>
      <hr />
    </FormStyle>
  );
};

export default TForm;
