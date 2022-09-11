import React from "react";
import { Style, Form } from "./Style";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <Style>
      <div className="footerTitle">
        Reach out to us<div className="titleUnderline"></div>
      </div>
      <Form>
        <input name="Name" placeholder="Name" />
        <input name="Email" placeholder="Email" />
        <Button dormant={true}>Send Request</Button>
      </Form>
      <hr style={{ opacity: "0.2", border: "0.5px solid" }} />
      <div className="copyright">Copyright &copy; Customised Patterns</div>
    </Style>
  );
};

export default Footer;
