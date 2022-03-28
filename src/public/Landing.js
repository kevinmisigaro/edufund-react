import React from "react";
import Hero from "./Hero";
import NavigationBar from "./NavigationBar";
import img from "../assets/img/students-standing.jpg";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      <NavigationBar />

      <Hero />

      <div className="container py-5">
        <div className="text-center">
          <h3 style={{ fontWeight: "bold" }}>BUILDING AFRICA'S FUTURE</h3>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <img src={img} style={{ maxWidth: "100%" }} alt="..." />
          </div>
          <div className="col-md-6 mb-3">
            <p style={{ textAlign: "left" }}>
              EduFund is a crowdfunding platform that enables underserved
              African youths to raise funding for their higher education.
              EduFUND is the first decentralized future-value education funding
              solution that enables education enthusiast to offer impact
              investing in smart and promising African youth to acquire quality
              education and get repaid after the student beneficiary is
              gainfully employed. The beneficiary student makes repayment in
              installments to impact investors that contributed to their
              university financial needs. The platform also allows
              philanthropists to donate to sponsoring a student to study in
              their university of choice on grant basis.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
