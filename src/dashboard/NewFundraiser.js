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

  const [values, setValues] = useState({
    qualification: "",
    level: "",
    amount: "",
    course: "",
    destination: "",
    background: "",
    currency: "",
    country: "",
    reason: "",
    image: "",
    video: "",
    offer: "",
    title: "",
    story: "",
    repay: "",
    timeline: "",
  });

  const steps = [
    {
      name: "Admission",
      component: <StepOne values={values} setValues={setValues} />,
    },
    {
      name: "Fundraiser Info",
      component: <StepTwo values={values} setValues={setValues} />,
    },
    {
      name: "Reasons",
      component: <StepThree values={values} setValues={setValues} />,
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
