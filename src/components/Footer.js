import React from "react";
import "./FooterStyles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Suikerbekkie</h1>
          <p>Come stay with us in the bush!</p>
        </div>
        <div>
          <a href="https://www.facebook.com/profile.php?id=100093281774402&mibextid=ZbWKwL">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          {/* <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a> */}
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Contact</h4>
          <small>089 802 1385</small>
          <small>email@email.com</small>
          <small>Suikerbekkie, Baardskeerdersbos, South Africa, 7221</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
