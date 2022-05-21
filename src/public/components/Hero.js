import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/homeimage.jpg";

export default function Hero() {
  return (
   <div className="container-fluid" style={{ background: '#6295d5' }}>
      <div
      className="container"
      style={{ paddingTop: "5rem", paddingBottom: '5rem' }}
    >
      <div className="row">
        <div
          className="col-md-6"
          style={{ textAlign: "left", marginTop: "5rem" }}
        >
          <br />
          <h2 style={{ textAlign: "justify", fontSize: "2.0rem", color: 'white' }}>
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
          <img src={img} alt="..." style={{ width: "100%" }} />
        </div>
      </div>
    </div>
   </div>
  );
}
