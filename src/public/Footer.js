import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container row">
        <div
          className="col-md-6 col-xs-12 col-sm-12"
          style={{ textAlign: "left" }}
        >
          <small>
            Get in touch with EduFund on our social media to keep up to date
            with the most current information regarding what we do and our most
            recent activities.
          </small>

          <div className="d-flex mt-5 flex-row justify-content-around">
            <FaFacebook />

            <FaTwitter />

            <FaLinkedin />

            <FaInstagram />
          </div>
        </div>

        <div className="col-md-6 col-xs-12 col-sm-12">
          <h5 style={{ fontWeight: "700" }}>Contact information</h5>
          <br />
          <FaPhoneAlt /> {" "}
          <span style={{ fontSize: "11pt" }}>+255 782 835 136</span> <br/><br/>
          <FaMailBulk /> {" "}  <span style={{ fontSize: "11pt" }}>info@edufund.com</span>
        </div>
      </div>
    </footer>
  );
}
