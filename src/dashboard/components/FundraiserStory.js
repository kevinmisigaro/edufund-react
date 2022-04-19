import React from "react";

export default function FundraiserStory(props) {
  return (
    <>
      <p style={{ textAlign: "justify" }}>{props.fundraiser?.story}</p>
      <br />
      <h5>My Educational background</h5>
      <p style={{ textAlign: "justify" }}>{props.fundraiser?.background}</p>
      <br />
      <h5>How do you plan to repay</h5>
      <p style={{ textAlign: "justify" }}>{props.fundraiser?.repay}</p>
    </>
  );
}
