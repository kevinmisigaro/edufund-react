import React from "react";
import { Link } from "react-router-dom";
import { FaMoneyBillAlt, FaUserGraduate, FaUsers } from "react-icons/fa";

export default function WhatWeOffer() {
  return (
    <div className="container-fluid py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <h3 style={{ fontWeight: "500" }}>What we offer</h3>
        <br />
        <div className="row mt-3">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <FaUsers size={60} />
            <br />
            <br />
            <b>Students</b>
            <p className="mt-2">
              EduFund is your platform to tell your story to millions of people
              that will contribute and invest towards your academic pursuit.
            </p>
            <br />
            <Link className="btn btn-outline-primary" to="/students">
              Learn more
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <FaMoneyBillAlt size={60} />
            <br />
            <br />
            <b>Donors</b>
            <p className="mt-2">
              Your donations helps in rewriting the story of a young Africa star
              that is determined to change his destiny
            </p>
            <br />
            <Link to="/donors" className="btn btn-outline-primary">
              Learn more
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <FaUserGraduate size={60} />
            <br />
            <br />
            <b>Scholarship database</b>
            <p className="mt-2">
            Offset or fund your tuition fees with a scholarship
            </p>
            <br />
            <br />
            <Link to="/donors" className="btn btn-outline-primary">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
