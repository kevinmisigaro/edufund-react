import React, { useState } from "react";
import Multistep from "react-multistep";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

export default function NewFundraiser() {
  const prevStyle = {
    background: "#35c2f0",
    color: "white",
    marginRight: "2rem",
    border: "1px solid #35c2f0",
  };
  const nextStyle = {
    background: "#35c2f0",
    color: "white",
    marginLeft: "2rem",
    border: "1px solid #35c2f0",
  };

  const steps = [
    {
      name: "Admission",
      component: <StepOne />,
    },
    {
      name: "Fundraiser Info",
      component: <StepTwo />,
    },
    {
      name: "Reasons",
      component: <StepThree />,
    },
  ];

  return (
    <div className="container-fluid" style={{ background: "#eef5f9" }}>
      <div className="container pt-3" style={{ paddingBottom: "10rem" }}>
        <div className="card shadow" style={{ width: "100%", padding: "20px" }}>
          <div className="card-body">
            <Multistep
              activeStep={0}
              showNavigation={true}
              steps={steps}
              prevStyle={prevStyle}
              nextStyle={nextStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
