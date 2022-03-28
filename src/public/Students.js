import React from "react";
import img from "../assets/img/students-standing.jpg";
import NavigationBar from "./NavigationBar";
import bg from '../assets/img/students-caps-up-50.png'
import Footer from "./Footer";

export default function Students() {
  return (
    <>
    <NavigationBar />
      <div
        className="container-fluid text-white"
        style={{
          height: "70vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container py-5"
          style={{ width: "60%", textAlign: "left" }}
        >
          <h3 style={{ fontWeight: "bold", paddingTop: "120px" }}>
            LIVE YOUR DREAM WITH EDUFUND
          </h3>
          <br />
          <p>
            EduFund is on a mission of making education a possibility for all!
            Irrespective of social and economic statuses, EduFund is a platform
            that is closing the education gap and helping every ambitious
            African youth to attain the best education globally.
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
            <p style={{ textAlign: "left" }}>
              As a student with admission status from accredited universities
              from any part of the world, EduFund is your platform to tell your
              story to millions of people that will contribute and invest
              towards your academic pursuit.
              <br />
              <br />
              Are you looking for tuition fees to kickstart your academic year?
              Sign up on EduFund and tell us your story. EduFund will open up
              the world of possibility to you and hold your hands through out
              your academic journey.
            </p>
          </div>
          <div className="col-md-6">
            <img src={img} style={{ maxWidth: "25rem" }} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
