import React from "react";
import bg from '../assets/img/students-standing-40.png'

export default function Hero() {
  return (
    <div className="container-fluid text-white" style={{height: '70vh', backgroundImage:`url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
      <div
        className="container py-5"
        style={{ width: "60%", textAlign: "left" }}
      >
        <h3 style={{ fontWeight: 'bold', paddingTop:'90px' }}>IT TAKES A COMMUNITY TO RAISE A CHILD</h3>
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
        <button style={{ fontWeight: 'bold' }} className="btn btn-primary px-4">JOIN NOW</button>
      </div>
    </div>
  );
}
