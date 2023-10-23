import React from "react";
import bg from "../assets/img/students-standing-40.png";
import NavigationBar from "./components/NavigationBar";
import Footer from "./Footer";
import EventCard from "./components/EventCard";

export default function Events() {
  return (
    <>
      <NavigationBar />
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
            location=" Yar'adua Conference Centre, Abuja"
            link="/events/greenview"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
