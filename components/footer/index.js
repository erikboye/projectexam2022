import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_upperSection">
        <div className="footer_title">PrimaVera</div>
        <div className="footer_icon_wrapper">
          <Icon className="footer_icon" icon="ant-design:facebook-outlined" />
          <Icon className="footer_icon" icon="ant-design:instagram-filled" />
        </div>
      </div>
      <div className="footer_underSection">© PrimaVera 2022</div>
    </div>
  );
}

export default Footer;
