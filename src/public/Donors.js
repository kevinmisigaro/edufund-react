import React from "react";
import img from "../assets/img/students-standing.jpg";
import NavigationBar from "./NavigationBar";
import bg from "../assets/img/donors-save.png";
import Footer from "./Footer";

export default function Donors() {
  return (
    <>
      <NavigationBar />
      <div
        className="container-fluid text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container"
          style={{ width: "60%", textAlign: "left", padding: "150px 0" }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            HOW EDUFUND IS MAKING EDUCATION ACCESSIBLE FOR ALL.
          </h3>
          <br />
          <p>
            EduFund offers education enthusiasts the opportunity to invest or
            offer donations to vetted underprivileged African youths that are
            seeking to further their education in reputable higher institutions
            across the world.
            <br />
            <br />
            We believe that every young person should have equal chance to
            education, which remains a building block towards achieving a
            prosperous continent. You can be part of creating life long legacies
            either through donations or impact investing;
          </p>
          <br />
          <button
            style={{ fontWeight: "bold" }}
            className="btn btn-primary px-4"
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <ol style={{ textAlign: "left" }}>
              <li>
                Donation – You can donate as little as $10 towards rewriting the
                story of a young Africa star that is determined to change his
                and the community’s destiny through education
              </li>
              <li>
                Impact Investing – You can offer impact investment in form of a
                loan to a student of your choice on EduFund platform, and get
                your money repaid by the student when they are gainfully
                employed.
              </li>
            </ol>
          </div>
          <div className="col-md-6">
            <img src={img} style={{ maxWidth: "100%" }} alt="..." />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
