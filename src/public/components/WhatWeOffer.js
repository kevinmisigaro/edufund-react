import React from "react";
import { Link } from "react-router-dom";
import img3 from "../../assets/img/undraw_Studying_re_deca.png";

export default function WhatWeOffer() {
  return (
    <div className="container-fluid py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <h3 style={{ fontWeight: "500" }}>What we offer</h3>
        <br />
        <div className="row mt-3">
          <div className="col-md-4">
            <img src={img3} alt="..." style={{ maxWidth: "10rem" }} />
            <br />
            <b>Students</b>
            <p className="mt-2">
              EduFund is your platform to tell your story to millions of people
              that will contribute and invest towards your academic pursuit.
            </p>
            <br />
            <Link className="btn btn-outline-primary" to="/students">Learn more</Link>
          </div>
          <div className="col-md-4">
            <img src={img3} alt="..." style={{ maxWidth: "10rem" }} />
            <br />
            <b>Donors</b>
            <p className="mt-2">
              Your donations helps in rewriting the story of a young Africa star
              that is determined to change his destiny
            </p>
            <br />
            <Link to="/donors" className="btn btn-outline-primary">Learn more</Link>
          </div>
          <div className="col-md-4">
            <img src={img3} alt="..." style={{ maxWidth: "10rem" }} />
            <br />
            <b>Impact Investing</b>
            <p className="mt-2">
              Get your money repaid by the student when they are gainfully
              employed.
            </p>
            <br/>
            <br />
            <Link to="/donors" className="btn btn-outline-primary">Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
