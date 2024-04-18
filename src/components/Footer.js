import React from "react";
import "./Footer.css";

const Footer = ({ logoV, insta, fb, yt }) => {
  return (
    <div className="footer-container">
      <div className="white-foot">
        <img src={logoV} className="logo-vad" alt="123" />

        <div className="social">
          <p className="social-txt">Follow us on</p>
          <a
            href="https://www.instagram.com/neel_kashyap003?igsh=MW9sb2JlcjUwM256Nw=="
            target="_blank"
            rel="noreferrer"
          >
            <img className="insta-logo" src={insta} alt="11" />
          </a>
          <a
            href="https://www.instagram.com/neel_kashyap003?igsh=MW9sb2JlcjUwM256Nw=="
            target="_blank"
            rel="noreferrer"
          >
            <img className="facebook-logo" src={fb} alt="22" />
          </a>
          <a
            href="https://www.instagram.com/neel_kashyap003?igsh=MW9sb2JlcjUwM256Nw=="
            target="_blank"
            rel="noreferrer"
          >
            <img className="youtube-logo" src={yt} alt="33" />
          </a>
        </div>
      </div>

      <div className="brown-foot">
        <p className="copyright">Copyright 2024 Vadilal Group</p>
        <p className="privacy">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
