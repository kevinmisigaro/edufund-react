import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/undraw_Graduation_re_gthn.png";

export default function Hero() {
  return (
    <div
      className="container"
      style={{ marginTop: "7rem", marginBottom: "5rem" }}
    >
      <div className="row">
        <div
          className="col-md-6"
          style={{ textAlign: "left", marginTop: "5rem" }}
        >
          <br />
          <h2 style={{ textAlign: "justify", fontSize: "2.7rem" }}>
            We facilitate inclusive access to education for all Africans through
            community financing.
          </h2>
          <br />
          <Link
            to="/allfundraisers"
            className="btn btn-primary px-5"
            style={{
              background: "#47688E",
              border: "1px solid #47688E",
              fontWeight: "700",
            }}
          >
            Donate
          </Link>
        </div>
        <div className="col-md-6">
          <img src={img} alt="..." style={{ width: "40rem" }} />
        </div>
      </div>
    </div>
  );
}