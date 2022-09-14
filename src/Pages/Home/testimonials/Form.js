import React from "react";
import { FormStyle } from "./style";
import Button from "../../../Components/Button/Button";

const Form = () => {
  return (
    <FormStyle>
      <div className="formTitle">Talk with our Expert</div>
      <input type="text" name="name" id="name" placeholder="Your name" />

      <input type="email" name="email" id="email" placeholder="Email" />

      <input
        type="message"
        name="message"
        id="message"
        placeholder="Your message"
      />

      <Button>Submit</Button>
      <hr />
    </FormStyle>
  );
};

export default Form;
