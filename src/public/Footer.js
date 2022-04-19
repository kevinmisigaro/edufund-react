import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
  FaMapPin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container row">
        <div
          className="col-md-9 col-xs-12 col-sm-12"
          style={{ textAlign: "left" }}
        >
          <div style={{ width: "80%" }}>
            <small>
              Get in touch with EduFund on our social media to keep up to date
              with the most current information regarding what we do and our
              most recent activities.
            </small>

            <div className="d-flex mt-5 flex-row justify-content-around">
              <FaFacebook />

              <FaTwitter />

              <FaLinkedin />

              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-xs-12 col-sm-12">
          <ul className="list-unstyled" style={{ textAlign: "left" }}>
            <li>
              <FaMapPin /> &nbsp;&nbsp;{" "}
              <span style={{ fontSize: "11pt" }}>
                Ally Sykes road, Dar es Salaam, Tanzania
              </span>
            </li>
            <li>
              <FaPhoneAlt /> &nbsp;&nbsp;
              <span style={{ fontSize: "11pt" }}>+255 752 817 723</span>
            </li>
            <li>
              <FaMailBulk /> &nbsp;&nbsp;{" "}
              <span style={{ fontSize: "11pt" }}>info@edufund.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
