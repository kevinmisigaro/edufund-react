import React from "react";
import { FaPlus } from "react-icons/fa";
import FundraiserCard from "./components/FundraiserCard";

export default function StudentFundraisers() {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between my-4">
        <h4 style={{ fontWeight: "bold" }}>Your fundraisers</h4>

        <button className="btn btn-primary">
          <FaPlus /> Start your fundraiser
        </button>
      </div>

      <div className="row">
        <FundraiserCard/>
        <FundraiserCard/>
        <FundraiserCard/>
      </div>

    </div>
  );
}
