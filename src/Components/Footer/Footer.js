import React from "react";
import { Style, Form } from "./Style";
import Button from "../Button/Button";
import logo from "../../Assets/Logo 2.svg";

const Footer = () => {
  return (
    <Style>
      <div className="footerTop">
        <div className="footerLeft">
          <div>
            <img src={logo} alt="logoImg" />
          </div>
        </div>
        <div className="footerRight">
          <div className="footerTitle">
            Reach out to us<div className="titleUnderline"></div>
          </div>
          <Form>
            <input name="Name" placeholder="Name" />
            <input name="Email" placeholder="Email" />
            <Button dormant={true}>Send Request</Button>
          </Form>
        </div>
      </div>
      <hr style={{ opacity: "0.2", border: "0.5px solid" }} />
      <div className="copyright">Copyright &copy; Customised Patterns 2022</div>
    </Style>
  );
};

export default Footer;
