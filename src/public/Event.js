import React from "react";
import bg from "../assets/img/students-standing-40.png";
import Footer from "./Footer";
import EventCard from "./components/EventCard";
import greenImg from "../assets/img/greenearth2.jpeg";

export default function Events() {
  return (
    <>
      {/* <NavigationBar /> */}
      <div
        className="container-fluid text-white"
        style={{
          height: "20vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ paddingTop: "3rem" }}>
          <h3 style={{ fontWeight: "bold" }}>Events</h3>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <EventCard
            title="OPPORTUNITY FAIR AND EDUCATION STAKEHOLDER FORUM"
            date=" 17-18 November 2023"
            location="Abuja"
            link="/events/greenview"
          />

          <div className="col-md-8">
            <img src={greenImg} alt=".." className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
