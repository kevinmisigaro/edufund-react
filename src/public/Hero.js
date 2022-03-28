import React from "react";
import bg from "../assets/img/students-standing-40.png";

export default function Hero() {
  return (
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
        style={{ width: "60%", textAlign: "left", padding: "180px 0" }}
      >
        <h3 style={{ fontWeight: "bold" }}>
          IT TAKES A COMMUNITY TO RAISE A CHILD
        </h3>
        <br />
        <h5>Education as a critical tool to building Africa's future.</h5>
        <br />
        <p>
          Africa's biggest resources are her young population and the best way
          to predict the future is by creating it todaay. EduFund is
          facilitating inclusive access to education for all Africans through a
          platform that drives community financing initaitive.
        </p>
        <br />
        <button style={{ fontWeight: "bold" }} className="btn btn-primary px-4">
          JOIN NOW
        </button>
      </div>
    </div>
  );
}
